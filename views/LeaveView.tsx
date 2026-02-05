
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Calendar, History, Clock, Info, X, Send, CalendarRange, CheckCircle2 } from 'lucide-react';

const LeaveView: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const balances = [
    { type: 'Annual Leave', total: 20, taken: 5, pending: 2, color: 'text-indigo-600 bg-indigo-50' },
    { type: 'Sick Leave', total: 10, taken: 2, pending: 0, color: 'text-rose-600 bg-rose-50' },
    { type: 'Personal Leave', total: 5, taken: 1, pending: 0, color: 'text-emerald-600 bg-emerald-50' },
  ];

  const history = [
    { type: 'Annual', start: 'Oct 20, 2024', end: 'Oct 22, 2024', days: 3, status: 'Approved' },
    { type: 'Sick', start: 'Sep 05, 2024', end: 'Sep 05, 2024', days: 1, status: 'Approved' },
    { type: 'Annual', start: 'Aug 10, 2024', end: 'Aug 15, 2024', days: 5, status: 'Rejected' },
    { type: 'Personal', start: 'Nov 12, 2024', end: 'Nov 12, 2024', days: 1, status: 'Pending' },
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Time Off Management</h1>
          <p className="text-slate-500 font-medium">Plan your restorative breaks and track historical data</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsModalOpen(true)}
          className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-bold flex items-center justify-center shadow-xl shadow-slate-200 hover:bg-indigo-600 transition-all"
        >
          <Plus size={20} className="mr-2" /> Request Time Off
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {balances.map((balance, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-xl hover:shadow-indigo-50 transition-all duration-500"
          >
            <div className={`w-14 h-14 rounded-2xl ${balance.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
              <CalendarRange size={28} />
            </div>
            <h3 className="font-bold text-slate-900 text-xl mb-1">{balance.type}</h3>
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-50 pt-6">
              <div className="text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total</p>
                <p className="text-2xl font-black text-slate-900">{balance.total}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Taken</p>
                <p className="text-2xl font-black text-slate-900">{balance.taken}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Left</p>
                <p className="text-2xl font-black text-indigo-600">{balance.total - balance.taken}</p>
              </div>
            </div>
            {balance.pending > 0 && (
              <div className="mt-6 flex items-center justify-center text-[11px] text-amber-600 bg-amber-50 py-2 rounded-xl font-bold uppercase tracking-wider">
                <Clock size={14} className="mr-2" />
                {balance.pending} Days Awaiting Approval
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <History className="text-slate-400" size={24} />
            <h2 className="text-xl font-bold text-slate-900">Historical Records</h2>
          </div>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase rounded-lg">Fiscal Year 2024</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/30 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black">
                <th className="px-8 py-6">Leave Category</th>
                <th className="px-8 py-6">Duration Period</th>
                <th className="px-8 py-6">Units</th>
                <th className="px-8 py-6">Final Status</th>
                <th className="px-8 py-6 text-right">Reference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {history.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/30 transition-all duration-300 group">
                  <td className="px-8 py-6 font-bold text-slate-700">{item.type}</td>
                  <td className="px-8 py-6 text-sm text-slate-500 font-medium">
                    {item.start} — {item.end}
                  </td>
                  <td className="px-8 py-6 font-black text-slate-900">{item.days} Days</td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      item.status === 'Approved' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                      item.status === 'Rejected' ? 'bg-rose-50 text-rose-600 border border-rose-100' :
                      'bg-amber-50 text-amber-600 border border-amber-100'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-slate-400 group-hover:text-indigo-600 transition-colors">
                      <Info size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal - Request Time Off */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              {showSuccess ? (
                <div className="p-16 flex flex-col items-center justify-center text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8"
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">Request Submitted!</h2>
                  <p className="text-slate-500 font-medium">Your request has been routed to the administration for review.</p>
                </div>
              ) : (
                <>
                  <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-slate-900">New Leave Request</h2>
                    <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-50 rounded-xl transition-colors">
                      <X size={20} className="text-slate-400" />
                    </button>
                  </div>
                  <form onSubmit={handleApply} className="p-8 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Start Date</label>
                        <input type="date" required className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 outline-none font-bold text-slate-700 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">End Date</label>
                        <input type="date" required className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 outline-none font-bold text-slate-700 transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Leave Category</label>
                      <select required className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 outline-none font-bold text-slate-700 appearance-none transition-all">
                        <option>Annual Leave</option>
                        <option>Sick Leave</option>
                        <option>Personal / Compassionate</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Note (Optional)</label>
                      <textarea placeholder="Any additional context..." rows={3} className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 outline-none font-medium text-slate-700 transition-all" />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-slate-900 text-white py-4.5 rounded-2xl font-bold text-lg shadow-xl shadow-slate-100 hover:bg-indigo-600 transition-all active:scale-[0.98] flex items-center justify-center group"
                    >
                      Submit Request <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LeaveView;
