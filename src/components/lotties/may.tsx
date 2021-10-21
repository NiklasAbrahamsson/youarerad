import { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

const Mayhover = () => {
  const [animationData, setAnimationData] = useState<object>()

  useEffect(() => {
    import('./May.json').then(setAnimationData)
  }, [])

  if (!animationData) return <div>Loading...</div>
  return <Lottie speed={0.2} loop play animationData={animationData} />
}

export default Mayhover
