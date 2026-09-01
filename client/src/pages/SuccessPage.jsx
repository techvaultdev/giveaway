import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TELEGRAM_LINK = 'https://t.me/techvault_dev';

// Simple confetti particles
function Confetti() {
  const [particles] = useState(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      size: 6 + Math.random() * 8,
      color: ['#2874F0', '#FFE11B', '#FF6B35', '#26A541', '#E040FB'][
        Math.floor(Math.random() * 5)
      ],
      rotation: Math.random() * 360,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: '-10px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            transform: `rotate(${p.rotation}deg)`,
            animation: `confetti-fall ${p.duration}s ease-in ${p.delay}s forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function SuccessPage() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      {showConfetti && <Confetti />}

      <div className="max-w-md mx-auto px-4 sm:px-6 w-full">
        <div className="glass-card rounded-3xl p-8 sm:p-10 text-center animate-bounce-in">
          {/* Success Icon */}
          <div className="relative inline-flex mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-flipkart-green to-emerald-500 flex items-center justify-center shadow-xl shadow-flipkart-green/30">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {/* Sparkle decorations */}
            <span className="absolute -top-2 -right-2 text-xl animate-float">✨</span>
            <span className="absolute -bottom-1 -left-3 text-lg animate-float" style={{ animationDelay: '1s' }}>
              🎉
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-black text-gray-800 mb-3" id="success-heading">
            Your Entry is Confirmed! 🎊
          </h1>

          {/* Message */}
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-2">
            Thank you for entering the{' '}
            <span className="font-semibold text-flipkart-blue">
              Flipkart SuperCoin Giveaway
            </span>
            .
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Winners will be announced on our Instagram page. We will{' '}
            <span className="font-semibold text-gray-700">
              manually verify
            </span>{' '}
            if you followed the steps.
          </p>

          {/* Verification Info */}
          <div className="bg-flipkart-blue/5 rounded-xl p-4 mb-6 border border-flipkart-blue/10">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-flipkart-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-flipkart-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-600 text-left leading-relaxed">
                <span className="font-semibold">What's next?</span> We'll check
                that you followed our Instagram page and liked the reel. Winners
                will be contacted via email.
              </p>
            </div>
          </div>

          {/* Telegram CTA */}
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full inline-flex items-center justify-center gap-2 text-base mb-4"
            id="telegram-cta"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Join Telegram for Bonus Entries & Loot Deals
          </a>

          {/* Back link */}
          <Link
            to="/"
            className="text-sm text-gray-400 hover:text-flipkart-blue transition-colors underline underline-offset-2"
            id="back-home"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
