import * as Fathom from 'fathom-client'
import type { AppProps } from 'next/dist/shared/lib/router/router'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../styles/globals.css'

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

export default MyApp
