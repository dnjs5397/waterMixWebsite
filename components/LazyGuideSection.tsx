// components/LazyGuideSection.tsx
import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const GuideSection = dynamic(() => import('./GuideSection'), { ssr: false });

export default function LazyGuideSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible && <GuideSection />}
    </div>
  );
}
