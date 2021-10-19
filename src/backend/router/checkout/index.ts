import * as trpc from '@trpc/server'
import { z } from 'zod'
import getSessionById from './d/get-checkout'

export const checkoutRouter = trpc.router().query('get-session', {
  input: z.object({
    id: z
      .string()
      .refine((id) => id.startsWith('cs_'), { message: 'Incorrect CheckoutSession ID.' }),
  }),
  async resolve({ input }) {
    return await getSessionById(input.id)
  },
})
