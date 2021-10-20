import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
})

const ORIGIN_URL = process.env.VERCEL_URL ?? 'localhost:3000'

export async function createGuildCheckoutSession(priceID: string) {
  const params: Stripe.Checkout.SessionCreateParams = {
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceID,
        quantity: 1,
      },
    ],

    success_url: `${ORIGIN_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${ORIGIN_URL}/`,
  }
  return await stripe.checkout.sessions.create(params)
}

export async function createMonthlyCheckoutSession(priceID: string) {
  const params: Stripe.Checkout.SessionCreateParams = {
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceID,
        quantity: 1,
      },
    ],

    success_url: `${ORIGIN_URL}/donationcomplete?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${ORIGIN_URL}/`,
  }
  return await stripe.checkout.sessions.create(params)
}
