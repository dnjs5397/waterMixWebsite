// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko"> {/* ✅ 바로 여기! */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
