import { ArrowDown, Download } from 'lucide-react'
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'
import { profile } from '../data/profile'

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="container hero__content">
        <div className="hero__text">
          <p className="hero__availability">
            Stage de fin d’études Master 1 · Alternance Master 2
          </p>

          <p className="hero__introduction">
            Bonjour, je suis
          </p>

          <h1>{profile.name}</h1>

          <h2>{profile.headline}</h2>

          <p className="hero__description">
            {profile.introduction}
          </p>

          <div className="hero__actions">
            <Button href="#projets">
              Voir mes projets
              <ArrowDown size={18} />
            </Button>

            <Button
              href={profile.cv}
              variant="secondary"
              download
            >
              Télécharger mon CV
              <Download size={18} />
            </Button>
          </div>

          <SocialLinks
            github={profile.github}
            linkedin={profile.linkedin}
            email={profile.email}
          />
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__terminal">
            <span>$ whoami</span>
            <strong>Olivier Polynice</strong>

            <span>$ spécialités</span>
            <strong>
              Cybersécurité · Cloud · Réseaux · DevSecOps
            </strong>

            <span>$ objectif</span>
            <strong>
              Stage Master 1 puis alternance Master 2
            </strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero