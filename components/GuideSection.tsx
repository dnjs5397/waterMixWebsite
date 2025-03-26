export default function GuideSection() {
    return (
      <div className="mt-10 bg-white border border-gray-200 rounded-xl p-6 text-gray-800 text-base leading-relaxed shadow-sm w-full max-w-2xl mx-auto">
        <h3 className="text-lg font-bold mb-3">📘 물타기 계산기 사용 가이드</h3>
        <p className="mb-3">
          올라가기만을 기다리는 내 소중한 주식... <br />
          이 계산기는 각 매수 가격과 수량을 입력하면 평균 매입 단가를 자동으로 계산해줍니다. <br />
          또한, 목표 주가를 입력하면 해당 주가까지 얼마나 올라야 하는지(%) 함께 확인하실 수 있어요.
        </p>
        <p className="mb-3 font-semibold">✅ 사용 방법</p>
        <ul className="list-disc list-inside mb-3">
          <li>매수한 단가와 수량을 입력하세요 (최대 5개까지 입력 가능)</li>
          <li>(선택) 목표 주가를 입력하면 몇 %가 올라야 해당 주가인지 알 수 있습니다.</li>
          <li>[🔍 계산하기] 버튼을 누르면 결과가 바로 나옵니다!</li>
        </ul>
        <p className="text-sm text-gray-500">
          💡 투자 판단의 참고용으로 사용해주시고, 실제 투자 결정은 본인의 판단에 따라 신중하게 해주세요.
        </p>
      </div>
    );
  }
  