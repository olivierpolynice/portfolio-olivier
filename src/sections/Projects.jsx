import {
  motion,
  useReducedMotion,
} from 'framer-motion'
import { useState } from 'react'
import MotionSection from '../components/MotionSection'
import ProjectCard from '../components/ProjectCard'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import {
  strings,
  translateCategory,
} from '../i18n/strings'
import './Projects.css'

const projectFilters = [
  'Tous',
  'Cybersécurité',
  'Cloud et DevOps',
  'Réseaux',
  'Développement',
  'Data',
  'Intelligence artificielle',
]

function projectMatchesFilter(project, activeFilter) {
  if (activeFilter === 'Tous') {
    return true
  }

  return (
    Array.isArray(project.filterCategories) &&
    project.filterCategories.includes(activeFilter)
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] =
    useState('Tous')

  const shouldReduceMotion = useReducedMotion()
  const { language } = useLanguage()
  const text = strings[language].projects

  const mainProject = projects.find(
    (project) => project.id === 'applymatch-ai',
  )

  const otherProjects = projects.filter((project) => {
    if (project.id === mainProject?.id) {
      return false
    }

    return projectMatchesFilter(project, activeFilter)
  })

  const showMainProject =
    mainProject &&
    projectMatchesFilter(mainProject, activeFilter)

  const hasVisibleProjects =
    Boolean(showMainProject) ||
    otherProjects.length > 0

  return (
    <MotionSection
      className="section projects"
      id="projets"
    >
      <div className="container">
        <SectionTitle
          eyebrow={text.eyebrow}
          title={text.title}
          description={text.description}
        />

        <div
          className="projects__filters"
          aria-label={text.filterAriaLabel}
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
              {translateCategory(filter, language)}
            </motion.button>
          ))}
        </div>

        {showMainProject && (
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
                  ? text.otherWorks
                  : translateCategory(
                      activeFilter,
                      language,
                    )}
              </span>

              <h3>
                {activeFilter === 'Tous'
                  ? text.discoverOthers
                  : text.projectsIn(
                      translateCategory(
                        activeFilter,
                        language,
                      ),
                    )}
              </h3>
            </motion.div>

            <div className="projects__grid">
              {otherProjects.map(
                (project, index) => (
                  <ProjectCard
                    key={`${activeFilter}-${project.id}`}
                    project={project}
                    animationDelay={index * 0.06}
                  />
                ),
              )}
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
            {text.empty}
          </motion.p>
        )}
      </div>
    </MotionSection>
  )
}

export default Projects
