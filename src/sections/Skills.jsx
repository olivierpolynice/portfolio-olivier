import MotionSection from '../components/MotionSection'
import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import { skillCategories } from '../data/skills'
import './Skills.css'

function Skills() {
  return (
    <MotionSection
      className="section skills"
      id="competences"
    >
      <div className="container">
        <SectionTitle
          eyebrow="Compétences"
          title="Technologies et domaines techniques"
          description="Des compétences développées à travers mes formations, mes laboratoires et plusieurs projets concrets."
        />

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              id={category.id}
              icon={category.icon}
              title={category.title}
              description={category.description}
              skills={category.skills}
              animationDelay={index * 0.07}
            />
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

export default Skills