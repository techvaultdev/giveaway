import { useEffect, useRef } from 'react';

function AdLeaderboard468x60({ id = 'top-banner' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const existingScript1 = document.querySelector('script[data-adsterra-leaderboard="468x60"]');
    const existingScript2 = document.querySelector('script[data-adsterra-leaderboard-invoke="true"]');

    if (existingScript1) existingScript1.remove();
    if (existingScript2) existingScript2.remove();

    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.dataset.adsterraLeaderboard = '468x60';
    script1.text = `
      atOptions = {
        'key' : 'ae85affbe24806456e29ffd1cf4ec67f',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.dataset.adsterraLeaderboardInvoke = 'true';
    script2.src = 'https://www.highrevenueformat.com/ae85affbe24806456e29ffd1cf4ec67f/invoke.js';
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
      className="flex items-center justify-center w-full min-h-[60px] overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm"
      style={{ maxWidth: '468px', width: '100%' }}
      aria-label="468x60 Adsterra leaderboard banner"
    />
  );
}

export default AdLeaderboard468x60;
