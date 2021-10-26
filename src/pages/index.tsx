import Button from '@/components/Button'
import Layout from '@/components/Layout'
import Programs from '@/components/Programs'
import Sectionheader from '@/components/Sectionheader'
import Sectiontext from '@/components/Sectiontext'
import Carousel from '@/components/utils/Carousel'
import Fadeinsections from '@/components/utils/fadesections'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const VideoPlayer = dynamic(() => import('@/components/utils/videoplayer'), { ssr: false })

export default function Home() {
  return (
    <>
      <Layout
        pageTitle="Rise Above The Disorder"
        pageLink="/"
        description="We are a non-profit covering the cost of mental health care for thousands of people around the world."
      >
        <section className="lg:h-[80vh] pt-0 pb-32 lg:pt-40">
          <h1 className="display">
            We are a nonprofit covering the cost of mental health care for{' '}
            <span className="text-rad">everyone.</span>
          </h1>
          <Button linkTo="/donate">Donate Therapy</Button>
        </section>
        <div className="relative text-white bg-black">
          <Fadeinsections>
            <section className="relative mx-auto text-center">
              <h2>38,000 people helped across 133 countries.</h2>
              <p className="mx-auto text-center">
                We’re creating a world where universal mental health care is one day a reality.
              </p>
            </section>
          </Fadeinsections>
        </div>
        <div className="bg-gray-50">
          <section className="space-y-4">
            <Sectionheader
              color="text-black"
              subheader="This is RAD"
              headerone="Everyone deserves mental health care."
              headertwo="Heroes like you make it possible."
            />
            <Carousel />
          </section>
        </div>
        <div className="bg-white ">
          <section className="">
            <div className="w-full lg:w-1/2">
              <Sectionheader
                color="text-black"
                subheader="How We Help"
                headerone="Mental health care."
                headertwo="For anyone, anywhere."
                bodytext="We remove the two greatest barriers to mental health care: access and affordability. All licensed professionals, all personally matched to you. You deserve to feel rad."
              />
            </div>
            <Programs />
          </section>
        </div>
        <div className="text-white bg-black">
          <section className="space-y-16">
            <Sectionheader
              color="text-white"
              subheader="how you help"
              headerone="Three ways to help."
              headertwo="Be the reason someone starts therapy."
            />
            <div>
              <Sectiontext
                subheader="the guild"
                headerone="Give monthly,"
                headertwo="help thousands."
                body="  For more than 10 years, our guild has come together to make mental health care
                      free for those in need. We are casual players, content creators, music
                      artists, and friends.
"
                button={
                  <div className="relative w-64 h-12 mt-4 group">
                    <Link href="/guild">
                      <a className="absolute flex justify-center w-64 px-3 py-2 text-sm font-bold text-black align-middle transition-all duration-300 ease-in-out bg-white rounded-xl group-hover:bg-opacity-0 hover:text-white">
                        Join The Guild
                      </a>
                    </Link>
                    <div className="w-64 h-12 transition-all duration-300 ease-in-out bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl group-hover:h-10"></div>
                  </div>
                }
                media={<VideoPlayer publicId="General%20Media/RADMythicGarry" />}
              />
            </div>
            <div className="py-16 border-t border-b">
              <Sectiontext
                alternate={false}
                subheader="Stream for Rad"
                headerone="Go live."
                headertwo="Change lives."
                body=" In 2016, Trick2G and Imagine Dragons hosted the first live stream for RAD.
                      Since then, content creators have covered the cost of over 80,000 therapy
                      sessions."
                button={
                  <div className="relative w-64 h-12 mt-4 group">
                    <Link href="/stream">
                      <a className="absolute flex justify-center w-64 px-3 py-2 text-sm font-bold text-black align-middle transition-all duration-300 ease-in-out bg-white rounded-xl group-hover:bg-opacity-0 hover:text-white">
                        Stream For RAD
                      </a>
                    </Link>
                    <div className="w-64 h-12 transition-all duration-300 ease-in-out bg-blue-400 bg-gradient-to-r from-pink-400 to rounded-xl group-hover:h-10"></div>
                  </div>
                }
                media={<VideoPlayer publicId="General%20Media/BBN0%24" />}
              />
            </div>
            <div className="text-white">
              <Sectiontext
                subheader="Our Community"
                headerone="A community"
                headertwo="of super rad friends."
                body="Join hundreds of friends from around the world in our community Discord. We
                      host weekly game nights, support each other on tough days, and share tons of
                      memes."
                button={
                  <div className="relative w-64 h-12 mt-4 group">
                    <a
                      href="https://discord.gg/youarerad"
                      className="absolute flex justify-center w-64 px-3 py-2 text-sm font-bold text-black align-middle transition-all duration-300 ease-in-out bg-white rounded-xl group-hover:bg-opacity-0 hover:text-white"
                    >
                      Join The Discord
                    </a>

                    <div className="w-64 h-12 transition-all duration-300 ease-in-out bg-blue-400 bg-gradient-to-r from-pink-400 to rounded-xl group-hover:h-10"></div>
                  </div>
                }
                media={<VideoPlayer publicId="General%20Media/FeelsRAD" />}
              />
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
