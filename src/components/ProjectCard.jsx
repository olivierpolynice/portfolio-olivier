import {
  motion,
  useReducedMotion,
} from 'framer-motion'
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ShieldAlert,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'

function ProjectCard({
  project,
  variant = 'default',
  animationDelay = 0,
}) {
  const shouldReduceMotion = useReducedMotion()
  const isFeatured = variant === 'featured'
  const { language } = useLanguage()
  const isEn = language === 'en'
  const text = strings[language].projects

  const category = isEn
    ? project.category_en || project.category
    : project.category

  const status = isEn
    ? project.status_en || project.status
    : project.status

  const shortDescription = isEn
    ? project.shortDescription_en ||
      project.shortDescription
    : project.shortDescription

  const problem = isEn
    ? project.problem_en || project.problem
    : project.problem

  const role = isEn
    ? project.role_en || project.role
    : project.role

  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : []

  const rawFeatures =
    isEn && project.features_en
      ? project.features_en
      : project.features

  const features = Array.isArray(rawFeatures)
    ? rawFeatures
    : []

  return (
    <motion.article
      className={`project-card ${
        isFeatured ? 'project-card--featured' : ''
      }`}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 22,
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
        amount: 0.12,
      }}
      transition={{
        duration: 0.45,
        delay: shouldReduceMotion
          ? 0
          : animationDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="project-card__image-wrapper">
        <motion.img
          className="project-card__image"
          src={project.image}
          alt={
            isEn
              ? `Preview of the ${project.title} project`
              : `Aperçu du projet ${project.title}`
          }
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  scale: 1.025,
                }
          }
          transition={{
            duration: 0.3,
          }}
        />

        {status && (
          <span className="project-card__status">
            {status}
          </span>
        )}

        {isFeatured && (
          <span className="project-card__featured-badge">
            {text.featuredBadge}
          </span>
        )}
      </div>

      <div className="project-card__content">
        <p className="project-card__category">
          {category}
        </p>

        <h3 className="project-card__title">
          {project.title}
        </h3>

        <p className="project-card__description">
          {shortDescription}
        </p>

        {isFeatured && problem && (
          <div className="project-card__problem">
            <ShieldAlert size={22} aria-hidden="true" />

            <div>
              <span>{text.problemHandled}</span>
              <p>{problem}</p>
            </div>
          </div>
        )}

        {isFeatured && role && (
          <div className="project-card__role">
            <UserRound size={20} aria-hidden="true" />

            <p>
              <span>{text.role}</span> {role}
            </p>
          </div>
        )}

        {isFeatured && features.length > 0 && (
          <div className="project-card__features">
            <h4>{text.mainFeatures}</h4>

            <ul>
              {features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2
                    size={17}
                    aria-hidden="true"
                  />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-card__stack">
          {isFeatured && <h4>{text.technologiesUsed}</h4>}

          <ul className="project-card__technologies">
            {(isFeatured
              ? technologies
              : technologies.slice(0, 6)
            ).map((technology) => (
              <li key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-card__links">
          <Link
            className="project-card__primary-link"
            to={`/projets/${project.id}`}
            aria-label={
              isEn
                ? `View details of the ${project.title} project`
                : `Voir les détails du projet ${project.title}`
            }
          >
            {text.viewDetails}

            <ArrowUpRight
              size={17}
              aria-hidden="true"
            />
          </Link>

          {project.github && (
            <a
              className="project-card__secondary-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={
                isEn
                  ? `View the ${project.title} project on GitHub`
                  : `Voir le projet ${project.title} sur GitHub`
              }
            >
              <Code2 size={18} aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
