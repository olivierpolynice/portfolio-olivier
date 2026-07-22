import { Download, FileText } from 'lucide-react'
import Button from '../components/Button'
import { profile } from '../data/profile'

function Resume() {
  return (
    <section className="section resume">
      <div className="container resume__content">
        <div className="resume__text">
          <FileText size={40} />

          <div>
            <p className="resume__eyebrow">
              Curriculum vitae
            </p>

            <h2>Consulter mon CV</h2>

            <p>
              Retrouvez une synthèse de ma formation, de mes
              compétences techniques et de mes principaux projets.
            </p>
          </div>
        </div>

        <Button
          href={profile.cv}
          download="CV_Olivier_Polynice.pdf"
        >
          Télécharger mon CV
          <Download size={18} />
        </Button>
      </div>
    </section>
  )
}

export default Resume