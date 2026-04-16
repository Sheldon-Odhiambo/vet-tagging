import React from 'react';
import { User } from 'lucide-react';

interface OnboardingStepProps {
  onSelect: (isNew: boolean) => void;
}

export function OnboardingStep({ onSelect }: OnboardingStepProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Admin Command Center</h2>
        <p className="text-slate-500">To begin organizing your campaign, please select your admin status.</p>
      </div>

      <div className="space-y-4">
        <button 
          onClick={() => onSelect(true)}
          className="w-full p-6 bg-blue-50/50 hover:bg-blue-50 border border-blue-100 rounded-[20px] transition-all group flex items-start gap-4 text-left shadow-sm hover:shadow-md"
        >
          <div className="p-3 bg-white rounded-xl shadow-sm text-[#2563eb] group-hover:scale-110 transition-transform shrink-0">
            <User size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">New Administrator</h4>
            <p className="text-sm text-slate-500">Start fresh. We'll help you set up your profile and your very first campaign in one go.</p>
          </div>
        </button>

        <button 
          onClick={() => onSelect(false)}
          className="w-full p-6 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-[20px] transition-all group flex items-start gap-4 text-left shadow-sm hover:shadow-md"
        >
          <div className="p-3 bg-white rounded-xl shadow-sm text-slate-600 group-hover:scale-110 transition-transform shrink-0">
            <User size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Returning Administrator</h4>
            <p className="text-sm text-slate-500">Welcome back. Bypass profile setup and jump straight into your new campaign details.</p>
          </div>
        </button>
      </div>

      <div className="mt-auto text-center py-6">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium leading-loose">
          By using this platform, you accept PawCare's <br/>
          <span className="text-slate-600 cursor-pointer hover:underline">Terms of Use & Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
