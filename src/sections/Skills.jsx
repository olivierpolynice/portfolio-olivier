import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import { skillCategories } from '../data/skills'

function Skills() {
  return (
    <section className="section skills" id="competences">
      <div className="container">
        <SectionTitle
          eyebrow="Compétences"
          title="Technologies et domaines techniques"
          description="Des compétences développées à travers mes formations, mes laboratoires et plusieurs projets concrets."
        />

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.id}
              title={category.title}
              description={category.description}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills