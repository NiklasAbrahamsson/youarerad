import { fetchPostJSON } from '@/components/utils/api-helpers'
import { trpc } from '@/utils/trpc-client'
import { FormEvent, useState } from 'react'
import Ctahover from '../../lotties/cta'
import getStripe from '../../utils/get-stripe'

const costOptions = [
  {
    priceId: 'price_1JXB2OEavBxf0OLSdG6zXsMF',
    priceString: '$30',
    message: ' covers the cost of one therapy session each month.',
  },
  {
    priceId: 'price_1JXB2OEavBxf0OLSek4zCo3H',
    priceString: '$60',
    message: ' covers the cost of two therapy sessions each month.',
  },
  {
    priceId: 'price_1JXB2OEavBxf0OLSh8QCH0QR',
    priceString: '$120',
    message: ' covers an entire month of therapy sessions.',
  },
  {
    priceId: 'price_1JXB2OEavBxf0OLSegJXvghM',
    priceString: '$200',
    message: ' covers an entire month of therapy sessions for two people.',
  },
]

const stepOne = ' covers the cost of one therapy session each month.'
const stepTwo = ' covers the cost of two therapy sessions each month.'
const stepThree = ' covers an entire month of therapy sessions.'
const stepFour = ' covers an entire month of therapy sessions for two people.'

export default function DonateGuild() {
  const [currentOption, setCurrentOption] = useState(0)

  const selectedOption = costOptions[currentOption]
  const getCheckoutSession = trpc.useMutation('checkout.create-session')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!selectedOption) return null

    const response = await getCheckoutSession.mutateAsync({ priceID: selectedOption.priceId })

    const stripe = await getStripe()
    if (stripe !== null) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: response.id,
      })
      console.warn(error.message)
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="relative p-10 text-black border rounded-xl bg-gray-50"
      >
        <div
          role="group"
          aria-labelledby="donation-amount"
          className="grid items-center grid-cols-3 gap-5 min-w-max"
        >
          {costOptions.map((option, index) => (
            <div className="relative" key={index}>
              <input
                type="radio"
                name="donation"
                value={option.priceId}
                checked={currentOption === index}
                onChange={(e) => {
                  console.log('click?', e)
                  setCurrentOption(index)
                }}
                id={option.priceId}
              />
              <label className="relative radio-label" htmlFor={option.priceId}>
                {option.priceString}
              </label>
            </div>
          ))}
        </div>
        <div>
          <p className="pt-8">
            Your donation of <span className="font-bold">{selectedOption.priceString}</span>
            {selectedOption.message}
          </p>
        </div>
        <button
          type="submit"
          className="relative w-full col-span-3 p-2 mx-auto mt-10 overflow-hidden text-xl transition-all duration-300 ease-linear bg-white border-2 border-black fitems-center lg:mx-0 rounded-xl shadow-primary hover:shadow-none hover:bg-black hover:text-white"
        >
          <span className="relative z-10 w-full font-bold text-center">Join Today!</span>
          <div className="absolute top-0 z-0">
            <Ctahover />
          </div>
        </button>
      </form>
    </div>
  )
}
