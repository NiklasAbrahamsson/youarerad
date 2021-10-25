import { motion, useAnimation } from 'framer-motion'
import { useEffect, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

type FadeInWhenVisibleProps = {
  children: ReactNode
}

function FadeInWhenVisible({ children }: FadeInWhenVisibleProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.5,
    delay: 100,
    rootMargin: '0px',
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.75 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

type FadeinsectionsProps = {
  children: ReactNode
}

export default function Fadeinsections({ children }: FadeinsectionsProps) {
  return <FadeInWhenVisible>{children}</FadeInWhenVisible>
}
