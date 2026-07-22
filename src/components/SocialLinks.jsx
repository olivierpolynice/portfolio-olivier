import { Code2, Link, Mail } from 'lucide-react'

function SocialLinks({ github, linkedin, email }) {
  return (
    <div className="social-links">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label="Consulter le profil GitHub d’Olivier Polynice"
        >
          <Code2 size={22} />
        </a>
      )}

      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Consulter le profil LinkedIn d’Olivier Polynice"
        >
          <Link size={22} />
        </a>
      )}

      {email && (
        <a
          href={`mailto:${email}`}
          aria-label="Envoyer un e-mail à Olivier Polynice"
        >
          <Mail size={22} />
        </a>
      )}
    </div>
  )
}

export default SocialLinks