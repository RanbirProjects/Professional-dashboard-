
import React, { useState } from 'react';
import { Bell, Search, Settings, LogOut, User as UserIcon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-20">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">Good Morning, Ranbir</h1>
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{today}</p>
      </div>

      <div className="flex items-center space-x-6">
        <div className="hidden md:flex items-center bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2 w-72 focus-within:border-indigo-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-50 transition-all duration-300">
          <Search size={18} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search for tasks or files..." 
            className="bg-transparent border-none focus:outline-none ml-2 text-sm text-slate-600 w-full font-medium"
          />
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className="relative ml-4">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-3 p-1 pr-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ranbir" 
                className="w-9 h-9 rounded-xl object-cover shadow-sm ring-2 ring-indigo-50 bg-slate-100"
                alt="User"
              />
              <div className="text-left hidden sm:block">
                <p className="text-sm font-bold text-slate-700 leading-none">Ranbir Singh</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Lead Executive</p>
              </div>
              <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${showProfileMenu ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showProfileMenu && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-56 bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 rounded-2xl p-2 z-50 overflow-hidden"
                >
                  <button className="flex items-center w-full p-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                    <UserIcon size={18} className="mr-3 text-slate-400" /> My Profile
                  </button>
                  <button className="flex items-center w-full p-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                    <Settings size={18} className="mr-3 text-slate-400" /> Account Settings
                  </button>
                  <div className="my-2 border-t border-slate-50"></div>
                  <button 
                    onClick={onLogout}
                    className="flex items-center w-full p-3 text-sm font-bold text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                  >
                    <LogOut size={18} className="mr-3" /> Sign Out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
