'use client';
import { useState } from 'react';
import ResultDisplay from '../ResultDisplay';

type Purchase = {
  price: string;
  quantity: string;
};

export default function AverageCalculator() {
  const [purchases, setPurchases] = useState<Purchase[]>([
    { price: '', quantity: '' },
    { price: '', quantity: '' },
  ]);

  const [targetPrice, setTargetPrice] = useState('');
  const [result, setResult] = useState<null | {
    averagePrice: number;
    totalAmount: number;
    totalQuantity: number;
    profitRate?: number;
  }>(null);

  const formatNumber = (value: string) => {
    const num = parseFloat(value.replace(/[^0-9.]/g, ''));
    return isNaN(num) ? '' : num.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  const unformatNumber = (value: string) => value.replace(/[^0-9.]/g, '');

  const handleChange = (index: number, field: keyof Purchase, value: string) => {
    const updated = [...purchases];
    updated[index][field] = value;
    setPurchases(updated);
  };

  const handleAddPurchase = () => {
    if (purchases.length < 5) {
      setPurchases([...purchases, { price: '', quantity: '' }]);
    }
  };

  const handleReset = () => {
    setPurchases([
      { price: '', quantity: '' },
      { price: '', quantity: '' },
    ]);
    setTargetPrice('');
    setResult(null);
  };

  const handleCalculate = () => {
    let totalAmount = 0;
    let totalQuantity = 0;

    purchases.forEach(({ price, quantity }) => {
      const p = parseFloat(price);
      const q = parseFloat(quantity);
      if (!isNaN(p) && !isNaN(q)) {
        totalAmount += p * q;
        totalQuantity += q;
      }
    });

    if (totalQuantity === 0) {
      setResult(null);
      return;
    }

    const averagePrice = totalAmount / totalQuantity;

    let profitRate;
    const target = parseFloat(targetPrice);
    if (!isNaN(target)) {
      profitRate = ((target - averagePrice) / averagePrice) * 100;
    }

    setResult({
      averagePrice,
      totalAmount,
      totalQuantity,
      profitRate,
    });
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md transition-all font-bold">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">💰 매수 정보 입력</h2>
        <button
          onClick={handleReset}
          title="초기화"
          className="text-gray-500 hover:text-red-500 text-lg"
        >
          🔄
        </button>
      </div>

      {purchases.map((purchase, index) => (
        <div key={index} className="mb-3 flex gap-2">
          <input
            type="text"
            inputMode="decimal"
            onWheel={(e) => e.currentTarget.blur()}
            placeholder={`단가 (${index + 1})`}
            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
            value={formatNumber(purchase.price)}
            onChange={(e) => handleChange(index, 'price', unformatNumber(e.target.value))}
          />
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            onWheel={(e) => e.currentTarget.blur()}
            placeholder={`수량 (${index + 1})`}
            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
            value={formatNumber(purchase.quantity)}
            onChange={(e) => handleChange(index, 'quantity', unformatNumber(e.target.value))}
          />
        </div>
      ))}

      {purchases.length < 5 && (
        <button
          onClick={handleAddPurchase}
          className="text-sm text-blue-600 underline mt-2"
        >
          + 매수 추가
        </button>
      )}

      <div className="mt-4">
        <input
          type="text"
          inputMode="decimal"
          onWheel={(e) => e.currentTarget.blur()}
          placeholder="🎯 목표 주가 (선택)"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
          value={formatNumber(targetPrice)}
          onChange={(e) => setTargetPrice(unformatNumber(e.target.value))}
        />
      </div>

      <button
        onClick={handleCalculate}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition"
      >
        🔍 계산하기
      </button>

      {result && <ResultDisplay result={result} />}
    </div>
  );
}
