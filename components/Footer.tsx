export default function Footer() {
    return (
      <footer className="mt-12 py-6 text-center text-sm text-gray-700 border-t border-gray-200">
        <p>© 2025 물타기 계산기. All rights reserved.</p>
        <p className="mt-1">
          광고 및 제휴 문의:{" "}
          <a href="mailto:dnjs5397@gmail.com" className="text-blue-600 hover:underline">
            dnjs5397@gmail.com
          </a>
        </p>
        <p className="mt-2">
          🔒{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            개인정보 처리방침
          </a>
        </p>
      </footer>
    );
  }
  