import { useState } from 'react'
import { profile } from '../data/profile'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))

    if (error) {
      setError('')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    const name = formData.name.trim()
    const email = formData.email.trim()
    const subject = formData.subject.trim()
    const message = formData.message.trim()

    if (!name || !email || !subject || !message) {
      setError('Veuillez remplir tous les champs avant l’envoi.')
      return
    }

    const emailSubject = encodeURIComponent(
      `${subject} — Message depuis le portfolio`,
    )

    const emailBody = encodeURIComponent(
      `Bonjour Olivier,

Nom : ${name}
Adresse e-mail : ${email}

Message :
${message}`,
    )

    window.location.href =
      `mailto:${profile.email}` +
      `?subject=${emailSubject}` +
      `&body=${emailBody}`
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <p className="contact-subtitle">ME CONTACTER</p>

        <h2>Travaillons ensemble</h2>

        <p className="contact-description">
          Je recherche un stage de fin d’études pour valider mon
          Master 1, puis une alternance pour poursuivre mon Master 2.
          Vous pouvez également me contacter pour un projet ou une
          collaboration professionnelle.
        </p>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="contact-name">Nom</label>

              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                autoComplete="name"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-email">
                Adresse e-mail
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                autoComplete="email"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-subject">Sujet</label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Objet de votre message"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-message">Message</label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Écrivez votre message"
                rows="7"
              />
            </div>

            {error && (
              <p className="contact-form-error" role="alert">
                {error}
              </p>
            )}

            <button className="contact-submit" type="submit">
              Préparer le message
            </button>

            <p className="contact-form-help">
              Le bouton ouvrira votre application de messagerie avec
              les informations déjà remplies.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact