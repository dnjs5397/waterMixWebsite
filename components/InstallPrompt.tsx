'use client'
import { useEffect, useState } from 'react';

function isIOS() {
  if (typeof window === 'undefined') return false;
  return /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
}

function isInStandaloneMode() {
  return 'standalone' in window.navigator && (window.navigator as any).standalone;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showAndroid, setShowAndroid] = useState(false);
  const [showIOS, setShowIOS] = useState(false);

  useEffect(() => {
    // ✅ Android PWA install event
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowAndroid(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // ✅ iOS 안내 조건
    if (isIOS() && !isInStandaloneMode()) {
      const dismissed = localStorage.getItem('iosInstallDismissed');
      if (!dismissed) setShowIOS(true);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    if (result.outcome === 'accepted') console.log('PWA installed');
    setDeferredPrompt(null);
    setShowAndroid(false);
  };

  const dismissIOS = () => {
    localStorage.setItem('iosInstallDismissed', 'true');
    setShowIOS(false);
  };

  if (!showAndroid && !showIOS) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white border border-gray-300 px-4 py-3 rounded-xl shadow-md text-sm z-50">
      {showAndroid && (
        <div className="flex justify-between items-center">
          <span>📲 앱처럼 사용하려면 설치해보세요!</span>
          <button onClick={handleInstall} className="ml-3 text-blue-600 font-bold">설치</button>
        </div>
      )}
      {showIOS && (
        <div className="relative">
          <button onClick={dismissIOS} className="absolute top-1 right-2 text-lg text-gray-400 hover:text-gray-600">×</button>
          <p>
            📲 iPhone 사용자는 <strong>Safari</strong>에서<br />
            <strong>공유 버튼 &rarr; 홈 화면에 추가</strong>를 눌러주세요!
          </p>
        </div>
      )}
    </div>
  );
}
