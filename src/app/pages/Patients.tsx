import { useState } from 'react';
import { Wifi, Stethoscope, Activity, CheckCircle } from 'lucide-react';

export function Patients() {
  const [gender, setGender] = useState('Male');
  const [score, setScore] = useState(3);
  const [services, setServices] = useState({
    vaccination: false,
    surgery: false,
    deworming: false
  });

  const toggleService = (service: keyof typeof services) => {
    setServices(prev => ({ ...prev, [service]: !prev[service] }));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg border border-gray-200">
        <input type="text" placeholder="Global Search..." className="w-96 p-2 border border-gray-300 rounded-lg" />
        <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          <Wifi className="w-4 h-4" /> Live Sync Active
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 bg-white p-8 rounded-xl border border-gray-200">
          <h1 className="text-2xl font-bold mb-6">Patient Intake</h1>
          
          <div className="space-y-6">
            <h2 className="font-semibold text-lg">Owner Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">FULL NAME</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="e.g. John Doe" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PHONE NUMBER</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="e.g. 0712 345 678" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LOCATION</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="e.g. Kibera, Nairobi" />
              </div>
            </div>

            <h2 className="font-semibold text-lg pt-4">Pet Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PET NAME</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="e.g. Buddy" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SPECIES</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="e.g. Dog" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">BREED</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="e.g. Mixed" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">AGE</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="e.g. 2 years" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">COLOR</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="e.g. Brown" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">GENDER</label>
              <div className="flex bg-gray-100 p-1 rounded-lg">
                <button onClick={() => setGender('Male')} className={`flex-1 py-2 rounded-md font-medium ${gender === 'Male' ? 'bg-blue-900 text-white' : 'text-gray-600'}`}>Male</button>
                <button onClick={() => setGender('Female')} className={`flex-1 py-2 rounded-md font-medium ${gender === 'Female' ? 'bg-blue-900 text-white' : 'text-gray-600'}`}>Female</button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">BODY CONDITION SCORE (3/5)</label>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map(s => (
                  <button key={s} onClick={() => setScore(s)} className={`py-2 rounded-md font-medium ${score === s ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-600'}`}>{s}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">DISTINGUISHING MARKS</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="e.g. White patch on chest" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">REQUIRED SERVICES</label>
              
              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <label className="flex items-center gap-2 mb-2 font-bold">
                  <input type="checkbox" checked={services.vaccination} onChange={() => toggleService('vaccination')} className="w-4 h-4" /> Vaccination
                </label>
                {services.vaccination && (
                  <div className="space-y-3 mt-3 pt-3 border-t border-gray-100">
                    <div className="flex gap-2">
                      {['Rabies', 'DHPP', 'Bordetella', 'Leptospirosis', 'FVRCP', 'FeLV'].map(v => <button key={v} className="px-3 py-1 border border-gray-300 rounded-full text-xs">{v}</button>)}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Batch Number" className="p-2 border border-gray-300 rounded-lg text-sm" />
                      <input type="text" placeholder="Veterinarian" className="p-2 border border-gray-300 rounded-lg text-sm" />
                    </div>
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                      {['Subcutaneous', 'Intramuscular', 'Oral'].map(m => <button key={m} className={`flex-1 py-2 rounded-md font-medium text-sm ${m === 'Subcutaneous' ? 'bg-blue-900 text-white' : 'text-gray-600'}`}>{m}</button>)}
                    </div>
                    <input type="text" placeholder="Injection Site" className="w-full p-2 border border-gray-300 rounded-lg text-sm" />
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                      {['None', 'Mild', 'Moderate', 'Severe'].map(r => <button key={r} className={`flex-1 py-2 rounded-md font-medium text-sm ${r === 'None' ? 'bg-blue-900 text-white' : 'text-gray-600'}`}>{r}</button>)}
                    </div>
                    <input type="date" className="w-full p-2 border border-gray-300 rounded-lg text-sm" />
                    <textarea placeholder="Notes..." className="w-full p-2 border border-gray-300 rounded-lg text-sm h-20"></textarea>
                  </div>
                )}
              </div>

              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <label className="flex items-center gap-2 mb-2 font-bold">
                  <input type="checkbox" checked={services.surgery} onChange={() => toggleService('surgery')} className="w-4 h-4" /> Surgery (Spay/Neuter)
                </label>
                {services.surgery && (
                  <div className="space-y-3 mt-3 pt-3 border-t border-gray-100">
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                      {['Neuter', 'Spay', 'Other'].map(s => <button key={s} className={`flex-1 py-2 rounded-md font-medium text-sm ${s === 'Neuter' ? 'bg-blue-900 text-white' : 'text-gray-600'}`}>{s}</button>)}
                    </div>
                    <input type="text" placeholder="Veterinarian" className="w-full p-2 border border-gray-300 rounded-lg text-sm" />
                    <input type="text" placeholder="Anesthesia Used" className="w-full p-2 border border-gray-300 rounded-lg text-sm" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="time" className="p-2 border border-gray-300 rounded-lg text-sm" />
                      <input type="time" className="p-2 border border-gray-300 rounded-lg text-sm" />
                    </div>
                    <div className="flex bg-gray-100 p-1 rounded-lg">
                      {['None', 'Bleeding', 'Reaction', 'Other'].map(r => <button key={r} className={`flex-1 py-2 rounded-md font-medium text-sm ${r === 'None' ? 'bg-blue-900 text-white' : 'text-gray-600'}`}>{r}</button>)}
                    </div>
                    <textarea placeholder="Additional Notes..." className="w-full p-2 border border-gray-300 rounded-lg text-sm h-20"></textarea>
                  </div>
                )}
              </div>

              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <label className="flex items-center gap-2 mb-2 font-bold">
                  <input type="checkbox" checked={services.deworming} onChange={() => toggleService('deworming')} className="w-4 h-4" /> Deworming
                </label>
                {services.deworming && (
                  <div className="space-y-3 mt-3 pt-3 border-t border-gray-100">
                    <input type="text" placeholder="Deworming Medication" className="w-full p-2 border border-gray-300 rounded-lg text-sm" />
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="w-4 h-4" /> Owner Consent Provided
                    </label>
                  </div>
                )}
              </div>
            </div>

            <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-950">Complete Registration</button>
          </div>
        </div>

        <div className="col-span-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Live Queue Board</h2>
            <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500" /> LIVE UPDATES</div>
          </div>
          
          <div className="space-y-4">
            <div className="text-red-600 font-bold flex items-center gap-2"><Stethoscope className="w-5 h-5" /> SURGERY <span className="bg-gray-200 text-gray-700 px-2 rounded text-xs">3 ACTIVE</span></div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between">
                <p className="font-bold">Max</p>
                <p className="text-xs text-gray-500">0:42 IN</p>
              </div>
              <p className="text-sm text-gray-600">Neutering • Dr. Aris</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between">
                <p className="font-bold">Bella</p>
                <p className="text-xs text-gray-500">0:15 IN</p>
              </div>
              <p className="text-sm text-gray-600">Spay • Dr. Sarah</p>
            </div>

            <div className="text-orange-600 font-bold flex items-center gap-2"><Activity className="w-5 h-5" /> RECOVERY <span className="bg-gray-200 text-gray-700 px-2 rounded text-xs">5 PETS</span></div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold">Cooper</p>
              <p className="text-sm text-gray-600">Vitals: Stable • 99.1°F</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">WAKING UP</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold">Nala</p>
              <p className="text-sm text-gray-600">Post-op monitoring</p>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">SEDATED</span>
            </div>

            <div className="text-blue-900 font-bold flex items-center gap-2"><CheckCircle className="w-5 h-5" /> DISCHARGE <span className="bg-gray-200 text-gray-700 px-2 rounded text-xs">2 READY</span></div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold">Daisy</p>
              <p className="text-sm text-gray-600">Owner: J. Doe notified</p>
              <button className="text-blue-700 text-xs font-bold mt-2">COMPLETE PICKUP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
