import TwitterCommentIcon from '@/assets/images/TwitterCommentIcon'
import TwitterHeartIcon from '@/assets/images/TwitterHeartIcon'
import TwitterIcon from '@/assets/images/TwitterIcon'
import TwitterRetweetIcon from '@/assets/images/TwitterRetweetIcon'
import TwitterVerifiedIcon from '@/assets/images/TwitterVerifiedIcon'
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
                                <TwitterVerifiedIcon />
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
                              <TwitterIcon />
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
                              <TwitterCommentIcon />
                              <span>8</span>
                            </a>
                            <a
                              className="flex items-center mr-4 text-gray-800 transition hover:text-green-600 hover:underline"
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <TwitterRetweetIcon />
                              <span>1</span>
                            </a>
                            <a
                              className="flex items-center text-gray-800 transition hover:text-red-600 hover:underline"
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <TwitterHeartIcon />
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
                              <TwitterIcon />
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
                              <TwitterCommentIcon />
                              <span>3</span>
                            </a>
                            <a
                              className="flex items-center mr-4 text-gray-800 transition hover:text-green-600 hover:underline"
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <TwitterRetweetIcon />
                              <span>1</span>
                            </a>
                            <a
                              className="flex items-center text-gray-800 transition hover:text-red-600 hover:underline"
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <TwitterHeartIcon />
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
                        <TwitterVerifiedIcon />
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
                      <TwitterIcon />
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
                      <TwitterCommentIcon />
                      <span>8</span>
                    </a>
                    <a
                      className="flex items-center mr-4 text-gray-800 transition hover:text-green-600 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterRetweetIcon />
                      <span>1</span>
                    </a>
                    <a
                      className="flex items-center text-gray-800 transition hover:text-red-600 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterHeartIcon />
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
                      <TwitterIcon />
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
                      <TwitterCommentIcon />
                      <span>3</span>
                    </a>
                    <a
                      className="flex items-center mr-4 text-gray-800 transition hover:text-green-600 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterRetweetIcon />
                      <span>1</span>
                    </a>
                    <a
                      className="flex items-center text-gray-800 transition hover:text-red-600 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterHeartIcon />
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
