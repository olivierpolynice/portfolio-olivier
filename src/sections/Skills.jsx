import { skillCategories } from '../data/skills'

function Skills() {
  return (
    <section id="skills">
      <h2>Mes compétences</h2>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article key={category.id} className="skill-category">
            <h3>{category.title}</h3>

            <p>{category.description}</p>

            <ul>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills