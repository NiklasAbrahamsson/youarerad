import { Tab } from '@headlessui/react'
import dynamic from 'next/dynamic'
import { Fragment, useState } from 'react'
import PartnershipForm from '../components/forms/Partnership'
import Layout from '../components/Layout'
import Ctahover from '../components/lotties/cta'
import Pageheader from '../components/Pageheader'

const VideoPlayer = dynamic(() => import('@/components/utils/videoplayer'), { ssr: false })

const tabs = [
  {
    name: 'Community Support',
    features: [
      {
        name: 'Make healing possible for your community',
        description:
          'Take your ambassador or community impact program to the next level with RAD! Electronic Arts provides free mental health care through RAD to their ambassadors, while Jagex has a fund for players of Runescape to access mental health care.',
        video: 'Jagex',
        imageAlt: "Medical doctors volunteering for Rise Above The Disorder's clinical wing.",
      },
    ],
  },
  {
    name: 'Event Activations',
    features: [
      {
        name: 'The raddest events on the internet',
        description:
          'Join us as a partner on some of the greatest events going on in the gaming commuity! You can place your brand at the heart of activations that help thousands of people start therapy. ',
        video: 'General%20Media/ChessxCoinbase',
        imageAlt:
          'Rise Above The Disorder teams up with Chess.com, Coinbase, and some of the most well known content creators in the world for the ultimate Chess tournament.',
      },
    ],
  },
  {
    name: 'HR & Employee Care',
    features: [
      {
        name: 'Equip your team with game changing mental health care',
        description:
          "We're honored to be a core benefit for many of the greatest companies, teams, and agencies out there! When you empower your team with RAD, you provide them with access to a global network of mental health professionals ready to make sure they feel well.",
        video: 'General%20Media/teamworkshop',
        imageAlt:
          'Our founder speaking with a group of leaders about balancing wellness in the work place.',
      },
    ],
  },

  {
    name: 'Programs & Care',
    features: [
      {
        name: 'Gaming for good',
        description:
          'When you donate directly to our programs, you provide the life changing funds that help someone start therapy straight away. Your impact becomes a part of their life, and we are honored to share with each person how you made their journey possible.',
        video: 'General%20Media/DreamclothingxRAD',
        imageAlt:
          'Dream Clothing launches an incredible series of merch in support of Rise Above The Disorder.',
      },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Partner() {
  const [openForm, setOpenForm] = useState(false)

  const handleClick = () => {
    if (!openForm) {
      return setOpenForm(true)
    }

    document.getElementById('name')?.focus()
  }

  return (
    <Layout
      pageTitle="RAD Partnerships"
      pageLink="/partner"
      description="Join incredible partners like Electronic Arts, Jagex, Columbia Records, Dream, and more! Rise Above The Disorder partners with teams all over the world to make mental health care accessible to all."
      pageHeader={
        <section className="">
          <div className="space-y-16 lg:space-y-0 lg:justify-between lg:flex">
            <div className="w-full maw-w-xl">
              <Pageheader
                subheader="Partner With RAD"
                headerone="With your help"
                charone=","
                headertwo="everyone can access mental health care"
                chartwo="♡"
              />
            </div>
            <div className="relative w-full col-start-2 overflow-hidden border border-transparent lg:w-4/5 rounded-xl">
              <VideoPlayer publicId="Hyperx" />
            </div>
          </div>
        </section>
      }
    >
      <div className="bg-gray-50">
        <section>
          <div className="">
            <div aria-labelledby="Partnership opportunities" className="">
              <div className="max-w-2xl mx-auto lg:px-0 lg:max-w-none">
                <div className="max-w-3xl">
                  <h2 id="Partnership types">Partnership Types:</h2>
                </div>
                <Tab.Group as="div" className="mt-4">
                  <div className="flex overflow-x-auto sm:mx-0">
                    <div className="flex-auto border-b border-gray-200 sm:px-0">
                      <Tab.List className="flex flex-wrap justify-between -mb-px lg:space-x-10 lg:justify-start">
                        {tabs.map((tab) => (
                          <Tab
                            key={tab.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? ' text-indigo-600 border-indigo-600 focus:outline-none'
                                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                'whitespace-nowrap py-6 border-b-2 font-medium text-md focus:outline-none'
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

                              <div className="relative items-center w-full max-w-md mx-auto mt-10 overflow-hidden text-xl text-black transition-all duration-300 ease-linear bg-white border-2 border-black lg:mx-0 lg:max-w-sm rounded-xl shadow-primary hover:shadow-none hover:bg-black hover:text-white">
                                <button
                                  onClick={handleClick}
                                  className="relative z-10 w-full p-2 font-bold text-center "
                                >
                                  Partnership Form
                                </button>
                                <div className="absolute top-0 z-0">
                                  <Ctahover />
                                </div>
                              </div>
                            </div>
                            <div className="lg:col-span-7">
                              <div className="relative overflow-hidden rounded-lg ">
                                <VideoPlayer publicId={feature.video} />
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
          </div>
        </section>
      </div>
      {openForm ? <PartnershipForm /> : ''}
    </Layout>
  )
}
