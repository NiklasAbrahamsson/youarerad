import { ChevronDownIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Linkedin from './Linkedin'

const Programs = () => {
  const [openTab, setOpenTab] = useState(1)
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-20">
      <div className="">
        <div className="relative col-start-1">
          <div className="mx-auto">
            <ul role="tablist" className="mx-auto ">
              <li className="space-y-2">
                <a
                  className={
                    'text-left w-full flex justify-between items-start' +
                    (openTab === 1
                      ? 'transition-all duration-500 border-blue-400 border-t-4 mt-4 pt-4'
                      : 'transation-all duration-500 mt-4 border-t-4 border-gray-400 pt-4')
                  }
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenTab(1)
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <span>
                    <h3>I have healthcare or a budget</h3>
                  </span>
                  <span className="flex items-center ml-6 h-7">
                    <ChevronDownIcon
                      className={
                        openTab === 1 ? 'rotate-180 h-6 w-6' : 'rotate-0 h-6 w-6 transform'
                      }
                    />
                  </span>
                </a>
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <p className="mt-2 text-xl text-gray-500 lg:pr-12">
                    We&apos;ll find you the best possible licensed therapist in your area that is
                    in-network or on your budget.
                  </p>
                  <div className="relative inline-flex flex-row items-center mt-2 text-lg group">
                    <Link href="/therapy">
                      <a className="inline-flex text-xl text-blue-700 transition-all duration-500">
                        Learn more about finding a therapist.
                      </a>
                    </Link>
                    <div className="absolute h-0.5 w-full -bottom-1 scale-x-0  bg-gradient-to-r z-0 from-pink-400 to-blue-400 group-hover:scale-x-100  transition-all duration-200 ease-out" />
                  </div>
                </div>
                <div className={openTab === 1 ? 'lg:hidden' : 'hidden'} id="link1">
                  <div className="relative py-10">
                    <div className="flex flex-col">
                      <div className="relative ">
                        <div className="w-full px-6 py-4 bg-white border border-gray-300 rounded">
                          <div className="flex items-center">
                            <a
                              className="flex w-12 h-12 "
                              href="https://twitter.com/HavanaRama"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                width="400"
                                height="400"
                                objectFit="scale-down"
                                className="rounded-full"
                                alt="Vana"
                                src="https://pbs.twimg.com/profile_images/1422007712645255172/OfxqBOzd_400x400.jpg"
                              />
                            </a>
                            <a
                              href="https://twitter.com/HavanaRama"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-col ml-4"
                            >
                              <span
                                className="flex items-center font-bold leading-5 text-gray-900"
                                title="{author.name}"
                              >
                                Vana
                                <svg
                                  aria-label="Verified Account"
                                  className="inline w-4 h-4 ml-1 text-blue-500"
                                  viewBox="0 0 24 24"
                                >
                                  <g fill="currentColor">
                                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                                  </g>
                                </svg>
                              </span>
                              <span className="text-gray-800" title="{`@Vana}">
                                {' '}
                                @HavanaRamal{' '}
                              </span>
                            </a>
                            <a
                              className="ml-auto"
                              href="https://twitter.com/HavanaRama"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg
                                viewBox="328 355 335 276"
                                height="24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A 65, 65 0 0 1 630, 425 Z"
                                  fill="#3BA9EE"
                                />
                              </svg>
                            </a>
                          </div>
                          <div className="mt-4 mb-2 text-lg leading-normal text-gray-800 whitespace-pre-wrap">
                            Just got off a call in tears because it seems like I am finally going to
                            be able to get decent and consistent therapy soon. Thank you{' '}
                            <span className="text-blue-400">
                              <a href="https://twitter.com/YouAreRAD">@YouAreRAD</a>
                            </span>
                            😭🙌
                          </div>
                          <a
                            className="text-sm text-gray-800 hover:underline"
                            href="https://twitter.com/HavanaRama/status/1423715682546552834"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {' '}
                            11:40 AM · Aug 6, 2021{' '}
                          </a>
                          <div className="flex mt-2 text-gray-800">
                            <a
                              className="flex items-center mr-4 text-gray-800 transition hover:text-blue-600 hover:underline"
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                  className="fill-current"
                                  d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                                />
                              </svg>
                              <span>8</span>
                            </a>
                            <a
                              className="flex items-center mr-4 text-gray-800 transition hover:text-green-600 hover:underline"
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                  className="fill-current"
                                  d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                                />
                              </svg>
                              <span>1</span>
                            </a>
                            <a
                              className="flex items-center text-gray-800 transition hover:text-red-600 hover:underline"
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                  className="fill-current"
                                  d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z"
                                />
                              </svg>
                              <span>202</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="space-y-2">
                <a
                  className={
                    'text-left w-full flex justify-between items-start' +
                    (openTab === 2
                      ? 'transition-all duration-500 border-green-400 border-t-4 mt-4 pt-4'
                      : 'transation-all duration-500 mt-4 border-t-4 border-gray-400 pt-4')
                  }
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenTab(2)
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <span>
                    <h3>I&apos;m unable to afford healthcare</h3>
                  </span>
                  <span>
                    <ChevronDownIcon
                      className={
                        openTab === 2 ? 'rotate-180 h-6 w-6' : 'rotate-0 h-6 w-6 transform'
                      }
                    />
                  </span>
                </a>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <p className="mt-2 text-xl text-gray-500 lg:pr-12">
                    We&apos;ll find you the best possible licensed therapist in your area and cover
                    the cost through donations.
                  </p>
                  <div className="relative inline-flex flex-row items-center mt-2 text-lg group">
                    <Link href="/therapy">
                      <a className="inline-flex text-xl text-blue-700 transition-all duration-500">
                        Learn more about free mental health care.
                      </a>
                    </Link>
                    <div className="absolute h-0.5 w-full -bottom-1 scale-x-0  bg-gradient-to-r z-0 from-pink-400 to-blue-400 group-hover:scale-x-100  transition-all duration-200 ease-out" />
                  </div>
                </div>
                <div className={openTab === 2 ? 'lg:hidden' : 'hidden'} id="link1">
                  <div className="relative py-10">
                    <div className="flex flex-col justify-center ">
                      <div className="relative">
                        <div className="w-full px-6 py-4 my-4 bg-white border border-gray-300 rounded">
                          <div className="flex items-center">
                            <a
                              className="flex w-12 h-12 "
                              href="https://twitter.com/J5isLive"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                width="400"
                                height="400"
                                objectFit="scale-down"
                                className="rounded-full"
                                alt="John Robbins"
                                src="https://pbs.twimg.com/profile_images/1091028285184724994/it8rCc37_400x400.jpg"
                              />
                            </a>
                            <a
                              href="https://twitter.com/J5isLive"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-col ml-4"
                            >
                              <span
                                className="flex items-center font-bold leading-5 text-gray-900"
                                title="{author.name}"
                              >
                                John Robbins - BLM🖤
                              </span>
                              <span className="text-gray-800" title="{`@Vana}">
                                {' '}
                                @J5isLive{' '}
                              </span>
                            </a>
                            <a
                              className="ml-auto"
                              href="https://twitter.com/J5isLive"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg
                                viewBox="328 355 335 276"
                                height="24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A 65, 65 0 0 1 630, 425 Z"
                                  fill="#3BA9EE"
                                />
                              </svg>
                            </a>
                          </div>
                          <div className="mt-4 mb-2 text-lg leading-normal text-gray-800 whitespace-pre-wrap">
                            I&apos;m thankful for{' '}
                            <span className="text-blue-400">
                              <a href="https://twitter.com/YouAreRAD">@YouAreRAD</a>
                            </span>
                            , which has helped me return to going to therapy on a weekly basis and
                            helps pay for a number of the expenses related to my mental health
                            needs.
                          </div>
                          <a
                            className="text-sm text-gray-800 hover:underline"
                            href="https://twitter.com/J5isLive/status/1423331897158029312"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {' '}
                            10:15 AM · Aug 5, 2021{' '}
                          </a>
                          <div className="flex mt-2 text-gray-800">
                            <a
                              className="flex items-center mr-4 text-gray-800 transition hover:text-blue-600 hover:underline"
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                  className="fill-current"
                                  d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                                />
                              </svg>
                              <span>3</span>
                            </a>
                            <a
                              className="flex items-center mr-4 text-gray-800 transition hover:text-green-600 hover:underline"
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                  className="fill-current"
                                  d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                                />
                              </svg>
                              <span>1</span>
                            </a>
                            <a
                              className="flex items-center text-gray-800 transition hover:text-red-600 hover:underline"
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                                <path
                                  className="fill-current"
                                  d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z"
                                />
                              </svg>
                              <span>5</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="space-y-2">
                <a
                  className={
                    'text-left w-full flex justify-between items-start' +
                    (openTab === 3
                      ? 'transition-all duration-500 border-red-400 border-t-4 mt-4 pt-4'
                      : 'transation-all duration-500 mt-4 border-t-4 border-gray-400 pt-4')
                  }
                  onClick={(e) => {
                    e.preventDefault()
                    setOpenTab(3)
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <span>
                    <h3>I&apos;d like to support my staff or team</h3>
                  </span>
                  <span>
                    <ChevronDownIcon
                      className={
                        openTab === 3 ? 'rotate-180 h-6 w-6' : 'rotate-0 h-6 w-6 transform'
                      }
                    />
                  </span>
                </a>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <p className="mt-2 text-xl text-gray-500 lg:pr-12">
                    We&apos;ll find your team the best possible licensed therapists and use the cost
                    to help others.
                  </p>
                  <div className="relative inline-flex flex-row items-center mt-2 text-lg group">
                    <Link href="/partner">
                      <a className="inline-flex text-xl text-blue-700 transition-all duration-500">
                        Learn more about our mental health benefits.
                      </a>
                    </Link>
                    <div className="absolute h-0.5 w-full -bottom-1 scale-x-0  bg-gradient-to-r z-0 from-pink-400 to-blue-400 group-hover:scale-x-100  transition-all duration-200 ease-out" />
                  </div>
                </div>
                <div className={openTab === 3 ? 'lg:hidden flex py-10' : 'hidden'} id="link3">
                  <Linkedin
                    name="Ronny Dickstein"
                    author="ronny-dickstein-75019323"
                    postUrl="https://www.linkedin.com/posts/ronny-dickstein-75019323_i-was-recently-awarded-the-innovation-award-activity-6759920949681893376-vyX0"
                    media="https://media-exp1.licdn.com/dms/image/C5603AQF3bMVX-8U2gg/profile-displayphoto-shrink_100_100/0/1635462533351?e=1645660800&v=beta&t=mBLn0nFnqL4QK8QW0F33A7ys9soQFDgn6GtyAVzXSBI"
                    image="https://media-exp1.licdn.com/dms/image/C5622AQGv_lWPLR0D1A/feedshare-shrink_800/0/1611690746322?e=1643241600&v=beta&t=Cihy5E4SNnXX6kS2AZOMAvcYRUDldAmWmhApdg_5aiM"
                    created_at="11mo"
                    text={
                      <div>
                        I was recently awarded the Innovation Award for my mental wellness project
                        and I want to recognize a few people. Shoutout to the leadership team on the
                        Competitive Gaming team at{' '}
                        <a
                          href="https://www.linkedin.com/company/electronic-arts?trk=public_post-embed_share-update_update-text"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="text-blue-700">Electronic Arts (EA)</span>
                        </a>{' '}
                        who recognized this often invisible issue around player mental health and
                        decided to support a program to provide our pro players with mental health
                        resources. Shoutout to{' '}
                        <a
                          href="https://www.linkedin.com/company/youarerad?trk=public_post-embed_share-update_update-text"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="text-blue-700">Rise Above The Disorder</span>
                        </a>{' '}
                        for being that amazing mental health resource for the players. This may be
                        the most important thing I&apos;ll ever work on in my career. I will
                        continue to work hard to make sure every single player who participates in
                        an EA competition will be able to get the mental health help that they need.
                      </div>
                    }
                    likes="119"
                    comments="9"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative w-full m-auto">
        <div
          className={
            openTab === 1
              ? 'hidden lg:flex  transition-all duration-500 ease-in'
              : 'hidden transition-all duration-500 ease-in'
          }
          id="link1"
        >
          <div className="relative pl-8">
            <div className="flex flex-col">
              <div className="relative ">
                <div className="w-full px-6 py-4 bg-white border border-gray-300 rounded">
                  <div className="flex items-center">
                    <a
                      className="flex w-12 h-12 "
                      href="https://twitter.com/HavanaRama"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        width="400"
                        height="400"
                        objectFit="scale-down"
                        className="rounded-full"
                        alt="Vana"
                        src="https://pbs.twimg.com/profile_images/1422007712645255172/OfxqBOzd_400x400.jpg"
                      />
                    </a>
                    <a
                      href="https://twitter.com/HavanaRama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col ml-4"
                    >
                      <span
                        className="flex items-center font-bold leading-5 text-gray-900"
                        title="{author.name}"
                      >
                        Vana
                        <svg
                          aria-label="Verified Account"
                          className="inline w-4 h-4 ml-1 text-blue-500"
                          viewBox="0 0 24 24"
                        >
                          <g fill="currentColor">
                            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                          </g>
                        </svg>
                      </span>
                      <span className="text-gray-800" title="{`@Vana}">
                        {' '}
                        @HavanaRamal{' '}
                      </span>
                    </a>
                    <a
                      className="ml-auto"
                      href="https://twitter.com/HavanaRama"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        viewBox="328 355 335 276"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A 65, 65 0 0 1 630, 425 Z"
                          fill="#3BA9EE"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="mt-4 mb-2 text-lg leading-normal text-gray-800 whitespace-pre-wrap">
                    Just got off a call in tears because it seems like I am finally going to be able
                    to get decent and consistent therapy soon. Thank you{' '}
                    <span className="text-blue-400">
                      <a href="https://twitter.com/YouAreRAD">@YouAreRAD</a>
                    </span>
                    😭🙌
                  </div>
                  <a
                    className="text-sm text-gray-800 hover:underline"
                    href="https://twitter.com/HavanaRama/status/1423715682546552834"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    11:40 AM · Aug 6, 2021{' '}
                  </a>
                  <div className="flex mt-2 text-gray-800">
                    <a
                      className="flex items-center mr-4 text-gray-800 transition hover:text-blue-600 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                        <path
                          className="fill-current"
                          d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                        />
                      </svg>
                      <span>8</span>
                    </a>
                    <a
                      className="flex items-center mr-4 text-gray-800 transition hover:text-green-600 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                        <path
                          className="fill-current"
                          d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                        />
                      </svg>
                      <span>1</span>
                    </a>
                    <a
                      className="flex items-center text-gray-800 transition hover:text-red-600 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                        <path
                          className="fill-current"
                          d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z"
                        />
                      </svg>
                      <span>202</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            openTab === 2
              ? 'hidden lg:flex transition-all duration-500 ease-in'
              : 'hidden transition-all duration-500 ease-in'
          }
          id="link2"
        >
          <div className="relative pl-8">
            <div className="flex flex-col justify-center ">
              <div className="relative">
                <div className="w-full px-6 py-4 my-4 bg-white border border-gray-300 rounded">
                  <div className="flex items-center">
                    <a
                      className="flex w-12 h-12 "
                      href="https://twitter.com/J5isLive"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        width="400"
                        height="400"
                        objectFit="scale-down"
                        className="rounded-full"
                        alt="John Robbins"
                        src="https://pbs.twimg.com/profile_images/1091028285184724994/it8rCc37_400x400.jpg"
                      />
                    </a>
                    <a
                      href="https://twitter.com/J5isLive"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col ml-4"
                    >
                      <span
                        className="flex items-center font-bold leading-5 text-gray-900"
                        title="{author.name}"
                      >
                        John Robbins - BLM🖤
                      </span>
                      <span className="text-gray-800" title="{`@Vana}">
                        {' '}
                        @J5isLive{' '}
                      </span>
                    </a>
                    <a
                      className="ml-auto"
                      href="https://twitter.com/J5isLive"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        viewBox="328 355 335 276"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A 65, 65 0 0 1 630, 425 Z"
                          fill="#3BA9EE"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="mt-4 mb-2 text-lg leading-normal text-gray-800 whitespace-pre-wrap">
                    I&apos;m thankful for{' '}
                    <span className="text-blue-400">
                      <a href="https://twitter.com/YouAreRAD">@YouAreRAD</a>
                    </span>
                    , which has helped me return to going to therapy on a weekly basis and helps pay
                    for a number of the expenses related to my mental health needs.
                  </div>
                  <a
                    className="text-sm text-gray-800 hover:underline"
                    href="https://twitter.com/J5isLive/status/1423331897158029312"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    10:15 AM · Aug 5, 2021{' '}
                  </a>
                  <div className="flex mt-2 text-gray-800">
                    <a
                      className="flex items-center mr-4 text-gray-800 transition hover:text-blue-600 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                        <path
                          className="fill-current"
                          d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                        />
                      </svg>
                      <span>3</span>
                    </a>
                    <a
                      className="flex items-center mr-4 text-gray-800 transition hover:text-green-600 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                        <path
                          className="fill-current"
                          d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                        />
                      </svg>
                      <span>1</span>
                    </a>
                    <a
                      className="flex items-center text-gray-800 transition hover:text-red-600 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24">
                        <path
                          className="fill-current"
                          d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z"
                        />
                      </svg>
                      <span>5</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={openTab === 3 ? 'hidden lg:flex lg:items-center' : 'hidden'} id="link3">
          <Linkedin
            name="Ronny Dickstein"
            author="ronny-dickstein-75019323"
            postUrl="https://www.linkedin.com/posts/ronny-dickstein-75019323_i-was-recently-awarded-the-innovation-award-activity-6759920949681893376-vyX0"
            media="https://media-exp1.licdn.com/dms/image/C5603AQF3bMVX-8U2gg/profile-displayphoto-shrink_100_100/0/1635462533351?e=1645660800&v=beta&t=mBLn0nFnqL4QK8QW0F33A7ys9soQFDgn6GtyAVzXSBI"
            image="https://media-exp1.licdn.com/dms/image/C5622AQGv_lWPLR0D1A/feedshare-shrink_800/0/1611690746322?e=1643241600&v=beta&t=Cihy5E4SNnXX6kS2AZOMAvcYRUDldAmWmhApdg_5aiM"
            created_at="11mo"
            text={
              <div>
                I was recently awarded the Innovation Award for my mental wellness project and I
                want to recognize a few people. Shoutout to the leadership team on the Competitive
                Gaming team at{' '}
                <a
                  href="https://www.linkedin.com/company/electronic-arts?trk=public_post-embed_share-update_update-text"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-blue-700">Electronic Arts (EA)</span>
                </a>{' '}
                who recognized this often invisible issue around player mental health and decided to
                support a program to provide our pro players with mental health resources. Shoutout
                to{' '}
                <a
                  href="https://www.linkedin.com/company/youarerad?trk=public_post-embed_share-update_update-text"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-blue-700">Rise Above The Disorder</span>
                </a>{' '}
                for being that amazing mental health resource for the players. This may be the most
                important thing I&apos;ll ever work on in my career. I will continue to work hard to
                make sure every single player who participates in an EA competition will be able to
                get the mental health help that they need.
              </div>
            }
            likes="119"
            comments="9"
          />
        </div>
      </div>
    </div>
  )
}

export default Programs
