
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  CalendarDays, 
  FileText, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, onLogout }) => {
  const location = useLocation();

  const menuItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/' },
    { name: 'My Tasks', icon: CheckSquare, path: '/tasks' },
    { name: 'Leaves', icon: CalendarDays, path: '/leave' },
    { name: 'Documents', icon: FileText, path: '/payslips' },
  ];

  return (
    <motion.aside 
      initial={false}
      animate={{ width: isOpen ? 260 : 80 }}
      className="bg-white border-r border-slate-200 h-full flex flex-col shadow-sm z-30"
    >
      <div className="p-6 flex items-center justify-between">
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-bold text-xl text-indigo-600 tracking-tight"
          >
            Ranbir Singh<span className="text-slate-900">Hub</span>
          </motion.div>
        )}
        <button 
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg bg-slate-50 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex items-center p-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon size={22} className={isActive ? 'text-white' : 'group-hover:text-indigo-600'} />
              {isOpen && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="ml-3 font-medium"
                >
                  {item.name}
                </motion.span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-100 space-y-2">
        {isOpen && (
          <div className="px-3 py-4 bg-slate-50 rounded-2xl mb-2 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ranbir" alt="RS" className="w-8 h-8" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-slate-800 truncate">Ranbir Singh</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase truncate">Employer Portal</p>
            </div>
          </div>
        )}
        <button 
          onClick={onLogout}
          className="flex items-center w-full p-3 text-slate-500 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition-all group"
        >
          <LogOut size={22} />
          {isOpen && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-3 font-medium"
            >
              Sign Out
            </motion.span>
          )}
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
