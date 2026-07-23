import {
  motion,
  useReducedMotion,
} from 'framer-motion'
import {
  ArrowDown,
  BriefcaseBusiness,
  MapPin,
  MessageCircle,
} from 'lucide-react'
import Button from '../components/Button'
import MotionSection from '../components/MotionSection'
import SocialLinks from '../components/SocialLinks'
import { profile } from '../data/profile'
import './Hero.css'

function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const specialties = Array.isArray(profile.specialties)
    ? profile.specialties
    : [
        'Cybersécurité',
        'Cloud',
        'Réseaux',
        'DevSecOps',
      ]

  const textAnimation = shouldReduceMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          x: -24,
        },
        animate: {
          opacity: 1,
          x: 0,
        },
        transition: {
          duration: 0.6,
          delay: 0.12,
          ease: [0.22, 1, 0.36, 1],
        },
      }

  const imageAnimation = shouldReduceMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          x: 28,
          scale: 0.97,
        },
        animate: {
          opacity: 1,
          x: 0,
          scale: 1,
        },
        transition: {
          duration: 0.7,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        },
      }

  return (
    <MotionSection className="hero" id="accueil">
      <div
        className="hero__glow hero__glow--left"
        aria-hidden="true"
      />

      <div
        className="hero__glow hero__glow--right"
        aria-hidden="true"
      />

      <div className="container hero__content">
        <motion.div
          className="hero__text"
          {...textAnimation}
        >
          <div className="hero__availability">
            <span
              className="hero__availability-dot"
              aria-hidden="true"
            />

            <BriefcaseBusiness
              size={17}
              aria-hidden="true"
            />

            <span>{profile.availability}</span>
          </div>

          <p className="hero__introduction">
            Bonjour, je suis
          </p>

          <h1>{profile.name}</h1>

          <h2>{profile.shortTitle}</h2>

          <p className="hero__specialties">
            {specialties.map((specialty, index) => (
              <span key={specialty}>
                {index > 0 && (
                  <span aria-hidden="true"> • </span>
                )}

                {specialty}
              </span>
            ))}
          </p>

          <p className="hero__description">
            {profile.introduction}
          </p>

          <div className="hero__location">
            <MapPin size={19} aria-hidden="true" />
            <span>{profile.location}</span>
          </div>

          <div className="hero__actions">
            <Button href="#projets">
              Voir mes projets
              <ArrowDown size={18} aria-hidden="true" />
            </Button>

            <Button href="#contact" variant="secondary">
              Me contacter

              <MessageCircle
                size={18}
                aria-hidden="true"
              />
            </Button>
          </div>

          <SocialLinks
            github={profile.github}
            linkedin={profile.linkedin}
          />
        </motion.div>

        <motion.div
          className="hero__visual"
          {...imageAnimation}
        >
          <div className="hero__image-frame">
            <div
              className="hero__image-decoration"
              aria-hidden="true"
            />

            <img
              className="hero__image"
              src={profile.profileImage}
              alt={`Portrait professionnel de ${profile.name}`}
            />

            <div className="hero__image-badge">
              <span
                className="hero__image-badge-dot"
                aria-hidden="true"
              />

              <span>Disponible</span>
            </div>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}

export default Hero