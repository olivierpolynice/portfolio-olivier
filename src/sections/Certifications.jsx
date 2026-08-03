import {
  Award,
  ExternalLink,
  FileText,
} from 'lucide-react'
import MotionSection from '../components/MotionSection'
import SectionTitle from '../components/SectionTitle'
import { certifications } from '../data/certifications'
import './Certifications.css'

function Certifications() {
  return (
    <MotionSection
      className="section certifications"
      id="certifications"
    >
      <div className="container">
        <SectionTitle
          eyebrow="Certifications"
          title="Formations et compétences certifiées"
          description="Des certifications obtenues auprès d’organismes reconnus afin de consolider mes compétences en cybersécurité, réseaux et systèmes."
        />

        <div className="certifications__grid">
          {certifications.map((certification) => (
            <article
              className={`certification-card${
                certification.featured
                  ? ' certification-card--featured'
                  : ''
              }`}
              key={certification.id}
            >
              {certification.featured && (
                <span className="certification-card__featured">
                  Certification récente
                </span>
              )}

              <div className="certification-card__visual">
                {certification.badge ? (
                  <img
                    className="certification-card__badge"
                    src={certification.badge}
                    alt={`Badge ${certification.title}`}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="certification-card__placeholder"
                    aria-hidden="true"
                  >
                    <Award size={54} strokeWidth={1.6} />
                  </div>
                )}
              </div>

              <div className="certification-card__content">
                <span className="certification-card__issuer">
                  {certification.issuer}
                </span>

                <h3 className="certification-card__title">
                  {certification.title}
                </h3>

                <p className="certification-card__date">
                  Obtenue en {certification.issuedAt}
                </p>

                <div className="certification-card__actions">
                  <a
                    className="certification-card__button certification-card__button--primary"
                    href={certification.certificate}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FileText size={18} />
                    Voir le certificat
                  </a>

                  {certification.verification && (
                    <a
                      className="certification-card__button certification-card__button--secondary"
                      href={certification.verification}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={18} />
                      Vérifier sur Credly
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export default Certifications