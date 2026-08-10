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

function formatDate(dateValue) {
  if (!dateValue) {
    return null
  }

  const date = new Date(dateValue)

  if (Number.isNaN(date.getTime())) {
    return null
  }

  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

function TechWatch() {
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
            Veille technologique
          </span>

          <h2
            className="section__title"
            id="tech-watch-title"
          >
            Je reste informé des évolutions
            technologiques
          </h2>

          <p className="section__description">
            Je suis régulièrement les actualités
            liées à la cybersécurité, au cloud, aux
            réseaux, au DevSecOps et à
            l’intelligence artificielle à partir de
            sources officielles et spécialisées.
          </p>
        </header>

        <div
          className="tech-watch__filters"
          aria-label="Filtrer les actualités"
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
              {category}
            </button>
          ))}
        </div>

        {isLoading && (
          <p
            className="tech-watch__status"
            role="status"
          >
            Chargement des actualités…
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
                      {item.category}
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
                      aria-label={`Consulter ${item.title} sur ${item.source}`}
                    >
                      Consulter

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
              Aucun article disponible dans cette
              catégorie.
            </p>
          )}

        {updatedAt && (
          <p className="tech-watch__update">
            Veille actualisée automatiquement.
            Dernière mise à jour :{' '}
            {formatDate(updatedAt)}.
          </p>
        )}
      </div>
    </section>
  )
}

export default TechWatch