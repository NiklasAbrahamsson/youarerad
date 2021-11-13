import Image from 'next/image'
import Link from 'next/link'
import Newsletter from './forms/Newsletter'
import Mayhover from './lotties/may'

type NavItem = {
  name: string
  href: string
}
type Navigation = {
  main: Array<NavItem>
}

const navigation: Navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Therapy', href: '/therapy' },
    { name: 'Donate', href: '/donate' },
    { name: 'Stream', href: '/stream' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Partner', href: '/partner' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
}

type SocialsPlatforms = {
  logo: string
  href: string
  alt: string
}

const socials: Array<SocialsPlatforms> = [
  {
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1628595192/Logos/Discord-Logo-Color_dpa4dc.svg',
    href: 'https://www.discord.gg/youarerad/',
    alt: "RAD's Discord server.",
  },
  {
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1628594911/Logos/Instagram_logo_2016_zc39qn.svg',
    href: 'https://www.instagram.com/riseabovethedisorder/',
    alt: "RAD's Instagram page.",
  },
  {
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1628595113/Logos/Twitch_Glitch_Logo_Purple_fehjtj.svg',
    href: 'https://www.twitch.tv/youarerad',
    alt: "RAD's Twitch channel.",
  },
  {
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1628594660/Logos/Logo_blue_tbwwed.svg',
    href: 'https://twitter.com/YouAreRAD',
    alt: "RAD's Twitter page",
  },
]

export default function Footer() {
  return (
    <div className="w-full px-4 py-16 mx-auto lg:max-w-xl lg:px-0">
      <div id="footer" className="mx-auto sm:max-w-md ">
        <Mayhover />
        <h2 className="sr-only">Footer</h2>
      </div>
      <div className="">
        <h2>
          Stay RAD
          <span className="text-indigo-400">.</span>
        </h2>
        <p className="pt-2">
          Subscribe to our newsletter to be updated on our mission to make mental health care
          accessible to everyone.
        </p>
        <div className="pt-4">
          <Newsletter />
        </div>
      </div>
      <div className="pt-4">
        <nav className="flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((navItem) => (
            <div key={navItem.href} className="relative text-base lowercase group">
              <Link href={navItem.href}>
                <a className="grid grid-flow-row mx-4 mt-4 underline">{navItem.name}</a>
              </Link>
            </div>
          ))}
        </nav>
      </div>

      <div className="text-center">
        <p className="pt-4">© Copyright Rise Above The Disorder 2021</p>

        <div className="flex flex-row items-center justify-center mx-auto mt-3 mb-3 space-x-5">
          {socials.map((social) => (
            <a href={social.href} key={social.logo}>
              <Image src={social.logo} width="40" height="40" alt={social.alt} />
            </a>
          ))}
        </div>
        <Link href="https://vercel.com/home?utm_source=youarerad&utm_campaign=oss">
          <a target="_blank" className="group">
            <Image
              className="duration-300 group-hover:ring-2 group-hover:ring-indigo-500 group-hover:invert"
              src="https://res.cloudinary.com/df23ubjbb/image/upload/v1635261153/Vercel.svg"
              alt="Click to check out Vercel"
              width="200px"
              height="50px"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}
