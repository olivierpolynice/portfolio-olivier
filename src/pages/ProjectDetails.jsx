import {
  ArrowLeft,
  CheckCircle2,
  Code2,
  ExternalLink,
  Target,
  UserRound,
  Wrench,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'
import './ProjectDetails.css'

function ProjectDetails() {
  const { projectId } = useParams()
  const { language } = useLanguage()
  const isEn = language === 'en'
  const text = strings[language].projects

  const project = projects.find(
    (item) => item.id === projectId,
  )

  if (!project) {
    return (
      <main className="project-details project-details--empty">
        <div className="container">
          <p className="project-details__eyebrow">
            {isEn ? 'Project not found' : 'Projet introuvable'}
          </p>

          <h1>
            {isEn
              ? 'This project does not exist.'
              : 'Ce projet n’existe pas.'}
          </h1>

          <p>
            {isEn
              ? 'The requested project is unavailable or its address is incorrect.'
              : 'Le projet demandé est indisponible ou son adresse est incorrecte.'}
          </p>

          <Link
            className="project-details__back"
            to="/#projets"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            {isEn ? 'Back to projects' : 'Retour aux projets'}
          </Link>
        </div>
      </main>
    )
  }

  const category = isEn
    ? project.category_en || project.category
    : project.category

  const status = isEn
    ? project.status_en || project.status
    : project.status

  const introduction = isEn
    ? project.shortDescription_en ||
      project.description ||
      project.shortDescription
    : project.description || project.shortDescription

  const objectives = Array.isArray(project.objectives)
    ? project.objectives
    : []

  const features = Array.isArray(project.features)
    ? project.features
    : []

  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : []

  const difficulties = Array.isArray(project.difficulties)
    ? project.difficulties
    : []

  const solutions = Array.isArray(project.solutions)
    ? project.solutions
    : []

  const results = Array.isArray(project.results)
    ? project.results
    : []

  const screenshots = Array.isArray(project.screenshots)
    ? project.screenshots
    : []

  return (
    <main className="project-details">
      <header className="project-details__hero">
        <div className="container">
          <Link
            className="project-details__back"
            to="/#projets"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            {isEn ? 'Back to projects' : 'Retour aux projets'}
          </Link>

          <div className="project-details__heading">
            <div>
              <p className="project-details__category">
                {category}
              </p>

              <h1>{project.title}</h1>

              <p className="project-details__introduction">
                {introduction}
              </p>

              {isEn && (
                <p className="project-details__language-note">
                  {text.detailsNote}
                </p>
              )}

              <div className="project-details__badges">
                {status && (
                  <span className="project-details__status">
                    {status}
                  </span>
                )}

                {project.featured && (
                  <span className="project-details__featured">
                    {text.featuredBadge}
                  </span>
                )}
              </div>
            </div>

            {project.image && (
              <div className="project-details__cover">
                <img
                  src={project.image}
                  alt={
                    isEn
                      ? `Preview of the ${project.title} project`
                      : `Aperçu du projet ${project.title}`
                  }
                />
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="container project-details__content">
        <div className="project-details__main">
          {project.context && (
            <section className="project-details__section">
              <p className="project-details__section-label">
                Contexte
              </p>

              <h2>Présentation du projet</h2>
              <p>{project.context}</p>
            </section>
          )}

          {project.problem && (
            <section className="project-details__section">
              <div className="project-details__section-title">
                <Target size={24} aria-hidden="true" />
                <h2>Problématique</h2>
              </div>

              <p>{project.problem}</p>
            </section>
          )}

          {objectives.length > 0 && (
            <section className="project-details__section">
              <h2>Objectifs</h2>

              <ul className="project-details__check-list">
                {objectives.map((objective) => (
                  <li key={objective}>
                    <CheckCircle2
                      size={18}
                      aria-hidden="true"
                    />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.role && (
            <section className="project-details__section">
              <div className="project-details__section-title">
                <UserRound size={24} aria-hidden="true" />
                <h2>Mon rôle</h2>
              </div>

              <p>{project.role}</p>
            </section>
          )}

          {project.architecture && (
            <section className="project-details__section">
              <h2>Architecture</h2>
              <p>{project.architecture}</p>
            </section>
          )}

          {features.length > 0 && (
            <section className="project-details__section">
              <h2>Fonctionnalités principales</h2>

              <ul className="project-details__check-list">
                {features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2
                      size={18}
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {(difficulties.length > 0 ||
            solutions.length > 0) && (
            <section className="project-details__section">
              <div className="project-details__section-title">
                <Wrench size={24} aria-hidden="true" />
                <h2>Difficultés et solutions</h2>
              </div>

              <div className="project-details__columns">
                {difficulties.length > 0 && (
                  <div>
                    <h3>Difficultés rencontrées</h3>

                    <ul>
                      {difficulties.map((difficulty) => (
                        <li key={difficulty}>
                          {difficulty}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {solutions.length > 0 && (
                  <div>
                    <h3>Solutions apportées</h3>

                    <ul>
                      {solutions.map((solution) => (
                        <li key={solution}>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {results.length > 0 && (
            <section className="project-details__section">
              <h2>Résultats obtenus</h2>

              <ul className="project-details__check-list">
                {results.map((result) => (
                  <li key={result}>
                    <CheckCircle2
                      size={18}
                      aria-hidden="true"
                    />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {screenshots.length > 0 && (
            <section className="project-details__section">
              <h2>Captures d’écran</h2>

              <div className="project-details__gallery">
                {screenshots.map((screenshot, index) => (
                  <figure key={screenshot.src}>
                    <img
                      src={screenshot.src}
                      alt={
                        screenshot.alt ||
                        `Capture ${index + 1} du projet ${project.title}`
                      }
                      loading="lazy"
                    />

                    {screenshot.caption && (
                      <figcaption>
                        {screenshot.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="project-details__sidebar">
          <div className="project-details__sidebar-card">
            <h2>Technologies</h2>

            <ul className="project-details__technologies">
              {technologies.map((technology) => (
                <li key={technology}>
                  {technology}
                </li>
              ))}
            </ul>

            <div className="project-details__links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={19} aria-hidden="true" />
                  {isEn ? 'View on GitHub' : 'Voir sur GitHub'}
                  <ExternalLink
                    size={16}
                    aria-hidden="true"
                  />
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  {isEn
                    ? 'View the demo'
                    : 'Voir la démonstration'}
                  <ExternalLink
                    size={16}
                    aria-hidden="true"
                  />
                </a>
              )}
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default ProjectDetails
