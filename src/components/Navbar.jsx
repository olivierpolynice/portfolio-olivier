import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const navigationLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="navbar">
      <div className="container navbar__content">
        <a
          className="navbar__brand"
          href="#accueil"
          onClick={closeMenu}
          aria-label="Retour à l’accueil"
        >
          OP
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label="Ouvrir ou fermer le menu"
          aria-expanded={isOpen}
          aria-controls="navigation-principale"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <nav
          id="navigation-principale"
          className={`navbar__menu ${
            isOpen ? 'navbar__menu--open' : ''
          }`}
          aria-label="Navigation principale"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            className="navbar__cv"
            href={profile.cv}
            download="CV_Olivier_Polynice.pdf"
            onClick={closeMenu}
          >
            Télécharger le CV
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar