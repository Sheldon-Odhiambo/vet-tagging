import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  Users, 
  Upload, 
  MapPin, 
  Trash2, 
  Save, 
  Calendar, 
  Briefcase, 
  Plus, 
  Camera, 
  User,
  Shield,
  Stethoscope,
  FileText,
  CheckSquare,
  Activity
} from 'lucide-react';

export function CampaignSetup() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const docInputRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(1);

  // 1. Campaign Details State
  const [campaign, setCampaign] = useState({ 
    name: '', 
    location: '', 
    startDate: '', 
    endDate: '', 
    adminName: '', 
    adminEmail: '', 
    adminNumber: '', 
    adminImage: '' 
  });

  // 2. Staffing State
  const [surgeons, setSurgeons] = useState<string[]>([]);
  const [security, setSecurity] = useState<string[]>([]);
  const [volunteers, setVolunteers] = useState<{name: string, station: string}[]>([]);
  
  // Temp inputs for adding to lists
  const [tempSurgeon, setTempSurgeon] = useState('');
  const [tempSecurity, setTempSecurity] = useState('');
  const [tempVolunteer, setTempVolunteer] = useState({ name: '', station: '' });

  // 3. Resources State
  const [resources, setResources] = useState({ 
    vaccines: '', 
    gloves: '', 
    syringes: '', 
    antibiotics: '',
    other: '' 
  });

  // 4. Operations State
  const [operations, setOperations] = useState({ 
    species: [] as string[], 
    services: [] as string[], 
    goals: { registration: '', vaccination: '', surgery: '', recovery: '' } 
  });

  // 5. Documentation State
  const [documents, setDocuments] = useState<{name: string, size: string}[]>([]);

  // Handlers
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setCampaign({ ...campaign, adminImage: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  const handleDocUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // FIX: Added (f: File) type to resolve the "unknown" property error
      const newDocs = Array.from(files).map((f: File) => ({ 
        name: f.name, 
        size: (f.size / 1024).toFixed(1) + ' KB' 
      }));
      setDocuments([...documents, ...newDocs]);
    }
  };

  const toggleSelection = (list: string[], item: string, setter: (val: string[]) => void) => {
    if (list.includes(item)) {
      setter(list.filter(i => i !== item));
    } else {
      setter([...list, item]);
    }
  };

  const saveCampaign = () => {
    const data = { campaign, staffing: { surgeons, security, volunteers }, resources, operations, documents };
    const saved = localStorage.getItem('campaigns');
    const campaigns = saved ? JSON.parse(saved) : [];
    campaigns.push(data);
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
    navigate('/campaign-archive');
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-900 flex justify-center">
      <div className="w-full lg:w-[1000px] bg-white p-8 rounded-xl border border-gray-200 shadow-sm overflow-y-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-blue-950">Campaign Setup</h1>
          <p className="text-gray-600 font-medium">Step {step} of 5: {
            step === 1 ? 'Campaign Details' : 
            step === 2 ? 'Staffing & Volunteers' : 
            step === 3 ? 'Resources Management' : 
            step === 4 ? 'Operations & Goals' : 'Documentation'
          }</p>
        </div>

        {/* STEP 1: CAMPAIGN DETAILS */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Campaign Name</label>
                <input type="text" placeholder="e.g. Kawangware Rabies Drive" value={campaign.name} onChange={e => setCampaign({...campaign, name: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" placeholder="Venue Address..." value={campaign.location} onChange={e => setCampaign({...campaign, location: e.target.value})} className="w-full pl-10 p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded font-bold border border-blue-100">CHOOSE FROM MAP</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Start Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input type="date" value={campaign.startDate} onChange={e => setCampaign({...campaign, startDate: e.target.value})} className="w-full pl-10 p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">End Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <input type="date" value={campaign.endDate} onChange={e => setCampaign({...campaign, endDate: e.target.value})} className="w-full pl-10 p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            </div>

            {/* Admin Details */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mt-8">
              <h2 className="text-lg font-bold text-blue-950 mb-6 flex items-center gap-2"><User className="w-5 h-5"/> Admin In Charge</h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex flex-col items-center gap-3">
                  <div onClick={() => fileInputRef.current?.click()} className="w-32 h-32 rounded-full bg-white border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-400 transition-all group relative">
                    {campaign.adminImage ? <img src={campaign.adminImage} alt="Admin" className="w-full h-full object-cover" /> : <div className="flex flex-col items-center text-gray-400"><Camera className="w-8 h-8 mb-1" /><span className="text-[10px] font-bold uppercase">Upload Photo</span></div>}
                  </div>
                  <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Admin Name</label>
                    <input type="text" value={campaign.adminName} onChange={e => setCampaign({...campaign, adminName: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Full name" />
                  </div>
                  <input type="email" value={campaign.adminEmail} onChange={e => setCampaign({...campaign, adminEmail: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Admin Email" />
                  <input type="text" value={campaign.adminNumber} onChange={e => setCampaign({...campaign, adminNumber: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Admin Number" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: STAFFING */}
        {step === 2 && (
          <div className="space-y-8">
            <section>
              <label className="block text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider flex items-center gap-2"><Stethoscope className="w-4 h-4"/> Attending Surgeons</label>
              <div className="flex gap-2 mb-4">
                <input type="text" value={tempSurgeon} onChange={e => setTempSurgeon(e.target.value)} className="flex-1 p-3 border border-gray-300 rounded-lg" placeholder="Add Surgeon Name..." />
                <button onClick={() => { if(tempSurgeon) { setSurgeons([...surgeons, tempSurgeon]); setTempSurgeon(''); } }} className="bg-blue-900 text-white px-4 rounded-lg font-bold"><Plus/></button>
              </div>
              <div className="flex flex-wrap gap-2">
                {surgeons.map((s, i) => <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold border border-blue-100 flex items-center gap-2">{s} <Trash2 className="w-3 h-3 cursor-pointer" onClick={() => setSurgeons(surgeons.filter((_, idx) => idx !== i))}/></span>)}
              </div>
            </section>

            <section>
              <label className="block text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider flex items-center gap-2"><Shield className="w-4 h-4"/> Security Personnel (Optional)</label>
              <div className="flex gap-2 mb-4">
                <input type="text" value={tempSecurity} onChange={e => setTempSecurity(e.target.value)} className="flex-1 p-3 border border-gray-300 rounded-lg" placeholder="Enter name..." />
                <button onClick={() => { if(tempSecurity) { setSecurity([...security, tempSecurity]); setTempSecurity(''); } }} className="bg-gray-800 text-white px-4 rounded-lg"><Plus/></button>
              </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <label className="block text-xs font-bold text-blue-900 mb-3 uppercase tracking-wider flex items-center gap-2"><Users className="w-4 h-4"/> Station Volunteers</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <select className="p-3 border border-blue-200 rounded-lg bg-white" value={tempVolunteer.name} onChange={e => setTempVolunteer({...tempVolunteer, name: e.target.value})}>
                  <option value="">Select Volunteer (from existing list)</option>
                  <option value="Volunteer 1">Volunteer 1</option>
                  <option value="Volunteer 2">Volunteer 2</option>
                </select>
                <div className="flex gap-2">
                  <input type="text" value={tempVolunteer.station} onChange={e => setTempVolunteer({...tempVolunteer, station: e.target.value})} className="flex-1 p-3 border border-blue-200 rounded-lg" placeholder="Assign Station..." />
                  <button onClick={() => { if(tempVolunteer.name && tempVolunteer.station) { setVolunteers([...volunteers, tempVolunteer]); setTempVolunteer({name:'', station:''}); } }} className="bg-blue-600 text-white px-4 rounded-lg"><Plus/></button>
                </div>
              </div>
              <div className="space-y-2">
                {volunteers.map((v, i) => (
                  <div key={i} className="flex justify-between bg-white p-3 rounded-lg border border-blue-100 shadow-sm text-sm">
                    <span className="font-bold text-blue-900">{v.name}</span>
                    <span className="text-blue-500 font-bold uppercase tracking-tighter">{v.station}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* STEP 3: RESOURCES */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white border border-gray-200 rounded-xl">
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Vaccines Available</label>
                <input type="number" value={resources.vaccines} onChange={e => setResources({...resources, vaccines: e.target.value})} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-2xl font-bold text-blue-900" placeholder="0" />
              </div>
              <div className="p-4 bg-white border border-gray-200 rounded-xl">
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Surgical Gloves (Pairs)</label>
                <input type="number" value={resources.gloves} onChange={e => setResources({...resources, gloves: e.target.value})} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-2xl font-bold text-blue-900" placeholder="0" />
              </div>
            </div>
            <textarea rows={4} value={resources.other} onChange={e => setResources({...resources, other: e.target.value})} placeholder="Other resources (e.g. Dewormers, Antibiotics, Microchips...)" className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        )}

        {/* STEP 4: OPERATIONS */}
        {step === 4 && (
          <div className="space-y-8">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">Species Focus</label>
              <div className="flex gap-6">
                {['Cats', 'Dogs'].map(s => (
                  <label key={s} className="flex items-center gap-3 cursor-pointer">
                    <div onClick={() => toggleSelection(operations.species, s, (val) => setOperations({...operations, species: val}))} className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${operations.species.includes(s) ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                      {operations.species.includes(s) && <CheckSquare className="w-4 h-4 text-white" />}
                    </div>
                    <span className="font-bold text-gray-700">{s}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">Available Services</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Spay/Neuter', 'Rabies Vax', 'Deworming', 'Surgery', 'All the above', 'Other'].map(s => (
                  <label key={s} className="flex items-center gap-3 cursor-pointer">
                    <div onClick={() => toggleSelection(operations.services, s, (val) => setOperations({...operations, services: val}))} className={`w-5 h-5 rounded border-2 flex items-center justify-center ${operations.services.includes(s) ? 'bg-blue-900 border-blue-900' : 'border-gray-300'}`}>
                      {operations.services.includes(s) && <CheckSquare className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-sm font-medium text-gray-600">{s}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-blue-950 p-6 rounded-2xl text-white">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Activity className="w-5 h-5 text-blue-400"/> Target Goals (Dashboard Tracking)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.keys(operations.goals).map((goal) => (
                  <div key={goal}>
                    <label className="block text-[10px] font-bold text-blue-300 mb-2 uppercase tracking-widest">{goal}</label>
                    <input type="number" placeholder="0" value={(operations.goals as any)[goal]} onChange={e => setOperations({...operations, goals: {...operations.goals, [goal]: e.target.value}})} className="w-full p-2 bg-blue-900/50 border border-blue-800 rounded-lg text-white font-bold" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: DOCUMENTATION */}
        {step === 5 && (
          <div className="space-y-6">
            <div onClick={() => docInputRef.current?.click()} className="border-2 border-dashed border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center hover:border-blue-400 transition-all cursor-pointer">
              <Upload className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-lg font-bold text-gray-800">Upload Necessary Documents</h3>
              <input type="file" multiple ref={docInputRef} onChange={handleDocUpload} className="hidden" />
            </div>
            <div className="space-y-2">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <div><p className="text-sm font-bold">{doc.name}</p><p className="text-xs text-gray-400">{doc.size}</p></div>
                  </div>
                  <button onClick={() => setDocuments(documents.filter((_, idx) => idx !== i))} className="text-red-400"><Trash2 className="w-4 h-4"/></button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between">
          <button onClick={() => setStep(step - 1)} disabled={step === 1} className="px-6 py-3 border border-gray-300 rounded-xl text-sm font-bold disabled:opacity-30 flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          {step < 5 ? (
            <button onClick={() => setStep(step + 1)} className="px-8 py-3 bg-blue-950 text-white rounded-xl text-sm font-bold flex items-center gap-2">
              Next Step <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={saveCampaign} className="px-8 py-3 bg-green-600 text-white rounded-xl text-sm font-bold flex items-center gap-2">
              <Save className="w-4 h-4" /> Save Campaign
            </button>
          )}
        </div>
      </div>
    </div>
  );
}