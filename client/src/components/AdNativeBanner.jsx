import { useEffect, useRef } from 'react';

function AdNativeBanner({ id = 'timer-bottom-ad' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const existingScript = document.querySelector('script[data-adsterra-native="native"]');
    const existingTarget = document.getElementById('container-7dc072894006f8e93afe988a051f6bca');

    if (existingScript) existingScript.remove();
    if (existingTarget) existingTarget.remove();

    const script = document.createElement('script');
    script.async = true;
    script.dataset.cfasync = 'false';
    script.dataset.adsterraNative = 'native';
    script.src = 'https://pl31133610.profitableratecpmnetwork.com/7dc072894006f8e93afe988a051f6bca/invoke.js';

    const target = document.createElement('div');
    target.id = 'container-7dc072894006f8e93afe988a051f6bca';
    target.className = 'w-full min-h-[120px]';

    containerRef.current.appendChild(script);
    containerRef.current.appendChild(target);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      if (target.parentNode) target.parentNode.removeChild(target);
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id={id}
      className="flex items-center justify-center w-full min-h-[140px] overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm"
      style={{ maxWidth: '728px', width: '100%' }}
      aria-label="Native banner ad"
    />
  );
}

export default AdNativeBanner;
