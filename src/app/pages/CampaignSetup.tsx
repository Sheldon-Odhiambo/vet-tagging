import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Target, Users, Upload, MapPin, Trash2, Save, Calendar, Briefcase } from 'lucide-react';

export function CampaignSetup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [campaign, setCampaign] = useState({ name: '', location: '', startDate: '', endDate: '', adminName: '', adminEmail: '', adminNumber: '', adminImage: '' });
  const [staff, setStaff] = useState<{name: string, role: string}[]>([]);
  const [security, setSecurity] = useState<{name: string}[]>([]);
  const [volunteers, setVolunteers] = useState<{name: string, station: string}[]>([]);
  const [resources, setResources] = useState({ vaccines: '', gloves: '', other: '' });
  const [operations, setOperations] = useState({ species: [] as string[], services: [] as string[], goals: { registration: '', vaccination: '', surgery: '', recovery: '' } });

  const [newStaff, setNewStaff] = useState({name: '', role: ''});
  const [newSecurity, setNewSecurity] = useState({name: ''});
  const [newVolunteer, setNewVolunteer] = useState({name: '', station: ''});

  const addStaff = () => {
    if (newStaff.name && newStaff.role) {
      setStaff([...staff, newStaff]);
      setNewStaff({name: '', role: ''});
    }
  };

  const addSecurity = () => {
    if (newSecurity.name) {
      setSecurity([...security, newSecurity]);
      setNewSecurity({name: ''});
    }
  };

  const addVolunteer = () => {
    if (newVolunteer.name && newVolunteer.station) {
      setVolunteers([...volunteers, newVolunteer]);
      setNewVolunteer({name: '', station: ''});
    }
  };

  const saveCampaign = () => {
    const saved = localStorage.getItem('campaigns');
    const campaigns = saved ? JSON.parse(saved) : [];
    campaigns.push({ campaign, staff, security, volunteers, resources, operations });
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
    navigate('/campaign-archive');
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-900 flex justify-center">
      <div className="w-full lg:w-[1200px] lg:h-[1200px] bg-white p-8 rounded-xl border border-gray-200 shadow-sm overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-950">Campaign Setup</h1>
          <p className="text-gray-600">Step {step} of 5: {step === 1 ? 'Campaign Details' : step === 2 ? 'Staffing' : step === 3 ? 'Volunteers' : step === 4 ? 'Resources' : 'Operations'}</p>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Campaign Details</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CAMPAIGN NAME</label>
              <input type="text" value={campaign.name} onChange={e => setCampaign({...campaign, name: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LOCATION</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" value={campaign.location} onChange={e => setCampaign({...campaign, location: e.target.value})} className="w-full pl-10 p-2 border border-gray-300 rounded-lg" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">START DATE</label>
                <input type="date" value={campaign.startDate} onChange={e => setCampaign({...campaign, startDate: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">END DATE</label>
                <input type="date" value={campaign.endDate} onChange={e => setCampaign({...campaign, endDate: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ADMIN NAME</label>
                <input type="text" value={campaign.adminName} onChange={e => setCampaign({...campaign, adminName: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ADMIN EMAIL</label>
                <input type="email" value={campaign.adminEmail} onChange={e => setCampaign({...campaign, adminEmail: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ADMIN NUMBER</label>
                <input type="text" value={campaign.adminNumber} onChange={e => setCampaign({...campaign, adminNumber: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Staffing</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Attending Surgeons</label>
              <div className="flex gap-2 mb-2">
                <input type="text" value={newStaff.name} onChange={e => setNewStaff({...newStaff, name: e.target.value})} className="flex-1 p-2 border border-gray-300 rounded-lg" placeholder="Name" />
                <input type="text" value={newStaff.role} onChange={e => setNewStaff({...newStaff, role: e.target.value})} className="flex-1 p-2 border border-gray-300 rounded-lg" placeholder="Role" />
                <button onClick={addStaff} className="bg-blue-900 text-white px-3 py-1 rounded-lg text-sm font-bold">+ Add</button>
              </div>
              {staff.map((s, i) => <div key={i} className="text-sm">{s.name} - {s.role}</div>)}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Security Personnel (Optional)</label>
              <div className="flex gap-2 mb-2">
                <input type="text" value={newSecurity.name} onChange={e => setNewSecurity({...newSecurity, name: e.target.value})} className="flex-1 p-2 border border-gray-300 rounded-lg" placeholder="Name" />
                <button onClick={addSecurity} className="bg-blue-900 text-white px-3 py-1 rounded-lg text-sm font-bold">+ Add</button>
              </div>
              {security.map((s, i) => <div key={i} className="text-sm">{s.name}</div>)}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Volunteers</h2>
            <div className="flex gap-2 mb-2">
              <input type="text" value={newVolunteer.name} onChange={e => setNewVolunteer({...newVolunteer, name: e.target.value})} className="flex-1 p-2 border border-gray-300 rounded-lg" placeholder="Volunteer Name" />
              <input type="text" value={newVolunteer.station} onChange={e => setNewVolunteer({...newVolunteer, station: e.target.value})} className="flex-1 p-2 border border-gray-300 rounded-lg" placeholder="Station" />
              <button onClick={addVolunteer} className="bg-blue-900 text-white px-3 py-1 rounded-lg text-sm font-bold">+ Add</button>
            </div>
            {volunteers.map((v, i) => <div key={i} className="text-sm">{v.name} at {v.station}</div>)}
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Resources</h2>
            <input type="number" value={resources.vaccines} onChange={e => setResources({...resources, vaccines: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Number of vaccines" />
            <input type="number" value={resources.gloves} onChange={e => setResources({...resources, gloves: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Number of surgical gloves" />
            <input type="text" value={resources.other} onChange={e => setResources({...resources, other: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Other resources" />
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Operations</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Species Focus</label>
              <div className="grid grid-cols-3 gap-2">
                {['Cats', 'Dogs', 'Both'].map(s => (
                  <label key={s} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="checkbox" checked={operations.species.includes(s)} onChange={e => e.target.checked ? setOperations({...operations, species: [...operations.species, s]}) : setOperations({...operations, species: operations.species.filter(x => x !== s)})} className="mr-2" />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Available Services</label>
              <div className="grid grid-cols-2 gap-2">
                {['Spay/Neuter', 'Rabies Vax', 'Deworming', 'Surgery', 'All the above', 'Other'].map(s => (
                  <label key={s} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="checkbox" checked={operations.services.includes(s)} onChange={e => e.target.checked ? setOperations({...operations, services: [...operations.services, s]}) : setOperations({...operations, services: operations.services.filter(x => x !== s)})} className="mr-2" />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            <h3 className="font-semibold text-lg mt-4">Target Goals</h3>
            <div className="grid grid-cols-2 gap-4">
              <input type="number" placeholder="Registration Goal" value={operations.goals.registration} onChange={e => setOperations({...operations, goals: {...operations.goals, registration: e.target.value}})} className="w-full p-2 border border-gray-300 rounded-lg" />
              <input type="number" placeholder="Vaccination Goal" value={operations.goals.vaccination} onChange={e => setOperations({...operations, goals: {...operations.goals, vaccination: e.target.value}})} className="w-full p-2 border border-gray-300 rounded-lg" />
              <input type="number" placeholder="Surgery Goal" value={operations.goals.surgery} onChange={e => setOperations({...operations, goals: {...operations.goals, surgery: e.target.value}})} className="w-full p-2 border border-gray-300 rounded-lg" />
              <input type="number" placeholder="Recovery Goal" value={operations.goals.recovery} onChange={e => setOperations({...operations, goals: {...operations.goals, recovery: e.target.value}})} className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          <button onClick={() => setStep(step - 1)} disabled={step === 1} className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold disabled:opacity-50">Back</button>
          {step < 5 ? (
            <button onClick={() => setStep(step + 1)} className="px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-bold flex items-center gap-2">Next <ChevronRight className="w-4 h-4" /></button>
          ) : (
            <button onClick={saveCampaign} className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-bold flex items-center gap-2"><Save className="w-4 h-4" /> Complete Registration</button>
          )}
        </div>
      </div>
    </div>
  );
}
