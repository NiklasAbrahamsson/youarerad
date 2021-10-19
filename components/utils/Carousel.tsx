import { useEmblaCarousel } from 'embla-carousel/react'
import React, { useCallback, useEffect, useState } from 'react'
import Twitter from './Twitter'

const Carousel = () => {
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

  const slides = [
    {
      theslide: (
        <Twitter
          id="1393354511662653440"
          name="Nikki"
          author="Nihaachu"
          media="https://pbs.twimg.com/profile_images/1351788563931803654/t4caSZnS_400x400.jpg"
          image="https://res.cloudinary.com/df23ubjbb/image/upload/v1630279611/Nikki.jpg"
          created_at="4:56 PM · May 14, 2021"
          text={
            <div>
              Thank you so much for this amazing stream! I cannot put into words how thankful I am
              for all your support and the love from my community. we also managed to completely
              smash the donation goal for{' '}
              <a href="https://twitter.com/youarerad">
                <span className="text-blue-700">@YouAreRAD</span>
              </a>{' '}
              managing to be able to pay for 217 fully payed therapy sessions!!! ❤️
            </div>
          }
          likes="98.7k"
          retweets="2.6k"
          comments="955"
        />
      ),
    },
    {
      theslide: (
        <Twitter
          id="1395528530990096387"
          name="Sweet Anita"
          author="sweetanita"
          media="https://pbs.twimg.com/profile_images/1369726229969072134/NkppmeN5_400x400.jpg"
          created_at="4:55 PM · May 20, 2021"
          text={
            <div>
              Today was one of the best days of my life! We raised $57,000 For RAD today in less
              than 4 hours. I LOVE MY COMUNITY SO MUCH 🥳{' '}
              <a href="https://t.co/vWzYpYvisV?amp=1">
                <span className="text-blue-700">https://t.co/vWzYpYvisV?amp=1</span>
              </a>{' '}
              There is still time to donate if you&apos;d like to buy therapy for people who
              can&apos;t afford it.
            </div>
          }
          likes="1.5k"
          retweets="61"
          comments="33"
        />
      ),
    },
    {
      theslide: (
        <Twitter
          id="1393982815176331264"
          name="Miko"
          author="thecodemiko"
          image="https://pbs.twimg.com/media/E1hr-A7VUAASIiu?format=png&name=small"
          media="https://pbs.twimg.com/profile_images/1354471576234672131/8hQO_Q5H_400x400.jpg"
          created_at="10:32 AM · May 16, 2021"
          text={
            <div>
              I&apos;m doing my first Charity stream today! All Donation proceeds go to a mental
              health cause: Rise Above the Disorder!!
            </div>
          }
          likes="988"
          retweets="44"
          comments="12"
        />
      ),
    },
    {
      theslide: (
        <Twitter
          id="1395283072619147269"
          name="Emma"
          author="@EmmaMeiLi"
          media="https://pbs.twimg.com/profile_images/1445668080978329603/QXq0yJLd_400x400.jpg"
          created_at="12:39 AM · May 20, 2021"
          text={
            <div>
              Thank you soooo much for an amazing charity stream, we raised over $5000 for{' '}
              <a href="https://twitter.com/youarerad">
                <span className="text-blue-700">@YouAreRAD</span>
              </a>{' '}
              and more than doubled our goal. I&apos;m blown away by you guys and love you all so
              much. ❤️ And thank you to all the{' '}
              <a href="https://twitter.com/SCLiveClub">
                <span className="text-blue-700">@SCLiveClub</span>
              </a>{' '}
              streamers who participated, y&apos;all are incredible 😀 ❤️❤️❤️
            </div>
          }
          likes="87"
          retweets="7"
          comments="2"
        />
      ),
    },
    {
      theslide: (
        <Twitter
          id="1394456797239332866"
          name="Franco"
          author="el_franco"
          image="https://pbs.twimg.com/media/E02c3HWVcAIMXBo?format=jpg&name=4096x4096"
          media="https://pbs.twimg.com/profile_images/1191476304056422401/I2YtMQ0S_400x400.jpg"
          created_at="5:56 PM · May 17, 2021"
          text={
            <div>
              We raised $20,000!! Thank you so much to everyone who contributed. We crushed our goal
              and the money will help so many people. The stream helped my family and I heal so
              much, and for that I am forever in your debt. Sincerely, I love you all. ❤️{' '}
              <a href="https://twitter.com/youarerad">
                <span className="text-blue-700">@YouAreRAD</span>
              </a>
            </div>
          }
          likes="183"
          retweets="14"
          comments="5"
        />
      ),
    },
    {
      theslide: (
        <Twitter
          id="1386811223509848064"
          name="Extra Credits"
          author="ExtraCreditz"
          image="https://pbs.twimg.com/media/Ez7v93KVEAMvHbT?format=jpg&name=large"
          media="https://pbs.twimg.com/profile_images/1002630700909019136/L7baai81_400x400.jpg"
          created_at="3:35 PM · Apr 26, 2021"
          text={
            <div>
              We&apos;re still reeling from yesterday but I wanted to take a moment to sincerely
              thank you all. Last year, we streamed for 24 hours and raised 6k. This year, after 14
              hours, you all raised $15,222.20 for{' '}
              <a href="https://twitter.com/youarerad">
                <span className="text-blue-700">@YouAreRAD</span> This community is incredible & we
                are so lucky to have you.
              </a>
            </div>
          }
          likes="56"
          retweets="9"
          comments="1"
        />
      ),
    },
  ]

  return (
    <div className=" embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((slides, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">{slides.theslide}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="z-10 flex justify-center mx-auto space-x-3">
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
    </div>
  )
}

export default Carousel
