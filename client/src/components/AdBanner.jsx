import { useEffect, useRef } from 'react';

function AdBanner({ size = 'leaderboard', label, adKey = '' }) {
  const adRef = useRef(null);

  const sizeClasses = {
    leaderboard: 'w-full h-24 sm:h-28 max-w-[728px]',        // 728x90
    rectangle: 'w-full h-52 sm:h-64 max-w-[300px]',          // 300x250
    'large-rectangle': 'w-full h-64 sm:h-80 max-w-[336px]',  // 336x280
  };

  useEffect(() => {
    // If we had a real adKey, we might dynamically inject a script here.
    // Example:
    // if (adKey && adRef.current) {
    //   const script = document.createElement('script');
    //   script.src = `https://some-ad-network.com/serve.js?key=${adKey}`;
    //   script.async = true;
    //   adRef.current.appendChild(script);
    // }
  }, [adKey]);

  return (
    <div className="flex justify-center w-full my-4">
      <div
        ref={adRef}
        className={`${sizeClasses[size] || sizeClasses.leaderboard} rounded-2xl border-2 border-dashed border-gray-300/60 bg-gradient-to-br from-gray-50 to-gray-100/50 flex flex-col items-center justify-center gap-2 transition-all hover:border-gray-400/40 group overflow-hidden relative`}
        id={`ad-slot-${label || size}`}
      >
        {adKey ? (
          // Simulated dynamic ad loaded state
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm font-medium">
            Dynamic Ad Loaded ({adKey})
          </div>
        ) : (
          // Fallback UI
          <>
            <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span className="text-sm font-semibold tracking-wide uppercase">
                Ad Banner
              </span>
            </div>
            <p className="text-xs text-gray-400 text-center px-4">
              {label || `Ad Space (${size})`}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default AdBanner;
