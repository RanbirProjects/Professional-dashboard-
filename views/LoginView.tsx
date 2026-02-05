
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface LoginViewProps {
  onLogin: (id: string) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [empId, setEmpId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (empId && password) {
      setIsLoading(true);
      // Brief aesthetic delay
      setTimeout(() => {
        onLogin(empId);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-50/50 rounded-full blur-3xl"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 text-white rounded-[2rem] shadow-2xl shadow-indigo-200 mb-6"
          >
            <ShieldCheck size={40} strokeWidth={2.5} />
          </motion.div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Ranbir Singgh Workforce</h1>
          <p className="text-slate-500 mt-3 font-medium text-lg italic">Welcome to your workspace.</p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Employee ID</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  value={empId}
                  onChange={(e) => setEmpId(e.target.value)}
                  placeholder="Enter your ID"
                  className="w-full pl-12 pr-4 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all outline-none font-semibold text-slate-700 placeholder:text-slate-300"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors">Forgot Access?</a>
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 transition-all outline-none font-semibold text-slate-700 placeholder:text-slate-300"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-900 text-white py-4.5 rounded-2xl font-bold flex items-center justify-center space-x-3 shadow-2xl shadow-slate-200 hover:bg-indigo-600 hover:shadow-indigo-100 transition-all active:scale-[0.98] disabled:opacity-70 group"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="text-lg">Enter Dashboard</span>
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100/50 flex flex-col items-center">
            <button className="flex items-center text-slate-500 hover:text-slate-800 font-bold text-sm transition-colors group">
              <HelpCircle size={16} className="mr-2 text-slate-300 group-hover:text-indigo-500" /> 
              Having trouble signing in?
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-slate-400 text-xs font-semibold uppercase tracking-widest">
          Secured by <span className="text-indigo-500">Ranbir Singgh Security</span>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginView;
