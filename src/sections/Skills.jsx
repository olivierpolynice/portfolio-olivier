import MotionSection from '../components/MotionSection'
import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import { skillCategories } from '../data/skills'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'
import './Skills.css'

function Skills() {
  const { language } = useLanguage()
  const text = strings[language].skills

  return (
    <MotionSection
      className="section skills"
      id="competences"
    >
      <div className="container">
        <SectionTitle
          eyebrow={text.eyebrow}
          title={text.title}
          description={text.description}
        />

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              id={category.id}
              icon={category.icon}
              title={
                language === 'en'
                  ? category.title_en
                  : category.title
              }
              description={
                language === 'en'
                  ? category.description_en
                  : category.description
              }
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
