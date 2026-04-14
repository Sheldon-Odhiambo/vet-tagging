import React, { useState } from 'react';
import { Target, Calendar, User, Mail, Phone, Upload, Users, Briefcase, AlertCircle, MapPin, Trash2 } from 'lucide-react';

export function CampaignArchitect() {
  const [staff, setStaff] = useState<{name: string, email: string, role: string}[]>([]);
  const [volunteers, setVolunteers] = useState<{name: string, station: string}[]>([]);
  const [newStaff, setNewStaff] = useState({name: '', email: '', role: ''});
  const [newVolunteer, setNewVolunteer] = useState({name: '', station: ''});

  const addStaff = () => {
    if (newStaff.name && newStaff.email && newStaff.role) {
      setStaff([...staff, newStaff]);
      setNewStaff({name: '', email: '', role: ''});
    }
  };

  const addVolunteer = () => {
    if (newVolunteer.name && newVolunteer.station) {
      setVolunteers([...volunteers, newVolunteer]);
      setNewVolunteer({name: '', station: ''});
    }
  };
  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-900">
      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-1">Campaigns &gt; New Campaign Setup</p>
        <h1 className="text-3xl font-bold text-blue-950">Campaign Architect</h1>
        <p className="text-gray-600">Define the scope, staffing, and logistics for your upcoming clinical drive.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-900">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold">Campaign Foundations</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CAMPAIGN NAME</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Westlands Rabies Drive 2024" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">LOCATION</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" className="w-full pl-10 p-2 border border-gray-300 rounded-lg" placeholder="Westlands Health Center" />
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">START DATE</label>
                  <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">END DATE</label>
                  <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ADMIN NAME</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ADMIN EMAIL</label>
                  <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ADMIN NUMBER</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ADMIN IMAGE</label>
                <div className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg">
                  <Upload className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">Choose File No file chosen</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">STRATEGIC OBJECTIVE</label>
                <textarea className="w-full p-2 border border-gray-300 rounded-lg h-24" placeholder="e.g. Immunize 500+ domestic pets in the Westlands perimeter to establish herd immunity."></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-900">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold">Staff Registration</h2>
              </div>
              <button className="text-blue-900 text-sm font-bold flex items-center gap-1"><Upload className="w-4 h-4" /> Bulk Import CSV</button>
            </div>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Add Staff</label>
                <div className="flex gap-2">
                  <input type="text" value={newStaff.name} onChange={e => setNewStaff({...newStaff, name: e.target.value})} className="flex-1 p-2 border border-gray-300 rounded-lg" placeholder="Full Name" />
                  <input type="email" value={newStaff.email} onChange={e => setNewStaff({...newStaff, email: e.target.value})} className="flex-1 p-2 border border-gray-300 rounded-lg" placeholder="Email Address" />
                  <input type="text" value={newStaff.role} onChange={e => setNewStaff({...newStaff, role: e.target.value})} className="flex-1 p-2 border border-gray-300 rounded-lg" placeholder="Assigned Role" />
                  <button onClick={addStaff} className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-bold">+ Add</button>
                </div>
                {staff.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {staff.map((s, i) => (
                      <div key={i} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg text-sm">
                        <span>{s.name} ({s.role}) - {s.email}</span>
                        <button onClick={() => setStaff(staff.filter((_, idx) => idx !== i))} className="text-red-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Add Volunteer</label>
                <div className="flex gap-2">
                  <input type="text" value={newVolunteer.name} onChange={e => setNewVolunteer({...newVolunteer, name: e.target.value})} className="flex-1 p-2 border border-gray-300 rounded-lg" placeholder="Volunteer Name" />
                  <input type="text" value={newVolunteer.station} onChange={e => setNewVolunteer({...newVolunteer, station: e.target.value})} className="flex-1 p-2 border border-gray-300 rounded-lg" placeholder="Station" />
                  <button onClick={addVolunteer} className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-bold">+ Add</button>
                </div>
                {volunteers.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {volunteers.map((v, i) => (
                      <div key={i} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg text-sm">
                        <span>{v.name} - {v.station}</span>
                        <button onClick={() => setVolunteers(volunteers.filter((_, idx) => idx !== i))} className="text-red-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 space-y-6">
          <div className="bg-blue-950 p-6 rounded-xl text-white">
            <h3 className="text-lg font-semibold mb-4">Deployment Insight</h3>
            <div className="space-y-4">
              <div className="bg-blue-900 p-4 rounded-lg flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-300" />
                <div>
                  <p className="text-xs text-blue-300 uppercase">Required Staff</p>
                  <p className="font-bold text-lg">12 / 24</p>
                </div>
              </div>
              <div className="bg-blue-900 p-4 rounded-lg flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-blue-300" />
                <div>
                  <p className="text-xs text-blue-300 uppercase">Medical Kit Count</p>
                  <p className="font-bold text-lg">15 Units</p>
                  <p className="text-xs text-blue-400">Surplus from August Batch</p>
                </div>
              </div>
              <div className="bg-blue-900 p-4 rounded-lg">
                <p className="text-xs text-blue-300 uppercase mb-1">Risk Assessment</p>
                <div className="flex items-center gap-2 text-green-400 font-semibold mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Operational Ready
                </div>
                <p className="text-sm text-blue-200">Weather forecasts suggest clear skies for the campaign duration. Logistics routes are clear.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <img src="https://picsum.photos/seed/skatepark/400/200" alt="Deployment Zone" className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-blue-950">Westlands Perimeter</h3>
              <p className="text-sm text-gray-500 mb-4">Deployment Zone Alpha</p>
              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase">Population</p>
                  <p className="font-bold text-blue-950">~4.2k</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Pet Density</p>
                  <p className="font-bold text-blue-950">High</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
