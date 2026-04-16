import React from 'react';
import { Users } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  volunteers: number;
  key?: React.Key;
}

function StatCard({ title, value, volunteers }: StatCardProps) {
  const avatars = [
    '/assets/dog image.png',
    '/assets/cat image.png',
  ];

  return (
    <div className="bg-white rounded-[15px] border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
      <div className="p-6 pb-4">
        <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-2">{title}</h4>
        <div className="text-3xl font-black text-slate-900">{value}</div>
      </div>
      
      <div className="mt-auto bg-[#2563eb] p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 p-1 rounded-lg">
            <Users size={10} className="text-white" />
          </div>
          <span className="text-white/95 text-[9px] font-bold uppercase tracking-tighter">
            {volunteers} Dedicated Volunteers
          </span>
        </div>
        <div className="flex -space-x-2">
          {avatars.map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt="Advatar"
              referrerPolicy="no-referrer"
              className="w-6 h-6 rounded-full border-2 border-[#2563eb] object-cover" 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function StatGrid() {
  const stats = [
    { title: 'Current Registered Pets', value: '100', volunteers: 8 },
    { title: 'Current Vaccinations', value: '76', volunteers: 8 },
    { title: 'Current Pets in Surgery', value: '50', volunteers: 8 },
    { title: 'Current Pets in Recovery', value: '26', volunteers: 8 },
    { title: 'Current Pets Discharged', value: '16', volunteers: 8 },
    { title: 'Pet Mortality', value: '8', volunteers: 8 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, i) => (
        <StatCard 
          key={i} 
          title={stat.title} 
          value={stat.value} 
          volunteers={stat.volunteers} 
        />
      ))}
    </div>
  );
}
