// pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Link the Web App Manifest */}
          <link rel="manifest" href="/manifest.json" />

          {/* Theme color for the address bar / UI */}
          <meta name="theme-color" content="#0070f3" />

          {/* Recommended icons (fallbacks) */}
          <link rel="icon" href="/icons/android-chrome-192x192.png" sizes="192x192" />
          <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" sizes="152x152" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </Head>

        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
