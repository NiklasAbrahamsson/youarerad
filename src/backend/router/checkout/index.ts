import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { z } from 'zod'
import getSessionById from './d/get-checkout'

export const checkoutRouter = trpc.router().query('get-session', {
  input: z.object({
    id: z.string(),
  }),
  async resolve({ input }) {
    return await getSessionById(input.id)
  },
})
