import { trpc } from '@/utils/trpc-client'
import { FormEvent, useState } from 'react'
import Ctahover from '../../lotties/cta'
import getStripe from '../../utils/get-stripe'

const stepOne = ' covers the cost of one therapy session each month.'
const stepTwo = ' covers the cost of two therapy sessions each month.'
const stepThree = ' covers an entire month of therapy sessions.'
const stepFour = ' covers an entire month of therapy sessions for two people.'

export default function DonateGuild() {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('price_1JXB2OEavBxf0OLSdG6zXsMF')
  const [impact, setImpact] = useState('$30')
  const [message, setMessage] = useState(stepTwo)

  const getCheckoutSession = trpc.useMutation('checkout.create-session')

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const id = Number(e.currentTarget.id)
    const value = String(e.currentTarget.value)
    const provides = e.currentTarget.step

    setInput({
      ...(input as any),
      value,
    })
    setImpact('$' + Math.floor(id / 10))
    setMessage(provides)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const response = await getCheckoutSession.mutateAsync({ priceID: input })

    const stripe = await getStripe()
    if (stripe !== null) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: response.id,
      })
      console.warn(error.message)
    }
    setLoading(false)
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
          <div className="relative">
            <input
              step={stepOne}
              type="radio"
              name="donation"
              value="price_1JXB2OEavBxf0OLSdG6zXsMF"
              id="300"
              onChange={handleInputChange}
            />
            <label className="relative radio-label" htmlFor="300">
              $30
            </label>
          </div>
          <input
            step={stepTwo}
            type="radio"
            name="donation"
            value="price_1JXB2OEavBxf0OLSek4zCo3H"
            id="600"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="600">
            $60
          </label>
          <input
            step={stepThree}
            type="radio"
            name="donation"
            value="price_1JXB2OEavBxf0OLSh8QCH0QR"
            id="1200"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="1200">
            $120
          </label>
          <input
            step={stepFour}
            type="radio"
            name="donation"
            value="price_1JXB2OEavBxf0OLSegJXvghM"
            id="2000"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="2000">
            $200
          </label>
        </div>
        <div>
          <p className="pt-8">
            Your donation of <span className="font-bold">{impact}</span>
            {message}
          </p>
        </div>
        <button
          disabled={loading}
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
