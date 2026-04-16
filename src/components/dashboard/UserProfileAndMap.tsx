import React from 'react';
import { 
  FileText, 
  MapPin, 
  User, 
  Phone, 
  Mail,
  Edit,
  ArrowRightLeft
} from 'lucide-react';

export function UserProfileAndMap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {/* Profile Card */}
      <div className="bg-white rounded-[15px] border border-slate-100 shadow-[0_6px_28px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col p-6">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#2563eb]/20 shadow-xl">
            <img 
              src="/assets/Cat and Dog Image.png" 
              alt="Dr. Shay"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="text-xl font-black text-slate-900 leading-tight">Dr. Shay Odhiambo</h4>
            <div className="flex items-center gap-2 text-slate-400">
              <Mail size={14} />
              <span className="text-xs font-medium">dr.shayodhiambo@pawcaremail.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Phone size={14} />
              <span className="text-xs font-medium">+254 712 345 678</span>
            </div>
          </div>
        </div>

        <div className="bg-[#2563eb]/10 rounded-2xl p-4 space-y-3">
          <h5 className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">Want to make some changes?</h5>
          <div className="flex flex-col gap-2">
            <button className="flex items-center gap-3 text-slate-500 hover:text-[#2563eb] transition-colors group">
              <div className="p-1.5 bg-white rounded-lg shadow-sm group-hover:bg-[#2563eb] group-hover:text-white transition-all text-[#2563eb]">
                <User size={14} />
              </div>
              <span className="text-xs font-bold">Edit Profile</span>
            </button>
            <button className="flex items-center gap-3 text-slate-500 hover:text-[#2563eb] transition-colors group">
              <div className="p-1.5 bg-white rounded-lg shadow-sm group-hover:bg-[#2563eb] group-hover:text-white transition-all text-[#2563eb]">
                <ArrowRightLeft size={14} />
              </div>
              <span className="text-xs font-bold">Switch Admin Account</span>
            </button>
          </div>
        </div>
      </div>

      {/* Map Card */}
      <div className="bg-white rounded-[15px] border border-slate-100 shadow-sm overflow-hidden p-6 relative min-h-[300px]">
        <img 
          src="/assets/maps.jpg" 
          alt="Map Background"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-all hover:grayscale-0 duration-1000" 
        />
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
        
        {/* Dynamic Map Pins (Simulated) */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 group cursor-pointer z-10 scale-150">
           <MapPin className="text-[#2563eb] fill-white" size={24} />
           <div className="bg-white px-3 py-1 rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-transform origin-left text-[8px] font-black uppercase tracking-tighter">
             Active Drive
           </div>
        </div>

        <div className="absolute top-8 right-8">
           <span className="bg-[#2563eb] text-white px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl ring-4 ring-[#2563eb]/20">
             Campaign Location
           </span>
        </div>
      </div>
    </div>
  );
}
