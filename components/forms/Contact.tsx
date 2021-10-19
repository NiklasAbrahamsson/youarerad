import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { FormEvent, Fragment, useState } from 'react'

const people = [
  { id: 1, name: 'General Contact' },
  { id: 2, name: 'Care Department' },
  { id: 3, name: 'Partnerships' },
  { id: 4, name: 'Media Inquiries' },
  { id: 5, name: 'Fundraising' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Contactform() {
  const [submitted, setSubmitted] = useState(false)
  const [selected, setSelected] = useState(people[3])

  const sendContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        name: (event.currentTarget.name as unknown as HTMLInputElement).value,
        email: event.currentTarget.email.value,
        department: selected.name,
        message: event.currentTarget.message.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const result = await res.json()
    if (result) {
      ;(document.getElementById('name') as HTMLInputElement).value = ''
      ;(document.getElementById('email') as HTMLInputElement).value = ''
      ;(document.getElementById('message') as HTMLInputElement).value! = ''
      setSubmitted(true)
    }
  }
  return (
    <form onSubmit={sendContact}>
      <div className="max-w-xl">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-base font-medium text-left text-gray-700">
              Your Name:
            </label>
            <input type="text" id="name" name="name" autoComplete="name" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-left text-gray-700">
              Your Email:
            </label>
            <input type="email" id="email" name="email" autoComplete="email" required />
          </div>
          <div>
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-base font-medium text-left text-gray-700">
                    Send my message to:
                  </Listbox.Label>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full py-3 pl-3 pr-10 text-left bg-white border-2 border-gray-300 shadow-sm cursor-default rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                      <span className="block truncate">{selected.name}</span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none rounded-xl">
                        {people.map((person) => (
                          <Listbox.Option
                            id={String(person.id)}
                            refName={person.name}
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                'cursor-default select-none relative py-2 pl-3 pr-9 text-base'
                              )
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selected ? 'font-semibold' : 'font-normal',
                                    'block truncate text-base'
                                  )}
                                >
                                  {person.name}
                                </span>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 right-0 flex text-base items-center pr-4'
                                    )}
                                  >
                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
          <div className="sm:col-span-2 ">
            <div className="">
              <div className="flex justify-between">
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-left text-gray-700"
                >
                  Message
                </label>
                <span
                  id="message-max"
                  className="block text-base font-medium text-left text-gray-700"
                >
                  Max. 500 characters
                </span>
              </div>
            </div>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full px-4 py-3 mt-1 border-2 border-gray-300 shadow-sm rounded-xl text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500"
              aria-describedby="message-max"
            />
            <button
              disabled={submitted}
              type="submit"
              className={
                submitted === true
                  ? 'bg-black text-white mt-2 form-button cursor-default'
                  : 'form-button mt-2'
              }
            >
              {submitted ? <div className="font-bold ">Success!</div> : 'Contact RAD'}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
