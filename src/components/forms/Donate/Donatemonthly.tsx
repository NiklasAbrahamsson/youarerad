import { trpc } from '@/utils/trpc-client'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import Ctahover from '../../lotties/cta'
import getStripe from '../../utils/get-stripe'

const costOptions = [
  {
    priceId: 'price_1JVIqXEavBxf0OLS7wmeK3rS',
    priceString: '$10',
    message: ' covers the cost of medication refills each month.',
  },
  {
    priceId: 'price_1JVIqXEavBxf0OLS1NQzttQR',
    priceString: '$30',
    message: ' covers the cost of one therapy session each month.',
  },
  {
    priceId: 'price_1JVIqXEavBxf0OLS9LMxBJKd',
    priceString: '$60',
    message: ' covers the cost of two therapy sessions each month.',
  },
  {
    priceId: 'price_1JVIqXEavBxf0OLSUbTR8x93',
    priceString: '$120',
    message: ' covers the cost of four therapy sessions each month.',
  },
]

export default function Donatemonthly() {
  const [currentOption, setCurrentOption] = useState(0)
  const selectedOption = costOptions[currentOption]
  const { isLoading, ...getCheckoutSession } = trpc.useMutation('checkout.create-monthly-session')

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const response = await getCheckoutSession.mutateAsync({ priceID: selectedOption.priceId })

    const stripe = await getStripe()
    if (stripe !== null) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: response.id,
      })
      console.warn(error.message)
    }
  }

  // TODO: I'd recommend putting a loading spinner here so people can't spam the button and have a better loading state
  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <form className="relative p-10 border rounded-xl bg-gray-50">
        <div
          role="group"
          aria-labelledby="donation-amount"
          className="grid items-center grid-cols-3 gap-4 auto-cols-fr"
        >
          {costOptions.map((option, index) => (
            <div className="relative" key={index}>
              <input
                type="radio"
                name="donation"
                value={option.priceId}
                checked={currentOption === index}
                onChange={() => setCurrentOption(index)}
                id={option.priceId}
              />
              <label className="relative radio-label" htmlFor={option.priceId}>
                {option.priceString}
              </label>
            </div>
          ))}
          <div className="col-span-2 transition-all duration-300 cursor-pointer ">
            <div className="">
              <Link href="https://www.twitch.tv/subs/youarerad">
                <a className="relative z-10 items-center justify-center block w-full p-4 mx-auto font-bold text-center align-middle bg-white border cursor-pointer rounded-xl h-14 hover:text-white hover:bg-indigo-500 hover:border-indigo-500 hover:shadow-2xl hover:bg-clip-border hover:drop-shadow-xl group">
                  <label className="block text-sm font-bold text-center cursor-pointer group-hover:text-white">
                    Donate Twitch Sub
                  </label>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <p className="pt-8">
          Your donation of <span className="font-bold">{selectedOption.priceString}</span>
          {selectedOption.message}
        </p>
      </form>
      <button
        // disabled={loading}
        onClick={handleSubmit}
        className="relative items-center w-full col-span-3 p-2 mx-auto mt-4 overflow-hidden text-xl transition-all duration-300 ease-linear bg-white border-2 border-black lg:mx-0 rounded-xl shadow-primary hover:shadow-none hover:bg-black hover:text-white"
      >
        <span className="relative z-10 w-full font-bold text-center">Donate</span>
        <div className="absolute top-0 z-0">
          <Ctahover />
        </div>
      </button>
    </div>
  )
}
