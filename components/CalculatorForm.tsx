'use client';
import { useState } from 'react';
import ResultDisplay from './ResultDisplay';

type Purchase = {
  price: string;
  quantity: string;
};

export default function CalculatorForm() {
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
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md transition-all">
      <h2 className="text-xl font-bold mb-4">💰 매수 정보 입력</h2>

      {purchases.map((purchase, index) => (
        <div key={index} className="mb-3 flex gap-2">
          <input
            type="number"
            placeholder={`단가 (${index + 1})`}
            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={purchase.price}
            onChange={(e) => handleChange(index, 'price', e.target.value)}
          />
          <input
            type="number"
            placeholder={`수량 (${index + 1})`}
            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={purchase.quantity}
            onChange={(e) => handleChange(index, 'quantity', e.target.value)}
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
          type="number"
          placeholder="🎯 목표 주가 (선택)"
          className="w-2/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={targetPrice}
          onChange={(e) => setTargetPrice(e.target.value)}
        />
      </div>

      <button
        onClick={handleCalculate}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-95 transition"
      >
        🔍 계산하기
      </button>

      {result && <ResultDisplay result={result} />}
    </div>
  );
}
