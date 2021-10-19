import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export type Faqs = {
  question: string
  answer: string
}

type FaqProps = {
  faqs: Array<Faqs>
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Faq({ faqs }: FaqProps) {
  return (
    <div className="py-8 mx-auto sm:py-16">
      <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 className="text-center">Frequently asked questions</h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex items-start justify-between w-full text-left">
                      <span className={classNames(open ? 'text-indigo-400' : 'text-white')}>
                        <h3>{faq.question}</h3>
                      </span>
                      <span className="flex items-center ml-6 h-7">
                        <ChevronDownIcon
                          className={classNames(
                            open ? '-rotate-180' : 'rotate-3',
                            'h-6 w-6 transform'
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="pr-12 mt-2">
                    <p>{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  )
}
