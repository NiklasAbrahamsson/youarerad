import Head from 'next/dist/shared/lib/head'
import dynamic from 'next/dynamic'
import React, { ReactNode, useRef } from 'react'
import useIsVisible from './utils/isvisible'
const Navbar = dynamic(() => import('../components/Navbar'))
const Footer = dynamic(() => import('../components/Footer'))

export const siteTitle = 'Rise Above The Disorder'

type LayoutProps = {
  children: ReactNode
  description?: string
  pageHeader?: ReactNode
  pageTitle?: string
  pageLink?: string
}

const Layout = ({ children, pageHeader, pageTitle, pageLink, description }: LayoutProps) => {
  const elemRef = useRef<HTMLDivElement>(null)
  const isVisible = useIsVisible(elemRef)

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="mental health, wellness, nonprofit, charity, gaming, esports, "
        ></meta>
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={'https://youarerad.org/' + { pageLink }} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/radlogo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@youarerad" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/radlogo.png" />
        <meta
          name="twitter:image:alt"
          content="Rise Above The Disorder's current logo. A brain shaped from a heart."
        />
      </Head>
      <div id="root">
        <Navbar></Navbar>
        <header>{pageHeader}</header>
        <main>{children}</main>
        <footer ref={elemRef}>
          {isVisible && console.log('visable')}
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default Layout
