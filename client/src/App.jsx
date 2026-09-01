import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import TasksPage from './pages/TasksPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-shapes">
      <Header />
      <main className="flex-1 relative z-10">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
