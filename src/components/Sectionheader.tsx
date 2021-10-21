import { ReactNode } from 'react'

type SectionHeaderProps = {
  subheader: ReactNode
  headerone: string
  headertwo?: string
  bodytext?: string
  color?: string
}
export default function Sectionheader({
  subheader,
  headerone,
  headertwo,
  bodytext,
  color = '',
}: SectionHeaderProps) {
  return (
    <div className="max-w-4xl">
      <h5>{subheader}</h5>
      <h2 className="text-rad">
        <span className={color}>
          {headerone}
          {''}
        </span>
        {Boolean(headertwo) && headertwo}
      </h2>
      {Boolean(bodytext) && <p>{bodytext}</p>}
    </div>
  )
}
