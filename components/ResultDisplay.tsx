type Result = {
  averagePrice: number;
  totalAmount: number;
  totalQuantity: number;
  profitRate?: number;
};

export default function ResultDisplay({ result }: { result: Result }) {
  return (
    <div className="mt-8 p-4 bg-gray-50 border rounded-lg text-lg text-gray-800">
      <p>
        📌 평균 매입 단가:{' '}
        <strong>{result.averagePrice.toLocaleString(undefined, { maximumFractionDigits: 2 })} 원</strong>
      </p>
      <p>
        📦 총 수량:{' '}
        <strong>{result.totalQuantity.toLocaleString(undefined, { maximumFractionDigits: 2 })} 주</strong>
      </p>
      <p>
        💸 총 매수 금액:{' '}
        <strong>{result.totalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} 원</strong>
      </p>
      {result.profitRate !== undefined && (
        <p>
          {result.profitRate >= 0 ? '📈' : '📉'} 목표금액까지 얼마나 올라야 돼?:{' '}
          <strong>{result.profitRate.toFixed(2)}%</strong>
        </p>
      )}
    </div>
  );
}