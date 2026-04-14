import { LayoutDashboard, Stethoscope, ClipboardList, Users, FileText, Settings, HelpCircle, PawPrint, BarChart3 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

const menuItems = [
  { name: 'Campaign Setup', icon: ClipboardList, path: '/campaign-setup' },
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Patient Database', icon: PawPrint, path: '/patients' },
  { name: 'Team', icon: Users, path: '/team' },
  { name: 'Reports', icon: BarChart3, path: '/reports' },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-blue-950 text-white h-screen flex flex-col">
      <div className="p-6 font-bold text-xl flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
          <PawPrint className="w-5 h-5" />
        </div>
        PawCare
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive ? "bg-blue-800 text-white" : "text-blue-200 hover:bg-blue-900"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-blue-900">
        <NavLink to="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-blue-200 hover:bg-blue-900 rounded-lg">
          <Settings className="w-5 h-5" /> Settings
        </NavLink>
        <NavLink to="/support" className="flex items-center gap-3 px-4 py-2 text-sm text-blue-200 hover:bg-blue-900 rounded-lg">
          <HelpCircle className="w-5 h-5" /> Support
        </NavLink>
      </div>
    </div>
  );
}
