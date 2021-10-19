import VolunteerForm from '@/components/forms/Volunteer'
import Layout from '@/components/Layout'
import Ctahover from '@/components/lotties/cta'
import Pageheader from '@/components/Pageheader'
import Sectiontext from '@/components/Sectiontext'
import { Tab } from '@headlessui/react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Fragment, useState } from 'react'

const VideoPlayer = dynamic(() => import('@/components/utils/videoplayer'), { ssr: false })

const tabs = [
  {
    name: 'Coding',
    features: [
      {
        name: 'Leveling up mental healthcare',
        description:
          'The RAD team is always looking for programmers to join us on the frontlines of mental healthcare tech. The repo for this website is open for suggestion, while our new backend intake system and crisis detection Discord bot are looking for long-term volunteers.',
        imageSrc:
          'https://res.cloudinary.com/df23ubjbb/image/upload/v1629839867/RADDevVolunteer.jpg',
        imageAlt: "A volunteer for Rise Above The Disorder's developer team.",
      },
    ],
  },
  {
    name: 'Clinical',
    features: [
      {
        name: 'Champions for wellness',
        description:
          'Work alongside our social work team to make mental health care accessible around the world. Translating clinical texts to various languages, providing screenings, offering expertise,or working on our warmline are immediate ways to support.',
        imageSrc:
          'https://res.cloudinary.com/df23ubjbb/image/upload/v1629839998/RADCareVolunteers.png',
        imageAlt: "Medical doctors volunteering for Rise Above The Disorder's clinical wing.",
      },
    ],
  },
  {
    name: 'Community',
    features: [
      {
        name: 'Gaming for good',
        description:
          'From playing games with those in need of someone to game with to reporting concerning behavior across Twitch to our clinical team- our community volunteers help RAD keep people safe.',
        imageSrc:
          'https://res.cloudinary.com/df23ubjbb/image/upload/v1629839970/RADCommunityVolunteer.jpg',
        imageAlt: "A volunteer for Rise Above The Disorder's community team.",
      },
    ],
  },
  {
    name: 'Event',
    features: [
      {
        name: 'Attend rad events with RAD',
        description:
          "Once it's safe to do so, we'd love to have you join us at all of the big conventions. Introduce content creators to our cause at TwitchCon, booth it up and party at PAX, and pass out positive letters at DreamHack.",
        imageSrc:
          'https://res.cloudinary.com/df23ubjbb/image/upload/v1629839891/RADEventVolunteers.jpg',
        imageAlt: 'Volunteers for Rise Above The Disorder at Pax West in 2018.',
      },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Volunteer = () => {
  const [openForm, setOpenForm] = useState(false)

  return (
    <Layout
      pageTitle="RAD Volunteer"
      pageLink="/volunteer"
      description="Learn more about volunteering with Rise Above The Disorder. Equipped with your time and talent, we can make mental health care accessible to everyone."
      pageHeader={
        <section>
          <Pageheader
            subheader="Volunteering"
            headerone="Help us make healing possible"
            charone="&amp;"
            headertwo="Have fun doing it"
            chartwo="♡"
          />
        </section>
      }
    >
      <div className="text-black bg-gray-50">
        <section>
          <Sectiontext
            subheader="A Community Effort"
            headerone="Giving what you can,"
            headertwo="to help others rise above."
            body="Originally founded as a World of Warcraft guild, our cause has always depended on volunteers. From reviewing text on this site, to traveling to remote countries around the world to setup our programs, there are plenty of rad ways to help others rise above."
            media={
              <div className="overflow-hidden border rounded-xl">
                <VideoPlayer publicId="General%20Media/rad-volunteers" />
              </div>
            }
          />
        </section>
      </div>
      <div>
        <section>
          <div className="bg-white">
            <div aria-labelledby="Volunteer positions open" className="">
              <div className="max-w-2xl mx-auto lg:px-0 lg:max-w-none">
                <div className="max-w-3xl">
                  <h2 id="volunteer work">Looking for more:</h2>
                </div>

                <Tab.Group as="div" className="mt-4">
                  <div className="flex overflow-x-auto sm:mx-0">
                    <div className="flex-auto border-b border-gray-200 sm:px-0">
                      <Tab.List className="flex justify-between sm:flex sm:justify-start sm:space-x-10 focus:outline-none">
                        {tabs.map((tab) => (
                          <Tab
                            key={tab.name}
                            className={({ selected }) =>
                              classNames(
                                selected
                                  ? 'border-indigo-500 text-indigo-600 focus:outline-none'
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
                                  onClick={(event) => setOpenForm(!!event)}
                                  className="relative z-10 w-full p-2 font-bold text-center "
                                >
                                  Volunteer Form
                                </button>
                                <div className="absolute top-0 z-0">
                                  <Ctahover />
                                </div>
                              </div>
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
          </div>
        </section>
      </div>
      {openForm ? <VolunteerForm /> : ''}
    </Layout>
  )
}

export default Volunteer
