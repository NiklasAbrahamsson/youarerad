type TPageHeaderProps = {
  subheader?: string;
  headerone?: string;
  headertwo?: string;
  headerthree?: string;
  charone?: string;
  chartwo?: string;
  charthree?: string;
  color?: string;
}

export default function Pageheader({
  subheader,
  headerone,
  headertwo,
  headerthree,
  charone,
  chartwo,
  charthree,
  color,
}: TPageHeaderProps) {
  return (
    <>
      <h5>{subheader}</h5>
      <h1 className={color}>
        {headerone}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-red-300">
          {charone}
        </span>
        <br />
        {headertwo}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-green-400">
          {chartwo}
        </span>
        <br />
        {headerthree}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">
          {charthree}
        </span>
      </h1>
    </>
  )
}
