
import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Search, CreditCard, ChevronRight, FileDown, ShieldCheck, Briefcase } from 'lucide-react';

const PayslipsView: React.FC = () => {
  const payslips = [
    { month: 'September 2024', amount: '$6,400.00', date: 'Sep 30', id: 'FIN-09122-RS' },
    { month: 'August 2024', amount: '$6,400.00', date: 'Aug 31', id: 'FIN-08231-RS' },
    { month: 'July 2024', amount: '$6,400.00', date: 'Jul 31', id: 'FIN-07621-RS' },
    { month: 'June 2024', amount: '$6,400.00', date: 'Jun 30', id: 'FIN-06512-RS' },
  ];

  const memos = [
    { title: 'Strategic Remote Operations Policy', date: 'Oct 01, 2024', size: '2.4 MB', type: 'Policy' },
    { title: 'Corporate Calendar 2025', date: 'Sep 25, 2024', size: '1.1 MB', type: 'Notice' },
    { title: 'Executive Health & Wellness Updates', date: 'Aug 15, 2024', size: '3.5 MB', type: 'Benefits' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="space-y-10"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Security & Document Vault</h1>
          <p className="text-slate-500 font-medium">Encrypted access to your financial and corporate records</p>
        </div>
        <div className="flex items-center bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-emerald-100">
           <ShieldCheck size={16} className="mr-2" /> Encrypted Connection
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Financial Logistics Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                <CreditCard size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Compensation Records</h2>
            </div>
          </div>
          <div className="grid gap-4">
            {payslips.map((slip, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 8, backgroundColor: '#ffffff' }}
                className="bg-slate-50/50 p-6 rounded-3xl border border-transparent hover:border-indigo-100 shadow-sm flex items-center justify-between transition-all duration-300 group"
              >
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 shadow-sm group-hover:shadow-md transition-all">
                    <FileText size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg leading-tight">{slip.month}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Ref: {slip.id} • {slip.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-8 text-right">
                  <div className="hidden sm:block">
                    <p className="text-xl font-black text-slate-900 tracking-tighter">{slip.amount}</p>
                    <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mt-1">Disbursed</p>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-2xl shadow-sm transition-all border border-slate-100"
                  >
                    <Download size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          <button className="w-full py-4 text-xs font-black text-slate-400 hover:text-indigo-600 uppercase tracking-[0.2em] flex items-center justify-center transition-all group">
            Audit Complete History <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Corporate Assets / Intelligence */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-slate-900 text-white rounded-2xl">
                <FileDown size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Corporate Intelligence</h2>
            </div>
          </div>
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden p-2">
            {memos.map((memo, idx) => (
              <div key={idx} className="p-8 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-all group cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex space-x-5">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                      <Briefcase size={28} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">{memo.type}</span>
                        <span className="text-[9px] font-bold text-slate-300">Published {memo.date}</span>
                      </div>
                      <h3 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-indigo-600 transition-colors">{memo.title}</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase mt-2 tracking-widest">Asset Size: {memo.size}</p>
                    </div>
                  </div>
                  <button className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 group-hover:text-indigo-600 hover:underline pt-2">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 text-white relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-3 tracking-tight">Need specific documentation?</h3>
              <p className="text-slate-400 text-sm mb-8 max-w-xs font-medium leading-relaxed">Securely request employment verification, custom certificates, or payroll clearance from our executive support team.</p>
              <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-50 transition-all flex items-center group">
                Open Secure Channel <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="absolute top-[-20%] right-[-10%] opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 pointer-events-none">
              <ShieldCheck size={300} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PayslipsView;
