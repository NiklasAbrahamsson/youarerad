import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState, RefObject, ReactNode } from 'react'

function useOnScreen(ref: RefObject<HTMLElement>, rootMargin?: string) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    let currentRef: HTMLElement | null = null
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      currentRef = ref.current
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref, rootMargin]) // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting
}

type LazysectionsProps = {
  children: ReactNode;
}

const Lazysections = ({ children }: LazysectionsProps) => {
  const controls = useAnimation()
  const rootRef = useRef<HTMLDivElement>(null)
  const onScreen = useOnScreen(rootRef)
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      })
    }
  }, [onScreen, controls])

  return (
    <motion.div
      className="lazy-div"
      ref={rootRef}
      initial={{ opacity: 0, x: -10 }}
      animate={controls}
    >
      {children}
    </motion.div>
  )
}

export default Lazysections
