import { CloudinaryContext, Video } from 'cloudinary-react'
import { useRef } from 'react'

type VideoPlayerProps = {
  publicId: string;
}

const VideoPlayer = ({ publicId }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  return (
    <CloudinaryContext cloudName="df23ubjbb">
      <div>
        <Video
          playsInline={true}
          muted={true}
          publicId={publicId}
          loop={true}
          autoPlay={true}
          autoplaymode="on-scroll"
          controls={false}
          innerRef={videoRef}
        />
      </div>
    </CloudinaryContext>
  )
}

export default VideoPlayer
