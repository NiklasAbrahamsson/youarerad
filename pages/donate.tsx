import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import DonateForm from '../components/forms/Donate/Donation'
import Layout from '../components/Layout'
import Pageheader from '../components/Pageheader'
import Sectionheader from '../components/Sectionheader'
import Sectiontext from '../components/Sectiontext'

const VideoPlayer = dynamic(() => import('@/components/utils/videoplayer'), { ssr: false })

const Partners = [
  {
    name: 'Jagex',
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1629765022/Logos/Jagexlogo.png.png',
    alt: 'Jagex, makers of Runescape, support Rise Above The Disorder.',
    link: 'https://www.jagex.com/en-GB/charitable-giving',
  },
  {
    name: 'Electronic Arts',
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1629766474/Logos/EAlogo.png.png',
    alt: 'Electronic Arts supports Rise Above The Disorder.',
    link: 'https://www.ea.com/compete/wellness',
  },
  {
    name: 'G4.tv',
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1629765666/Logos/G4logo.png.png',
    alt: 'G4.tv supports Rise Above The Disorder.',
    link: 'https://g4tv.com/',
  },
  {
    name: 'Columbia Records',
    logo: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1629765876/Logos/ColumbiaRecordslogo.jpg.jpg',
    alt: 'Columbia Records supports Rise Above The Disorder.',
    link: 'http://www.columbiarecords.com/',
  },
]

export default function Donate() {
  return (
    <Layout
      pageTitle="RAD Donate"
      pageLink="/donate"
      description="Thanks to heroes like you, someone will start therapy today. Your donation to Rise Above The Disorder changes lives."
      pageHeader={
        <section className="">
          <div className="space-y-16 lg:space-y-0 lg:justify-between lg:flex">
            <div>
              <Pageheader
                subheader="donate"
                headerone="Someone will start therapy today"
                charone="."
                headertwo="You make that possible"
                chartwo="♡"
              />
            </div>
            <div className=" lg:flex-grow-0 lg:w-1/3">
              <DonateForm />
            </div>
          </div>
        </section>
      }
    >
      <div className="text-white bg-black">
        <section className="pb-16">
          <Sectionheader
            subheader={
              <span className="text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text">
                the guild
              </span>
            }
            headerone="Membership starts at just"
            headertwo="$1 per day!"
          />
        </section>
        <section className="pt-0">
          <div className="flex flex-wrap-reverse space-y-10 md:grid md:grid-cols-2 md:grid-flow-col-dense md:gap-20 md:space-y-0">
            <div className="mt-4 text-center text-white md:text-left md:mt-0">
              <h3 className="text-white">
                <span className="text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text">
                  Give monthly.{' '}
                </span>
                Provide therapy to thousands.
              </h3>
              <p>
                For more than 10 years, our guild has come together to make mental health care free
                for those in need. We are casual players, content creators, music artists, and
                friends.
              </p>
              <div className="mt-6">
                <div className="relative w-64 h-12 mx-auto lg:mx-px group">
                  <Link href="/guild">
                    <a>
                      <button className="absolute flex justify-center w-64 px-3 py-2 font-bold text-black align-middle transition-all duration-300 ease-in-out bg-white text-md rounded-xl group-hover:bg-opacity-0 hover:text-white">
                        Join The Guild
                      </button>
                      <div className="w-64 h-12 transition-all duration-300 ease-in-out bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl group-hover:h-10"></div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full p-1 border rounded-xl">
              <VideoPlayer publicId="General%20Media/RADMythicGarry" />
            </div>
          </div>
        </section>
      </div>
      <section className="space-y-32">
        <Sectiontext
          alternate={true}
          subheader="How Donations Help"
          headerone="You make"
          headertwo="healing possible."
          body="Your donation removes one of the greatest barriers to mental health care: affordability. When you donate, you cover the cost of someone's medication or therapy session. You make healing possible."
          media={
            <Image
              src="https://res.cloudinary.com/df23ubjbb/image/upload/v1630893466/E-OwTMAUUAUGktf_vga0ut.jpg"
              height="1080"
              width="1920"
              alt="August donors to Rise Above The Disorder being celebrated for the amount of therapy sessions they made possible."
              objectFit="scale-down"
            />
          }
        />
        <Sectiontext
          alternate={false}
          subheader="Your Donation"
          headerone="100% of your donation goes to mental health care."
          body="We believe so strongly in the idea that your donation- every cent of it, should help someone in our community. Someone on your friend list, someone you queued up against, someone in the same Discord. Thanks to our partners, our operations are covered and your donation can have the most impact."
          learn="Learn more about our funding"
          link="/about"
          media={
            <div className="flex">
              {Partners.map((index) => (
                <div key={index.name} className="flex justify-center col-span-1 px-4 py-8 lg:py-0 ">
                  <Link href={index.link}>
                    <a>
                      <Image
                        key={index.name}
                        alt={index.alt}
                        src={index.logo}
                        width="125"
                        height="125"
                        objectFit="cover"
                      />
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          }
        />
      </section>
    </Layout>
  )
}
