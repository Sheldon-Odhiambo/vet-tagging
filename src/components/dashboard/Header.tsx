import React from 'react';
import { Search } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center gap-8 mb-8">
      {/* Search Bar */}
      <div className="flex-1 relative">
        <input 
          type="text" 
          placeholder="Search items..." 
          className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 text-sm shadow-sm focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:text-slate-300"
        />
        <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
      </div>

      {/* Progress */}
      <div className="w-64">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Campaign data status</span>
          <span className="text-xs font-bold text-[#2563eb]">0%</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#1e293b] w-[2%] rounded-full" />
        </div>
      </div>
    </div>
  );
}
