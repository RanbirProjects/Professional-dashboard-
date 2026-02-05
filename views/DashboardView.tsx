
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  TrendingUp, 
  ClipboardList,
  ChevronRight,
  Plus,
  ArrowUpRight,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardView: React.FC = () => {
  const stats = [
    { label: 'Available Time Off', value: '18 Days', icon: Calendar, color: 'bg-emerald-50 text-emerald-600', trend: '+2 this month', path: '/leave' },
    { label: 'Ongoing Objectives', value: '12', icon: ClipboardList, color: 'bg-amber-50 text-amber-600', trend: '4 critical items', path: '/tasks' },
    { label: 'Logged Capacity', value: '158h', icon: Clock, color: 'bg-indigo-50 text-indigo-600', trend: '98.7% of target', path: '/' },
    { label: 'Growth Score', value: '94%', icon: TrendingUp, color: 'bg-sky-50 text-sky-600', trend: 'Above avg. performance', path: '/' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-10"
    >
      {/* Hero Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <Link to={stat.path} key={idx}>
            <motion.div 
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-7 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-indigo-50/50 transition-all duration-500 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl ${stat.color} transition-all duration-500 group-hover:scale-110`}>
                  <stat.icon size={26} />
                </div>
                <div className="p-2 rounded-full hover:bg-slate-50 text-slate-300 group-hover:text-slate-900 transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">{stat.label}</h3>
                <p className="text-3xl font-black text-slate-900 mt-2 tracking-tight">{stat.value}</p>
                <div className="flex items-center mt-4 pt-4 border-t border-slate-50">
                   <span className="text-[11px] font-bold text-slate-400 group-hover:text-indigo-500 transition-colors uppercase tracking-wider">{stat.trend}</span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recent Workload */}
        <motion.div variants={item} className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Assigned Priorities</h2>
              <p className="text-slate-400 text-sm font-medium">Focused objectives for the current cycle</p>
            </div>
            <Link to="/tasks" className="text-xs font-black text-slate-900 uppercase tracking-widest hover:text-indigo-600 flex items-center group">
              Full View <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { title: 'Refine Client Experience Architecture', priority: 'High', due: 'Tomorrow', status: 'In Progress' },
              { title: 'Corporate Governance Documentation', priority: 'Medium', due: 'In 3 days', status: 'To Do' },
              { title: 'Strategic Resource Allocation', priority: 'High', due: 'Oct 15', status: 'To Do' },
              { title: 'Technical Stability Maintenance', priority: 'Low', due: 'Tomorrow', status: 'Completed' },
            ].map((task, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 rounded-[1.5rem] bg-slate-50/50 border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300 group">
                <div className="flex items-center space-x-5">
                  <div className={`w-3 h-3 rounded-full shadow-sm ${
                    task.priority === 'High' ? 'bg-rose-500' : task.priority === 'Medium' ? 'bg-amber-500' : 'bg-emerald-500'
                  }`} />
                  <div>
                    <h4 className="font-bold text-slate-800 tracking-tight text-lg">{task.title}</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase mt-1 tracking-wider">Deadline: {task.due}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`text-[10px] px-4 py-1.5 rounded-full font-black uppercase tracking-widest border ${
                    task.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-white text-slate-500 border-slate-100'
                  }`}>
                    {task.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Balance Visualization */}
        <motion.div variants={item} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Availability</h2>
            <p className="text-slate-400 text-sm font-medium">Your current rest allocation</p>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-1 space-y-10">
            <div className="relative w-48 h-48 group">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="84"
                  stroke="currentColor"
                  strokeWidth="14"
                  fill="transparent"
                  className="text-slate-50"
                />
                <motion.circle
                  initial={{ strokeDashoffset: 528 }}
                  animate={{ strokeDashoffset: 528 - (528 * 70) / 100 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  cx="96"
                  cy="96"
                  r="84"
                  stroke="currentColor"
                  strokeWidth="14"
                  fill="transparent"
                  strokeDasharray={528}
                  className="text-indigo-600 stroke-round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-slate-900 tracking-tighter">18</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Available</span>
              </div>
            </div>

            <div className="w-full space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                  <span className="text-slate-400">Rest Days Utilized</span>
                  <span className="text-slate-900">7 Days</span>
                </div>
                <div className="w-full bg-slate-50 h-3 rounded-full overflow-hidden p-0.5 border border-slate-100">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '35%' }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="bg-indigo-600 h-full rounded-full" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                  <span className="text-slate-400">Requests Awaiting</span>
                  <span className="text-slate-900">2 Days</span>
                </div>
                <div className="w-full bg-slate-50 h-3 rounded-full overflow-hidden p-0.5 border border-slate-100">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '12%' }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                    className="bg-amber-400 h-full rounded-full" 
                  />
                </div>
              </div>
            </div>

            <Link to="/leave" className="w-full">
              <motion.button 
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-slate-900 hover:bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center shadow-xl shadow-slate-100"
              >
                <Target size={18} className="mr-3" /> Action Plan
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DashboardView;
