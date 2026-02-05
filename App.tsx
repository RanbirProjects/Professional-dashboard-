
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardView from './views/DashboardView';
import TasksView from './views/TasksView';
import LeaveView from './views/LeaveView';
import PayslipsView from './views/PayslipsView';
import LoginView from './views/LoginView';
import Header from './components/Header';
import BreakTimer from './components/BreakTimer';
import { AnimatePresence, motion } from 'framer-motion';

const AuthenticatedApp: React.FC<{ onLogout: () => void, isSidebarOpen: boolean, setIsSidebarOpen: (v: boolean) => void }> = ({ onLogout, isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden font-['Inter']">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} onLogout={onLogout} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header onLogout={onLogout} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Routes location={location}>
                <Route path="/" element={<DashboardView />} />
                <Route path="/tasks" element={<TasksView />} />
                <Route path="/leave" element={<LeaveView />} />
                <Route path="/payslips" element={<PayslipsView />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
        <BreakTimer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (id: string) => {
    if (id.trim()) {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (isInitialLoad) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-50">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <Router>
      <AuthenticatedApp 
        onLogout={handleLogout} 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} 
      />
    </Router>
  );
};

export default App;
