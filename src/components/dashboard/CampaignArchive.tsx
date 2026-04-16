import React from 'react';
import { FileText, Download, ChevronRight } from 'lucide-react';

export function CampaignArchive() {
  const campaigns = [
    { title: 'Kawangware North Rabies Vaccination Drive', date: 'April 30th, 2024 - July 2nd, 2024' },
    { title: 'Kawangware North Rabies Vaccination Drive', date: 'April 30th, 2024 - July 2nd, 2024' },
    { title: 'Kawangware North Rabies Vaccination Drive', date: 'April 30th, 2024 - July 2nd, 2024' },
    { title: 'Kawangware North Rabies Vaccination Drive', date: 'April 30th, 2024 - July 2nd, 2024' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">Campaign Archive</h3>
        <button className="text-[#2563eb] font-bold text-sm hover:underline flex items-center gap-1">
          View more <ChevronRight size={14} />
        </button>
      </div>

      <div className="space-y-3">
        {campaigns.map((camp, i) => (
          <div key={i} className="bg-white rounded-[15px] border border-slate-50 p-4 flex items-center justify-between group hover:border-[#2563eb]/20 hover:shadow-lg hover:shadow-blue-900/5 transition-all">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-[#2563eb]/10 transition-colors">
                <FileText className="text-slate-400 group-hover:text-[#2563eb]" size={20} />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="bg-[#2563eb] text-white px-2 py-0.5 rounded-md font-black text-[7px] uppercase tracking-widest">Active Campaign</span>
                </div>
                <h4 className="font-bold text-sm text-slate-800 tracking-tight">{camp.title}</h4>
                <div className="text-slate-400 text-[10px] font-medium">
                  {camp.date}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="bg-blue-50 text-[#2563eb] px-5 py-2 rounded-xl font-bold text-[10px] hover:bg-blue-100 transition-colors border border-blue-100 uppercase">
                Preview PDF
              </button>
              <button className="text-slate-300 hover:text-[#2563eb] transition-colors">
                <Download size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-6">
        <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-slate-800 transition-all shadow-xl active:scale-95">
          End current campaign
        </button>
      </div>
    </div>
  );
}
