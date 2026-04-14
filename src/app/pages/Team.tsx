import { Search, Clock, AlertCircle, User, Calendar, Plus } from 'lucide-react';

export function Team() {
  const surgicalTeam = [
    { name: 'Dr. Smith', role: 'Lead Veterinary Surgeon', status: 'In Surgery', badge: 'REPEAT CLIENT', ops: '98 OPS' },
    { name: 'Nurse Elena', role: 'Surgical Assistant', status: 'Ready', badge: 'EQUIPMENT LEAD' },
  ];

  const otherTeam = [
    { name: 'Mark Kasau', role: 'FIELD OFFICER', initials: 'MK' },
    { name: 'Amara West', role: 'COLD CHAIN LEAD', initials: 'AW' },
    { name: 'Joe M.', role: 'COMMUNITY OUTREACH', initials: 'JM' },
    { name: 'Sarah K.', role: 'LOGISTICS AIDE', initials: 'SK' },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex gap-8">
      <div className="flex-1">
        <div className="mb-8">
          <p className="text-sm text-gray-500 font-medium">Vaccination Command &gt; Personnel Management</p>
          <h1 className="text-3xl font-bold text-blue-950">Staffing Module</h1>
          <p className="text-gray-600">Coordinate professional surgical teams, vaccination field units, and logistical volunteers for the current regional campaign.</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-blue-950 flex items-center gap-2"><User className="w-5 h-5" /> Surgical Team</h2>
            <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">4 ACTIVE</span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {surgicalTeam.map(m => (
              <div key={m.name} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-lg" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-950">{m.name}</h3>
                    <p className="text-sm text-gray-600">{m.role}</p>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded">{m.badge}</span>
                  {m.ops && <span className="bg-gray-100 text-gray-800 text-[10px] font-bold px-2 py-0.5 rounded">{m.ops}</span>}
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-red-600 font-medium flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-600" /> {m.status}</span>
                  <button className="text-blue-900 font-bold">View Profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-4">Vaccination Team</h2>
            <div className="space-y-4">
              {otherTeam.slice(0, 2).map(m => (
                <div key={m.name} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center font-bold">{m.initials}</div>
                    <div>
                      <h3 className="font-bold text-blue-950">{m.name}</h3>
                      <p className="text-xs text-gray-500 font-bold">{m.role}</p>
                    </div>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-4">General Volunteers</h2>
            <div className="space-y-4">
              {otherTeam.slice(2).map(m => (
                <div key={m.name} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 text-green-900 rounded-lg flex items-center justify-center font-bold">{m.initials}</div>
                    <div>
                      <h3 className="font-bold text-blue-950">{m.name}</h3>
                      <p className="text-xs text-gray-500 font-bold">{m.role}</p>
                    </div>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-80 bg-white p-6 rounded-xl border border-gray-200 h-fit">
        <h2 className="text-lg font-bold text-blue-950 mb-6 flex items-center gap-2"><Clock className="w-5 h-5" /> Activity Log</h2>
        <div className="space-y-6">
          <div className="flex gap-3"><div className="w-0.5 h-12 bg-gray-200" /><div><p className="text-sm font-semibold">Dr. Smith performed 5 surgeries...</p><p className="text-xs text-gray-500">2 hours ago</p></div></div>
          <div className="flex gap-3"><div className="w-0.5 h-12 bg-gray-200" /><div><p className="text-sm font-semibold">Mark Kasau updated batch...</p><p className="text-xs text-gray-500">4 hours ago</p></div></div>
          <div className="flex gap-3"><div className="w-0.5 h-12 bg-gray-200" /><div><p className="text-sm font-semibold">Nurse Elena flagged equipment...</p><p className="text-xs text-gray-500">6 hours ago</p></div></div>
        </div>
        <button className="w-full mt-8 bg-gray-100 text-gray-900 py-3 rounded-lg text-sm font-semibold hover:bg-gray-200">DOWNLOAD FULL REPORT</button>
      </div>
    </div>
  );
}
