import * as trpc from '@trpc/server'
import { z } from 'zod'
import {
  createGuildCheckoutSession,
  createMonthlyCheckoutSession,
  createSingleCheckoutSession,
} from './d/create-checkout-session'
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
  .mutation('create-single-session', {
    input: z.object({
      costInUSD: z.number(),
    }),
    async resolve({ input }) {
      return await createSingleCheckoutSession(input.costInUSD)
    },
  })
  .mutation('create-monthly-session', {
    input: z.object({
      priceID: z.string(),
    }),
    async resolve({ input }) {
      return await createMonthlyCheckoutSession(input.priceID)
    },
  })
  .mutation('create-guild-session', {
    input: z.object({
      priceID: z.string(),
    }),
    async resolve({ input }) {
      return await createGuildCheckoutSession(input.priceID)
    },
  })
