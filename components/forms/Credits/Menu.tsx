import { Tab } from '@headlessui/react'
import { Credits, Enemies } from 'libs/Data/Credits'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'
import { FormEvent, Fragment, useState } from 'react'

declare const items: {
  name: string
  abilities: string
  abilityone: string
  abilitytwo: string
  abilitythree: string
}[]

const MenuItems = [
  {
    name: null,
    abilities: [],
  },

  {
    name: 'Attack',
    abilities: [
      {
        abilityone: 'Use Type!',
        abilitytwo: 'Use Enum!',
        abilitythree: 'Use Interface!',
      },
    ],
  },
  {
    name: 'Magic',
    abilities: [
      {
        abilityone: 'Cast Type Safe!',
        abilitytwo: 'Cast Readability!',
        abilitythree: 'Cast Prevent Errors!',
      },
    ],
  },
]

const CreditsMenu = () => {
  const [creditText, setCreditText] = useState('')
  const [creditLink, setCreditLink] = useState('')
  const [creditImage, setCreditImage] = useState('')
  const [healthBar, setHealthBar] = useState(100)
  const [bossName, setBossName] = useState('Navbar.js')
  const [spellUsed, setSpellUsed] = useState('')

  const changeCreditText = (event: FormEvent<HTMLButtonElement>) => {
    const CreditText = Credits[Math.floor(Math.random() * Credits.length)]
    const Boss = Enemies[Math.floor(Math.random() * Enemies.length)]
    const Spell = event.currentTarget.id
    setCreditText(CreditText.name)
    setCreditLink(CreditText.github)
    setCreditImage(CreditText.image)
    setSpellUsed(Spell)
    setHealthBar(healthBar - 20)
    if (healthBar === 0) {
      setHealthBar(healthBar + 100)
      setBossName(Boss.name)
    }
  }
  return (
    <div className="pt-10 ">
      <div className="fixed w-full max-w-sm mx-auto transform -translate-x-1/2 bg-black border-4 border-gray-800 bg-opacity-60 top-10 left-1/2 rounded-xl">
        <div
          id="healthBar"
          className="h-10 p-2 transition-all duration-100 ease-linear bg-red-600 rounded-xl"
          style={{ width: `${healthBar}%` }}
        >
          <div className="absolute font-bold text-center text-white transform -translate-x-1/2 left-1/2">
            {bossName}
          </div>
        </div>
      </div>
      <Tab.Group vertical as="div" className="flex gap-4 mx-auto" defaultIndex={0}>
        <Tab.List className="w-1/4 px-4 pb-4 space-y-4 font-mono text-xl font-semibold text-white border-4 rounded-xl">
          {MenuItems.map((name) => (
            <Tab className="flex hover:underline" key={name.name}>
              {name.name}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels as={Fragment}>
          {MenuItems.map((cast) => (
            <Tab.Panel
              key={cast.name}
              className="w-3/4 p-4 space-y-4 font-mono text-xl font-semibold text-white border-4 rounded-xl"
            >
              {cast.abilities.map((spells) => (
                <div key={spells.abilityone} className="block">
                  <button id={spells.abilityone} className="block" onClick={changeCreditText}>
                    {spells.abilityone}
                  </button>
                  <button id={spells.abilitytwo} className="block" onClick={changeCreditText}>
                    {spells.abilitytwo}
                  </button>
                  <button id={spells.abilitythree} className="block" onClick={changeCreditText}>
                    {spells.abilitythree}
                  </button>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <div className="pt-4">
        {creditText && (
          <div className="flex items-center border-4 rounded-xl">
            <div className="relative w-1/4 h-40 overflow-hidden rounded-xl ring ring-white">
              <Image alt={creditText} src={creditImage} layout="fill" objectFit="cover" />
            </div>
            <p className="w-full font-mono font-bold text-center text-white">
              <span>
                <Link href={creditLink}>
                  <a target="_blank" className="underline text-gray-50 ">
                    {creditText}
                  </a>
                </Link>
              </span>{' '}
              used <span className="text-yellow-300">{spellUsed}</span>
              <span>
                {' '}
                <p className="px-4 pt-4">Thank you converting YouAreRad.org to TypeScript!</p>
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CreditsMenu
