import * as trpc from '@trpc/server'
import { checkoutRouter } from './checkout'

export const appRouter = trpc.router().merge('checkout.', checkoutRouter)

// export type definition of API
export type AppRouter = typeof appRouter
