import { useEmblaCarousel } from 'embla-carousel/react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import List from '../components/List'
import Pageheader from '../components/Pageheader'
import Sectionheader from '../components/Sectionheader'
import Transparency from '../components/Transparencytab'
import { BoardItems } from '../libs/Data/Board'
import { Staff } from '../libs/Data/Staff'
import { Story } from '../libs/Story'

const VideoPlayer = dynamic(() => import('@/components/videoplayer'), { ssr: false })

export default function About() {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    dragFree: true,
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  const onScroll = useCallback(() => {
    if (!embla) return
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [embla, setScrollProgress])

  useEffect(() => {
    if (!embla) return
    onSelect()
    onScroll()
    embla.on('select', onSelect)
    embla.on('scroll', onScroll)
  }, [embla, onSelect, onScroll])

  return (
    <Layout
      pageTitle="RAD About Us"
      pageLink="/about"
      description="Learn more Rise Above The Disorder. A World of Warcraft guild turned international non-profit covering the cost of mental health care for people around the world."
      pageHeader={
        <div className="text-white bg-black ">
          <section>
            <div className="space-y-16 lg:space-y-0 lg:justify-between lg:flex">
              <div className="w-full maw-w-xl">
                <Pageheader
                  color="text-white"
                  subheader="We believe"
                  headerone="People can be helped"
                  charone="&amp;"
                  headertwo="The system can be changed"
                  chartwo="&amp;"
                  headerthree="You deserve to feel rad"
                  charthree="♡"
                />
              </div>
              <div className="relative w-full col-start-2 overflow-hidden border border-transparent lg:w-4/5 rounded-xl">
                <VideoPlayer publicId="General%20Media/Aboutrad" />
              </div>
            </div>
          </section>
        </div>
      }
    >
      <section>
        <div className="embla">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              {Story.map((chapters) => (
                <div className="embla__slide__full" key={chapters.id}>
                  <div className="embla__slide__full">
                    <div className="lg:flex">
                      {chapters.chapterpicture}
                      {chapters.chaptertext}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="z-10 flex justify-center pt-10 mx-auto space-x-3">
          <button
            className="relative flex justify-center w-1/4 p-2 overflow-hidden text-base align-middle transition-all duration-300 ease-linear border-2 border-black rounded-lg l shadow-cta hover:shadow-none hover:bg-black hover:text-white"
            onClick={scrollPrev}
          >
            Prev
          </button>
          <button
            className="relative flex justify-center w-1/4 p-2 overflow-hidden text-base align-middle transition-all duration-300 ease-linear border-2 border-black rounded-lg shadow-cta hover:shadow-none hover:bg-black hover:text-white"
            onClick={scrollNext}
          >
            Next
          </button>
        </div>
        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ transform: `translateX(${scrollProgress}%)` }}
          />
        </div>
      </section>
      <div className="text-black bg-gray-50">
        <section>
          <Sectionheader
            color="text-black"
            subheader="Our Team"
            headerone="Mental health champions,"
            headertwo="pretty rad people."
            bodytext="Speakers to the World Health Organization, consultents to the United Nations, we are the group of gamers changing mental health care."
          />
          <div className="relative inline-flex flex-row items-center mt-2 text-lg group">
            <Link href="/careers">
              <a
                aria-label="go to careers page"
                className="inline-flex text-lg text-blue-700 transition-all duration-500"
              >
                Learn more about careers with RAD
              </a>
            </Link>
            <div className="absolute h-0.5 w-full -bottom-1 scale-x-0  bg-gradient-to-r z-0 from-pink-400 to-blue-400 group-hover:scale-x-100  transition-all duration-200 ease-out" />
          </div>
          <div className="mx-auto">
            <ul
              role="list"
              className="grid grid-cols-2 pt-16 gap-x-10 gap-y-8 sm:grid-cols-3 lg:grid-cols-4"
            >
              {Staff.map((team, index) => (
                <li key={index} className="relative">
                  <div className="block w-full overflow-hidden bg-gray-100 lg:w-6/12 rounded-xl group focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500">
                    <Image
                      width="400"
                      height="400"
                      layout="responsive"
                      objectFit="cover"
                      src={team.picture}
                      alt=""
                      className="object-cover pointer-events-none "
                    />
                  </div>
                  <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
                    {team.name}
                  </p>
                  <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                    {team.title}
                  </p>
                  {team.twitter && (
                    <Link passHref href={team.twitter}>
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center text-sm"
                      >
                        <span>
                          <Image
                            src="https://res.cloudinary.com/df23ubjbb/image/upload/v1628594660/Logos/Logo_blue_tbwwed.svg"
                            width="12"
                            height="12"
                            alt="twitter-logo"
                          />
                        </span>
                        {team.twitterName}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <div className="text-white bg-black">
        <section>
          <div className="pb-16 space-y-12 lg:grid lg:grid-cols-3 lg:gap-10 lg:space-y-0">
            <div>
              <h5>Our board</h5>
              <h2> Heroes in-game and IRL.</h2>
            </div>
            <div className="col-span-2">
              <List items={BoardItems} />
            </div>
          </div>
        </section>
      </div>
      <section>
        <Sectionheader
          color="text-black"
          subheader="Our numbers"
          headerone="Radical kindness."
          headertwo="Radical transparency."
        />
        <Transparency />
      </section>
    </Layout>
  )
}
