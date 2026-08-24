import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'
import './Footer.css'

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4a5 5 0 0 0-.1-3.5s-1.1-.4-3.6 1.4a12.3 12.3 0 0 0-6.5 0C6.7.1 5.6.5 5.6.5A5 5 0 0 0 5.5 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7a4.8 4.8 0 0 0-1 3.5v4" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const navText = strings[language].nav
  const text = strings[language].footer

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="footer-logo" href="#accueil">
              Olivier<span>.</span>
            </a>

            <p className="footer-description">
              {text.description}
            </p>
          </div>

          <nav
            className="footer-links"
            aria-label={
              language === 'en'
                ? 'Footer navigation'
                : 'Navigation du pied de page'
            }
          >
            <a href="#a-propos">{navText.aPropos}</a>
            <a href="#competences">{navText.competences}</a>
            <a href="#projets">{navText.projets}</a>
            <a href="#parcours">{navText.parcours}</a>
            <a href="#contact">{navText.contact}</a>
          </nav>

          <div className="footer-social-column">
            <p className="footer-social-title">
              {text.findMe}
            </p>

            <div className="footer-socials">
              <a
                href="https://github.com/olivierpolynice"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  language === 'en'
                    ? 'View my GitHub profile'
                    : 'Consulter mon profil GitHub'
                }
                title="GitHub"
              >
                <GithubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/olivier-polynice/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  language === 'en'
                    ? 'View my LinkedIn profile'
                    : 'Consulter mon profil LinkedIn'
                }
                title="LinkedIn"
              >
                <LinkedinIcon />
              </a>

              <a
                href="mailto:olivierpolynice7@gmail.com"
                aria-label={
                  language === 'en'
                    ? 'Send me an email'
                    : 'M’envoyer un e-mail'
                }
                title="E-mail"
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} {profile.name}. {text.rightsReserved}
          </p>

          <a className="footer-top-link" href="#accueil">
            {text.backToTop}
            <ArrowUpIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer