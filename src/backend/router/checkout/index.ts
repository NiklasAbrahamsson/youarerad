import * as trpc from '@trpc/server'
import { z } from 'zod'
import createCheckoutSession from './d/create-checkout'
import getSessionById from './d/get-checkout'

export const checkoutRouter = trpc
  .router()
  .query('get-guild-session', {
    input: z.object({
      id: z
        .string()
        .refine((id) => id.startsWith('cs_'), { message: 'Incorrect CheckoutSession ID.' }),
    }),
    async resolve({ input }) {
      return await getSessionById(input.id)
    },
  })
  .mutation('create-guild-session', {
    input: z.object({
      priceID: z.string(),
    }),
    async resolve({ input }) {
      return await createCheckoutSession(input.priceID)
    },
  })
