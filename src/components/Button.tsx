import Link from 'next/link'
import Ctahover from './lotties/cta'

export default function Button({ children, linkTo }: { children: string; linkTo: string }) {
  return (
    <div className="relative w-full max-w-md mx-auto mt-10 overflow-hidden text-xl text-black transition-all duration-300 ease-linear bg-white border-2 border-black fitems-center lg:mx-0 lg:max-w-sm rounded-xl shadow-primary hover:shadow-none hover:bg-black hover:text-white">
      <Link href={linkTo}>
        <a>
          <div className="relative z-10 w-full p-2 font-bold text-center">{children}</div>
          <div className="absolute top-0 z-0">
            <Ctahover />
          </div>
        </a>
      </Link>
    </div>
  )
}
