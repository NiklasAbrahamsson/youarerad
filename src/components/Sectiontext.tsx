import { ReactNode } from 'react'

import Link from 'next/link'
import Lazysections from '../libs/utils/lazysections'

type SectiontextProps = {
  subheader?: string
  headerone?: string
  headertwo?: string
  button?: ReactNode
  body?: string
  learn?: string
  link?: string
  media?: JSX.Element
  alternate?: boolean
}
export default function Sectiontext({
  subheader,
  headerone,
  headertwo,
  button,
  body,
  learn,
  link,
  media,
  alternate = true,
}: SectiontextProps) {
  return (
    <Lazysections>
      <div className="flex flex-col-reverse items-center md:justify-between md:grid md:grid-cols-2 md:grid-flow-col-dense md:gap-20 md:space-y-0">
        <div className="relative max-w-xl mt-4 md:mt-0">
          <h5>{subheader}</h5>
          <h3 className="block">
            {headerone}{' '}
            <span className="text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text">
              {headertwo}
            </span>
          </h3>
          {body && <p>{body}</p>}
          {button && <div>{button}</div>}
          {link && (
            <div className="relative inline-flex flex-row items-center mt-2 text-lg group">
              <Link href={link}>
                <a className="inline-flex text-lg text-blue-700 transition-all duration-500">
                  {learn}
                </a>
              </Link>
              <div className="absolute h-0.5 w-full -bottom-1 scale-x-0  bg-gradient-to-r z-0 from-pink-400 to-blue-400 group-hover:scale-x-100  transition-all duration-200 ease-out" />
            </div>
          )}
        </div>
        <div
          className={
            alternate
              ? 'overflow-hidden border border-transparent rounded-xl '
              : 'overflow-hidden border border-transparent rounded-xl col-start-1'
          }
        >
          {media}
        </div>
      </div>
    </Lazysections>
  )
}
