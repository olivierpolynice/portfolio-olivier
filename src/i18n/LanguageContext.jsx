import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const LanguageContext = createContext(null)

function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(
      'portfolio-language',
    )

    if (stored === 'fr' || stored === 'en') {
      return stored
    }
  } catch (error) {
    // localStorage unavailable (private browsing, etc.) — ignore
  }

  return 'fr'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    readStoredLanguage,
  )

  useEffect(() => {
    try {
      window.localStorage.setItem(
        'portfolio-language',
        language,
      )
    } catch (error) {
      // ignore write failures
    }

    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage((current) =>
      current === 'fr' ? 'en' : 'fr',
    )
  }

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider',
    )
  }

  return context
}
