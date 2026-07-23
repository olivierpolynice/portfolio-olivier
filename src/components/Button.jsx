function Button({
  children,
  href,
  variant = 'primary',
  download = false,
  target,
  rel,
  onClick,
  type = 'button',
}) {
  const className = `button button--${variant}`

  if (href) {
    return (
      <a
        className={className}
        href={href}
        download={download}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button