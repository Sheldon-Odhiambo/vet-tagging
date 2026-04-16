import React from 'react';
import { 
  LayoutGrid, 
  Database, 
  Users, 
  PlusSquare, 
  Settings, 
  HelpCircle,
  PawPrint
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
}

export function Sidebar({ activeTab }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'database', label: 'Patient Database', icon: Database },
    { id: 'teams', label: 'Teams', icon: Users },
  ];

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'support', label: 'Support', icon: HelpCircle },
  ];

  return (
    <div className="w-72 bg-gradient-to-b from-[#1e293b] to-[#2563eb] h-full flex flex-col p-8 text-white">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-16">
        <div className="bg-[#2563eb] p-2 rounded-lg shadow-lg">
          <PawPrint size={24} className="text-white" />
        </div>
        <span className="text-2xl font-bold tracking-tight">PawCare</span>
      </div>

      {/* Primary Nav */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`w-full flex items-center justify-between px-5 py-3 rounded-xl transition-all font-bold ${
              activeTab === item.id 
                ? 'bg-white text-[#2563eb] shadow-lg' 
                : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-4 text-xs">
              <item.icon size={18} />
              {item.label}
            </span>
            <item.icon size={14} className={activeTab === item.id ? 'opacity-100' : 'opacity-0'} />
          </button>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="space-y-5 pt-6 border-t border-white/10">
        <button className="w-full bg-white text-slate-800 px-5 py-3.5 rounded-xl font-bold text-xs flex items-center justify-between shadow-[0_6px_28px_rgba(0,0,0,0.12)] hover:bg-slate-50 transition-all group">
          <span className="flex items-center gap-4">
            New Campaign
          </span>
          <PlusSquare size={18} className="text-slate-400 group-hover:text-[#2563eb] transition-colors" />
        </button>

        <div className="space-y-4 px-2">
          {bottomItems.map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center justify-between text-white/70 hover:text-white transition-colors group"
            >
              <span className="flex items-center gap-4 text-sm font-semibold">
                {item.label}
              </span>
              <item.icon size={18} className="text-white/40 group-hover:text-white transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
