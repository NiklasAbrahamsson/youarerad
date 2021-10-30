import dynamic from 'next/dynamic'
import Image from 'next/image'
import Button from '../components/Button'
import Layout from '../components/Layout'
import Pageheader from '../components/Pageheader'
import Sectionheader from '../components/Sectionheader'
import Carousel from '../components/Carousel'
import Fadescrolling from '../libs/utils/fade-scrolling'

const VideoPlayer = dynamic(() => import('@/components/videoplayer'), { ssr: false })

const videos = [
  <VideoPlayer key="1" publicId="General%20Media/MattWaldenCharithon" />,
  <VideoPlayer key="2" publicId="General%20Media/FeelsRAD" />,
  <VideoPlayer key="3" publicId="General%20Media/BBN0%24" />,
]

const creatorImage = [
  {
    imgSrc:
      'https://res.cloudinary.com/df23ubjbb/image/upload/v1628530955/Creator%20gif/Pokimane.jpg',
    alt: "Content creator Pokimane sharing the importance of mental health in Rise Above The Disorder's Mental Health Awareness Month campaign with HyperX.",
    gif: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1628530565/Creator%20gif/Pokimanegif.gif',
    order: '1',
    linkout: '',
  },
  {
    imgSrc:
      'https://res.cloudinary.com/df23ubjbb/image/upload/v1628534391/Creator%20gif/BBNO%24.jpg',
    alt: 'BBNO$ supporting Rise Above The Disorder.',
    gif: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1628530564/Creator%20gif/BBNO%24gif.gif',
    order: '2',
    linkout: '',
  },
  {
    imgSrc: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1628532793/Creator%20gif/Prozd.jpg',
    alt: 'Prozd supporting Rise Above The Disorder.',
    gif: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1628530566/Creator%20gif/Prozdgif.gif',
    order: '3',
    linkout: '',
  },
  {
    imgSrc:
      'https://res.cloudinary.com/df23ubjbb/image/upload/v1628532736/Creator%20gif/Vikkstar.jpg',
    alt: 'Vikkstar supporting Rise Above The Disorder.',
    gif: 'https://res.cloudinary.com/df23ubjbb/image/upload/v1628530565/Creator%20gif/Vikkstargif.gif',
    order: '4',
    linkout: '',
  },
]

export default function Stream() {
  return (
    <Layout
      pageTitle="RAD Stream"
      pageLink="/stream"
      description="Learn more about hosting a live stream fundraiser for Rise Above The Disorder. Content creators like you have covered the cost of over 80,000 therapy sessions world wide!"
      pageHeader={
        <section className="">
          <div className="space-y-16 lg:space-y-0 lg:justify-between lg:flex">
            <div>
              <Pageheader
                subheader="Stream for RAD"
                headerone="Go live"
                charone="."
                headertwo="Change lives"
                chartwo="♡"
              />
              <Button linkTo="https://tiltify.com/anxiety-gaming">Plan Your Stream</Button>
            </div>
            <div className="relative w-full overflow-hidden lg:w-2/5 rounded-xl">
              <div className="grid grid-cols-2 col-start-2 gap-x-4 gap-y-4">
                {creatorImage.map((index) => (
                  <div
                    className="relative overflow-hidden shadow-2xl group rounded-xl"
                    key={index.order}
                  >
                    <div className="absolute w-full p-4 h-60">
                      <Image
                        unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
                        key={index.gif}
                        src={index.gif}
                        layout="fill"
                        objectFit="cover"
                        alt={index.alt}
                      />
                    </div>
                    <div className="relative w-full p-4 h-60 group-hover:hidden">
                      <Image
                        unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
                        key={index.imgSrc}
                        src={index.imgSrc}
                        layout="fill"
                        objectFit="cover"
                        alt={index.alt}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      }
    >
      <div className="bg-gray-50">
        <section>
          <Sectionheader
            color="text-black"
            subheader="Why support RAD"
            headerone="You can help your community"
            headertwo="and beyond!"
          />
          <div className="">
            <Fadescrolling videos={videos}>
              <div className="sm:space-y-96">
                <div className="flex-wrap">
                  <h3 className="max-w-2xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text">
                    <span className="text-black">100% of donations you raise go to therapy.</span>
                    <br className="hidden sm:flex"></br> Creators like you have covered over 80,000
                    therapy sessions.
                  </h3>
                  <div className="py-16 sm:hidden">
                    <VideoPlayer publicId="General%20Media/MattWaldenCharithon" />
                  </div>
                </div>
                <div>
                  <h3 className="max-w-2xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text">
                    <span className="text-black">
                      When you talk about mental health, your community listens.
                    </span>
                    <br className="hidden sm:flex"></br> 78% of people heard about RAD on Twitch.
                  </h3>
                  <div className="py-16 sm:hidden">
                    <VideoPlayer publicId="General%20Media/FeelsRAD" />
                  </div>
                </div>
                <div>
                  <h3 className="max-w-2xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text">
                    <span className="text-black">You have the power to heal our community.</span>
                    <br className="hidden sm:flex"></br> Every $30 raised covers the cost of a
                    therapy session.
                  </h3>
                  <div className="py-16 sm:hidden">
                    <VideoPlayer publicId="General%20Media/BBN0%24" />
                  </div>
                </div>
              </div>
            </Fadescrolling>
          </div>
        </section>
      </div>
      <section className="">
        <Sectionheader
          subheader="Our Heroes"
          headerone="Together,"
          headertwo="we can help everyone rise above!"
        />
        <Carousel />
        <div className="relative items-center w-full mx-auto"></div>
      </section>
    </Layout>
  )
}
