import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
        <meta
          property="og:image"
          content="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/our-story/story_1.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
