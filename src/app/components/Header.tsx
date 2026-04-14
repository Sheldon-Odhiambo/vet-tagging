import { Search, Bell, ChevronLeft, ChevronRight } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-center px-8 text-gray-900">
      <div className="w-full lg:max-w-[1200px] flex items-center justify-between">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search campaigns or field logs..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium border border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Live Sync Active
          </div>
          <Bell className="w-5 h-5 text-gray-500" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-900 rounded-full" />
            <div className="text-sm">
              <p className="font-medium text-gray-900">Dr. Sarah Chen</p>
              <p className="text-xs text-gray-500">Field Supervisor</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
