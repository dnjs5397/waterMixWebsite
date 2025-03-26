import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="naver-site-verification" content="abcd1234efgh5678" />
        <meta name="google-adsense-account" content="ca-pub-6144387361407450"/>
        <title>물타기 계산기</title>
      </Head>

      {/* ✅ GA4 최신 스크립트: 공식 가이드를 Next.js용으로 변환 */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-87EPDWLH1D"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-87EPDWLH1D');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
