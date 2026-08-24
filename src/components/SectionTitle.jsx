function SectionTitle({
  eyebrow,
  title,
  description,
  titleId,
}) {
  return (
    <div className="section-title">
      {eyebrow && (
        <p className="section-title__eyebrow">
          {eyebrow}
        </p>
      )}

      <h2
        className="section-title__heading"
        id={titleId}
      >
        {title}
      </h2>

      {description && (
        <p className="section-title__description">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
