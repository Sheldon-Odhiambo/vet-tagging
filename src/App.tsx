import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  PawPrint,
} from 'lucide-react';
import { RegistrationState, Step } from './types';

// Page Components
import { OnboardingStep } from './components/registration/OnboardingStep';
import { ProfileStep } from './components/registration/ProfileStep';
import { SpeciesStep } from './components/registration/SpeciesStep';
import { StaffingStep } from './components/registration/StaffingStep';
import { SuccessStep } from './components/registration/SuccessStep';
import { DashboardPage } from './components/dashboard/DashboardPage';

const INITIAL_STATE: RegistrationState = {
  currentStep: 'ONBOARDING',
  isAdminNew: null,
  admin: { name: '', phone: '', email: '' },
  campaign: { name: '', dates: '', location: '' },
  species: { cats: true, dogs: false },
  services: [
    { id: '1', name: 'Rabies Vaccination', selected: true },
    { id: '2', name: 'Deworming', selected: true },
    { id: '3', name: 'Pet Grooming', selected: true },
    { id: '4', name: 'Spay/ Neuter Surgery', selected: true },
    { id: '5', name: 'General Checkup', selected: true },
    { id: '6', name: 'Micro chipping', selected: true },
  ],
  volunteers: { total: 14, assigned: 3 },
  assignments: {
    'Registration': { name: 'Registration', members: [''] },
    'Vaccination': { name: 'Vaccination', members: [''] },
    'Recovery': { name: 'Recovery', members: [''] },
    'Discharge': { name: 'Discharge', members: [''] },
  }
};

type View = 'REGISTRATION' | 'DASHBOARD';

/**
 * RegistrationWrapper maintains the multi-step registration flow state.
 */
function RegistrationWrapper({ setGlobalView }: { setGlobalView: (v: View) => void }) {
  const [state, setState] = useState<RegistrationState>(INITIAL_STATE);

  const steps: Step[] = ['ONBOARDING', 'PROFILE', 'SPECIES', 'STAFFING', 'SUCCESS'];
  const currentIndex = steps.indexOf(state.currentStep);

  const handleDashboard = () => setGlobalView('DASHBOARD');

  const handleBack = () => {
    if (currentIndex > 0) {
      const prevStep = steps[currentIndex - 1];
      setState(prev => ({ ...prev, currentStep: prevStep }));
    }
  };

  const handleNext = () => {
    if (currentIndex < steps.length - 1) {
      const nextStep = steps[currentIndex + 1];
      setState(prev => ({ ...prev, currentStep: nextStep }));
    }
  };

  const sidebarContent = useMemo(() => {
    switch (state.currentStep) {
      case 'ONBOARDING':
        return {
          title: "Welcome",
          subtitle: "Empowering Every Campaign",
          desc: "Seamless collaboration from registration to recovery.",
          image: "/public/assets/Cat and Dog Image.png",
        };
      case 'PROFILE':
        return {
          title: "Campaign Setup",
          subtitle: "Join the Mission",
          desc: "Create your admin identity to start leading vaccination and wellness drives in your community.",
          image: "/assets/dog image.png",
        };
      case 'SPECIES':
        return {
          title: "Campaign Setup",
          subtitle: "Let Us Help You",
          desc: "Choose your patient types and medical services to tailor the intake forms for your team.",
          image: "/assets/cat image.png",
        };
      case 'STAFFING':
        return {
          title: "Campaign Setup",
          subtitle: "Rally the Squad",
          desc: "Connect your staff and volunteers to their stations to ensure a smooth flow from registration to recovery.",
          image: "/assets/cat image.png",
        };
      case 'SUCCESS':
        return {
          title: "All Paws on Deck!",
          subtitle: "",
          desc: "Your campaign is ready to go live. Head to the dashboard to start checking in your first patients.",
          image: "/assets/Cat and Dog Image.png",
        };
      default:
        return { title: "", subtitle: "", desc: "", image: "" };
    }
  }, [state.currentStep]);

  return (
    <div className="w-full max-w-6xl h-[850px] bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col">
      {/* Top Navbar */}
      {state.currentStep !== 'SUCCESS' && (
        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-50 shrink-0">
          {state.currentStep !== 'ONBOARDING' ? (
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 text-sm font-medium transition-colors text-slate-400 hover:text-slate-600"
            >
              <ChevronLeft size={18} />
              Back
            </button>
          ) : (
            <div />
          )}
          <button className="flex items-center gap-2 text-[#2563eb] text-sm font-semibold hover:opacity-80 transition-opacity">
            Save Changes
          </button>
        </div>
      )}

      {/* Main Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Column: Branding (45%) */}
        {state.currentStep !== 'SUCCESS' && (
          <div className="w-[45%] p-4 relative hidden md:block">
            <div className="h-full w-full rounded-[24px] overflow-hidden relative group">
              <img 
                src={sidebarContent.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Branding background"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#2563eb]/70 to-[#1e293b]/95" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={state.currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-4xl font-bold mb-4">{sidebarContent.title}</h2>
                    <h3 className="text-2xl font-medium mb-6">{sidebarContent.subtitle}</h3>
                    <p className="text-white/80 max-w-sm mx-auto leading-relaxed">
                      {sidebarContent.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Step Indicators */}
                <div className="mt-12 flex gap-2">
                  {steps.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Logo Box */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                <div className="bg-[#1e293b] rounded-xl px-8 py-4 flex items-center gap-3 shadow-xl border border-white/10 shrink-0">
                  <div className="bg-[#2563eb] p-2 rounded-lg">
                    <PawPrint className="text-white" size={20} />
                  </div>
                  <span className="text-white font-bold text-xl tracking-wide">PawCare</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Right Column: Dynamic Content (55% or 100% on Success) */}
        <div className={`flex-1 h-full overflow-y-auto custom-scrollbar bg-white ${state.currentStep === 'SUCCESS' ? 'p-0' : 'px-12 py-10'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={state.currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="h-full flex flex-col"
            >
              {state.currentStep === 'ONBOARDING' && (
                <OnboardingStep 
                  onSelect={(isNew) => {
                    setState(prev => ({ ...prev, isAdminNew: isNew, currentStep: 'PROFILE' }));
                  }} 
                />
              )}
              {state.currentStep === 'PROFILE' && (
                <ProfileStep 
                  state={state} 
                  setState={setState} 
                  onNext={handleNext} 
                  onDashboard={handleDashboard}
                />
              )}
              {state.currentStep === 'SPECIES' && (
                <SpeciesStep 
                  state={state} 
                  setState={setState} 
                  onNext={handleNext} 
                  onDashboard={handleDashboard}
                />
              )}
              {state.currentStep === 'STAFFING' && (
                <StaffingStep 
                  state={state} 
                  setState={setState} 
                  onNext={handleNext} 
                />
              )}
              {state.currentStep === 'SUCCESS' && (
                <SuccessStep onDashboard={handleDashboard} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<View>('REGISTRATION');

  if (view === 'DASHBOARD') {
    return <DashboardPage />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 md:p-8">
      <RegistrationWrapper setGlobalView={setView} />
    </div>
  );
}
