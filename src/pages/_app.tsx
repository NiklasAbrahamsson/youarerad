import { withTRPC } from '@trpc/next'
import * as Fathom from 'fathom-client'
import type { AppProps } from 'next/dist/shared/lib/router/router'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../styles/globals.css'
import { AppRouter } from './api/trpc/[trpc]'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    Fathom.load('YSLVGREN', {
      includedDomains: ['youarerad.org', 'www.youarerad.org'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router])

  return <Component {...pageProps} />
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc'

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    }
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp)
