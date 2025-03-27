'use client';
import { useState } from 'react';
import AverageCalculator from './AverageCalculator';
import TargetCalculator from './TargetCalculator';

export default function CalculatorTabs() {
  const [activeTab, setActiveTab] = useState<'average' | 'target'>('average');

  return (
    <div className="w-full max-w-md">
      <div className="flex mb-4 justify-around font-bold text-sm">
        <button
          onClick={() => setActiveTab('average')}
          className={`px-3 py-2 rounded-full transition ${activeTab === 'average' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
        >
          📊 평균 단가 계산
        </button>
        <button
          onClick={() => setActiveTab('target')}
          className={`px-3 py-2 rounded-full transition ${activeTab === 'target' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
        >
          🎯 목표 단가 맞추기
        </button>
      </div>

      {activeTab === 'average' ? <AverageCalculator /> : <TargetCalculator />}
    </div>
  );
}
