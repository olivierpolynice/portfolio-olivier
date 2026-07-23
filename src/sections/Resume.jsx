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
import './Resume.css'

function Resume() {
  const shouldReduceMotion = useReducedMotion()

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
              Curriculum vitæ
            </p>

            <h2>
              Retrouvez mon parcours et mes compétences
            </h2>

            <p className="resume__description">
              Une présentation synthétique de ma formation, de mes
              expériences, de mes projets et de mes compétences
              techniques.
            </p>

            <div className="resume__metadata">
              <span>
                <CalendarDays
                  size={17}
                  aria-hidden="true"
                />

                CV mis à jour en juillet 2026
              </span>

              <span>
                <FileText size={17} aria-hidden="true" />
                Format PDF
              </span>
            </div>
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
              Télécharger mon CV
              <Download size={19} aria-hidden="true" />
            </Button>

            <small>
              Téléchargement direct au format PDF
            </small>
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  )
}

export default Resume