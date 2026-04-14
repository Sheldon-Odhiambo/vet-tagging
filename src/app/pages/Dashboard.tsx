import { Target, Users, Briefcase, CheckCircle, MapPin, Clock, AlertCircle, ArrowRight, Plus, TrendingUp } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Command Center</p>
          <h1 className="text-2xl font-bold text-blue-950">Dashboard Overview</h1>
        </div>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-950 flex items-center gap-2">
          <Plus className="w-4 h-4" /> Start New Registration
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-xl border border-gray-200 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 font-semibold mb-1 uppercase">Total Pets Treated</p>
            <p className="text-3xl font-bold text-blue-950">1,284</p>
            <p className="text-xs text-green-700 font-medium mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> 12% from last week</p>
          </div>
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">🐾</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 font-semibold mb-1 uppercase">Vaccines Administered</p>
            <p className="text-3xl font-bold text-blue-950">2,410</p>
            <p className="text-xs text-blue-700 font-medium mt-1 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Daily Target Reached</p>
          </div>
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">💉</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 font-semibold mb-1 uppercase">Active Personnel</p>
            <p className="text-3xl font-bold text-blue-950">42</p>
            <p className="text-xs text-gray-600 font-medium mt-1 flex items-center gap-1"><Briefcase className="w-3 h-3" /> 4 Clinics On-site</p>
          </div>
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">💼</div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <h2 className="text-lg font-bold text-blue-950 mb-4">Active Campaigns</h2>
          <div className="bg-white p-4 rounded-xl border border-gray-200 flex gap-4">
            <div className="flex-1">
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Primary Drive</span>
              <h3 className="text-lg font-bold text-blue-950 mt-1 mb-2">Nairobi West Vaccination Drive</h3>
              <p className="text-xs text-gray-600 mb-4">Comprehensive immunization program covering Westlands, Kibera, and Lang'ata areas. Focus on Rabies and DHPP.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-[10px] text-gray-500 font-semibold uppercase">Progress</p>
                  <p className="text-sm font-bold text-blue-950">78%</p>
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-1"><div className="bg-blue-900 h-1 rounded-full" style={{width: '78%'}}></div></div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-[10px] text-gray-500 font-semibold uppercase">Avg. Wait Time</p>
                  <p className="text-sm font-bold text-blue-950">12 mins</p>
                  <p className="text-[10px] text-gray-500">Optimized Flow</p>
                </div>
              </div>
            </div>
            <div className="w-48 h-48 bg-gray-300 rounded-lg overflow-hidden">
              <img src="https://picsum.photos/seed/dog/300/300" alt="Campaign" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <h2 className="text-lg font-bold text-blue-950 mb-4">Live Feed</h2>
          <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-4">
            <div className="flex gap-3"><div className="w-1 h-10 rounded bg-red-700" /><div><p className="text-[10px] font-bold text-red-700 uppercase">Critical Status</p><p className="text-xs font-semibold">Emergency Admission</p><p className="text-[10px] text-gray-500">Unit 4: Golden Retriever (Heat Stress) • 2 mins ago</p></div></div>
            <div className="flex gap-3"><div className="w-1 h-10 rounded bg-green-800" /><div><p className="text-[10px] font-bold text-green-800 uppercase">Success</p><p className="text-xs font-semibold">Vaccine Milestone</p><p className="text-[10px] text-gray-500">Nairobi West hit 1,000 Rabies doses • 15 mins ago</p></div></div>
            <div className="flex gap-3"><div className="w-1 h-10 rounded bg-blue-700" /><div><p className="text-[10px] font-bold text-blue-700 uppercase">Operations</p><p className="text-xs font-semibold">Shift Change</p><p className="text-[10px] text-gray-500">Team B reporting to Sector 7 • 45 mins ago</p></div></div>
            <button className="w-full bg-gray-100 text-gray-900 py-2 rounded-lg text-xs font-semibold hover:bg-gray-200">View Detailed Logs</button>
          </div>
        </div>
      </div>
    </div>
  );
}
