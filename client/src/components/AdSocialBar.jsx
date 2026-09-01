import { useEffect, useRef } from 'react';

function AdSocialBar({ id = 'bottom-banner' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const existingScript = document.querySelector('script[data-adsterra-social="bar"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.dataset.adsterraSocial = 'bar';
    script.src = 'https://pl31133610.profitableratecpmnetwork.com/6d/20/bc/6d20bc0ecc47f66e701d5595a22d732a.js';
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id={id}
      className="flex items-center justify-center w-full min-h-[90px] overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm"
      style={{ maxWidth: '728px', width: '100%' }}
      aria-label="Social bar ad"
    />
  );
}

export default AdSocialBar;
