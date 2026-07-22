import SectionTitle from '../components/SectionTitle'
import { experiences } from '../data/experience'

function Experience() {
  return (
    <section className="section experience" id="parcours">
      <div className="container">
        <SectionTitle
          eyebrow="Parcours"
          title="Formation et progression"
          description="Un parcours construit autour des télécommunications, des réseaux, du cloud et de la cybersécurité."
        />

        <div className="experience__timeline">
          {experiences.map((experience) => (
            <article
              className="experience__item"
              key={experience.id}
            >
              <div className="experience__marker" aria-hidden="true" />

              <p className="experience__period">
                {experience.period}
              </p>

              <div className="experience__content">
                <h3>{experience.title}</h3>

                <p className="experience__organisation">
                  {experience.organisation}
                </p>

                <p className="experience__description">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience