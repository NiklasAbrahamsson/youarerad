import Image from 'next/image'
import Sectionheader from '../components/Sectionheader'

export const Story = [
  {
    id: 1,
    chapter: 1,
    chaptertext: (
      <Sectionheader
        color="text-black"
        subheader="Our Story"
        headerone="We're on a quest to change mental health care"
        headertwo="."
        bodytext="Overwhelmed with their mental health and unable to leave home, our founder hoped to help just one person before leaving this world. Their quest began in the only world they felt they still existed in- The World of Warcraft."
      />
    ),
    chapterpicture: (
      <Image
        src="https://res.cloudinary.com/df23ubjbb/image/upload/v1630526311/StoryCover.png"
        alt="Pencil sketch of a video game character walking down a somber path. High mountain walls surround them."
        width="1920"
        height="1080"
        layout="intrinsic"
        objectFit="scale-down"
      />
    ),
  },

  {
    id: 2,
    chapter: 2,
    chaptertext: (
      <div>
        <h3>
          Accepting the quest to save one life, Jason set off in the only world he could- The World
          Of Warcraft.
        </h3>
        <p>
          Every dungeon and every battleground, they welcomed anyone having thoughts of self-harm to
          reach out. Nights were filled with long talks about life and hardship, while each day
          recruited members interested in helping. Although our founder intended to help just one
          person, so long as there were others in need, their quest continued.
        </p>
      </div>
    ),
    chapterpicture: (
      <Image
        src="https://res.cloudinary.com/df23ubjbb/image/upload/v1630526311/Chapterstart.jpg"
        alt="Pencil sketch of a video game character walking down a somber path. High mountain walls surround them."
        width="1920"
        height="1080"
        layout="intrinsic"
        objectFit="scale-down"
      />
    ),
  },

  {
    id: 3,
    chapter: 3,
    chaptertext: (
      <div>
        <h3>Talking together kept pain at bay, but the need for professional help became clear.</h3>
        <p>
          Now joined by many others, our founder and the guild spoke with people all over the world.
          Their conversations brought warmth and shared hope, but therapy promised even more.
          Helping people find a therapist and begin the healing process became a core part of the
          guild. However, for those unable to afford therapy,
        </p>
      </div>
    ),
    chapterpicture: (
      <Image
        src="https://res.cloudinary.com/df23ubjbb/image/upload/v1630526311/Chapter%203.jpg"
        alt="Two potions sit empty, with coins scattered around them.."
        width="1920"
        height="1080"
        layout="intrinsic"
        objectFit="scale-down"
      />
    ),
  },

  {
    id: 4,
    chapter: 4,
    chaptertext: (
      <div>
        <h3>
          Changing mental health care became their end-game. The cost of therapy was a new raid.
        </h3>
        <p>
          Desperate to make therapy available to everyone in need, the guild settled on a wild idea:
          they would sell in-game services to pay for therapy. All of their time spent playing games
          made for little money personally, but a great deal of skill and game knowledge. Those
          looking to trade dollars for access to powerful items would fuel the mental health care of
          many.
        </p>
      </div>
    ),
    chapterpicture: (
      <Image
        src="https://res.cloudinary.com/df23ubjbb/image/upload/v1630526311/Chapter%204.jpg"
        alt="Two potions sit empty, with coins scattered around them.."
        width="1920"
        height="1080"
        layout="intrinsic"
        objectFit="scale-down"
      />
    ),
  },

  {
    id: 4,
    chapter: 4,
    chaptertext: (
      <div>
        <h3>
          One gamer&apos;s attempt to save a life had grown into a something no one could have ever
          imagined.
        </h3>
        <p>
          Word of Anxiety Gaming spread quickly with the rise of Twitch.tv; eventually reaching
          Trick2G,- the largest Twitch.tv partner at the time. He believed in the ability of gamers
          to unite and overcome any challenge in the world. Many of his viewers agreed, including
          legendary rock band Imagine Dragons. On March 21st, 2016, Trick2G, Dyrus, Wildturtle,
          NightBlue3, FaZe Jev, SirchEz, and Imagine Dragons came together to fundraise for our
          cause.
        </p>
      </div>
    ),
    chapterpicture: (
      <Image
        src="https://res.cloudinary.com/df23ubjbb/image/upload/v1630526312/Chapter%205.jpg"
        alt="Two potions sit empty, with coins scattered around them.."
        width="1920"
        height="1080"
        layout="intrinsic"
        objectFit="scale-down"
      />
    ),
  },
]
