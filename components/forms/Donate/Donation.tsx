import { Tab } from '@headlessui/react'
import Donatemonthly from './Donatemonthly'
import Donateonce from './Donateonce'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join('')
}

export default function DonateForm() {
  return (
    <div className="">
      <Tab.Group>
        <div className="m-4">
          <Tab.List className="flex">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full font-medium text-white transition-all duration-200',
                  selected
                    ? 'text-white bg-indigo-500 border-indigo-500 shadow-2xl bg-clip-border drop-shadow-xl transition-all duration-200 border-2 rounded-xl p-2'
                    : 'font-medium  bg-white rounded-xl  text-black transition-all duration-200 border-2 p-2'
                )
              }
            >
              Give Once
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full font-medium text-white transition-all duration-200 ',
                  selected
                    ? 'text-white bg-indigo-500 border-indigo-500 shadow-2xl bg-clip-border drop-shadow-xl transition-all duration-200 border-2 rounded-xl p-2'
                    : 'font-medium  bg-white rounded-xl  text-black transition-all duration-200 border-2 p-2'
                )
              }
            >
              Monthly
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <Donateonce />
          </Tab.Panel>
          <Tab.Panel>
            <Donatemonthly />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
