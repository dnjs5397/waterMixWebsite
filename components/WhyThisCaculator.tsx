export default function WhyThisCalculator() {
    return (
      <section className="mt-10 bg-white border border-gray-200 rounded-xl p-6 text-gray-800 text-base leading-relaxed shadow-sm w-full max-w-2xl mx-auto">
        <h3 className="text-lg font-bold mb-3">📚 평균 단가 계산이 왜 중요할까요?</h3>
        <p className="mb-4">
          주식 투자를 하다 보면 여러 번에 걸쳐 동일한 종목을 매수하게 됩니다. 이때 각각의 매수 가격과 수량이 다르다면,
          정확한 수익률을 계산하거나 추가 매수를 결정하려면 <strong>평균 단가</strong>를 알아야 합니다.
        </p>
        <p className="mb-4">
          예를 들어 어떤 종목을 다음과 같이 매수했다고 가정해볼게요:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>10,000원에 10주 매수</li>
          <li>8,000원에 20주 추가 매수</li>
        </ul>
        <p className="mb-4">
          이때 평균 단가는 다음과 같이 계산합니다:
        </p>
        <pre className="bg-gray-100 rounded-md p-3 text-sm overflow-x-auto mb-4">
          평균 단가 = (10,000 × 10 + 8,000 × 20) ÷ (10 + 20) = 8,666.67원
        </pre>
        <p className="mb-4">
          즉, 현재 이 종목의 주가가 8,666원보다 높다면 전체 매수에 대해 수익 상태이고, 낮다면 손실 상태입니다.
        </p>
        <p className="text-sm text-gray-500">
          이 계산기를 통해 복잡한 계산 없이 정확한 평균 단가와 수익률을 빠르게 확인해보세요!
        </p>
      </section>
    );
  }
  