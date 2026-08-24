import {
  motion,
  useReducedMotion,
} from 'framer-motion'
import {
  CalendarDays,
  Download,
  FileText,
} from 'lucide-react'
import Button from '../components/Button'
import MotionSection from '../components/MotionSection'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'
import './Resume.css'

function Resume() {
  const shouldReduceMotion = useReducedMotion()
  const { language } = useLanguage()
  const text = strings[language].resume

  return (
    <MotionSection
      className="section resume"
      id="cv"
    >
      <div className="container">
        <motion.div
          className="resume__content"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                  scale: 0.99,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
          }
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="resume__icon"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.8,
                  }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    scale: 1,
                  }
            }
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.35,
              delay: shouldReduceMotion ? 0 : 0.12,
            }}
          >
            <FileText size={34} aria-hidden="true" />
          </motion.div>

          <div className="resume__information">
            <p className="resume__eyebrow">
              {text.eyebrow}
            </p>

            <h2>{text.title}</h2>

            <p className="resume__description">
              {text.description}
            </p>

            <div className="resume__metadata">
              <span>
                <CalendarDays
                  size={17}
                  aria-hidden="true"
                />

                {text.updated}
              </span>

              <span>
                <FileText size={17} aria-hidden="true" />
                {text.pdfFormat}
              </span>
            </div>

            {language === 'en' && (
              <p className="resume__language-note">
                {text.cvLanguageNote}
              </p>
            )}
          </div>

          <motion.div
            className="resume__action"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 16,
                  }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.4,
              delay: shouldReduceMotion ? 0 : 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Button
              href={profile.cv}
              download="CV_Olivier_Polynice.pdf"
            >
              {text.download}
              <Download size={19} aria-hidden="true" />
            </Button>

            <small>{text.downloadNote}</small>
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  )
}

export default Resume