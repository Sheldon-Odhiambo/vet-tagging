import { FileText, Download, Target, Users, Briefcase, TrendingUp, ArrowRight, BarChart3, ChevronDown, MoreVertical } from 'lucide-react';

export function Reports() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-sm text-gray-500 font-medium">REPORTS &gt; Q3 VACCINATION CAMPAIGN</p>
          <h1 className="text-3xl font-bold text-blue-950">Advanced Campaign Analytics</h1>
          <p className="text-gray-600">In-depth performance breakdown for the <span className="font-semibold text-blue-900">Rabies Awareness & Vaccination Initiative</span> (Jul - Sep 2023).</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50"><FileText className="w-4 h-4" /> Export CSV</button>
          <button className="bg-blue-950 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-900"><Download className="w-4 h-4" /> Download PDF</button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500 font-semibold flex items-center gap-2 mb-2"><Target className="w-4 h-4 text-blue-900" /> TOTAL DOSES</p>
          <p className="text-4xl font-bold text-blue-950">8,422</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500 font-semibold flex items-center gap-2 mb-2"><TrendingUp className="w-4 h-4 text-blue-900" /> SUCCESS RATE</p>
          <p className="text-4xl font-bold text-blue-950">94.2%</p>
        </div>
        <div className="col-span-2 bg-blue-900 p-6 rounded-xl text-white">
          <p className="text-sm text-blue-200 font-semibold mb-1">STAFF EFFICIENCY</p>
          <p className="text-2xl font-bold mb-2">Average 14.2 min</p>
          <p className="text-sm text-blue-200">Per patient interaction. Improved by 12% from Q2.</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-7 bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-blue-950">Vaccination Temporal Velocity</h2>
            <div className="flex gap-4 text-xs font-semibold text-gray-500"><span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-900" /> ACTUAL</span><span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-gray-200" /> TARGET</span></div>
          </div>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">Chart Placeholder</div>
        </div>
        <div className="col-span-5 bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-bold text-blue-950 mb-4">Outcome Distribution</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">Chart Placeholder</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-blue-950">Clinic Performance Matrix</h2>
          <div className="flex gap-2"><button className="p-2 border border-gray-300 rounded"><ChevronDown className="w-4 h-4" /></button><button className="p-2 border border-gray-300 rounded"><MoreVertical className="w-4 h-4" /></button></div>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-200">
              <th className="py-3">SURGICAL LEAD</th>
              <th className="py-3">TOTAL PROCEDURES</th>
              <th className="py-3">AVG. TIME (MIN)</th>
              <th className="py-3">EFFICIENCY GRADE</th>
              <th className="py-3">TREND</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Dr. Sarah Jenkins', role: 'Senior Pathologist', proc: 412, time: 12.5, grade: 'OPTIMAL', trend: 'up' },
              { name: 'Nurse Michael Vane', role: 'Lead Technician', proc: 388, time: 14.8, grade: 'OPTIMAL', trend: 'flat' },
              { name: 'Dr. Elena Rodriguez', role: 'Junior Clinician', proc: 254, time: 18.2, grade: 'NOMINAL', trend: 'up' },
            ].map(s => (
              <tr key={s.name} className="border-b border-gray-100">
                <td className="py-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full" />
                  <div><p className="font-bold text-blue-950">{s.name}</p><p className="text-xs text-gray-500">{s.role}</p></div>
                </td>
                <td className="py-4">{s.proc}</td>
                <td className="py-4">{s.time}</td>
                <td className="py-4"><span className={`px-2 py-1 rounded-full text-xs font-bold ${s.grade === 'OPTIMAL' ? 'bg-blue-100 text-blue-800' : 'bg-blue-100 text-blue-800'}`}>{s.grade}</span></td>
                <td className="py-4"><TrendingUp className={`w-5 h-5 ${s.trend === 'up' ? 'text-blue-600' : 'text-gray-400'}`} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="w-full mt-4 text-blue-900 font-bold text-sm">VIEW ALL STAFF (12)</button>
      </div>
    </div>
  );
}
