import React from 'react';
import { Camera, Calendar, MapPin, User } from 'lucide-react';
import { RegistrationState } from '../../types';
import { Input } from '../ui/Input';

interface ProfileStepProps {
  state: RegistrationState;
  setState: React.Dispatch<React.SetStateAction<RegistrationState>>;
  onNext: () => void;
  onDashboard: () => void;
}

export function ProfileStep({ state, setState, onNext, onDashboard }: ProfileStepProps) {
  return (
    <div className="flex flex-col gap-8 pb-20">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Admin Profile</h2>
          <p className="text-slate-500">Fill in the details below</p>
        </div>
        <span className="text-slate-300 font-medium tracking-widest text-sm">1 / 3</span>
      </div>

      {state.isAdminNew ? (
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-blue-50 rounded-[20px] flex flex-col items-center justify-center border-2 border-dashed border-blue-200 cursor-pointer hover:bg-blue-100 transition-colors text-blue-500 shrink-0">
              <Camera size={24} className="mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Upload</span>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-0.5">Upload Your Photo</h5>
              <p className="text-[11px] text-slate-500 leading-normal">JPG, PNG or GIF. Recommended size: 400x400px.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input label="First and Last Name" placeholder="First and Last Name" />
            <Input label="Phone Number" placeholder="Phone Number" />
          </div>
          <Input label="Email Address" placeholder="Email Address" />
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center gap-5 p-5 rounded-[24px] border border-blue-100 bg-blue-50/30">
            <div className="w-20 h-20 rounded-[20px] overflow-hidden shadow-sm shrink-0">
              <img src="/public/assets/maps.jpg" alt="Admin" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg">Dr. Shay Odhiambo</h4>
              <p className="text-sm text-slate-500 mb-0.5">123shayodh@pawcaregmail.co.ke</p>
              <p className="text-sm text-slate-500 font-medium">+ 254 712 345 678</p>
            </div>
          </div>
          
          <div className="bg-blue-50/50 p-6 rounded-[24px] border border-blue-50">
            <h5 className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-4">Want to make some changes?</h5>
            <div className="flex gap-4">
              <button className="flex-1 bg-white p-3 rounded-xl border border-blue-100 text-xs font-bold text-slate-600 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                <User size={14} /> Edit Profile
              </button>
              <button className="flex-1 bg-white p-3 rounded-xl border border-blue-100 text-xs font-bold text-slate-600 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                Switch Account
              </button>
            </div>
          </div>
        </div>
      )}

      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-1">Campaign Information</h3>
        <p className="text-slate-500 text-sm mb-8">Fill in the basics to get you up and running</p>
        
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Campaign Name" placeholder="eg Kawangware Drive" />
            <Input label="Campaign Dates" placeholder="Choose dates" icon={<Calendar size={16}/>} />
          </div>
          <Input label="Campaign Location" placeholder="Search location or coordinates" icon={<MapPin size={16}/>} />
          
          {/* Map Mockup */}
          <div className="w-full h-44 bg-slate-100 rounded-[20px] relative overflow-hidden grayscale opacity-80 border border-slate-100">
            <img src="/assets/maps.jpg" className="w-full h-full object-cover" alt="Map mockup" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 px-4 py-2 rounded-full shadow-xl text-[10px] font-bold text-slate-800 flex items-center gap-2 border border-slate-100 translate-y-2">
                <MapPin size={12} className="text-[#2563eb]" />
                Select Center Point
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-1">
        <button 
          onClick={() => onDashboard()} 
          className="flex-1 bg-[#2563eb] text-white py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-blue-100 transition-all border border-blue-600 active:scale-[0.98]"
        >
          Proceed to Dashboard
        </button>
        <button 
          onClick={() => onNext()} 
          className="flex-1 bg-blue-50 text-[#2563eb] py-3 rounded-xl font-bold text-sm hover:bg-blue-100 transition-all border border-blue-100 active:scale-[0.98]"
        >
          Continue with setup
        </button>
      </div>
    </div>
  );
}
