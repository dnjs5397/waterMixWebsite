'use client';

import Script from 'next/script';

export default function AdfitBanner() {
  return (
    <div className="my-6 w-full flex justify-center">
      <ins
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit="DAN-1NRwS3TWjImKt61K"
        data-ad-width="320"
        data-ad-height="100"
      ></ins>
      <Script
        strategy="afterInteractive"
        src="//t1.daumcdn.net/kas/static/ba.min.js"
      />
    </div>
  );
}
