import axios from 'axios'
import { useState } from 'react'
import Ctahover from '../../lotties/cta.js'
import getStripe from '../../utils/get-stripe.js'

export default function DonateGuild() {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState()

  const handleInputChange = (e) => {
    const value = e.target.value
    setInput({
      ...input,
      value,
    })
  }

  console.log(input)

  const handleSubmit = async () => {
    const {
      data: { id },
    } = await axios.post('/api/checkout_sessionsguild', {
      amount: input,
    })
    const stripe = await getStripe()
    await stripe.redirectToCheckout({ sessionId: id })
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
              type="radio"
              name="donation"
              value="testprice"
              id="0"
              onChange={handleInputChange}
            />
            <label className="relative radio-label" htmlFor="0">
              $0
            </label>
          </div>
          <input
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
        <div></div>
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
