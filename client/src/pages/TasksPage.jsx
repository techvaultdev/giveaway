import { useNavigate } from 'react-router-dom';
import TaskSection from '../components/TaskSection';

function TasksPage() {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate('/success');
  };

  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <TaskSection onComplete={handleComplete} />
      </div>
    </div>
  );
}

export default TasksPage;
