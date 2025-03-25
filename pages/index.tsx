import Head from 'next/head';
import CalculatorForm from '../components/CalculatorForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <Head>
        <title>물타기 계산기</title>
      </Head>
      {/* <main className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"> */}
        <h1 className="text-2xl font-bold mb-6 text-center">📈 물타기 계산기 📉</h1>
        <CalculatorForm />
      {/* </main> */}
        <Footer />
    </div>
  );
}