import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
})

export default async function createCheckoutSession(priceID: string) {
  const params: Stripe.Checkout.SessionCreateParams = {
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceID,
        quantity: 1,
      },
    ],

    success_url: `${
      process.env.VERCEL_URL ?? 'localhost:3000'
    }/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.VERCEL_URL ?? 'localhost:3000'}/`,
  }
  return await stripe.checkout.sessions.create(params)
}
