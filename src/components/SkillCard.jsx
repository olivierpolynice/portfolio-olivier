import {
  motion,
  useReducedMotion,
} from 'framer-motion'
import {
  Braces,
  Infinity as InfinityIcon,
  Network,
  ServerCog,
  ShieldCheck,
} from 'lucide-react'

const categoryIcons = {
  server: ServerCog,
  network: Network,
  shield: ShieldCheck,
  infinity: InfinityIcon,
  code: Braces,
}

function SkillCard({
  id,
  icon,
  title,
  description,
  skills = [],
  animationDelay = 0,
}) {
  const shouldReduceMotion = useReducedMotion()
  const Icon = categoryIcons[icon] || Braces

  const safeSkills = Array.isArray(skills)
    ? skills
    : []

  return (
    <motion.article
      className={`skill-card skill-card--${id}`}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 20,
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
              transition: {
                duration: 0.18,
                delay: 0,
              },
            }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.42,
        delay: shouldReduceMotion
          ? 0
          : animationDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="skill-card__header">
        <div className="skill-card__icon">
          <Icon size={28} aria-hidden="true" />
        </div>

        <div>
          <h3 className="skill-card__title">
            {title}
          </h3>

          <p className="skill-card__description">
            {description}
          </p>
        </div>
      </div>

      <ul
        className="skill-card__list"
        aria-label={`Compétences en ${title}`}
      >
        {safeSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </motion.article>
  )
}

export default SkillCard