import { FormEvent, useState } from 'react'
import Ctahover from '../../lotties/cta'
import { fetchPostJSON } from '../../utils/api-helpers'
import getStripe from '../../utils/get-stripe'

const stepOne = ' covers the cost of one therapy session.'
const stepTwo = ' covers the cost of two therapy sessions.'
const stepThree = ' covers the cost of an entire month of therapy sessions.'
const stepFour = ' covers the cost of two full months of therapy sessions.'

export default function Donateonce() {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({ value: 1200 })
  const [impact, setImpact] = useState('$120')
  const [message, setMessage] = useState(stepTwo)
  const [customMessage, setCustomMessage] = useState({ value: 0 })

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const id = event.currentTarget.id
    const value = Number(event.currentTarget.value)
    const provides = event.currentTarget.step
    setInput({
      ...input,
      value: Math.round(value * 100),
    })
    setImpact('$' + Math.floor(value))
    setMessage(provides)

    if (id === 'donateother') {
      // TODO: handle when user removes custom amount so NaN doesnt render
      setCustomMessage({
        ...input,
        value: Math.round(value),
      })
      setMessage(' will cover ' + Math.floor(value / 30) + ' therapy sessions.')
    }
  }

  console.log(input, 'Input')

  const handleSubmit = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setLoading(true)

    const response = await fetchPostJSON('/api/checkout_sessions', {
      amount: input,
    })

    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }

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
      <form className="relative p-10 border rounded-xl bg-gray-50 ">
        <div
          role="group"
          aria-labelledby="donation-amount"
          className="grid grid-cols-3 gap-4 auto-cols-fr"
        >
          <input
            step={stepOne}
            type="radio"
            name="donation"
            value="30"
            id="300"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="300">
            $30{' '}
          </label>
          <input
            step={stepTwo}
            type="radio"
            name="donation"
            value="60"
            id="600"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="600">
            $60
          </label>
          <input
            step={stepThree}
            defaultChecked
            type="radio"
            name="donation"
            value="1200"
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
            value="3000"
            id="3000"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="3000">
            $300
          </label>
          <div className="col-span-2">
            <div className="border-gray-300">
              <input
                type="number"
                name="donation"
                id="donateother"
                className="block w-full px-3 py-4 border border-gray-300 shadow-sm rounded-xl sm:text-sm"
                placeholder="Donate other amount"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <p className="pt-8">
          Your donation of <span className="font-bold">{impact}</span>
          {message}
        </p>
      </form>
      <button
        disabled={loading}
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
