function SkillCard({ title, description, skills }) {
  return (
    <article className="skill-card">
      <h3 className="skill-card__title">{title}</h3>

      <p className="skill-card__description">
        {description}
      </p>

      <ul className="skill-card__list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  )
}

export default SkillCard