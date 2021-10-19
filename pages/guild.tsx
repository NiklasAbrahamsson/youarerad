import dynamic from 'next/dynamic'
import DonateGuild from '../components/forms/Donate/Donateguild.js'
import Layout from '../components/Layout'
import Pageheader from '../components/Pageheader'
import Sectiontext from '@/components/Sectiontext'

const VideoPlayer = dynamic(() => import('@/components/utils/videoplayer'), { ssr: false })

export default function Guild() {
  return (
    <Layout
      pageTitle="RAD The Guild"
      pageLink="/guild"
      description="Founded as a World of Warcraft guild dedicated to covering the cost of mental health care for members, our cause has always centered around our Guild. Become a guild member today and help thousands of people access mental health care all over the world."
    >
      <section>
        <div className="space-y-16 lg:space-y-0 lg:justify-between lg:flex ">
          <div className="relative ">
            <Pageheader
              subheader="the guild"
              headerone="Join our guild"
              charone="&amp;"
              headertwo="Provide therapy to people in need"
              chartwo="♡"
            />
          </div>
          <div className="relative z-0 overflow-hidden lg:w-2/5 rounded-xl">
            {' '}
            <DonateGuild />
          </div>
        </div>
      </section>
      <div className="relative text-white bg-black">
        <section>
          <Sectiontext
            subheader="Your membership"
            headerone="At just $1 a day,"
            headertwo="you join a community of IRL healers."
            body="Over a decade ago, our founder took what little was left from his disability check to pay for someone's therapy. Alone, he was able to pay for one therapy session a month. As a guild, RAD has been able to cover thousands of therapy sessions. "
            media={<VideoPlayer publicId="RADHighlightTwo" />}
          />
        </section>
      </div>
    </Layout>
  )
}
