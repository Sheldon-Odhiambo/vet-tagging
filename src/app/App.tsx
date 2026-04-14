import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Campaigns } from './pages/Campaigns';
import { Patients } from './pages/Patients';
import { CampaignSetup } from './pages/CampaignSetup';
import { CampaignArchive } from './pages/CampaignArchive';
import { Team } from './pages/Team';
import { SettingsPage } from './pages/SettingsPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-blue-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/campaign-setup" element={<CampaignSetup />} />
              <Route path="/campaign-archive" element={<CampaignArchive />} />
              <Route path="/team" element={<Team />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}
