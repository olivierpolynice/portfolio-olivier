import {
  motion,
  useReducedMotion,
} from 'framer-motion'
import {
  BrainCircuit,
  CloudCog,
  FolderKanban,
  GraduationCap,
  RadioTower,
  UsersRound,
} from 'lucide-react'
import MotionSection from '../components/MotionSection'
import SectionTitle from '../components/SectionTitle'
import { getLocalizedProfile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'
import './About.css'

function getKeyInformation(language) {
  if (language === 'en') {
    return [
      {
        icon: GraduationCap,
        value: 'Master’s',
        label: 'Networking, Cybersecurity and Cloud',
      },
      {
        icon: FolderKanban,
        value: '5+',
        label: 'Technical projects completed',
      },
      {
        icon: BrainCircuit,
        value: '5 domains',
        label:
          'Cybersecurity, Cloud, Networking, DevSecOps and AI',
        featured: true,
      },
      {
        icon: UsersRound,
        value: 'Team spirit',
        label:
          'Organization, responsiveness, and handling pressure',
      },
    ]
  }

  return [
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
      icon: BrainCircuit,
      value: '5 domaines',
      label:
        'Cybersécurité, Cloud, Réseaux, DevSecOps et IA',
      featured: true,
    },
    {
      icon: UsersRound,
      value: 'Esprit d’équipe',
      label:
        'Organisation, réactivité et gestion de la pression',
    },
  ]
}

function About() {
  const shouldReduceMotion = useReducedMotion()
  const { language } = useLanguage()
  const profile = getLocalizedProfile(language)
  const text = strings[language].about
  const keyInformation = getKeyInformation(language)

  const aboutParagraphs = Array.isArray(
    profile.aboutParagraphs,
  )
    ? profile.aboutParagraphs
    : [profile.about].filter(Boolean)

  return (
    <MotionSection
      className="about section"
      id="a-propos"
      aria-labelledby="about-title"
    >
      <div className="container">
        <SectionTitle
          eyebrow={text.eyebrow}
          title={text.title}
          description={text.description}
          titleId="about-title"
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
              <RadioTower
                size={30}
                aria-hidden="true"
              />
            </div>

            <div className="about__story-content">
              {aboutParagraphs.map(
                (paragraph, index) => (
                  <p key={`${index}-${paragraph}`}>
                    {paragraph}
                  </p>
                ),
              )}
            </div>

            <div className="about__objective">
              <CloudCog
                size={24}
                aria-hidden="true"
              />

              <div>
                <span>
                  {language === 'en'
                    ? 'Professional objective'
                    : 'Objectif professionnel'}
                </span>

                <strong>
                  {profile.alternanceObjective}
                </strong>
              </div>
            </div>
          </motion.div>

          <div
            className="about__stats"
            aria-label={
              language === 'en'
                ? 'Key information'
                : 'Informations principales'
            }
          >
            {keyInformation.map((item, index) => {
              const Icon = item.icon

              const cardClassName = item.featured
                ? 'about__stat-card about__stat-card--featured'
                : 'about__stat-card'

              return (
                <motion.article
                  className={cardClassName}
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
                  {item.featured && (
                    <span className="about__stat-badge">
                      {language === 'en'
                        ? 'Key skills'
                        : 'Compétences clés'}
                    </span>
                  )}

                  <div className="about__stat-icon">
                    <Icon
                      size={26}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="about__stat-content">
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
