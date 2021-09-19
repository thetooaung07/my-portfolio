// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="Full Stack (Frontend Specialized) Developer pursuing a higher education in Computer Science"
          />
          <meta
            name="keywords"
            content="Nextjs Tailwind Css Reactjs Framer Motion"
          />
        
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
