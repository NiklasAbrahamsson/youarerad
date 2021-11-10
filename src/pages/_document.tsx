import Document, { Head, Html, Main, NextScript } from 'next/document'

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
          <meta
            name="keywords"
            content="mental health, wellness, nonprofit, charity, gaming, esports, "
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script async type="text/javascript" src="https://cdn.weglot.com/weglot.min.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: 'Weglot.initialize({api_key:"wg_0f763ce0b95670ae3cec6ef2c30ccffc3"})',
            }}
          />
        </Head>
        <body className="antialiased text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
