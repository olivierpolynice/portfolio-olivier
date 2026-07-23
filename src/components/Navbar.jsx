import {
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  Download,
  Menu,
  X,
} from 'lucide-react'
import { profile } from '../data/profile'
import './navbar.css'

const navigationLinks = [
  {
    label: 'Accueil',
    href: '#accueil',
    id: 'accueil',
  },
  {
    label: 'À propos',
    href: '#a-propos',
    id: 'a-propos',
  },
  {
    label: 'Compétences',
    href: '#competences',
    id: 'competences',
  },
  {
    label: 'Projets',
    href: '#projets',
    id: 'projets',
  },
  {
    label: 'Parcours',
    href: '#parcours',
    id: 'parcours',
  },
  {
    label: 'Contact',
    href: '#contact',
    id: 'contact',
  },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] =
    useState('accueil')

  const toggleButtonRef = useRef(null)
  const firstLinkRef = useRef(null)

  useEffect(() => {
    const sections = navigationLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio -
              first.intersectionRatio,
          )

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id,
          )
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      },
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
        toggleButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener(
        'keydown',
        handleEscape,
      )
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus()
    }
  }, [isOpen])

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar__content">
        <a
          className="navbar__brand"
          href="#accueil"
          onClick={() =>
            handleNavigation('accueil')
          }
          aria-label="Retour à l’accueil"
        >
          OP
        </a>

        <nav
          id="navigation-principale"
          className={`navbar__menu ${
            isOpen ? 'navbar__menu--open' : ''
          }`}
          aria-label="Navigation principale"
        >
          {navigationLinks.map((link, index) => (
            <a
              ref={
                index === 0
                  ? firstLinkRef
                  : undefined
              }
              key={link.id}
              className={
                activeSection === link.id
                  ? 'navbar__link navbar__link--active'
                  : 'navbar__link'
              }
              href={link.href}
              aria-current={
                activeSection === link.id
                  ? 'location'
                  : undefined
              }
              onClick={() =>
                handleNavigation(link.id)
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            className="navbar__cv"
            href={profile.cv}
            download="CV_Olivier_Polynice.pdf"
            aria-label="Télécharger le CV d’Olivier Polynice au format PDF"
          >
            <Download
              size={18}
              aria-hidden="true"
            />

            <span>CV</span>
          </a>

          <button
            ref={toggleButtonRef}
            className="navbar__toggle"
            type="button"
            aria-label={
              isOpen
                ? 'Fermer le menu de navigation'
                : 'Ouvrir le menu de navigation'
            }
            aria-expanded={isOpen}
            aria-controls="navigation-principale"
            onClick={() =>
              setIsOpen((current) => !current)
            }
          >
            {isOpen ? (
              <X size={26} aria-hidden="true" />
            ) : (
              <Menu
                size={26}
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar