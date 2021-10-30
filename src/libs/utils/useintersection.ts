import { useEffect, RefObject } from 'react'

type useIntersectionOptions = {
  threshold: number
  rootMargin: string
}

export const useIntersection = (
  ref: RefObject<HTMLElement>,
  selector: string,
  handler: (entry: IntersectionObserverEntry, index: number) => void,
  options: useIntersectionOptions
) => {
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    if (ref.current && typeof IntersectionObserver === 'function') {
      const handleIntersect = (index: number) => (entries: IntersectionObserverEntry[]) => {
        handler(entries[0], index)
      }

      ref.current.querySelectorAll(selector).forEach((node, index) => {
        const observer = new IntersectionObserver(handleIntersect(index), options)
        observer.observe(node)
        observers.push(observer)
      })

      return () => {
        observers.forEach((observer) => {
          observer.disconnect()
        })
      }
    }
    return () => {}
  })
}
