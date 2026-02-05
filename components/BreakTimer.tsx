
import React, { useState, useEffect, useRef } from 'react';
import { Coffee, Play, Square, Timer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BreakTimer: React.FC = () => {
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  // Changed NodeJS.Timeout to ReturnType<typeof setInterval> to avoid namespace errors in browser environment
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isOnBreak) {
      timerRef.current = setInterval(() => {
        setElapsed(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOnBreak]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleToggle = () => {
    if (isOnBreak) {
      setIsOnBreak(false);
      // Reset elapsed or store logic here
    } else {
      setIsOnBreak(true);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOnBreak && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-indigo-600 text-white px-6 py-4 rounded-2xl shadow-2xl mb-4 flex items-center space-x-4 border border-indigo-400"
          >
            <div className="bg-indigo-500/50 p-2 rounded-lg">
              <Coffee size={24} className="animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-100">Active Break</p>
              <p className="text-2xl font-mono font-bold leading-none">{formatTime(elapsed)}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        className={`flex items-center space-x-2 px-6 py-3 rounded-full shadow-lg font-semibold transition-all duration-300 ${
          isOnBreak 
            ? 'bg-rose-500 text-white hover:bg-rose-600' 
            : 'bg-white text-indigo-600 border border-indigo-100 hover:border-indigo-300'
        }`}
      >
        {isOnBreak ? (
          <>
            <Square size={18} fill="currentColor" />
            <span>End Break</span>
          </>
        ) : (
          <>
            <Coffee size={18} />
            <span>Start Break</span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default BreakTimer;
