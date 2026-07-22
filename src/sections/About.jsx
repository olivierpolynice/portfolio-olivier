import { Cloud, MapPin, Network, ShieldCheck } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { profile } from '../data/profile'

function About() {
  return (
    <section className="section about" id="a-propos">
      <div className="container">
        <SectionTitle
          eyebrow="À propos"
          title="Un profil technique orienté sécurité et infrastructure"
          description="Mon parcours associe réseaux, développement, cloud, automatisation et cybersécurité."
        />

        <div className="about__grid">
          <div className="about__content">
            <p>{profile.about}</p>

            <div className="about__details">
              <p className="about__location">
                <MapPin size={20} />
                {profile.location}
              </p>

              <p className="about__availability">
                {profile.availability}
              </p>
            </div>
          </div>

          <div className="about__domains">
            <article>
              <ShieldCheck size={30} />

              <h3>Cybersécurité</h3>

              <p>
                Gestion des accès, sécurité des API, audit et contrôle
                des autorisations.
              </p>
            </article>

            <article>
              <Cloud size={30} />

              <h3>Cloud et DevSecOps</h3>

              <p>
                Conteneurisation, automatisation, intégration continue
                et supervision.
              </p>
            </article>

            <article>
              <Network size={30} />

              <h3>Réseaux</h3>

              <p>
                Segmentation, routage, pare-feu, VLAN et sécurisation
                des infrastructures.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About