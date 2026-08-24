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
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'
import './Contact.css'

function Contact() {
  const shouldReduceMotion = useReducedMotion()
  const { language } = useLanguage()
  const text = strings[language].contact

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
      (language === 'en'
        ? `Message from ${formData.name}`
        : `Prise de contact de ${formData.name}`)

    const greeting =
      language === 'en' ? 'Hi Olivier,' : 'Bonjour Olivier,'

    const nameLabel = language === 'en' ? 'Name' : 'Nom'

    const emailLabel =
      language === 'en' ? 'Email address' : 'Adresse e-mail'

    const body = [
      greeting,
      '',
      formData.message,
      '',
      `${nameLabel} : ${formData.name}`,
      `${emailLabel} : ${formData.email}`,
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
          eyebrow={text.eyebrow}
          title={text.title}
          description={text.description}
        />

        <div className="contact__layout">
          <motion.div
            className="contact__information"
            {...leftAnimation}
          >
            <div className="contact__intro">
              <h3>{text.stayInTouch}</h3>

              <p>{text.intro}</p>
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
                  <small>{text.email}</small>
                  <strong>{profile.email}</strong>
                </span>
              </a>

              <div className="contact__detail">
                <span className="contact__detail-icon">
                  <MapPin size={21} aria-hidden="true" />
                </span>

                <span>
                  <small>{text.location}</small>
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
                  <small>{text.availability}</small>
                  <strong>{profile.availability}</strong>
                </span>
              </div>
            </div>

            <div className="contact__social">
              <p>{text.findMeAlso}</p>

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
                <h3>{text.sendMessage}</h3>

                <p>{text.mailNote}</p>
              </div>
            </div>

            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name">
                  {text.name}
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  placeholder={text.namePlaceholder}
                  autoComplete="name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">
                  {text.emailField}
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  placeholder={text.emailPlaceholder}
                  autoComplete="email"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-subject">
                {text.subject}
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                placeholder={text.subjectPlaceholder}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">
                {text.message}
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                placeholder={text.messagePlaceholder}
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
              {text.submit}
              <Send size={18} aria-hidden="true" />
            </motion.button>

            <p className="contact__form-note">
              {text.formNote}
            </p>
          </motion.form>
        </div>
      </div>
    </MotionSection>
  )
}

export default Contact
