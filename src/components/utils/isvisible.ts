import { useEffect, useState, RefObject } from 'react'

const OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0,
}

const useIsVisible = (elementRef: RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (elementRef.current) {
      const currentElement = elementRef.current
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(currentElement)
          }
        })
      }, OPTIONS)
      observer.observe(elementRef.current)
    }
  }, [elementRef])
  return isVisible
}

export default useIsVisible
