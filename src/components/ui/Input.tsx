import React from 'react';

export function Input({ label, placeholder, icon }: { label: string, placeholder: string, icon?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label className="text-[11px] font-bold text-slate-800 uppercase tracking-widest pl-1">{label}</label>
      <div className="relative">
        <input 
          className="w-full border border-blue-100/50 rounded-xl px-4 py-3.5 text-sm focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:text-slate-300 shadow-sm bg-white"
          placeholder={placeholder}
        />
        {icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
