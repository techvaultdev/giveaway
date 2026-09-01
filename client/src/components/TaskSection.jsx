import { useMemo, useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Follow @_arham.sheikh__ on Instagram.',
    buttonText: 'Follow @_arham.sheikh__',
    link: 'https://www.instagram.com/_arham.sheikh__',
  },
  {
    id: 2,
    title: 'Follow techvault.dev on Instagram.',
    buttonText: 'Follow @techvault.dev',
    link: 'https://www.instagram.com/techvault.dev',
  },
  {
    id: 3,
    title: 'Like & Comment on our Reel.',
    buttonText: 'Open Reel & Complete',
    link: 'https://www.instagram.com/reel/DbEQi0Xuigb/',
    description: 'Like the reel, drop a supportive comment, or tag at least 2 friends!',
  },
];

function TaskSection({ onComplete }) {
  const [completed, setCompleted] = useState([false, false, false]);

  const allDone = useMemo(() => completed.every(Boolean), [completed]);

  const handleOpenLink = (index, url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setCompleted((prev) => prev.map((value, idx) => (idx === index ? true : value)));
  };

  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-10 animate-slide-up" id="task-section">
      <div className="glass-card rounded-3xl p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-flipkart-blue/15 to-flipkart-green/15 mb-4">
            <span className="text-2xl">✅</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-800 leading-tight">
            Complete These Steps to Finalize Your Giveaway Entry!
          </h2>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`rounded-2xl border p-4 sm:p-5 transition-all ${
                completed[index]
                  ? 'border-emerald-200 bg-emerald-50/70'
                  : 'border-gray-200 bg-white/70'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-flipkart-blue text-xs font-bold text-white shrink-0">
                      {step.id}
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 break-words">
                      {step.title}
                    </p>
                  </div>

                  {step.description && (
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {step.description}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setCompleted((prev) => prev.map((value, idx) => (idx === index ? !value : value)))}
                  className={`shrink-0 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition ${
                    completed[index]
                      ? 'border-emerald-200 bg-emerald-100 text-emerald-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-flipkart-blue/40 hover:text-flipkart-blue'
                  }`}
                  aria-label={`Mark step ${step.id} as done`}
                >
                  <input
                    type="checkbox"
                    checked={completed[index]}
                    onChange={() => {}}
                    className="h-4 w-4 rounded border-gray-300 text-flipkart-blue focus:ring-flipkart-blue"
                    aria-label={`Mark step ${step.id} as done`}
                  />
                  {completed[index] ? 'Done' : 'Mark as Done'}
                </button>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                  onClick={() => handleOpenLink(index, step.link)}
                >
                  {step.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-gray-200 pt-5">
          <button
            type="button"
            disabled={!allDone}
            onClick={onComplete}
            className="btn-success w-full text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            I Have Completed All Steps
          </button>
        </div>
      </div>
    </section>
  );
}

export default TaskSection;
