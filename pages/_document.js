import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, viewport-fit=cover"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="format-detection" content="telephone=no" />
          {/* <meta name="theme-color" content="#ffffff"> */}
          <meta
            name="theme-color"
            content="#ffffff"
            media="(prefers-color-scheme: light)"
          />
          
        
          
          
          {/* FAVICON */}
          <link
            rel="icon"
            type="image/png"
            href="../../../../icon-256x256.png"
            sizes="256x256"
          />
          {/* IOS SUPPORT */}
          
          <link rel="icon" href="../../../../icon-256x256.png" />
          {/* CSS FILES */}
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/remixicon.min.css" />
          <link
            rel="stylesheet"
            href="/assets/vendors/swiper/swiper-bundle.min.css"
          />
          <link
            rel="stylesheet"
            href="/assets/vendors/zuck_stories/zuck.min.css"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touche-icon" href="/icon.png" />
          
         
          
        </>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
