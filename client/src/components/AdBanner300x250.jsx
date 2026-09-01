import { useEffect, useRef } from 'react';

function AdBanner300x250({ id = 'timer-top-ad' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const existingScript1 = document.querySelector('script[data-adsterra-rect="300x250"]');
    const existingScript2 = document.querySelector('script[data-adsterra-rect-invoke="true"]');

    if (existingScript1) existingScript1.remove();
    if (existingScript2) existingScript2.remove();

    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.dataset.adsterraRect = '300x250';
    script1.text = `
      atOptions = {
        'key' : 'fb258069920e57011e04b6303f9f7494',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.dataset.adsterraRectInvoke = 'true';
    script2.src = 'https://www.highrevenueformat.com/fb258069920e57011e04b6303f9f7494/invoke.js';
    script2.async = true;

    containerRef.current.appendChild(script1);
    containerRef.current.appendChild(script2);

    return () => {
      if (script1.parentNode) script1.parentNode.removeChild(script1);
      if (script2.parentNode) script2.parentNode.removeChild(script2);
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id={id}
      className="flex items-center justify-center w-full min-h-[250px] overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm"
      style={{ maxWidth: '300px', width: '100%' }}
      aria-label="300x250 Adsterra banner"
    />
  );
}

export default AdBanner300x250;
