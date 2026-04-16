import React from 'react';
import { Check, PawPrint } from 'lucide-react';

export function SpeciesCard({ label, img, selected, onToggle }: { label: string, img: string, selected: boolean, onToggle: () => void }) {
  return (
    <div 
      onClick={onToggle}
      className={`group cursor-pointer p-5 rounded-[28px] transition-all border-2 flex flex-col items-center gap-4 relative overflow-hidden ${selected ? 'bg-blue-50/50 border-[#2563eb] shadow-lg shadow-blue-100' : 'bg-slate-50/50 border-transparent hover:bg-slate-100'}`}
    >
      <div className="absolute top-4 right-4 transition-all duration-300">
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selected ? 'bg-[#2563eb] border-[#2563eb]' : 'bg-white border-slate-200'}`}>
          {selected && <Check size={14} className="text-white" strokeWidth={4} />}
        </div>
      </div>
      <div className={`w-20 h-20 rounded-[22px] overflow-hidden shadow-md transition-transform duration-500 mt-2 ${selected ? 'scale-110' : 'group-hover:scale-105'}`}>
        <img src={img} alt={label} className="w-full h-full object-cover" />
      </div>
      <span className={`text-base font-bold tracking-tight mb-2 ${selected ? 'text-slate-900' : 'text-slate-600'}`}>{label}</span>
    </div>
  );
}
