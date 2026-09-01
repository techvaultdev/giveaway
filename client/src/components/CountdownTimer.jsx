import { useState, useEffect } from 'react';
import AdBanner300x250 from './AdBanner300x250';
import AdNativeBanner from './AdNativeBanner';

function CountdownTimer({ seconds = 15, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = ((seconds - timeLeft) / seconds) * circumference;

  if (isComplete) return null;

  return (
    <div className="space-y-5 animate-fade-in" id="countdown-timer">
      <div className="w-full flex justify-center">
        <AdNativeBanner id="timer-top-ad" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="relative w-36 h-36 sm:w-44 sm:h-44">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120" aria-hidden="true">
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="8"
            />
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="url(#timerGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
              className="transition-all duration-1000 ease-linear"
            />
            <defs>
              <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2874F0" />
                <stop offset="50%" stopColor="#FF6B35" />
                <stop offset="100%" stopColor="#FFE11B" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl sm:text-5xl font-black text-gray-800 tabular-nums">
              {timeLeft}
            </span>
            <span className="text-xs text-gray-500 font-medium mt-0.5">
              seconds
            </span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm sm:text-base font-semibold text-gray-700">
            Please wait <span className="text-flipkart-blue font-bold">{timeLeft}s</span> to verify your entry...
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Check out our sponsors while you wait
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <AdBanner300x250 id="timer-bottom-ad" />
      </div>
    </div>
  );
}

export default CountdownTimer;
