import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <p>Erreur 404</p>

        <h1>Page introuvable</h1>

        <p>
          La page demandée n’existe pas ou a été déplacée.
        </p>

        <Link className="button button--primary" to="/">
          <ArrowLeft size={18} aria-hidden="true" />
          Retour à l’accueil
        </Link>
      </div>
    </main>
  )
}

export default NotFound