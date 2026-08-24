import { Languages } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'

function LanguageToggle({ className = '' }) {
  const { language, toggleLanguage } = useLanguage()
  const text = strings[language].nav

  return (
    <button
      className={`language-toggle ${className}`}
      type="button"
      onClick={toggleLanguage}
      aria-label={text.languageToggleLabel}
    >
      <Languages size={17} aria-hidden="true" />
      <span>{text.languageToggleShort}</span>
    </button>
  )
}

export default LanguageToggle
