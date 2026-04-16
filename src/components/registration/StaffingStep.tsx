import React from 'react';
import { Plus, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { RegistrationState } from '../../types';

interface StaffingStepProps {
  state: RegistrationState;
  setState: React.Dispatch<React.SetStateAction<RegistrationState>>;
  onNext: () => void;
}

export function StaffingStep({ state, setState, onNext }: StaffingStepProps) {
  const stations = ['Registration', 'Vaccination', 'Recovery', 'Discharge'];
  
  return (
    <div className="flex flex-col h-full gap-6 pb-32">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Volunteers</h2>
          <p className="text-slate-500">Total number available</p>
        </div>
        <span className="text-slate-300 font-medium tracking-widest text-sm">3 / 3</span>
      </div>

      <div className="bg-blue-50/50 p-8 rounded-[32px] border border-blue-100 shadow-sm">
        <div className="flex justify-between items-end mb-4">
          <span className="font-bold text-slate-900">Total Assigned</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-slate-900">3</span>
            <span className="text-slate-400 text-sm font-medium">/ 14</span>
          </div>
        </div>
        <div className="h-3.5 bg-slate-200 rounded-full overflow-hidden p-0.5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "21%" }}
            className="h-full bg-[#1e293b] rounded-full shadow-inner" 
          />
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-2xl font-bold text-slate-900 mb-1">Station Assignments</h3>
        <p className="text-slate-500 text-sm mb-8">Assign volunteers and staff personnel</p>

        <div className="space-y-4">
          {stations.map(station => (
            <div key={station} className="flex items-center gap-4 p-4 bg-blue-50/30 rounded-[20px] border border-blue-100 hover:bg-blue-50/50 transition-colors">
              <span className="text-xs font-black text-slate-800 w-24 uppercase tracking-tighter">{station}</span>
              <div className="flex-1 relative">
                <input 
                  className="w-full bg-white border border-blue-100/50 rounded-xl px-4 py-3 text-sm focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:text-slate-300 shadow-sm" 
                  placeholder="Type Full Names Here"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-300">
                  <Users size={16} />
                </div>
              </div>
              <button className="text-blue-400 hover:text-blue-600 hover:bg-blue-100 p-2 rounded-xl transition-all">
                <Plus size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end pt-1">
        <button 
          onClick={() => onNext()} 
          className="bg-blue-50 text-[#2563eb] px-10 py-3 rounded-xl font-bold text-sm hover:bg-blue-100 transition-all border border-blue-100 active:scale-[0.98]"
        >
          Save Campaign
        </button>
      </div>
    </div>
  );
}
