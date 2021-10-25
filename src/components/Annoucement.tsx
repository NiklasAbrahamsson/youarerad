import { SpeakerphoneIcon, XIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

export default function Annoucement() {
  const [isBannerVisible, setBannerVisibile] = useState(true)
  useEffect(() => {
    setBannerVisibile(JSON.parse(window.localStorage.getItem('bannerstate')!))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('bannerstate', JSON.stringify(isBannerVisible))
  }, [isBannerVisible])

  const closeBanner = () => {
    return setBannerVisibile(true)
  }

  return (
    <div className={isBannerVisible === false ? '' : 'hidden'}>
      <div className="fixed inset-x-0 bottom-0">
        <div className="bg-indigo-600">
          <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center flex-1 w-0">
                <span className="flex p-2 bg-indigo-800 rounded-lg">
                  <SpeakerphoneIcon className="w-6 h-6 text-white" aria-hidden="true" />
                </span>
                <p className="ml-3 font-medium text-white ">
                  <span className="md:hidden">Love to code? </span>
                  <span className="hidden md:inline">
                    Big news! We&apos;re excited to announce a brand new product.
                  </span>
                </p>
              </div>
              <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50"
                >
                  Learn more
                </a>
              </div>
              <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  className="flex p-2 -mr-1 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon onClick={closeBanner} className="w-6 h-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
