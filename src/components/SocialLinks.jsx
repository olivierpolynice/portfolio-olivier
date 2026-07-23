import {
  Code2,
  Link,
  Mail,
} from 'lucide-react'

function SocialLinks({
  github,
  linkedin,
  email,
}) {
  return (
    <div
      className="social-links"
      role="list"
      aria-label="Liens professionnels"
    >
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
          aria-label="Consulter le profil GitHub d’Olivier Polynice dans un nouvel onglet"
          title="GitHub"
        >
          <Code2
            size={22}
            aria-hidden="true"
          />
        </a>
      )}

      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
          aria-label="Consulter le profil LinkedIn d’Olivier Polynice dans un nouvel onglet"
          title="LinkedIn"
        >
          <Link
            size={22}
            aria-hidden="true"
          />
        </a>
      )}

      {email && (
        <a
          href={`mailto:${email}`}
          role="listitem"
          aria-label={`Envoyer un e-mail à ${email}`}
          title="Envoyer un e-mail"
        >
          <Mail
            size={22}
            aria-hidden="true"
          />
        </a>
      )}
    </div>
  )
}

export default SocialLinks