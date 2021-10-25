import { useRef, useState, ReactNode } from 'react'
import { useIntersection } from './useintersection'

type FadescrollingProps = {
  videos: ReactNode[]
  children: ReactNode
}

export default function Fadescrolling({ children, videos }: FadescrollingProps) {
  const ScrollerContainerRef = useRef<HTMLDivElement>(null)
  const [activeVideo, setActiveVideo] = useState(0)

  useIntersection(
    ScrollerContainerRef,
    'h3',
    (entry, index) => {
      if (entry.intersectionRatio === 1) {
        setActiveVideo(index)
      }
    },
    { threshold: 1, rootMargin: '0px 0px -50% 0px' }
  )

  const video = videos[activeVideo]
  return (
    <div className="items-start sm:grid sm:grid-cols-2 sm:gap-10">
      <div ref={ScrollerContainerRef} className="pt-10 sm:col-start-1">
        {children}
      </div>
      <div className="hidden sm:sticky sm:flex sm:col-start-2 sm:top-10">{video}</div>
    </div>
  )
}
