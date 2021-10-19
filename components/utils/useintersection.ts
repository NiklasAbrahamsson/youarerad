import { useEffect, RefObject,  } from 'react'

type useIntersectionOptions = {
  threshold: number;
  rootMargin: string;
}

export const useIntersection = (ref: RefObject<HTMLElement>, selector: string, handler: (entry: IntersectionObserverEntry, idx: number) => void, options: useIntersectionOptions) => {
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    if (ref.current && typeof IntersectionObserver === 'function') {
      const handleIntersect = (idx: number) => (entries: IntersectionObserverEntry[]) => {
        handler(entries[0], idx)
      }

      ref.current.querySelectorAll(selector).forEach((node, idx) => {
        const observer = new IntersectionObserver(handleIntersect(idx), options)
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
