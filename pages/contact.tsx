import Image from 'next/image'
import Contactform from '../components/forms/Contact'
import Layout from '../components/Layout'
import Pageheader from '../components/Pageheader'

export default function Contact() {
  return (
    <Layout
      pageTitle="RAD Contact"
      description="Contact the team at Rise Above The Disorder! We're happy to answer any questions you may have about our programs, mental health, and our cause."
      pageLink="/contact"
      pageHeader={
        <section>
          <Pageheader
            subheader="Contact RAD"
            headerone="We're here to help"
            charone="."
            headertwo="Any question is welcome"
            chartwo="♡"
          />
        </section>
      }
    >
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="relative w-full overflow-hidden rounded-xl h-80 sm:h-auto ">
            <Image
              width="1080"
              height="1920"
              objectFit="contain"
              objectPosition="top"
              src="https://res.cloudinary.com/df23ubjbb/image/upload/v1629928188/RADContact.jpg"
              alt="Twitch.tv's Garvey and volunteer Amy pose in front of Rise Above The Disorder's banner at TwitchCon."
            />
          </div>
          <div className="w-full ">
            <Contactform />
          </div>
        </div>
      </div>
    </Layout>
  )
}
