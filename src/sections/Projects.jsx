import {
  motion,
  useReducedMotion,
} from 'framer-motion'
import { useState } from 'react'
import MotionSection from '../components/MotionSection'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'
import './Projects.css'

const projectFilters = [
  'Tous',
  'Cybersécurité',
  'Cloud et DevOps',
  'Réseaux',
  'Développement',
  'Data',
]

function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const shouldReduceMotion = useReducedMotion()

  const mainProject = projects.find(
    (project) => project.id === 'accessguard',
  )

  const otherProjects = projects.filter((project) => {
    if (project.id === 'accessguard') {
      return false
    }

    if (activeFilter === 'Tous') {
      return true
    }

    return project.filterCategory === activeFilter
  })

  const showAccessGuard =
    mainProject &&
    (activeFilter === 'Tous' ||
      mainProject.filterCategory === activeFilter)

  const hasVisibleProjects =
    showAccessGuard || otherProjects.length > 0

  return (
    <MotionSection
      className="section projects"
      id="projets"
    >
      <div className="container">
        <SectionTitle
          eyebrow="Projets"
          title="Des projets techniques concrets"
          description="Une sélection de projets réalisés en cybersécurité, réseaux, développement, DevOps et ingénierie des données."
        />

        <div
          className="projects__filters"
          aria-label="Filtrer les projets par catégorie"
        >
          {projectFilters.map((filter) => (
            <motion.button
              className={`projects__filter ${
                activeFilter === filter
                  ? 'projects__filter--active'
                  : ''
              }`}
              type="button"
              key={filter}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -2,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.97,
                    }
              }
              transition={{
                duration: 0.16,
              }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {showAccessGuard && (
          <div className="projects__featured">
            <ProjectCard
              key={mainProject.id}
              project={mainProject}
              variant="featured"
              animationDelay={0}
            />
          </div>
        )}

        {otherProjects.length > 0 && (
          <>
            <motion.div
              className="projects__subtitle"
              key={`subtitle-${activeFilter}`}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 10,
                    }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.3,
              }}
            >
              <span>
                {activeFilter === 'Tous'
                  ? 'Autres réalisations'
                  : activeFilter}
              </span>

              <h3>
                {activeFilter === 'Tous'
                  ? 'Découvrez également mes autres projets'
                  : `Projets en ${activeFilter}`}
              </h3>
            </motion.div>

            <div className="projects__grid">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={`${activeFilter}-${project.id}`}
                  project={project}
                  animationDelay={index * 0.06}
                />
              ))}
            </div>
          </>
        )}

        {!hasVisibleProjects && (
          <motion.p
            className="projects__empty"
            key={`empty-${activeFilter}`}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 10,
                  }
            }
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.3,
            }}
          >
            Aucun projet n’est encore disponible dans cette
            catégorie.
          </motion.p>
        )}
      </div>
    </MotionSection>
  )
}

export default Projects