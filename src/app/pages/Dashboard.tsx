import React from "react";
import {
  Users,
  Briefcase,
  CheckCircle,
  AlertTriangle,
  Syringe,
  Calendar,
  MapPin,
  Clock,
  Package,
  Stethoscope,
  Power,
} from "lucide-react";

export function Dashboard() {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP BAR: Campaign Info & End Session */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                Active Campaign
              </span>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Started: 8:05 AM
              </span>
            </div>
            <h1 className="text-2xl font-black text-blue-950">
              Kawangware North Rabies Vaccination Drive
            </h1>
            <div className="flex flex-wrap gap-4 mt-2 text-gray-600 text-sm font-medium">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-blue-600" /> Oct 24, 2024
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-blue-600" /> Central Community Center, Hall B
              </span>
            </div>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition px-4 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
              <Power className="w-4 h-4" />
              End Session
            </button>
            <button className="flex-1 md:flex-none bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-200">
              <AlertTriangle className="w-4 h-4" />
              Emergency
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Stations and Staffing */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Station Counts Grid */}
            <div>
              <h2 className="text-lg font-bold text-blue-950 mb-4">Station Throughput</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Intake", value: "150", color: "border-blue-200" },
                  { label: "Vaccination", value: "20", color: "border-yellow-200" },
                  { label: "Surgery", value: "05", color: "border-red-200" },
                  { label: "Recovery", value: "10", color: "border-green-200" },
                ].map((stat, i) => (
                  <div key={i} className={`bg-white p-4 rounded-xl border-l-4 ${stat.color} shadow-sm`}>
                    <p className="text-xs text-gray-500 font-bold uppercase">{stat.label}</p>
                    <p className="text-2xl font-black text-blue-950">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Stations List */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-blue-950">Active Stations</h2>
              {[
                { name: "Intake and Triage", staff: "2 Staff", zone: "Zone A", queue: "12", icon: Users },
                { name: "Vaccination Clinic", staff: "4 Staff", zone: "Zone B", queue: "20", icon: Syringe },
                { name: "Surgical Unit", staff: "6 Staff", zone: "Zone C", queue: "05", icon: Briefcase },
                { name: "Discharge", staff: "2 Staff", zone: "Zone D", queue: "10", icon: CheckCircle },
              ].map((station, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between hover:border-blue-300 transition cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <station.icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-950 text-sm">{station.name}</h3>
                      <p className="text-xs text-gray-500">{station.staff} • {station.zone}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-blue-900">{station.queue}</span>
                    <p className="text-[10px] uppercase font-bold text-gray-400 leading-none">In Queue</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Staffing Summary Section */}
            <div className="bg-blue-950 text-white p-6 rounded-2xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <Stethoscope className="w-5 h-5" /> Staffing Summary
                </h2>
                <span className="text-xs bg-blue-800 px-2 py-1 rounded">Total: 14 Active</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-900/50 p-3 rounded-lg border border-blue-800">
                  <p className="text-blue-300 text-xs">Vets</p>
                  <p className="text-xl font-bold">4</p>
                </div>
                <div className="bg-blue-900/50 p-3 rounded-lg border border-blue-800">
                  <p className="text-blue-300 text-xs">Techs</p>
                  <p className="text-xl font-bold">6</p>
                </div>
                <div className="bg-blue-900/50 p-3 rounded-lg border border-blue-800">
                  <p className="text-blue-300 text-xs">Volunteers</p>
                  <p className="text-xl font-bold">4</p>
                </div>
                <div className="bg-blue-900/50 p-3 rounded-lg border border-blue-800">
                  <p className="text-blue-300 text-xs">On Break</p>
                  <p className="text-xl font-bold text-yellow-400">2</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Resources, Alerts, Activity */}
          <div className="space-y-8">
            
            {/* Critical Alerts */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <h2 className="text-red-800 font-black mb-4 flex items-center gap-2 uppercase text-sm tracking-widest">
                <AlertTriangle className="w-5 h-5" /> Critical Alerts
              </h2>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border-l-4 border-red-500 shadow-sm">
                  <p className="text-xs font-bold text-red-700">Urgent: Station K • 8:20 AM</p>
                  <p className="text-xs text-gray-700 mt-1">Surgical needles low. Restock needed.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <p className="text-xs font-bold text-blue-700">Info: Shift Change • 8:25 AM</p>
                  <p className="text-xs text-gray-700 mt-1">Relief staff arriving for Station F.</p>
                </div>
              </div>
            </div>

            {/* Resources Summary */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h2 className="text-lg font-bold text-blue-950 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-600" /> Resources Available
              </h2>
              <div className="space-y-4">
                {[
                  { name: "Vaccines (Rabies)", current: 420, total: 500, color: "bg-blue-600" },
                  { name: "Syringes (3ml)", current: 150, total: 1000, color: "bg-red-500" },
                  { name: "Microchips", current: 85, total: 100, color: "bg-green-600" },
                ].map((res, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-gray-600 uppercase">{res.name}</span>
                      <span className={res.current < 200 ? "text-red-600" : "text-gray-900"}>
                        {res.current} / {res.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`${res.color} h-full rounded-full`} 
                        style={{ width: `${(res.current / res.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Activity Feed */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-lg font-bold text-blue-950">Live Activity</h2>
                <button className="text-xs font-bold text-blue-600 hover:underline">View Log</button>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-5">
                {[
                  { time: "8:40 AM", text: "Patient #124 intake complete", icon: "✅" },
                  { time: "8:45 AM", text: "Dr. Smith started surgery on #115", icon: "⚕️" },
                  { time: "8:50 AM", text: "Patient #106 discharged successfully", icon: "🏠" },
                  { time: "9:20 AM", text: "Station B reported 10 min delay", icon: "⚠️" },
                ].map((act, i) => (
                  <div key={i} className="flex gap-3 relative">
                    {i !== 3 && <div className="absolute left-1.5 top-5 bottom-[-20px] w-0.5 bg-gray-100" />}
                    <span className="text-sm z-10">{act.icon}</span>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">{act.time}</p>
                      <p className="text-xs font-medium text-gray-700 leading-tight">{act.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}