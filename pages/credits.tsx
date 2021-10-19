import { CreditsMenu } from '@/components/forms/Credits'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'
import React from 'react'

const Credits = () => {
  return (
    <div className="relative flex flex-col h-screen mx-auto max-w-screen-2xl">
      <div className="h-full bg-credits" />

      <div className="absolute bottom-0 w-full p-2 border-8 border-gray-100 bg-gradient-to-b from-blue-500 to-blue-800 rounded-xl h-2/5">
        <div className="absolute w-32 h-32 transform -translate-x-1/2 left-1/2 -top-20">
          <Link passHref href="https://osrg.t3.gg/">
            <a target="_blank">
              <Image
                src="/osrg.png"
                alt="The open source raid guild logo. Clicking will lead to their website."
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        </div>
        <div className="border-gray-50 rounded-xl ">
          <CreditsMenu />
        </div>
      </div>
    </div>
  )
}

export default Credits
