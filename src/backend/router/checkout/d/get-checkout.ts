import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
})

export default async function getSessionById(id: string) {
  return await stripe.checkout.sessions.retrieve(id, {
    expand: ['payment_intent'],
  })
}
