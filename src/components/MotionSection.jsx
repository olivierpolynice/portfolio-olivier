import {
  motion,
  useReducedMotion,
} from 'framer-motion'

function MotionSection({
  children,
  className = '',
  id,
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.section>
  )
}

export default MotionSection