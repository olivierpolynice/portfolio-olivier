import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  )

  return (
    <section className="section projects" id="projets">
      <div className="container">
        <SectionTitle
          eyebrow="Projets"
          title="Des projets techniques concrets"
          description="Une sélection de projets réalisés en cybersécurité, réseaux, développement et DevSecOps."
        />

        <div className="projects__grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects