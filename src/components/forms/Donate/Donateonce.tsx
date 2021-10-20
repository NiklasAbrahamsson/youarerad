import { trpc } from '@/utils/trpc-client'
import { FormEvent, useState } from 'react'
import Ctahover from '../../lotties/cta'
import { fetchPostJSON } from '../../utils/api-helpers'
import getStripe from '../../utils/get-stripe'

const costOptions = [
  {
    decimalUSD: 3000,
    message: ' covers the cost of one therapy session.',
  },
  {
    decimalUSD: 6000,
    message: ' covers the cost of two therapy sessions.',
  },
  {
    decimalUSD: 12000,
    message: ' covers the cost of an entire month of therapy sessions.',
  },
  {
    decimalUSD: 30000,
    message: ' covers the cost of two full months of therapy sessions.',
  },
]

export default function Donateonce() {
  const [currentOption, setCurrentOption] = useState<number>(0)

  const [customAmount, setCustomAmount] = useState<number | null>(null)

  const selectedOption = customAmount
    ? {
        decimalUSD: customAmount * 100,
        message: ` will cover ${Math.floor(customAmount / 30)} therapy sessions.`,
      }
    : costOptions[currentOption]

  const { isLoading, mutateAsync } = trpc.useMutation('checkout.create-single-session')

  const handleSubmit = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const response = await mutateAsync({ costInUSD: selectedOption.decimalUSD })

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
      <form className="relative p-10 border rounded-xl bg-gray-50 ">
        <div
          role="group"
          aria-labelledby="donation-amount"
          className="grid grid-cols-3 gap-4 auto-cols-fr"
        >
          {costOptions.map((option, index) => (
            <div className="relative" key={index}>
              <input
                type="radio"
                name="donation"
                value={option.decimalUSD}
                checked={!customAmount && currentOption === index}
                onChange={() => setCurrentOption(index)}
                id={option.decimalUSD.toString()}
              />
              <label className="relative radio-label" htmlFor={option.decimalUSD.toString()}>
                {'$' + (option.decimalUSD / 100).toFixed(0).toString()}
              </label>
            </div>
          ))}
          <div className="col-span-2">
            <div className="border-gray-300">
              <input
                type="number"
                name="donation"
                id="donateother"
                className="block w-full px-3 py-4 border border-gray-300 shadow-sm rounded-xl sm:text-sm"
                placeholder="Donate other amount"
                onChange={(e) => setCustomAmount(e.currentTarget.valueAsNumber)}
              />
            </div>
          </div>
        </div>
        <p className="pt-8">
          Your donation of{' '}
          <span className="font-bold">{'$' + (selectedOption.decimalUSD / 100).toFixed(0)}</span>
          {selectedOption.message}
        </p>
      </form>
      <button
        onClick={handleSubmit}
        className="relative items-center w-full col-span-3 p-2 mx-auto mt-4 overflow-hidden text-xl transition-all duration-300 ease-linear bg-white border-2 border-black lg:mx-0 rounded-xl shadow-primary hover:shadow-none hover:bg-black hover:text-white"
      >
        <span className="relative w-full font-bold text-center">Donate</span>
        <div className="absolute top-0 z-0">
          <Ctahover />
        </div>
      </button>
    </div>
  )
}
