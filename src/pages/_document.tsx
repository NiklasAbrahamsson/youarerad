import DeferNextScript from '@/libs/utils/deferScripts'
import Document, { Head, Html, Main } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/site.webmanifest" rel="manifest" />
          <link href="/favicon.ico" rel="shortcut icon" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicon-16x16" rel="icon" sizes="16x16" type="image/png" />
        </Head>
        <body className="antialiased text-black">
          <Main />
          <DeferNextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
