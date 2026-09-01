import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import AdBanner from '../components/AdBanner';

const INSTAGRAM_PAGE = 'https://instagram.com/yourpage';
const INSTAGRAM_REEL = 'https://instagram.com/reel/yourreelid';

function TasksPage() {
  const navigate = useNavigate();
  const [timerDone, setTimerDone] = useState(false);
  const [step1Done, setStep1Done] = useState(false);
  const [step2Done, setStep2Done] = useState(false);

  const handleTimerComplete = useCallback(() => {
    setTimerDone(true);
  }, []);

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-flipkart-blue/5 border border-flipkart-blue/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-flipkart-orange animate-pulse" />
            <span className="text-xs font-semibold text-flipkart-blue">
              Verification in Progress
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-800 mb-2">
            Almost There! 🚀
          </h1>
          <p className="text-sm text-gray-500 max-w-sm mx-auto">
            Complete the tasks below to finalize your giveaway entry
          </p>
        </div>

        {/* Countdown */}
        {!timerDone && (
          <div className="glass-card rounded-2xl p-6 sm:p-8 mb-6 animate-slide-up">
            <CountdownTimer seconds={15} onComplete={handleTimerComplete} />
          </div>
        )}

        {/* Ad Block 1 */}
        <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <AdBanner size="large-rectangle" label="tasks-ad-1" />
        </div>

        {/* Ad Block 2 */}
        <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <AdBanner size="rectangle" label="tasks-ad-2" />
        </div>

        {/* Tasks — revealed after countdown */}
        {timerDone && (
          <div className="space-y-4 animate-bounce-in">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-flipkart-green/10 mb-3">
                  <span className="text-2xl">✅</span>
                </div>
                <h2 className="text-lg font-bold text-gray-800">
                  Verification Complete!
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Now complete these Instagram tasks to finalize your entry
                </p>
              </div>

              {/* Step 1 */}
              <div className="mb-4">
                <button
                  onClick={() => {
                    openLink(INSTAGRAM_PAGE);
                    setStep1Done(true);
                  }}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 group ${
                    step1Done
                      ? 'border-flipkart-green/30 bg-flipkart-green/5'
                      : 'border-gray-200 hover:border-flipkart-blue/30 hover:bg-flipkart-blue/5'
                  }`}
                  id="task-step-1"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      step1Done
                        ? 'bg-flipkart-green text-white'
                        : 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                    }`}
                  >
                    {step1Done ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    )}
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-sm font-bold text-gray-800">
                      Step 1: Follow our Instagram Page
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {step1Done
                        ? '✅ Opened — make sure you hit Follow!'
                        : 'Click to open our Instagram page in a new tab'}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-flipkart-blue transition-colors shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>

              {/* Step 2 */}
              <div className="mb-6">
                <button
                  onClick={() => {
                    openLink(INSTAGRAM_REEL);
                    setStep2Done(true);
                  }}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 group ${
                    step2Done
                      ? 'border-flipkart-green/30 bg-flipkart-green/5'
                      : 'border-gray-200 hover:border-flipkart-blue/30 hover:bg-flipkart-blue/5'
                  }`}
                  id="task-step-2"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      step2Done
                        ? 'bg-flipkart-green text-white'
                        : 'bg-gradient-to-br from-red-500 to-orange-500 text-white'
                    }`}
                  >
                    {step2Done ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-sm font-bold text-gray-800">
                      Step 2: Like our Latest Reel
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {step2Done
                        ? '✅ Opened — don\'t forget to ❤️ the reel!'
                        : 'Click to open the reel in a new tab and like it'}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-flipkart-blue transition-colors shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>

              {/* Complete Entry */}
              <button
                onClick={() => navigate('/success')}
                disabled={!step1Done || !step2Done}
                className="btn-success w-full text-base flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                id="complete-entry"
              >
                🎯 Complete Entry
              </button>
              {(!step1Done || !step2Done) && (
                <p className="text-xs text-gray-400 text-center mt-3">
                  Complete both steps above to unlock this button
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TasksPage;
