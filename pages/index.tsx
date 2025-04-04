import Head from 'next/head';
import CalculatorTabs from '../components/CalculatorTabs/CalculatorTabs';
import Footer from '../components/Footer';
import GuideSection from '../components/GuideSection';
import AdfitBanner from '../components/AdfitBanner';
import InstallPWAButton from '../components/InstallPWAButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <Head>
        {/* <title>물타기 계산기</title> */}
        <title>물타기 계산기 - 주식 평균 단가 계산기</title>
        <meta name="description" content="매수한 종목의 평균 단가와 목표주가 수익률을 간단히 계산해보자!" />
        <meta name="keywords" content="물타기 계산기, 평균 단가 계산기, 주식 계산기" />
        <meta name="author" content="watermix.site" />

        {/* Open Graph: SNS 공유용 */}
        <meta property="og:title" content="물타기 계산기" />
        <meta property="og:description" content="매수한 종목의 평균 단가와 목표주가 수익률을 간단히 계산해보자!" />
        <meta property="og:image" content="https://watermix.site/og-image.png" />
        <meta property="og:url" content="https://watermix.site" />
        <meta property="og:type" content="website" />

        {/* Twitter 공유 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="물타기 계산기" />
        <meta name="twitter:description" content="매수한 종목의 평균 단가와 목표주가 수익률을 간단히 계산해보자!" />
        <meta name="twitter:image" content="https://watermix.site/og-image.png" />
      </Head>
        <h1 className="text-2xl font-bold mt-10 mb-6 text-center">📈 물타기 계산기 📉</h1>
        <div className="flex-1 flex items-center justify-center w-full">
          <CalculatorTabs />
        </div>
        <AdfitBanner /> {/* ⬅️ 광고 삽입 */}
        <GuideSection />
        <InstallPWAButton />
        <Footer />
    </div>
  );
}