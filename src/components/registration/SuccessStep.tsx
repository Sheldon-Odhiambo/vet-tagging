import React from 'react';
import { PawPrint } from 'lucide-react';
import { motion } from 'motion/react';

interface SuccessStepProps {
  onDashboard: () => void;
}

export function SuccessStep({ onDashboard }: SuccessStepProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-[#3b82f6] to-[#1e1b4b] rounded-[32px] text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center w-full max-w-lg"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
          All Paws on Deck!
        </h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">
            Your campaign is ready to go live.
          </h3>
          <p className="text-slate-200 text-sm">
            Head to the dashboard to start checking in your first patients.
          </p>
        </div>

        <button 
          onClick={onDashboard}
          className="bg-white text-[#2563eb] px-10 py-3 rounded-xl font-bold text-sm shadow-xl hover:bg-slate-50 hover:scale-105 transition-all mb-20 active:scale-95"
        >
          Proceed to Dashboard
        </button>

        <div className="flex items-center gap-4 mt-auto">
          <div className="bg-[#3b82f6] p-3 rounded-2xl shadow-lg ring-1 ring-white/10">
            <PawPrint className="text-white" size={32} strokeWidth={2.5} />
          </div>
          <span className="text-white font-bold text-5xl tracking-tight">PawCare</span>
        </div>
      </motion.div>
    </div>
  );
}
