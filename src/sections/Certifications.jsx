import {
  Award,
  ExternalLink,
  FileText,
} from 'lucide-react'
import MotionSection from '../components/MotionSection'
import SectionTitle from '../components/SectionTitle'
import { certifications } from '../data/certifications'
import { useLanguage } from '../i18n/LanguageContext'
import {
  strings,
  translateMonthYear,
} from '../i18n/strings'
import './Certifications.css'

function Certifications() {
  const { language } = useLanguage()
  const text = strings[language].certifications

  return (
    <MotionSection
      className="section certifications"
      id="certifications"
    >
      <div className="container">
        <SectionTitle
          eyebrow={text.eyebrow}
          title={text.title}
          description={text.description}
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
                  {text.recentBadge}
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
                  {text.obtainedIn}{' '}
                  {translateMonthYear(
                    certification.issuedAt,
                    language,
                  )}
                </p>

                <div className="certification-card__actions">
                  <a
                    className="certification-card__button certification-card__button--primary"
                    href={certification.certificate}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FileText size={18} />
                    {text.viewCertificate}
                  </a>

                  {certification.verification && (
                    <a
                      className="certification-card__button certification-card__button--secondary"
                      href={certification.verification}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={18} />
                      {text.verifyOnCredly}
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
