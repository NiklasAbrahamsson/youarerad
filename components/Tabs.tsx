import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Feature = {
  imageSrc: string
  imageAlt: string
  name: string
  description: string
}

type Tab = {
  name: string
  features: Array<Feature>
}

export default function Tabs(tabTitle: string, tabs: Tab[]) {
  return (
    <div aria-labelledby="Volunteer positions open" className="">
      <div className="max-w-2xl mx-auto lg:px-0 lg:max-w-none">
        <div className="max-w-3xl">
          <h2 id={tabTitle}>{tabTitle}</h2>
        </div>

        <Tab.Group as="div" className="mt-4">
          <div className="flex overflow-x-auto sm:mx-0">
            <div className="flex-auto border-b border-gray-200 sm:px-0">
              <Tab.List className="flex -mb-px space-x-10">
                {tabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                        'whitespace-nowrap py-6 border-b-2 font-medium text-md'
                      )
                    }
                  >
                    {tab.name}
                  </Tab>
                ))}
              </Tab.List>
            </div>
          </div>

          <Tab.Panels as={Fragment}>
            {tabs.map((tab) => (
              <Tab.Panel key={tab.name} className="py-10 lg:space-y-16">
                {tab.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
                  >
                    <div className="mt-6 lg:mt-0 lg:col-span-5">
                      <h3 className="text-xl font-bold text-gray-900">
                        {feature.name}
                        <span className="text-blue-700">.</span>
                      </h3>
                      <p className="mt-2 text-lg text-gray-500">{feature.description}</p>

                      <div className="relative items-center w-full max-w-md mx-auto mt-10 overflow-hidden text-xl text-black transition-all duration-300 ease-linear bg-white border-2 border-black lg:mx-0 lg:max-w-sm rounded-xl shadow-primary hover:shadow-none hover:bg-black hover:text-white"></div>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="relative overflow-hidden rounded-lg sm:aspect-w-16 sm:aspect-h-19">
                        <Image
                          src={feature.imageSrc}
                          alt={feature.imageAlt}
                          width="1920"
                          height="1080"
                          layout="intrinsic"
                          objectFit="cover"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
