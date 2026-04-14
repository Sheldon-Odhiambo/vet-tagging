import { User, Building2, ShieldCheck, Bell, Lock, History, AlertTriangle, ChevronRight } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <p className="text-sm text-gray-500 font-medium">SYSTEM CONFIGURATION</p>
        <h1 className="text-3xl font-bold text-blue-950">Platform Settings</h1>
        <p className="text-gray-600">Manage your clinical profile, office configurations, and system-wide security protocols for The Clinical Curator.</p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-green-100 text-green-800 rounded-lg"><User className="w-6 h-6" /></div>
            <div>
              <h2 className="text-lg font-bold text-blue-950">Profile Settings</h2>
              <p className="text-sm text-gray-500">Update your personal identification and access roles.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className="text-xs font-bold text-gray-500 uppercase">Full Name</label><input className="w-full p-2 border border-gray-200 rounded bg-gray-50" defaultValue="Dr. Sarah Jenkins" /></div>
            <div><label className="text-xs font-bold text-gray-500 uppercase">Role</label><input className="w-full p-2 border border-gray-200 rounded bg-gray-100" defaultValue="Veterinary Administrator" disabled /></div>
          </div>
          <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
          <input className="w-full p-2 border border-gray-200 rounded bg-gray-50 mb-4" defaultValue="s.jenkins@pawcare-clinic.com" />
          <button className="bg-blue-950 text-white px-4 py-2 rounded font-bold text-sm">Update Profile</button>
        </div>

        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-100 text-blue-800 rounded-lg"><Building2 className="w-6 h-6" /></div>
            <div>
              <h2 className="text-lg font-bold text-blue-950">Clinic Config</h2>
              <p className="text-sm text-gray-500">Global veterinary practice metadata.</p>
            </div>
          </div>
          <label className="text-xs font-bold text-gray-500 uppercase">Clinic Name</label>
          <input className="w-full p-2 border border-gray-200 rounded bg-gray-50 mb-4" defaultValue="PawCare Wellness & Surgery" />
          <label className="text-xs font-bold text-gray-500 uppercase">Default Location</label>
          <select className="w-full p-2 border border-gray-200 rounded bg-gray-50 mb-4"><option>North Heights Branch</option></select>
          <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3"><div className="p-2 bg-blue-100 text-blue-800 rounded"><Building2 className="w-5 h-5" /></div><div><p className="font-bold text-blue-950">Regional Zone</p><p className="text-xs text-gray-500">Pacific Northwest Division A</p></div></div>
            <ChevronRight className="text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 bg-white p-8 rounded-xl border border-gray-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-red-100 text-red-800 rounded-lg"><ShieldCheck className="w-6 h-6" /></div>
            <div>
              <h2 className="text-lg font-bold text-blue-950">Security & Privacy</h2>
              <p className="text-sm text-gray-500">Protect patient data and your access credentials.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between mb-2"><p className="font-bold text-blue-950">Change Password</p><Lock className="text-red-800" /></div>
              <p className="text-xs text-gray-600 mb-4">Last updated 42 days ago. We recommend rotating every 90 days.</p>
              <button className="text-red-800 font-bold text-sm">Update Credentials</button>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between mb-2"><p className="font-bold text-blue-950">Two-Factor Auth</p><div className="w-2 h-2 rounded-full bg-green-500" /></div>
              <p className="text-xs text-gray-600 mb-4">Enhanced security is active. Authenticator app linked to sarah.j-admin mobile device.</p>
              <button className="text-blue-950 font-bold text-sm">Manage 2FA Settings</button>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl border border-gray-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-green-100 text-green-800 rounded-lg"><Bell className="w-6 h-6" /></div>
            <div>
              <h2 className="text-lg font-bold text-blue-950">Alerts</h2>
              <p className="text-sm text-gray-500">Customize system signals.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center"><p className="text-sm font-bold text-blue-950">System Alerts</p><input type="checkbox" className="w-8 h-4" defaultChecked /></div>
            <div className="flex justify-between items-center"><p className="text-sm font-bold text-blue-950">Campaign Updates</p><input type="checkbox" className="w-8 h-4" defaultChecked /></div>
            <div className="flex justify-between items-center"><p className="text-sm font-bold text-blue-950">Team Mentions</p><input type="checkbox" className="w-8 h-4" /></div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-xs text-gray-600">
              <p className="font-bold text-blue-950 mb-1">EMAIL DIGEST</p>
              Weekly performance summaries are sent every Monday at 8:00 AM.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-200 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <AlertTriangle className="text-red-800 w-8 h-8" />
          <div>
            <h2 className="font-bold text-red-950">Sensitive Operations</h2>
            <p className="text-sm text-red-800">Deactivating the clinic account will freeze all active campaigns and surgical logs.</p>
          </div>
        </div>
        <button className="bg-white border border-red-300 text-red-800 px-4 py-2 rounded font-bold text-sm">Deactivate Clinic</button>
      </div>
    </div>
  );
}
