import { programLinks } from './programLinks'
import { socialPosts } from './socialPosts'
import { Fragment, useState } from 'react'
import Link from 'next/link'
import { IdProvider } from '@radix-ui/react-id'
import { Disclosure } from '@headlessui/react'

export default function HowWeHelp() {
  const [activeItem, setActiveItem] = useState('I have healthcare or a budget')
  const [openTab, setOpenTab] = useState(1)
  return (
    <IdProvider>
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-20">
        <div className="relative col-start-1">
          {programLinks.map((programs) => (
            <Disclosure key={programs.header}>
              <>
                <Disclosure.Button
                  key={programs.header}
                  className="flex items-center"
                  onClick={(e: { preventDefault: () => void }) => {
                    e.preventDefault()
                    setActiveItem(programs.header)
                    setOpenTab
                  }}
                >
                  {programs.header}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Disclosure.Button>
                {openTab ? (
                  <Disclosure.Panel>
                    {programs.context}
                    <Link href={programs.path}>{programs.linkText}</Link>
                  </Disclosure.Panel>
                ) : null}
              </>
            </Disclosure>
          ))}
        </div>
        <div className=""></div>
      </div>
    </IdProvider>
  )
}
