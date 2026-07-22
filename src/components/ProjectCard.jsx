import { Code2, ExternalLink } from 'lucide-react'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__image-wrapper">
        <img
          className="project-card__image"
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
        />
      </div>

      <div className="project-card__content">
        <p className="project-card__category">
          {project.category}
        </p>

        <h3 className="project-card__title">
          {project.title}
        </h3>

        <p className="project-card__description">
          {project.shortDescription}
        </p>

        <ul className="project-card__technologies">
          {project.technologies.slice(0, 6).map((technology) => (
            <li key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        {(project.github || project.demo) && (
          <div className="project-card__links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Consulter le code source du projet ${project.title}`}
              >
                <Code2 size={18} />
                Code source
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Consulter la démonstration du projet ${project.title}`}
              >
                <ExternalLink size={18} />
                Démonstration
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard