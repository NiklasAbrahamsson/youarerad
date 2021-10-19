import { loadStripe } from '@stripe/stripe-js'

declare const stripe: {
  loadStripe: typeof loadStripe
};

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""

let stripePromise = loadStripe(stripePublishableKey)
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = stripe.loadStripe(stripePublishableKey)
  }
  return stripePromise
}

export default getStripe
