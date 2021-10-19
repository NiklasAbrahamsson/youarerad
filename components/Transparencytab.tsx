import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import Teamstats from '../libs/Data/Diversity'
import Table from './Table'

const tabs = [
  {
    name: 'View Salaries',
    content: <Table />,
  },
  {
    name: 'Team Diversity',
    content: <Teamstats />,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Transparency() {
  return (
    <div className="bg-white">
      <div aria-labelledby="Transparency at RAD" className="mx-auto max-w-7xl">
        <div className="">
          <Tab.Group as="div" className="mt-4">
            <div className="flex sm:mx-0">
              <div className="flex-auto border-b border-gray-200 ">
                <Tab.List className="flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                          'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
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
              {tabs.map((content) => (
                <Tab.Panel
                  key={content.name}
                  className="max-h-[60vh] overflow-y-scroll overflow-x-hidden"
                >
                  {content.content}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}
