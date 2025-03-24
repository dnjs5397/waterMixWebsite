type ResultData = {
    averagePrice: number;
    totalAmount: number;
    totalQuantity: number;
    profitRate?: number;
  };
  
  export default function ResultDisplay({ result }: { result: ResultData }) {
    return (
        <div className="mt-6 bg-blue-50 p-5 rounded-xl border border-blue-200 text-lg">
        <p>📌 평균 매입 단가: <strong>{result.averagePrice.toFixed(2)}원</strong></p>
        <p>💸 총 매수 금액: <strong>{result.totalAmount.toLocaleString()}원</strong></p>
        <p>📦 총 수량: <strong>{result.totalQuantity.toLocaleString()}주</strong></p>
        {result.profitRate !== undefined && (
          <p>📈 얼마나 올라야 목표주가 달성?: <strong>{result.profitRate.toFixed(2)}%</strong></p>
        )}
      </div>
    );
  }
  