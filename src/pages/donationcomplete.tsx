import { CloudinaryContext, Video } from 'cloudinary-react'
import { useRef } from 'react'
import Layout from '../components/Layout'
import Pageheader from '../components/Pageheader'

const VideoPlayer = ({ publicId }: { publicId: string }) => {
  const videoRef = useRef(null)
  return (
    <CloudinaryContext cloudName="df23ubjbb">
      <div>
        <Video
          playsInline={true}
          muted={false}
          publicId={publicId}
          loop={true}
          controls={true}
          innerRef={videoRef}
        />
      </div>
    </CloudinaryContext>
  )
}

export default function Donationcomplete() {
  return (
    <Layout
      pageLink="/donationcomplete"
      pageTitle="Donation Completed!"
      pageHeader={
        <section>
          <div className="space-y-16 lg:space-y-0 sm:flex lg:justify-between">
            <div className="">
              <Pageheader
                subheader="donation successful"
                headerone="Someone will start therapy today!"
                headertwo="Thanks to you"
                chartwo="♡"
              />
            </div>
            <div className="relative overflow-hidden lg:w-2/5 rounded-xl">
              <VideoPlayer publicId="General%20Media/HarryMack" />
            </div>
          </div>
        </section>
      }
    ></Layout>
  )
}
