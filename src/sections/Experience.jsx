import {
  motion,
  useReducedMotion,
} from 'framer-motion'
import {
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  MapPin,
} from 'lucide-react'
import MotionSection from '../components/MotionSection'
import SectionTitle from '../components/SectionTitle'
import { experiences } from '../data/experiences'
import './Experience.css'

function Experience() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <MotionSection
      className="section experience"
      id="parcours"
    >
      <div className="container">
        <SectionTitle
          eyebrow="Parcours"
          title="Mon parcours académique et professionnel"
          description="Une chronologie associant formation en télécommunications, informatique, cybersécurité et expériences professionnelles."
        />

        <div className="experience__timeline">
          {experiences.map((experience, index) => {
            const isEducation =
              experience.type === 'Formation'

            const Icon = isEducation
              ? GraduationCap
              : BriefcaseBusiness

            const skills = Array.isArray(
              experience.skills,
            )
              ? experience.skills
              : []

            const missions = Array.isArray(
              experience.missions,
            )
              ? experience.missions
              : []

            const animationDelay = index * 0.08

            return (
              <motion.article
                className="experience__item"
                key={experience.id}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion
                    ? 0
                    : animationDelay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  className={`experience__marker ${
                    isEducation
                      ? 'experience__marker--education'
                      : 'experience__marker--work'
                  }`}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.75,
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
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: shouldReduceMotion
                      ? 0
                      : animationDelay + 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Icon size={20} aria-hidden="true" />
                </motion.div>

                <div className="experience__card">
                  <div className="experience__header">
                    <div>
                      <p className="experience__type">
                        {experience.type}
                      </p>

                      <h3>{experience.title}</h3>

                      <p className="experience__organisation">
                        {experience.organisation}
                      </p>
                    </div>

                    <div className="experience__metadata">
                      <span>
                        <CalendarDays
                          size={17}
                          aria-hidden="true"
                        />

                        {experience.period}
                      </span>

                      {experience.location && (
                        <span>
                          <MapPin
                            size={17}
                            aria-hidden="true"
                          />

                          {experience.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {experience.description && (
                    <p className="experience__description">
                      {experience.description}
                    </p>
                  )}

                  {missions.length > 0 && (
                    <div className="experience__missions">
                      <h4>Principales missions</h4>

                      <ul>
                        {missions.map((mission) => (
                          <li key={mission}>
                            {mission}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {skills.length > 0 && (
                    <div className="experience__skills">
                      <h4>Compétences acquises</h4>

                      <ul>
                        {skills.map((skill) => (
                          <li key={skill}>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </MotionSection>
  )
}

export default Experience