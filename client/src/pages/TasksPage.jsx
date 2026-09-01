import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import TaskSection from '../components/TaskSection';

function TasksPage() {
  const navigate = useNavigate();
  const [showTimer, setShowTimer] = useState(true);
  const [showTasks, setShowTasks] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleTimerComplete = useCallback(() => {
    setShowTimer(false);
    setShowTasks(true);
  }, []);

  const handleComplete = () => {
    setIsCompleted(true);
    navigate('/success');
  };

  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {showTimer && (
          <div className="glass-card rounded-3xl p-6 sm:p-8 animate-fade-in">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-flipkart-blue/5 border border-flipkart-blue/10 mb-4">
                <span className="w-2 h-2 rounded-full bg-flipkart-orange animate-pulse" />
                <span className="text-xs font-semibold text-flipkart-blue">
                  Verification in Progress
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-800 mb-2">
                Verifying your entry...
              </h1>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                Please wait 15 seconds while we verify your giveaway entry.
              </p>
            </div>

            <CountdownTimer seconds={15} onComplete={handleTimerComplete} />
          </div>
        )}

        {showTasks && !isCompleted && <TaskSection onComplete={handleComplete} />}
      </div>
    </div>
  );
}

export default TasksPage;
