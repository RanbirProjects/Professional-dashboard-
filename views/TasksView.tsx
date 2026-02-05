
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Plus, MoreVertical, Calendar, Target, Clock, CheckCircle2 } from 'lucide-react';

const TasksView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tasks = [
    { id: 1, title: 'Strategic Design Refinement', category: 'Creative', priority: 'High', due: 'Oct 12', status: 'to-do' },
    { id: 2, title: 'Identity Integration: System Flow', category: 'Operations', priority: 'Medium', due: 'Oct 14', status: 'in-progress' },
    { id: 3, title: 'Professional Stakeholder Review', category: 'Strategy', priority: 'Low', due: 'Oct 15', status: 'to-do' },
    { id: 4, title: 'Q3 Performance Logistics', category: 'Executive', priority: 'High', due: 'Oct 10', status: 'completed' },
    { id: 5, title: 'Annual Tactical Roadmap', category: 'Planning', priority: 'Medium', due: 'Tomorrow', status: 'in-progress' },
  ];

  const filteredTasks = activeTab === 'all' ? tasks : tasks.filter(t => t.status === activeTab);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Mission Board</h1>
          <p className="text-slate-500 font-medium">Track and execute your professional mandates</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-indigo-600 text-white px-8 py-3.5 rounded-2xl font-bold shadow-2xl shadow-indigo-100 hover:bg-slate-900 transition-all flex items-center justify-center"
        >
          <Plus size={20} className="mr-2" /> New Mandate
        </motion.button>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden p-2">
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 gap-6">
          <div className="flex bg-slate-100 p-1.5 rounded-2xl">
            {['all', 'to-do', 'in-progress', 'completed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === tab 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Find specific items..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-[1.25rem] pl-12 pr-4 py-3 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all"
              />
            </div>
            <button className="p-3.5 border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors">
              <Filter size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto pb-6">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black">
                <th className="pb-6 pl-10 pt-4">Mandate Name</th>
                <th className="pb-6 pt-4">Cluster</th>
                <th className="pb-6 pt-4">Priority</th>
                <th className="pb-6 pt-4">Timeframe</th>
                <th className="pb-6 pt-4">Execution Status</th>
                <th className="pb-6 text-right pr-10 pt-4">Options</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <AnimatePresence mode="popLayout">
                {filteredTasks.map((task, idx) => (
                  <motion.tr 
                    layout
                    key={task.id} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group hover:bg-slate-50/50 transition-all duration-300"
                  >
                    <td className="py-6 pl-10">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${task.status === 'completed' ? 'text-emerald-500 bg-emerald-50' : 'text-slate-400 bg-slate-100'}`}>
                          {task.status === 'completed' ? <CheckCircle2 size={16} /> : <Target size={16} />}
                        </div>
                        <span className="font-bold text-slate-800 tracking-tight text-lg">{task.title}</span>
                      </div>
                    </td>
                    <td className="py-6">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">{task.category}</span>
                    </td>
                    <td className="py-6">
                      <span className={`text-[10px] px-3 py-1 rounded-lg font-black uppercase tracking-[0.1em] border ${
                        task.priority === 'High' ? 'bg-rose-50 text-rose-600 border-rose-100' :
                        task.priority === 'Medium' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                        'bg-emerald-50 text-emerald-600 border-emerald-100'
                      }`}>
                        {task.priority}
                      </span>
                    </td>
                    <td className="py-6">
                      <div className="flex items-center text-sm text-slate-500 font-medium">
                        <Clock size={14} className="mr-2 opacity-50" />
                        {task.due}
                      </div>
                    </td>
                    <td className="py-6">
                      <span className={`text-[10px] px-4 py-1.5 rounded-full font-black uppercase tracking-wider ${
                        task.status === 'completed' ? 'bg-emerald-50 text-emerald-700' :
                        task.status === 'in-progress' ? 'bg-indigo-50 text-indigo-700' :
                        'bg-slate-100 text-slate-500'
                      }`}>
                        {task.status.replace('-', ' ')}
                      </span>
                    </td>
                    <td className="py-6 text-right pr-10">
                      <button className="p-2.5 text-slate-300 hover:text-slate-900 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default TasksView;
