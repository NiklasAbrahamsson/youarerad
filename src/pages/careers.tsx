import {
  BeakerIcon,
  BookmarkAltIcon,
  GlobeAltIcon,
  HeartIcon,
  HomeIcon,
  LocationMarkerIcon,
  StarIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import Pageheader from '../components/Pageheader'
import Sectionheader from '../components/Sectionheader'

const VideoPlayer = dynamic(() => import('@/components/utils/videoplayer'), { ssr: false })

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Careers() {
  return (
    <Layout
      pageTitle="RAD Careers"
      pageLink="/careers"
      description="Learn more working at Rise Above The Disorder. Mental health care is a human right- we're the team fighting to make it a reality. Informed by the latest research on workspace wellbeing, we offer some of the greatest benefits and encourage seperation between work and personal life."
      pageHeader={
        <section>
          <div className="space-y-16 lg:space-y-0 lg:justify-between lg:flex">
            <div>
              <Pageheader
                subheader="Careers at RAD"
                headerone="Everyone deserves therapy"
                charone="&amp;"
                headertwo="We're making it a reality"
                chartwo="♡"
              />
            </div>
            <div className="relative w-full overflow-hidden lg:w-2/5 rounded-xl">
              <VideoPlayer publicId="General%20Media/grantprogram" />
            </div>
          </div>
        </section>
      }
    >
      <div className="text-black bg-gray-50">
        <section>
          <Sectionheader
            color="text-black"
            subheader="Perks &amp; Benefits"
            headerone="Everyone deserves to feel well."
            headertwo="That means you, too!"
          />
          <div className="max-w-screen-md mx-auto mt-16 overflow-hidden text-center divide-y divide-gray-200 shadow sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px rounded-xl">
            {perks.map((context, contextIdx) => (
              <div
                key={context.id}
                className={classNames(
                  contextIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                  contextIdx === 1 ? 'sm:rounded-tr-lg' : '',
                  contextIdx === perks.length - 2 ? 'sm:rounded-bl-lg' : '',
                  contextIdx === perks.length - 1
                    ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                    : '',
                  'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                )}
              >
                <div>
                  <span
                    className={classNames(
                      context.iconBackground,
                      context.iconForeground,
                      'rounded-xl inline-flex p-3 ring-4 ring-white'
                    )}
                  >
                    <context.icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h5>
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {context.id}
                  </h5>
                  <p className="text-gray-500">{context.context}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div>
        <section>
          <Sectionheader subheader="Open Positions" headerone="Ready to change the world?" />
          <div className="max-w-screen-md mx-auto mt-16 overflow-hidden bg-white shadow sm:rounded-xl">
            <ul role="list" className="divide-y divide-gray-200">
              {positions.map((position) => (
                <li key={position.id}>
                  <a href="#" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-black truncate ">{position.title}</p>
                        <div className="relative flex items-center flex-shrink-0 ml-2">
                          <p className="inline-flex px-2 pt-0 text-xs font-semibold leading-5 text-black bg-green-100 rounded-xl">
                            {position.type}
                          </p>
                          <span
                            className="absolute text-gray-300 pointer-events-none top-6 right-6 group-hover:text-gray-400"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-6 h-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <UsersIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            {position.department}
                          </p>

                          <p className="flex items-center mt-2 text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <LocationMarkerIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            {position.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const perks = [
  {
    id: '401k',
    context: 'Matching 401k with an additional 3% of total salary added as a bonus each year.',
    icon: BeakerIcon,
    iconForeground: 'text-indigo-400',
    iconBackground: 'bg-indigo-50',
  },
  {
    id: 'Work Remote',
    context: 'Work from the comfort of your home or from our office in the heart of Los Angeles.',
    icon: GlobeAltIcon,
    iconForeground: 'text-pink-400',
    iconBackground: 'bg-pink-50',
  },
  {
    id: 'Health Insurance',
    context: 'Platnium plans with full coverage for your physical and mental health.',
    icon: HeartIcon,
    iconForeground: 'text-green-400',
    iconBackground: 'bg-green-50',
  },
  {
    id: 'Caregiver Leave',
    context: 'New parents receive 14 months of paid leave and continued access to all benefits. ',
    icon: HomeIcon,
    iconForeground: 'text-yellow-400',
    iconBackground: 'bg-yellow-50',
  },
  {
    id: 'Paid Time Off',
    context: 'Vacations, family matters, voting, protests, and mental health days are all welcome.',
    icon: StarIcon,
    iconForeground: 'text-red-400',
    iconBackground: 'bg-red-50',
  },
  {
    id: 'Mentorship',
    context: 'Connect and learn with leaders from across tech, gaming, mental health, and more.',
    icon: BookmarkAltIcon,
    iconForeground: 'text-blue-400',
    iconBackground: 'bg-blue-50',
  },
]

export const positions = [
  {
    id: 1,
    title: 'No open positions at the moment.',
    type: '',
    location: '',
    department: '',
    closeDate: '',
    closeDateFull: '',
  },
]
