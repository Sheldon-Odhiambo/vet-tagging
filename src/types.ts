export type Step = 'ONBOARDING' | 'PROFILE' | 'SPECIES' | 'STAFFING' | 'SUCCESS';

export interface AdminData {
  name: string;
  phone: string;
  email: string;
  photo?: string;
}

export interface CampaignData {
  name: string;
  dates: string;
  location: string;
}

export interface SpeciesData {
  cats: boolean;
  dogs: boolean;
}

export interface Service {
  id: string;
  name: string;
  selected: boolean;
}

export interface StationAssignment {
  name: string;
  members: string[];
}

export interface RegistrationState {
  currentStep: Step;
  isAdminNew: boolean | null;
  admin: AdminData;
  campaign: CampaignData;
  species: SpeciesData;
  services: Service[];
  volunteers: {
    total: number;
    assigned: number;
  };
  assignments: Record<string, StationAssignment>;
}
