import {
  motion,
  useReducedMotion,
} from 'framer-motion'
import {
  CloudCog,
  FolderKanban,
  GraduationCap,
  RadioTower,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'
import MotionSection from '../components/MotionSection'
import SectionTitle from '../components/SectionTitle'
import { profile } from '../data/profile'
import './About.css'

const keyInformation = [
  {
    icon: GraduationCap,
    value: 'Master',
    label: 'Réseaux, Cybersécurité et Cloud',
  },
  {
    icon: FolderKanban,
    value: '5+',
    label: 'Projets techniques réalisés',
  },
  {
    icon: ShieldCheck,
    value: '4 domaines',
    label: 'Cybersécurité, Cloud, Réseaux et DevSecOps',
  },
  {
    icon: UsersRound,
    value: 'Esprit d’équipe',
    label:
      'Organisation, réactivité et gestion de la pression',
  },
]

function About() {
  const shouldReduceMotion = useReducedMotion()

  const aboutParagraphs = Array.isArray(
    profile.aboutParagraphs,
  )
    ? profile.aboutParagraphs
    : [profile.about].filter(Boolean)

  return (
    <MotionSection
      className="section about"
      id="a-propos"
    >
      <div className="container">
        <SectionTitle
          eyebrow="À propos"
          title="Des télécommunications à la cybersécurité"
          description="Un parcours construit autour des réseaux, de la sécurité des systèmes, du cloud et de l’automatisation."
        />

        <div className="about__layout">
          <motion.div
            className="about__story"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -20,
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="about__story-icon">
              <RadioTower size={30} aria-hidden="true" />
            </div>

            <div className="about__story-content">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={`${index}-${paragraph}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="about__objective">
              <CloudCog size={24} aria-hidden="true" />

              <div>
                <span>Objectif professionnel</span>

                <strong>
                  {profile.alternanceObjective}
                </strong>
              </div>
            </div>
          </motion.div>

          <div
            className="about__stats"
            aria-label="Informations principales"
          >
            {keyInformation.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.article
                  className="about__stat-card"
                  key={item.value}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 18,
                        }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -4,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion
                      ? 0
                      : index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="about__stat-icon">
                    <Icon size={26} aria-hidden="true" />
                  </div>

                  <div>
                    <strong>{item.value}</strong>
                    <p>{item.label}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  )
}

export default About