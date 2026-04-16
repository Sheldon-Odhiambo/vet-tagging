import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { StatGrid } from './StatGrid';
import { UserProfileAndMap } from './UserProfileAndMap';
import { CampaignArchive } from './CampaignArchive';
import { FileText } from 'lucide-react';

export function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      {/* Sidebar - Left */}
      <Sidebar activeTab="dashboard" />

      {/* Main Content - Right */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-12 pt-10">
          <div className="max-w-6xl mx-auto">
            <Header />

            {/* Active Campaign Hero */}
            <div className="bg-white rounded-[15px] border border-slate-50 p-6 mb-8 shadow-[0_6px_28px_rgba(0,0,0,0.08)] flex items-center justify-between group hover:shadow-lg hover:shadow-blue-900/5 transition-all">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-[#2563eb]/10 rounded-2xl group-hover:scale-110 transition-transform">
                  <FileText className="text-[#2563eb]" size={32} />
                </div>
                <div className="space-y-2">
                  <span className="bg-[#2563eb] text-white px-2 py-0.5 rounded-md font-black text-[9px] uppercase tracking-widest shadow-lg shadow-blue-200">
                    Active Campaign
                  </span>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">Kawangware North Rabies Vaccination Drive</h2>
                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">April 30th, 2024</p>
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-6 py-3 rounded-xl font-black text-xs text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-all active:scale-95 group/btn">
                Preview PDF
                <FileText size={16} className="group-hover/btn:text-[#2563eb] transition-colors" />
              </button>
            </div>

            {/* Metrics */}
            <StatGrid />

            {/* Middle Section */}
            <UserProfileAndMap />

            {/* Archive */}
            <CampaignArchive />
          </div>
        </div>
      </div>
    </div>
  );
}
