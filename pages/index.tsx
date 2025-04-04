import Head from 'next/head';
import CalculatorTabs from '../components/CalculatorTabs/CalculatorTabs';
import Footer from '../components/Footer';
import GuideSection from '../components/GuideSection';
import AdfitBanner from '../components/AdfitBanner';
import InstallPrompt from '../components/InstallPrompt';
import WhyThisCalculator from '../components/WhyThisCaculator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <Head>
        {/* <title>물타기 계산기</title> */}
        <title>물타기 계산기 - 주식 평균 단가 계산기</title>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://watermix.site" />
        <meta name="description" content="물타기 계산기로 평균 단가와 목표 수익률을 계산해보세요! 주식 추가 매수 시 도움이 되는 계산기입니다." />
        <meta name="keywords" content="물타기 계산기, 주식 단가 계산기, 평균 단가 계산기, 목표 수익률" />
        <meta name="author" content="watermix.site" />

        {/* Open Graph: SNS 공유용 */}
        <meta property="og:title" content="물타기 계산기" />
        <meta property="og:description" content="물타기 계산기로 평균 단가와 목표 수익률을 계산해보세요! 주식 추가 매수 시 도움이 되는 계산기입니다." />
        <meta property="og:image" content="https://watermix.site/og-image.png" />
        <meta property="og:url" content="https://watermix.site" />
        <meta property="og:type" content="website" />

        {/* Twitter 공유 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="물타기 계산기" />
        <meta name="twitter:description" content="물타기 계산기로 평균 단가와 목표 수익률을 계산해보세요! 주식 추가 매수 시 도움이 되는 계산기입니다." />
        <meta name="twitter:image" content="https://watermix.site/og-image.png" />
      </Head>
        <h1 className="text-2xl font-bold mt-10 mb-6 text-center">📈 물타기 계산기 📉</h1>
        <div className="flex-1 flex items-center justify-center w-full">
          <CalculatorTabs />
        </div>
        <AdfitBanner /> {/* ⬅️ 광고 삽입 */}
        <GuideSection />
        <WhyThisCalculator />
        <InstallPrompt />
        <Footer />
    </div>
  );
}