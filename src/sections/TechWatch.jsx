import {
  useEffect,
  useState,
} from 'react'
import {
  BrainCircuit,
  Cloud,
  ExternalLink,
  Network,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import {
  strings,
  translateCategory,
} from '../i18n/strings'
import './TechWatch.css'

const categories = [
  'Tous',
  'Cybersécurité',
  'Cloud',
  'Réseaux',
  'DevSecOps',
  'IA',
]

const categoryIcons = {
  Cybersécurité: ShieldCheck,
  Cloud,
  Réseaux: Network,
  DevSecOps: RefreshCw,
  IA: BrainCircuit,
}

function normalizeUrl(url = '') {
  const markdownUrl = url.match(
    /^\[.*?\]\((https?:\/\/.+)\)$/,
  )

  return markdownUrl ? markdownUrl[1] : url
}

function formatDate(dateValue, language = 'fr') {
  if (!dateValue) {
    return null
  }

  const date = new Date(dateValue)

  if (Number.isNaN(date.getTime())) {
    return null
  }

  return new Intl.DateTimeFormat(
    language === 'en' ? 'en-US' : 'fr-FR',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    },
  ).format(date)
}

function TechWatch() {
  const { language } = useLanguage()
  const text = strings[language].techWatch

  const [activeCategory, setActiveCategory] =
    useState('Tous')
  const [watchItems, setWatchItems] = useState([])
  const [updatedAt, setUpdatedAt] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadTechWatch() {
      try {
        setIsLoading(true)
        setError('')

        const response = await fetch(
          '/data/tech-watch.json',
          {
            signal: controller.signal,
            cache: 'no-store',
          },
        )

        if (!response.ok) {
          throw new Error(
            `Erreur HTTP ${response.status}`,
          )
        }

        const data = await response.json()

        if (!Array.isArray(data.articles)) {
          throw new Error(
            'Le fichier de veille est invalide.',
          )
        }

        setWatchItems(data.articles)
        setUpdatedAt(data.updatedAt || null)
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          console.error(
            'Impossible de charger la veille :',
            requestError,
          )

          setError(
            'Les actualités sont momentanément indisponibles.',
          )
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    loadTechWatch()

    return () => controller.abort()
  }, [])

  const filteredItems =
    activeCategory === 'Tous'
      ? watchItems
      : watchItems.filter(
          (item) =>
            item.category === activeCategory,
        )

  return (
    <section
      className="tech-watch section"
      id="veille"
      aria-labelledby="tech-watch-title"
    >
      <div className="container">
        <header className="section__header">
          <span className="section__eyebrow">
            {text.eyebrow}
          </span>

          <h2
            className="section__title"
            id="tech-watch-title"
          >
            {text.title}
          </h2>

          <p className="section__description">
            {text.description}
          </p>

          {language === 'en' && (
            <p className="tech-watch__language-note">
              {text.note}
            </p>
          )}
        </header>

        <div
          className="tech-watch__filters"
          aria-label={text.filterAriaLabel}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? 'tech-watch__filter tech-watch__filter--active'
                  : 'tech-watch__filter'
              }
              type="button"
              aria-pressed={
                activeCategory === category
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {translateCategory(category, language)}
            </button>
          ))}
        </div>

        {isLoading && (
          <p
            className="tech-watch__status"
            role="status"
          >
            {language === 'en'
              ? 'Loading news…'
              : 'Chargement des actualités…'}
          </p>
        )}

        {error && (
          <p
            className="tech-watch__status tech-watch__status--error"
            role="alert"
          >
            {error}
          </p>
        )}

        {!isLoading && !error && (
          <div className="tech-watch__grid">
            {filteredItems.map((item) => {
              const Icon =
                categoryIcons[item.category] ||
                RefreshCw

              const publicationDate = formatDate(
                item.publishedAt,
                language,
              )

              return (
                <article
                  className="tech-watch__card"
                  key={item.id}
                >
                  <div className="tech-watch__card-top">
                    <span className="tech-watch__icon">
                      <Icon
                        size={22}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="tech-watch__category">
                      {translateCategory(
                        item.category,
                        language,
                      )}
                    </span>
                  </div>

                  <h3 className="tech-watch__card-title">
                    {item.title}
                  </h3>

                  <p className="tech-watch__card-description">
                    {item.description}
                  </p>

                  <div className="tech-watch__card-footer">
                    <div>
                      <span className="tech-watch__source">
                        Source : {item.source}
                      </span>

                      {publicationDate && (
                        <time
                          className="tech-watch__date"
                          dateTime={item.publishedAt}
                        >
                          {publicationDate}
                        </time>
                      )}
                    </div>

                    <a
                      className="tech-watch__link"
                      href={normalizeUrl(item.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${
                        language === 'en'
                          ? 'Read'
                          : 'Consulter'
                      } ${item.title} ${
                        language === 'en' ? 'on' : 'sur'
                      } ${item.source}`}
                    >
                      {language === 'en'
                        ? 'Read'
                        : 'Consulter'}

                      <ExternalLink
                        size={16}
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        )}

        {!isLoading &&
          !error &&
          filteredItems.length === 0 && (
            <p className="tech-watch__status">
              {language === 'en'
                ? 'No article available in this category.'
                : 'Aucun article disponible dans cette catégorie.'}
            </p>
          )}

        {updatedAt && (
          <p className="tech-watch__update">
            {language === 'en'
              ? 'News updates automatically. Last updated: '
              : 'Veille actualisée automatiquement. Dernière mise à jour : '}
            {formatDate(updatedAt, language)}.
          </p>
        )}
      </div>
    </section>
  )
}

export default TechWatch