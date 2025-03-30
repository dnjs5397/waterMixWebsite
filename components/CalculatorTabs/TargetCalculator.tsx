'use client';
import { useState } from 'react';

export default function TargetCalculator() {
  const [average, setAverage] = useState('');
  const [quantity, setQuantity] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [targetAverage, setTargetAverage] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const unformatNumber = (value: string) => {
    // 숫자와 소수점만 남기기
    let cleaned = value.replace(/[^0-9.]/g, '');
  
    // 소수점이 2개 이상일 경우 첫 번째만 남기고 제거
    const parts = cleaned.split('.');
    if (parts.length > 2) {
      cleaned = parts[0] + '.' + parts.slice(1).join('').replace(/\./g, '');
    }
  
    return cleaned;
  };
  const formatNumber = (value: string) => {
    const num = parseFloat(value.replace(/[^0-9.]/g, ''));
    return isNaN(num) ? '' : num.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  const handleReset = () => {
    setAverage('');
    setQuantity('');
    setCurrentPrice('');
    setTargetAverage('');
    setResult(null);
  };

  const calculate = () => {
    const avg = parseFloat(average);
    const qty = parseFloat(quantity);
    const curr = parseFloat(currentPrice);
    const target = parseFloat(targetAverage);

    if (isNaN(avg) || isNaN(qty) || isNaN(curr) || isNaN(target)) {
      setResult(null);
      return;
    }

    const numerator = (target - avg) * qty;
    const denominator = curr - target;

    if (denominator === 0) {
      setResult('❌ 현재가와 목표 평균단가가 같아서 계산이 불가능해요.');
      return;
    }

    const x = numerator / denominator;

    if (x < 0) {
      setResult('❌ 이 가격에선 목표 평균 단가를 만들 수 없어요.');
    } else {
      const rounded = Math.ceil(x);
      const totalCost = rounded * curr;
      setResult(
        `목표가를 맞추려면 ${rounded.toLocaleString()}주를 더 매수해야 해요.<br />총 ${totalCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}원 더 매수해야 해요.`
      );
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md transition-all font-bold">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">🎯 목표 평균단가 계산기</h2>
        <button
          onClick={handleReset}
          title="초기화"
          className="text-gray-500 hover:text-red-500 text-lg"
        >
          🔄
        </button>
      </div>

      <div className="mb-3">
        <input
          type="text"
          inputMode="decimal"
          placeholder="내 평균 단가"
          className="w-full px-4 py-2 border rounded-lg text-right"
          value={unformatNumber(average)}
          onChange={(e) => setAverage(unformatNumber(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="보유 수량"
          className="w-full px-4 py-2 border rounded-lg text-right"
          value={formatNumber(quantity)}
          onChange={(e) => setQuantity(unformatNumber(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          inputMode="decimal"
          placeholder="현재 가격"
          className="w-full px-4 py-2 border rounded-lg text-right"
          value={unformatNumber(currentPrice)}
          onChange={(e) => setCurrentPrice(unformatNumber(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          inputMode="decimal"
          placeholder="목표 평균 단가"
          className="w-full px-4 py-2 border rounded-lg text-right"
          value={unformatNumber(targetAverage)}
          onChange={(e) => setTargetAverage(unformatNumber(e.target.value))}
        />
      </div>

      <button
        onClick={calculate}
        className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition"
      >
        🎯 얼마나 더 사야 해?
      </button>

      {result && (
        <div
          className="mt-6 bg-gray-50 p-4 border rounded-lg text-lg text-gray-800"
          dangerouslySetInnerHTML={{ __html: result }}
        />
      )}
    </div>
  );
}
