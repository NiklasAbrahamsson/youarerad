import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import Ctahover from '../../lotties/cta'
import { fetchPostJSON } from '../../utils/api-helpers'
import getStripe from '../../utils/get-stripe'

const stepOne = ' covers the cost of medication refills each month.'
const stepTwo = ' covers the cost of one therapy session each month.'
const stepThree = ' covers the cost of two therapy sessions each month.'
const stepFour = ' covers the cost of four therapy sessions each month.'

export default function Donatemonthly() {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({})
  const [impact, setImpact] = useState('$30')
  const [message, setMessage] = useState(stepTwo)

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const id = parseInt(e.currentTarget.id)
    const value = String(e.currentTarget.value)
    const provides = e.currentTarget.step

    setInput({
      ...input,
      value,
    })
    setImpact('$' + Math.floor(id / 10))
    setMessage(provides)
  }

  console.log(input)

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)

    const response = await fetchPostJSON('/api/checkout_sessionsM', {
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
      <form className="relative p-10 border rounded-xl bg-gray-50">
        <div
          role="group"
          aria-labelledby="donation-amount"
          className="grid items-center grid-cols-3 gap-4 auto-cols-fr"
        >
          <input
            step={stepOne}
            type="radio"
            name="donation"
            value="price_1JVIqXEavBxf0OLS7wmeK3rS"
            id="100"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="100">
            $10
          </label>

          <input
            step={stepTwo}
            type="radio"
            name="donation"
            value="price_1JVIqXEavBxf0OLS1NQzttQR"
            id="300"
            defaultChecked
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="300">
            $30
          </label>
          <input
            step={stepThree}
            type="radio"
            name="donation"
            value="price_1JVIqXEavBxf0OLS9LMxBJKd"
            id="600"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="600">
            $60
          </label>
          <input
            step={stepFour}
            type="radio"
            name="donation"
            value="price_1JVIqXEavBxf0OLSUbTR8x93"
            id="1200"
            onChange={handleInputChange}
          />
          <label className="relative radio-label" htmlFor="1200">
            $120
          </label>
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
          Your donation of <span className="font-bold">{impact}</span>
          {message}
        </p>
      </form>
      <button
        disabled={loading}
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
