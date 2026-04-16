import React from 'react';
import { Plus, X } from 'lucide-react';
import { RegistrationState } from '../../types';
import { SpeciesCard } from '../ui/SpeciesCard';

interface SpeciesStepProps {
  state: RegistrationState;
  setState: React.Dispatch<React.SetStateAction<RegistrationState>>;
  onNext: () => void;
  onDashboard: () => void;
}

export function SpeciesStep({ state, setState, onNext, onDashboard }: SpeciesStepProps) {
  const toggleService = (id: string) => {
    setState(prev => ({
      ...prev,
      services: prev.services.map(s => s.id === id ? { ...s, selected: !s.selected } : s)
    }));
  };

  return (
    <div className="flex flex-col h-full gap-6 pb-20">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Species</h2>
          <p className="text-slate-500">Select the specie focus</p>
        </div>
        <span className="text-slate-300 font-medium tracking-widest text-sm">2 / 3</span>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <SpeciesCard 
          label="Cats (Felines)" 
          img="/assets/cat image.png" 
          selected={state.species.cats}
          onToggle={() => setState(prev => ({ ...prev, species: { ...prev.species, cats: !prev.species.cats } }))}
        />
        <SpeciesCard 
          label="Dogs (Canines)" 
          img="/assets/dog image.png" 
          selected={state.species.dogs}
          onToggle={() => setState(prev => ({ ...prev, species: { ...prev.species, dogs: !prev.species.dogs } }))}
        />
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Services</h3>
            <p className="text-slate-500 text-sm">Add other services by pressing the +</p>
          </div>
          <button className="bg-blue-50 text-[#2563eb] hover:bg-blue-100 p-1.5 rounded-lg transition-colors border border-blue-100 shrink-0">
            <Plus size={16} />
          </button>
        </div>

        <div className="space-y-2 overflow-y-auto pr-2 custom-scrollbar">
          {state.services.map(service => (
            <div 
              key={service.id}
              onClick={() => toggleService(service.id)}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all cursor-pointer border ${service.selected ? 'bg-blue-50/50 border-blue-200 shadow-sm' : 'bg-slate-50 border-slate-100 opacity-60 hover:opacity-100'}`}
            >
              <span className={`text-sm font-bold ${service.selected ? 'text-slate-900' : 'text-slate-500'}`}>{service.name}</span>
              <div className={`w-7 h-7 rounded-full border transition-all flex items-center justify-center ${service.selected ? 'bg-slate-900 border-slate-900 text-white shadow-md' : 'bg-white border-slate-200 text-slate-400'}`}>
                {service.selected ? <X size={14} strokeWidth={3} /> : <Plus size={14} />}
              </div>
            </div>
          ))}
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
