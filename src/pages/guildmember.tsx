import { Dialog, Menu, Transition } from '@headlessui/react'
import { ClockIcon, HomeIcon, MenuAlt1Icon, ViewListIcon, XIcon } from '@heroicons/react/outline'
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  DuplicateIcon,
  PencilAltIcon,
  SelectorIcon,
  TrashIcon,
  UserAddIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'
import { Fragment, useState } from 'react'

const navigation = [
  { name: 'Guild Home', href: '#', icon: HomeIcon, current: true },
  { name: 'My Loot', href: '#', icon: ViewListIcon, current: false },
  { name: 'Recent', href: '#', icon: ClockIcon, current: false },
]
const teams = [
  { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
]
const projects = [
  {
    id: 1,
    title: 'GraphQL API',
    initials: 'GA',
    team: 'Engineering',
    members: [
      {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 12,
    lastUpdated: 'March 17, 2020',
    pinned: true,
    bgColorClass: 'bg-pink-600',
  },
  // More projects...
]
const pinnedProjects = projects.filter((project) => project.pinned)

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Guildmember() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="relative flex h-screen overflow-hidden bg-white">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-40 flex lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 pt-2 -mr-12">
                  <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex items-center flex-shrink-0 px-4">
                <Link href="/" passHref={true}>
                  <a className="inline-flex items-center">
                    {' '}
                    <svg
                      viewBox="0 0 720 720"
                      xmlns="http://www.w3.org/2000/svg"
                      width="3em"
                      height="3em"
                    >
                      <path
                        d="M365.79 509.498a8.226 8.226 0 01-7.513 8.858q-4.626.405-9.296.407a107.228 107.228 0 01-77.622-33.3 11.428 11.428 0 01-2.565-4.357l-.01-.028c-.198-.661-.418-1.367-.66-2.138-1.279-4.1-3.086-9.807-5.334-16.771q-.43-1.29-.86-2.645c-1.19-3.658-2.468-7.603-3.878-11.79l-.529-1.586c-.529-1.587-1.058-3.218-1.63-4.87-.376-1.102-.75-2.226-1.147-3.372-.176-.573-.375-1.146-.573-1.719a465.674 465.674 0 00-1.719-5.069c-.022-.066-.044-.11-.066-.176a1560.165 1560.165 0 00-4.738-13.642c-1.014-2.887-2.05-5.84-3.13-8.837-1.124-3.13-2.27-6.325-3.437-9.543a1707.47 1707.47 0 00-7.736-20.715q-1.917-5.025-3.878-10.05c-.31-.771-.618-1.564-.926-2.358-1.631-4.121-3.284-8.264-4.958-12.363s-3.373-8.199-5.091-12.231c-1.146-2.69-2.292-5.378-3.46-8.022a307.906 307.906 0 00-1.741-3.967c-7.56-17.058-15.36-32.925-23.052-45.95-16.75-28.363-36.12-58.908-50.27-81.21-.55-.882-1.101-1.741-1.652-2.6s-1.08-1.697-1.609-2.535l-.156-.247a39.21 39.21 0 011.615-44.507 96.28 96.28 0 0177.173-38.241h.325c17.948.058 34.075 10.986 41.508 27.322q.998 2.194 2.067 4.567c.375.837.771 1.697 1.146 2.557q2.38 5.322 5.09 11.503c.75 1.675 1.477 3.394 2.248 5.157 1.896 4.43 3.923 9.124 6.017 14.105q1.984 4.727 4.099 9.785c.155.418.33.837.507 1.256.838 2.005 1.653 4.033 2.512 6.104.22.573.463 1.146.705 1.741 1.08 2.667 2.182 5.4 3.306 8.177.551 1.41 1.124 2.82 1.697 4.23.573 1.433 1.146 2.866 1.72 4.32.726 1.83 1.453 3.68 2.203 5.576q2.38 6.116 4.87 12.562c.066.176.132.33.198.507 1.146 2.975 2.292 5.994 3.46 9.08q1.884 4.992 3.835 10.182c.992 2.732 2.027 5.51 3.063 8.308q4.1 11.206 8.353 23.162 1.983 5.52 3.945 11.24 7.371 21.156 14.964 44.472c1.057 3.24 2.115 6.546 3.173 9.852l.154.462c.088.243.198.573.33.97l.463 1.389c.089.242.177.529.265.815.286.838.595 1.785.926 2.755.859 2.622 1.807 5.443 2.423 7.317 1.08 3.327 2.16 6.875 3.218 10.6.353 1.234.683 2.49 1.036 3.768l.595 2.204.684 2.534c.66 2.645 1.322 5.334 1.96 8.044.309 1.234.596 2.468.86 3.725.243.991.463 1.983.683 2.997.353 1.587.706 3.195 1.036 4.804 1.058 4.98 2.05 10.05 2.975 15.118.309 1.675.618 3.372.904 5.047.309 1.697.595 3.394.881 5.069.287 1.697.574 3.372.838 5.047l.793 5.024c.485 3.086.926 6.127 1.367 9.146.375 2.579.727 5.157 1.057 7.691a953.59 953.59 0 012.667 21.333c.22 1.962.44 3.901.639 5.796.176 1.653.352 3.262.529 4.849a1343.55 1343.55 0 011.609 16.88c.088.97.176 1.896.242 2.822q.16 1.868.303 3.603zM243.564 474.398a2.807 2.807 0 01-2.945 3.63 106.635 106.635 0 01-94.83-81.202l-1.586-6.457-6.436-1.61A107.158 107.158 0 0194.91 202.954a14.5 14.5 0 0121.604 3.244l.097.153c.727 1.168 1.499 2.358 2.27 3.592.793 1.256 1.631 2.557 2.468 3.901 14.083 22.192 33.344 52.561 49.938 80.638 3.703 6.258 7.427 13.245 11.174 20.782q1.322 2.677 2.644 5.42a2.21 2.21 0 00.155.331c.947 1.94 1.873 3.923 2.799 5.929.462.991.925 2.005 1.388 3.019s.926 2.027 1.388 3.063c.463 1.014.926 2.05 1.389 3.086.926 2.05 1.851 4.099 2.732 6.192a842.906 842.906 0 019.543 22.81q1.984 4.959 3.945 9.917c.86 2.226 1.719 4.43 2.578 6.656.441 1.102.86 2.204 1.279 3.306l1.256 3.305c1.256 3.306 2.49 6.612 3.702 9.874.419 1.101.816 2.181 1.212 3.283 1.19 3.24 2.38 6.48 3.526 9.675.397 1.058.772 2.116 1.146 3.173.397 1.058.772 2.116 1.124 3.152l.199.529c.308.881.617 1.74.925 2.6.133.419.287.837.44 1.256.464 1.256.905 2.535 1.345 3.79.485 1.389.948 2.755 1.433 4.1q.496 1.454.992 2.843c1.102 3.217 2.181 6.325 3.217 9.366.242.75.485 1.498.75 2.226.705 2.115 1.41 4.187 2.093 6.192.198.618.397 1.235.617 1.852.33.991.661 1.961.992 2.93.33 1.059.683 2.094 1.014 3.086.154.507.33.992.484 1.477.33 1.013.64 1.983.97 2.93.463 1.433.926 2.822 1.367 4.166.44 1.366.859 2.666 1.278 3.923l.396 1.256c.265.815.53 1.609.772 2.38z"
                        fill="#60a5fa"
                      />
                      <path
                        d="M502.104 133.415a27.28 27.28 0 01.763 38.197l-.17.182c-.75.794-1.499 1.61-2.292 2.447-1.366 1.454-2.777 2.975-4.209 4.495-1.256 1.389-2.579 2.777-3.9 4.188a.672.672 0 01-.177.176q-1.355 1.454-2.777 2.975c-.705.75-1.432 1.52-2.138 2.292-1.63 1.763-3.283 3.504-4.936 5.267a2.638 2.638 0 01-.243.265c-2.314 2.446-4.606 4.914-6.898 7.36a539.39 539.39 0 00-3.482 3.725 512.63 512.63 0 00-3.394 3.636c-7.889 8.419-15.272 16.264-21.024 22.369-.815.86-1.587 1.697-2.314 2.468q-1.124 1.157-2.116 2.248c-.33.353-.66.705-.992 1.036q-7.47 7.9-14.853 16.616c-1.344 1.587-2.689 3.174-4.033 4.805-8.661 10.446-17.145 21.531-25.3 32.793a850.75 850.75 0 00-10.358 14.589q-.561.76-1.057 1.52a897.24 897.24 0 00-3.945 5.774 1409.012 1409.012 0 00-4.915 7.273c-1.96 2.931-3.878 5.862-5.773 8.75-1.213 1.872-2.425 3.746-3.615 5.597q-2.314 3.537-4.496 7.008a1205.34 1205.34 0 00-2.688 4.275 28.314 28.314 0 01-1.514 2.579c-.28 0-1.043-2.777-1.087-2.931 0 0-37.707-108.494-38.456-110.5-1.609-4.209-3.174-8.33-4.739-12.34-.837-2.183-1.674-4.32-2.49-6.458-4.423-11.334-18.375-43.712-29.56-69.463-12.351-28.436 8.055-60.744 39.057-61.022q.32-.003.641-.003a71.507 71.507 0 0152.583 23.162l5.197 5.638.01.002 7.09-2.907a107.3 107.3 0 01114.601 21.917z"
                        fill="#f472b6"
                      />
                      <g fill="#60a5fa">
                        <path d="M590.262 240.498a67.155 67.155 0 01-3.25 39.85l-.063.16c-.33.86-.684 1.697-1.036 2.557a151.365 151.365 0 01-2.292 5.487c-.176.44-.374.904-.573 1.344-.374.86-.75 1.72-1.146 2.557-.485 1.102-.992 2.16-1.476 3.173a87.4 87.4 0 01-2.337 4.584 40.576 40.576 0 01-1.939 3.196c-8.881 13.09-34.071 29.068-60.737 46.015-27.548 17.499-58.776 37.333-81.674 59.878a184.664 184.664 0 00-4.142 4.21l-.331.33c-1.124 1.19-2.248 2.38-3.35 3.592-.309.33-.617.683-.926 1.014a165.061 165.061 0 00-3.217 3.658 215.277 215.277 0 00-3.681 4.364 313.336 313.336 0 00-3.548 4.407 219.582 219.582 0 00-4.914 6.502 204.59 204.59 0 00-5.07 7.184 251.622 251.622 0 00-5.51 8.463 230.64 230.64 0 00-4.87 8.088q-1.454 2.479-2.776 4.892a286.41 286.41 0 00-4.43 8.353c-.683 1.344-1.817 4.01-2.028 4.01-.201 0-.286-2.556-.44-3.878-.154-1.366-.309-2.777-.463-4.187-.132-1.146-.286-2.292-.419-3.46-.573-4.76-1.19-9.72-1.873-14.766-.463-3.416-.948-6.876-1.455-10.402-.308-2.071-.617-4.165-.947-6.28-.33-2.16-.661-4.364-1.036-6.568-.353-2.204-.705-4.408-1.102-6.612-.309-1.85-.639-3.724-.97-5.575a462.285 462.285 0 00-2.071-11.063c-.243-1.279-.485-2.557-.75-3.813a499.952 499.952 0 00-3.217-14.788c-.308-1.366-.64-2.732-.97-4.099l-.015-.063a15.622 15.622 0 011.82-11.796q1.636-2.684 3.33-5.44c.022-.022.022-.022.022-.044 1.543-2.49 3.107-5.025 4.738-7.604 9.3-14.787 19.746-30.72 30.876-46.456 1.013-1.432 2.005-2.843 3.02-4.253.484-.684.991-1.367 1.476-2.05.992-1.366 1.983-2.71 2.975-4.077a718.908 718.908 0 019.058-12.099c1.013-1.322 2.05-2.644 3.063-3.967 4.21-5.399 8.485-10.688 12.76-15.78a576.425 576.425 0 015.62-6.566c3.284-3.725 6.546-7.34 9.83-10.8a8129.48 8129.48 0 0018.313-19.46c1.058-1.123 2.116-2.27 3.217-3.415.243-.264.485-.529.75-.793.838-.904 1.697-1.807 2.535-2.733 3.35-3.57 6.788-7.229 10.248-10.931a532.333 532.333 0 003.481-3.724c1.741-1.852 3.483-3.703 5.202-5.554s3.438-3.68 5.135-5.488a1.365 1.365 0 00.176-.176c1.63-1.74 3.24-3.482 4.826-5.157q.991-1.058 1.984-2.115c1.763-1.896 3.503-3.747 5.156-5.532.838-.882 1.653-1.763 2.469-2.622.793-.86 1.564-1.697 2.336-2.513a1.57 1.57 0 00.264-.286q1.025-1.091 1.984-2.116a524.401 524.401 0 014.143-4.408c.484-.529.97-1.058 1.41-1.542l.53-.565a6.016 6.016 0 017.39-1.078 106.953 106.953 0 0150.907 68.826zM663.157 386.887c0 69.177-56.264 126.3-125.265 127.314l-2.072.022c-6.766 0-14.413 0-48.22 73.122-2.952 6.391-12.473 27.262-20.319 47.052-18.979-40.065-58.048-88.428-75.182-108.757a4.878 4.878 0 01-.903-4.667l.01-.028c.088-.331.22-.662.33-.992.154-.463.309-.904.485-1.389a16.2 16.2 0 01.419-1.234c.242-.683.485-1.41.77-2.137a3.955 3.955 0 01.177-.463q.53-1.356 1.058-2.843c.022-.066.044-.11.066-.176.265-.706.551-1.433.838-2.16.507-1.279 1.036-2.623 1.609-3.99.22-.572.462-1.123.705-1.718.44-1.08.926-2.182 1.41-3.328a293.8 293.8 0 0113.18-26.468c.506-.903 1.013-1.785 1.542-2.688a536.52 536.52 0 011.83-3.086 233.542 233.542 0 012.688-4.363c.881-1.455 1.829-2.91 2.82-4.386.97-1.477 1.962-2.931 2.975-4.408.993-1.476 2.05-2.953 3.13-4.407a205.735 205.735 0 019.256-11.879 83.672 83.672 0 011.808-2.138 93.465 93.465 0 012.423-2.732c.31-.375.64-.75 1.014-1.124.75-.86 1.543-1.72 2.358-2.557 1.631-1.785 3.35-3.526 5.113-5.267 21.223-20.914 51.394-40.087 78.015-56.99 29.884-18.975 55.713-35.372 67.15-52.23.31-.463.64-.97.97-1.499a58.185 58.185 0 001.984-3.394c.33-.617.684-1.234 1.014-1.895 1.102-2.094 2.204-4.386 3.306-6.766.528-1.168 1.08-2.358 1.608-3.57a1.34 1.34 0 01.11-.264c.331-.75.662-1.499.97-2.248.639-1.499 1.278-2.997 1.895-4.496a1.184 1.184 0 01.11-.242c.595-1.433 1.146-2.887 1.697-4.276l.017-.041a3.284 3.284 0 015.024-1.439 127.722 127.722 0 0150.077 101.225z" />
                      </g>
                    </svg>
                    <p
                      className="text-3xl font-medium cursor-pointer"
                      aria-details="click to return to Youarerad.org"
                    >
                      RAD
                    </p>
                  </a>
                </Link>
              </div>
              <div className="flex-1 h-0 mt-5 overflow-y-auto">
                <nav className="px-2">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                          'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? 'text-gray-500'
                              : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-8">
                    <h3
                      className="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase"
                      id="mobile-teams-headline"
                    >
                      Teams
                    </h3>
                    <div
                      className="mt-1 space-y-1"
                      role="group"
                      aria-labelledby="mobile-teams-headline"
                    >
                      {teams.map((team) => (
                        <a
                          key={team.name}
                          href={team.href}
                          className="flex items-center px-3 py-2 text-base font-medium leading-5 text-gray-600 rounded-md group hover:text-gray-900 hover:bg-gray-50"
                        >
                          <span
                            className={classNames(
                              team.bgColorClass,
                              'w-2.5 h-2.5 mr-4 rounded-full'
                            )}
                            aria-hidden="true"
                          />
                          <span className="truncate">{team.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col pt-3 pb-4 bg-gray-100 border-r border-gray-200 ">
          <div className="flex items-center justify-between flex-shrink-0 w-full px-4 mx-auto">
            <svg viewBox="0 0 720 720" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em">
              <path
                d="M365.79 509.498a8.226 8.226 0 01-7.513 8.858q-4.626.405-9.296.407a107.228 107.228 0 01-77.622-33.3 11.428 11.428 0 01-2.565-4.357l-.01-.028c-.198-.661-.418-1.367-.66-2.138-1.279-4.1-3.086-9.807-5.334-16.771q-.43-1.29-.86-2.645c-1.19-3.658-2.468-7.603-3.878-11.79l-.529-1.586c-.529-1.587-1.058-3.218-1.63-4.87-.376-1.102-.75-2.226-1.147-3.372-.176-.573-.375-1.146-.573-1.719a465.674 465.674 0 00-1.719-5.069c-.022-.066-.044-.11-.066-.176a1560.165 1560.165 0 00-4.738-13.642c-1.014-2.887-2.05-5.84-3.13-8.837-1.124-3.13-2.27-6.325-3.437-9.543a1707.47 1707.47 0 00-7.736-20.715q-1.917-5.025-3.878-10.05c-.31-.771-.618-1.564-.926-2.358-1.631-4.121-3.284-8.264-4.958-12.363s-3.373-8.199-5.091-12.231c-1.146-2.69-2.292-5.378-3.46-8.022a307.906 307.906 0 00-1.741-3.967c-7.56-17.058-15.36-32.925-23.052-45.95-16.75-28.363-36.12-58.908-50.27-81.21-.55-.882-1.101-1.741-1.652-2.6s-1.08-1.697-1.609-2.535l-.156-.247a39.21 39.21 0 011.615-44.507 96.28 96.28 0 0177.173-38.241h.325c17.948.058 34.075 10.986 41.508 27.322q.998 2.194 2.067 4.567c.375.837.771 1.697 1.146 2.557q2.38 5.322 5.09 11.503c.75 1.675 1.477 3.394 2.248 5.157 1.896 4.43 3.923 9.124 6.017 14.105q1.984 4.727 4.099 9.785c.155.418.33.837.507 1.256.838 2.005 1.653 4.033 2.512 6.104.22.573.463 1.146.705 1.741 1.08 2.667 2.182 5.4 3.306 8.177.551 1.41 1.124 2.82 1.697 4.23.573 1.433 1.146 2.866 1.72 4.32.726 1.83 1.453 3.68 2.203 5.576q2.38 6.116 4.87 12.562c.066.176.132.33.198.507 1.146 2.975 2.292 5.994 3.46 9.08q1.884 4.992 3.835 10.182c.992 2.732 2.027 5.51 3.063 8.308q4.1 11.206 8.353 23.162 1.983 5.52 3.945 11.24 7.371 21.156 14.964 44.472c1.057 3.24 2.115 6.546 3.173 9.852l.154.462c.088.243.198.573.33.97l.463 1.389c.089.242.177.529.265.815.286.838.595 1.785.926 2.755.859 2.622 1.807 5.443 2.423 7.317 1.08 3.327 2.16 6.875 3.218 10.6.353 1.234.683 2.49 1.036 3.768l.595 2.204.684 2.534c.66 2.645 1.322 5.334 1.96 8.044.309 1.234.596 2.468.86 3.725.243.991.463 1.983.683 2.997.353 1.587.706 3.195 1.036 4.804 1.058 4.98 2.05 10.05 2.975 15.118.309 1.675.618 3.372.904 5.047.309 1.697.595 3.394.881 5.069.287 1.697.574 3.372.838 5.047l.793 5.024c.485 3.086.926 6.127 1.367 9.146.375 2.579.727 5.157 1.057 7.691a953.59 953.59 0 012.667 21.333c.22 1.962.44 3.901.639 5.796.176 1.653.352 3.262.529 4.849a1343.55 1343.55 0 011.609 16.88c.088.97.176 1.896.242 2.822q.16 1.868.303 3.603zM243.564 474.398a2.807 2.807 0 01-2.945 3.63 106.635 106.635 0 01-94.83-81.202l-1.586-6.457-6.436-1.61A107.158 107.158 0 0194.91 202.954a14.5 14.5 0 0121.604 3.244l.097.153c.727 1.168 1.499 2.358 2.27 3.592.793 1.256 1.631 2.557 2.468 3.901 14.083 22.192 33.344 52.561 49.938 80.638 3.703 6.258 7.427 13.245 11.174 20.782q1.322 2.677 2.644 5.42a2.21 2.21 0 00.155.331c.947 1.94 1.873 3.923 2.799 5.929.462.991.925 2.005 1.388 3.019s.926 2.027 1.388 3.063c.463 1.014.926 2.05 1.389 3.086.926 2.05 1.851 4.099 2.732 6.192a842.906 842.906 0 019.543 22.81q1.984 4.959 3.945 9.917c.86 2.226 1.719 4.43 2.578 6.656.441 1.102.86 2.204 1.279 3.306l1.256 3.305c1.256 3.306 2.49 6.612 3.702 9.874.419 1.101.816 2.181 1.212 3.283 1.19 3.24 2.38 6.48 3.526 9.675.397 1.058.772 2.116 1.146 3.173.397 1.058.772 2.116 1.124 3.152l.199.529c.308.881.617 1.74.925 2.6.133.419.287.837.44 1.256.464 1.256.905 2.535 1.345 3.79.485 1.389.948 2.755 1.433 4.1q.496 1.454.992 2.843c1.102 3.217 2.181 6.325 3.217 9.366.242.75.485 1.498.75 2.226.705 2.115 1.41 4.187 2.093 6.192.198.618.397 1.235.617 1.852.33.991.661 1.961.992 2.93.33 1.059.683 2.094 1.014 3.086.154.507.33.992.484 1.477.33 1.013.64 1.983.97 2.93.463 1.433.926 2.822 1.367 4.166.44 1.366.859 2.666 1.278 3.923l.396 1.256c.265.815.53 1.609.772 2.38z"
                fill="#60a5fa"
              />
              <path
                d="M502.104 133.415a27.28 27.28 0 01.763 38.197l-.17.182c-.75.794-1.499 1.61-2.292 2.447-1.366 1.454-2.777 2.975-4.209 4.495-1.256 1.389-2.579 2.777-3.9 4.188a.672.672 0 01-.177.176q-1.355 1.454-2.777 2.975c-.705.75-1.432 1.52-2.138 2.292-1.63 1.763-3.283 3.504-4.936 5.267a2.638 2.638 0 01-.243.265c-2.314 2.446-4.606 4.914-6.898 7.36a539.39 539.39 0 00-3.482 3.725 512.63 512.63 0 00-3.394 3.636c-7.889 8.419-15.272 16.264-21.024 22.369-.815.86-1.587 1.697-2.314 2.468q-1.124 1.157-2.116 2.248c-.33.353-.66.705-.992 1.036q-7.47 7.9-14.853 16.616c-1.344 1.587-2.689 3.174-4.033 4.805-8.661 10.446-17.145 21.531-25.3 32.793a850.75 850.75 0 00-10.358 14.589q-.561.76-1.057 1.52a897.24 897.24 0 00-3.945 5.774 1409.012 1409.012 0 00-4.915 7.273c-1.96 2.931-3.878 5.862-5.773 8.75-1.213 1.872-2.425 3.746-3.615 5.597q-2.314 3.537-4.496 7.008a1205.34 1205.34 0 00-2.688 4.275 28.314 28.314 0 01-1.514 2.579c-.28 0-1.043-2.777-1.087-2.931 0 0-37.707-108.494-38.456-110.5-1.609-4.209-3.174-8.33-4.739-12.34-.837-2.183-1.674-4.32-2.49-6.458-4.423-11.334-18.375-43.712-29.56-69.463-12.351-28.436 8.055-60.744 39.057-61.022q.32-.003.641-.003a71.507 71.507 0 0152.583 23.162l5.197 5.638.01.002 7.09-2.907a107.3 107.3 0 01114.601 21.917z"
                fill="#f472b6"
              />
              <g fill="#60a5fa">
                <path d="M590.262 240.498a67.155 67.155 0 01-3.25 39.85l-.063.16c-.33.86-.684 1.697-1.036 2.557a151.365 151.365 0 01-2.292 5.487c-.176.44-.374.904-.573 1.344-.374.86-.75 1.72-1.146 2.557-.485 1.102-.992 2.16-1.476 3.173a87.4 87.4 0 01-2.337 4.584 40.576 40.576 0 01-1.939 3.196c-8.881 13.09-34.071 29.068-60.737 46.015-27.548 17.499-58.776 37.333-81.674 59.878a184.664 184.664 0 00-4.142 4.21l-.331.33c-1.124 1.19-2.248 2.38-3.35 3.592-.309.33-.617.683-.926 1.014a165.061 165.061 0 00-3.217 3.658 215.277 215.277 0 00-3.681 4.364 313.336 313.336 0 00-3.548 4.407 219.582 219.582 0 00-4.914 6.502 204.59 204.59 0 00-5.07 7.184 251.622 251.622 0 00-5.51 8.463 230.64 230.64 0 00-4.87 8.088q-1.454 2.479-2.776 4.892a286.41 286.41 0 00-4.43 8.353c-.683 1.344-1.817 4.01-2.028 4.01-.201 0-.286-2.556-.44-3.878-.154-1.366-.309-2.777-.463-4.187-.132-1.146-.286-2.292-.419-3.46-.573-4.76-1.19-9.72-1.873-14.766-.463-3.416-.948-6.876-1.455-10.402-.308-2.071-.617-4.165-.947-6.28-.33-2.16-.661-4.364-1.036-6.568-.353-2.204-.705-4.408-1.102-6.612-.309-1.85-.639-3.724-.97-5.575a462.285 462.285 0 00-2.071-11.063c-.243-1.279-.485-2.557-.75-3.813a499.952 499.952 0 00-3.217-14.788c-.308-1.366-.64-2.732-.97-4.099l-.015-.063a15.622 15.622 0 011.82-11.796q1.636-2.684 3.33-5.44c.022-.022.022-.022.022-.044 1.543-2.49 3.107-5.025 4.738-7.604 9.3-14.787 19.746-30.72 30.876-46.456 1.013-1.432 2.005-2.843 3.02-4.253.484-.684.991-1.367 1.476-2.05.992-1.366 1.983-2.71 2.975-4.077a718.908 718.908 0 019.058-12.099c1.013-1.322 2.05-2.644 3.063-3.967 4.21-5.399 8.485-10.688 12.76-15.78a576.425 576.425 0 015.62-6.566c3.284-3.725 6.546-7.34 9.83-10.8a8129.48 8129.48 0 0018.313-19.46c1.058-1.123 2.116-2.27 3.217-3.415.243-.264.485-.529.75-.793.838-.904 1.697-1.807 2.535-2.733 3.35-3.57 6.788-7.229 10.248-10.931a532.333 532.333 0 003.481-3.724c1.741-1.852 3.483-3.703 5.202-5.554s3.438-3.68 5.135-5.488a1.365 1.365 0 00.176-.176c1.63-1.74 3.24-3.482 4.826-5.157q.991-1.058 1.984-2.115c1.763-1.896 3.503-3.747 5.156-5.532.838-.882 1.653-1.763 2.469-2.622.793-.86 1.564-1.697 2.336-2.513a1.57 1.57 0 00.264-.286q1.025-1.091 1.984-2.116a524.401 524.401 0 014.143-4.408c.484-.529.97-1.058 1.41-1.542l.53-.565a6.016 6.016 0 017.39-1.078 106.953 106.953 0 0150.907 68.826zM663.157 386.887c0 69.177-56.264 126.3-125.265 127.314l-2.072.022c-6.766 0-14.413 0-48.22 73.122-2.952 6.391-12.473 27.262-20.319 47.052-18.979-40.065-58.048-88.428-75.182-108.757a4.878 4.878 0 01-.903-4.667l.01-.028c.088-.331.22-.662.33-.992.154-.463.309-.904.485-1.389a16.2 16.2 0 01.419-1.234c.242-.683.485-1.41.77-2.137a3.955 3.955 0 01.177-.463q.53-1.356 1.058-2.843c.022-.066.044-.11.066-.176.265-.706.551-1.433.838-2.16.507-1.279 1.036-2.623 1.609-3.99.22-.572.462-1.123.705-1.718.44-1.08.926-2.182 1.41-3.328a293.8 293.8 0 0113.18-26.468c.506-.903 1.013-1.785 1.542-2.688a536.52 536.52 0 011.83-3.086 233.542 233.542 0 012.688-4.363c.881-1.455 1.829-2.91 2.82-4.386.97-1.477 1.962-2.931 2.975-4.408.993-1.476 2.05-2.953 3.13-4.407a205.735 205.735 0 019.256-11.879 83.672 83.672 0 011.808-2.138 93.465 93.465 0 012.423-2.732c.31-.375.64-.75 1.014-1.124.75-.86 1.543-1.72 2.358-2.557 1.631-1.785 3.35-3.526 5.113-5.267 21.223-20.914 51.394-40.087 78.015-56.99 29.884-18.975 55.713-35.372 67.15-52.23.31-.463.64-.97.97-1.499a58.185 58.185 0 001.984-3.394c.33-.617.684-1.234 1.014-1.895 1.102-2.094 2.204-4.386 3.306-6.766.528-1.168 1.08-2.358 1.608-3.57a1.34 1.34 0 01.11-.264c.331-.75.662-1.499.97-2.248.639-1.499 1.278-2.997 1.895-4.496a1.184 1.184 0 01.11-.242c.595-1.433 1.146-2.887 1.697-4.276l.017-.041a3.284 3.284 0 015.024-1.439 127.722 127.722 0 0150.077 101.225z" />
              </g>
            </svg>
            <p className="text-lg font-medium text-gray-900 sm:truncate">Rise Above The Disorder</p>
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-1 h-0 overflow-y-auto">
            {/* User account dropdown */}
            <Menu as="div" className="relative inline-block px-3 mt-6 text-left">
              <div>
                <Menu.Button className="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500">
                  <span className="flex items-center justify-between w-full">
                    <span className="flex items-center justify-between min-w-0 space-x-3">
                      <Image
                        className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="flex flex-col flex-1 min-w-0">
                        <span className="text-sm font-medium text-gray-900 truncate">
                          Jessy Schwarz
                        </span>
                        <span className="text-sm text-gray-500 truncate">@jessyschwarz</span>
                      </span>
                    </span>
                    <SelectorIcon
                      className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </span>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 right-0 z-10 mx-3 mt-1 origin-top bg-white divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          View profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="http://Discord.gg/youarerad"
                          rel="noreferrer noopener"
                          target="_blank"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Join Discord
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Navigation */}
            <nav className="px-3 mt-6">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-200 text-gray-900'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-8">
                {/* Secondary navigation */}
                <h3
                  className="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase"
                  id="desktop-teams-headline"
                >
                  Teams
                </h3>
                <div
                  className="mt-1 space-y-1"
                  role="group"
                  aria-labelledby="desktop-teams-headline"
                >
                  {teams.map((team) => (
                    <a
                      key={team.name}
                      href={team.href}
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md group hover:text-gray-900 hover:bg-gray-50"
                    >
                      <span
                        className={classNames(team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full')}
                        aria-hidden="true"
                      />
                      <span className="truncate">{team.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Main column */}
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        {/* Search header */}
        <div className="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 lg:hidden">
          <button
            type="button"
            className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt1Icon className="w-6 h-6" aria-hidden="true" />
          </button>
          <div className="flex items-center justify-between flex-1 sm:px-6 lg:px-8">
            <div className="flex items-center justify-around w-full py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
                Guild Home
              </h1>
              <div className="flex justify-between lg:hidden">
                <button
                  type="button"
                  className="inline-flex items-center order-1 px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0"
                >
                  Recruit
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md shadow-sm order-0 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                >
                  Donate
                </button>
              </div>
            </div>
            <div className="flex items-center">
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3 ">
                <Menu.Button className="flex max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="w-8 h-8 mr-8 rounded-full "
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            View profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Notifications
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Get desktop app
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Logout
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
          {/* Page title & actions */}
          <div className="hidden px-4 py-4 border-b border-gray-200 lg:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
                Guild Home
              </h1>
            </div>
            <div className="flex mt-4 sm:mt-0 sm:ml-4">
              <button
                type="button"
                className="inline-flex items-center order-1 px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0"
              >
                Recruit
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md shadow-sm order-0 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
              >
                Donate
              </button>
            </div>
          </div>
          {/* Pinned projects */}
          <div className="px-4 mt-6 sm:px-6 lg:px-8">
            <h2 className="text-xs font-medium tracking-wide text-gray-500 uppercase">
              Pinned Projects
            </h2>
            <ul
              role="list"
              className="grid grid-cols-1 gap-4 mt-3 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4"
            >
              {pinnedProjects.map((project) => (
                <li key={project.id} className="relative flex col-span-1 rounded-md shadow-sm">
                  <div
                    className={classNames(
                      project.bgColorClass,
                      'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
                    )}
                  >
                    {project.initials}
                  </div>
                  <div className="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md">
                    <div className="flex-1 px-4 py-2 text-sm truncate">
                      <a href="#" className="font-medium text-gray-900 hover:text-gray-600">
                        {project.title}
                      </a>
                      <p className="text-gray-500">{project.totalMembers} Members</p>
                    </div>
                    <Menu as="div" className="flex-shrink-0 pr-2">
                      <Menu.Button className="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        <span className="sr-only">Open options</span>
                        <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute z-10 w-48 mx-3 mt-1 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg right-10 top-3 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  View
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  Removed from pinned
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  Share
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects list (only on smallest breakpoint) */}
          <div className="mt-10 sm:hidden">
            <div className="px-4 sm:px-6">
              <h2 className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                Recent Impact
              </h2>
            </div>
            <ul role="list" className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
              {projects.map((project) => (
                <li key={project.id}>
                  <a
                    href="#"
                    className="flex items-center justify-between px-4 py-4 group hover:bg-gray-50 sm:px-6"
                  >
                    <span className="flex items-center space-x-3 truncate">
                      <span
                        className={classNames(
                          project.bgColorClass,
                          'w-2.5 h-2.5 flex-shrink-0 rounded-full'
                        )}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium leading-6 truncate">
                        {project.title}{' '}
                        <span className="font-normal text-gray-500 truncate">
                          in {project.team}
                        </span>
                      </span>
                    </span>
                    <ChevronRightIcon
                      className="w-5 h-5 ml-4 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects table (small breakpoint and up) */}
          <div className="hidden mt-8 sm:block">
            <div className="inline-block min-w-full align-middle border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr className="border-t border-gray-200">
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      <span className="lg:pl-2">Recent Impact</span>
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Donation
                    </th>
                    <th className="hidden px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 md:table-cell bg-gray-50">
                      Last updated
                    </th>
                    <th className="py-3 pr-6 text-xs font-medium tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 bg-gray-50" />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td className="w-full px-6 py-3 text-sm font-medium text-gray-900 max-w-0 whitespace-nowrap">
                        <div className="flex items-center space-x-3 lg:pl-2">
                          <div
                            className={classNames(
                              project.bgColorClass,
                              'flex-shrink-0 w-2.5 h-2.5 rounded-full'
                            )}
                            aria-hidden="true"
                          />
                          <a href="#" className="truncate hover:text-gray-600">
                            <span>
                              {project.title}{' '}
                              <span className="font-normal text-gray-500">in {project.team}</span>
                            </span>
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-gray-500">
                        <div className="flex items-center space-x-2">
                          <div className="flex flex-shrink-0 -space-x-1">
                            {project.members.map((member) => (
                              <Image
                                key={member.handle}
                                className="w-6 h-6 rounded-full max-w-none ring-2 ring-white"
                                src={member.imageUrl}
                                alt={member.name}
                              />
                            ))}
                          </div>
                          {project.totalMembers > project.members.length ? (
                            <span className="flex-shrink-0 text-xs font-medium leading-5">
                              +{project.totalMembers - project.members.length}
                            </span>
                          ) : null}
                        </div>
                      </td>
                      <td className="hidden px-6 py-3 text-sm text-right text-gray-500 md:table-cell whitespace-nowrap">
                        {project.lastUpdated}
                      </td>
                      <td className="pr-6">
                        <Menu as="div" className="relative flex items-center justify-end">
                          <Menu.Button className="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            <span className="sr-only">Open options</span>
                            <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute top-0 z-10 w-48 mx-3 mt-1 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg right-7 ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'group flex items-center px-4 py-2 text-sm'
                                      )}
                                    >
                                      <PencilAltIcon
                                        className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                      />
                                      Edit
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'group flex items-center px-4 py-2 text-sm'
                                      )}
                                    >
                                      <DuplicateIcon
                                        className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                      />
                                      Duplicate
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'group flex items-center px-4 py-2 text-sm'
                                      )}
                                    >
                                      <UserAddIcon
                                        className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                      />
                                      Share
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'group flex items-center px-4 py-2 text-sm'
                                      )}
                                    >
                                      <TrashIcon
                                        className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                      />
                                      Delete
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
