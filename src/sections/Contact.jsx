import {
  motion,
  useReducedMotion,
} from 'framer-motion'
import { useState } from 'react'
import {
  BriefcaseBusiness,
  Mail,
  MapPin,
  Send,
} from 'lucide-react'
import MotionSection from '../components/MotionSection'
import SectionTitle from '../components/SectionTitle'
import SocialLinks from '../components/SocialLinks'
import { profile } from '../data/profile'
import './Contact.css'

function Contact() {
  const shouldReduceMotion = useReducedMotion()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject =
      formData.subject.trim() ||
      `Prise de contact de ${formData.name}`

    const body = [
      'Bonjour Olivier,',
      '',
      formData.message,
      '',
      `Nom : ${formData.name}`,
      `Adresse e-mail : ${formData.email}`,
    ].join('\n')

    const mailtoLink =
      `mailto:${profile.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }

  const leftAnimation = shouldReduceMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          x: -20,
        },
        whileInView: {
          opacity: 1,
          x: 0,
        },
        viewport: {
          once: true,
          amount: 0.15,
        },
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      }

  const rightAnimation = shouldReduceMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          x: 20,
        },
        whileInView: {
          opacity: 1,
          x: 0,
        },
        viewport: {
          once: true,
          amount: 0.15,
        },
        transition: {
          duration: 0.5,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        },
      }

  return (
    <MotionSection
      className="section contact"
      id="contact"
    >
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Échangeons sur votre opportunité"
          description="Je suis disponible pour une alternance en Master 2 à partir de septembre 2026, principalement en cybersécurité, cloud ou DevSecOps."
        />

        <div className="contact__layout">
          <motion.div
            className="contact__information"
            {...leftAnimation}
          >
            <div className="contact__intro">
              <h3>Restons en contact</h3>

              <p>
                Vous pouvez me contacter directement par e-mail,
                consulter mon profil LinkedIn ou découvrir mes
                projets sur GitHub.
              </p>
            </div>

            <div className="contact__details">
              <a
                className="contact__detail"
                href={`mailto:${profile.email}`}
              >
                <span className="contact__detail-icon">
                  <Mail size={21} aria-hidden="true" />
                </span>

                <span>
                  <small>Adresse e-mail</small>
                  <strong>{profile.email}</strong>
                </span>
              </a>

              <div className="contact__detail">
                <span className="contact__detail-icon">
                  <MapPin size={21} aria-hidden="true" />
                </span>

                <span>
                  <small>Localisation</small>
                  <strong>{profile.location}</strong>
                </span>
              </div>

              <div className="contact__detail">
                <span className="contact__detail-icon">
                  <BriefcaseBusiness
                    size={21}
                    aria-hidden="true"
                  />
                </span>

                <span>
                  <small>Disponibilité</small>
                  <strong>{profile.availability}</strong>
                </span>
              </div>
            </div>

            <div className="contact__social">
              <p>Retrouvez-moi également sur :</p>

              <SocialLinks
                github={profile.github}
                linkedin={profile.linkedin}
                email={profile.email}
              />
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            {...rightAnimation}
          >
            <div className="contact__form-heading">
              <Mail size={25} aria-hidden="true" />

              <div>
                <h3>Envoyer un message</h3>

                <p>
                  Votre logiciel de messagerie s’ouvrira
                  automatiquement.
                </p>
              </div>
            </div>

            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name">
                  Nom
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  placeholder="Votre nom"
                  autoComplete="name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">
                  Adresse e-mail
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  placeholder="vous@exemple.com"
                  autoComplete="email"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-subject">
                Objet
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                placeholder="Objet de votre message"
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                placeholder="Présentez votre message ou votre opportunité..."
                rows={7}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              className="contact__submit"
              type="submit"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -2,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              transition={{
                duration: 0.16,
              }}
            >
              Préparer l’e-mail
              <Send size={18} aria-hidden="true" />
            </motion.button>

            <p className="contact__form-note">
              Aucun message ni aucune donnée ne sont enregistrés
              sur ce site.
            </p>
          </motion.form>
        </div>
      </div>
    </MotionSection>
  )
}

export default Contact