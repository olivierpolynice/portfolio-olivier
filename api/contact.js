// Vercel Serverless Function — receives the portfolio contact form
// submission and sends it as an email via the Resend API. The Resend
// API key stays server-side (RESEND_API_KEY, set in Vercel project
// settings) and is never exposed to the browser.

const RECIPIENT_EMAIL = 'olivierpolynice7@gmail.com'
const SENDER_EMAIL = 'Portfolio Olivier <onboarding@resend.dev>'

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function isValidEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res
      .status(405)
      .json({ error: 'Méthode non autorisée.' })
  }

  const body =
    typeof req.body === 'string'
      ? JSON.parse(req.body || '{}')
      : req.body || {}

  const {
    name,
    email,
    subject,
    message,
    // Honeypot field: hidden from real visitors, only bots fill it in.
    company,
  } = body

  if (typeof company === 'string' && company.trim() !== '') {
    // Silently pretend success so bots don't learn the field is checked.
    return res.status(200).json({ success: true })
  }

  if (
    !name ||
    !email ||
    !message ||
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return res
      .status(400)
      .json({ error: 'Champs requis manquants.' })
  }

  if (!isValidEmail(email.trim())) {
    return res
      .status(400)
      .json({ error: 'Adresse e-mail invalide.' })
  }

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.error(
      'RESEND_API_KEY manquante dans les variables d’environnement Vercel.',
    )

    return res
      .status(500)
      .json({ error: 'Configuration du serveur incomplète.' })
  }

  const safeName = escapeHtml(name.trim()).slice(0, 200)
  const safeEmail = escapeHtml(email.trim()).slice(0, 200)
  const safeSubject = escapeHtml(
    (subject || '').trim(),
  ).slice(0, 200)
  const safeMessage = escapeHtml(message.trim()).slice(
    0,
    5000,
  )

  const emailSubject = safeSubject
    ? `[Portfolio] ${safeSubject}`
    : `[Portfolio] Nouveau message de ${safeName}`

  try {
    const response = await fetch(
      'https://api.resend.com/emails',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: SENDER_EMAIL,
          to: [RECIPIENT_EMAIL],
          reply_to: email.trim(),
          subject: emailSubject,
          html: `
            <p><strong>Nom :</strong> ${safeName}</p>
            <p><strong>E-mail :</strong> ${safeEmail}</p>
            ${
              safeSubject
                ? `<p><strong>Objet :</strong> ${safeSubject}</p>`
                : ''
            }
            <p><strong>Message :</strong></p>
            <p>${safeMessage.replace(/\n/g, '<br />')}</p>
          `,
        }),
      },
    )

    const data = await response.json()

    if (!response.ok) {
      console.error('Erreur Resend :', data)

      return res
        .status(502)
        .json({ error: 'Échec de l’envoi de l’e-mail.' })
    }

    return res.status(200).json({
      success: true,
      id: data.id,
    })
  } catch (error) {
    console.error(
      'Erreur inattendue du formulaire de contact :',
      error,
    )

    return res
      .status(500)
      .json({ error: 'Erreur serveur inattendue.' })
  }
}
