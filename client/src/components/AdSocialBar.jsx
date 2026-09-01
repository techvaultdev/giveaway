import { useEffect, useRef, useState } from 'react';
import AdsterraBanner from './AdsterraBanner';

function AdSocialBar({ id = 'bottom-banner', fallback = true }) {
  const containerRef = useRef(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const socialScript = document.querySelector('script[src*="6d20bc0ecc47f66e701d5595a22d732a.js"]');
    if (!socialScript) {
      setShowFallback(true);
    }
  }, []);

  if (showFallback || fallback) {
    return (
      <div id={id} className="w-full flex justify-center py-2" aria-label="Bottom banner fallback">
        <AdsterraBanner
          id="bottom-banner-fallback"
          width={300}
          height={250}
          keyValue="fb258069920e57011e04b6303f9f7494"
          scriptSrc="https://www.highrevenueformat.com/fb258069920e57011e04b6303f9f7494/invoke.js"
        />
      </div>
    );
  }

  return <div ref={containerRef} id={id} className="hidden" aria-label="Floating social bar ad" />;
}

export default AdSocialBar;
