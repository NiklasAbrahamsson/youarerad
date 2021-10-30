import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
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
