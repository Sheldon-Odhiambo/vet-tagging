import React, { useEffect, useState, useMemo } from 'react';
import { 
  FileText, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  X,
  Calendar,
  MapPin
} from 'lucide-react';

interface Campaign {
  id?: string;
  campaign: {
    name: string;
    location: string;
    startDate: string;
    endDate: string;
    budget?: string;
    description?: string;
    status?: string;
  };
  createdAt?: string;
}

export function CampaignArchive() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [filterLocation, setFilterLocation] = useState<string>('All');

  useEffect(() => {
    const saved = localStorage.getItem('campaigns');
    if (saved) {
      try {
        setCampaigns(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse campaigns", e);
      }
    } else {
      // Dummy data
      setCampaigns([
        {
          campaign: {
            name: 'Kawangware North Rabies Drive',
            location: 'Kawangware',
            startDate: '2024-10-24',
            endDate: '2024-10-25',
            budget: '$1,200',
            description: 'A successful two-day rabies vaccination drive reaching over 500 pets.',
            status: 'Completed'
          }
        },
        {
          campaign: {
            name: 'Mathare Spay/Neuter Clinic',
            location: 'Mathare',
            startDate: '2024-09-15',
            endDate: '2024-09-17',
            budget: '$2,500',
            description: 'High-volume spay/neuter clinic providing services to local community pets.',
            status: 'Completed'
          }
        }
      ]);
    }
  }, []);

  // Filter Logic
  const filteredCampaigns = useMemo(() => {
    return campaigns.filter((item) => {
      const matchesSearch = item.campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.campaign.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterLocation === 'All' || item.campaign.location === filterLocation;
      return matchesSearch && matchesFilter;
    });
  }, [campaigns, searchTerm, filterLocation]);

  // Unique locations for the filter dropdown
  const locations = useMemo(() => {
    const locs = campaigns.map(c => c.campaign.location);
    return ['All', ...Array.from(new Set(locs))];
  }, [campaigns]);

  // Export to CSV (Google Sheets compatible)
  const exportToSheets = (data: Campaign[] | Campaign) => {
    const items = Array.isArray(data) ? data : [data];
    const headers = ['Campaign Name', 'Location', 'Start Date', 'End Date', 'Budget'];
    const csvContent = [
      headers.join(','),
      ...items.map(c => [
        `"${c.campaign.name}"`,
        `"${c.campaign.location}"`,
        c.campaign.startDate,
        c.campaign.endDate,
        `"${c.campaign.budget || 'N/A'}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `campaign_export_${new Date().toISOString().slice(0,10)}.csv`);
    link.click();
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="text-blue-600" />
            Campaign Archive
          </h1>
          <p className="text-gray-500">Manage and review your past marketing efforts.</p>
        </div>
        
        <button 
          onClick={() => exportToSheets(filteredCampaigns)}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium shadow-sm"
        >
          <Download size={18} />
          Export All to Sheets
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="Search by name or location..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-500" />
          <select 
            className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
          >
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main List */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {filteredCampaigns.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-gray-500 text-lg">No campaigns found matching your criteria.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredCampaigns.map((c, i) => (
              <div key={i} className="p-5 hover:bg-gray-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-900">{c.campaign.name}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {c.campaign.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {c.campaign.startDate} — {c.campaign.endDate}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setSelectedCampaign(c)}
                    className="flex items-center gap-1 px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    <Eye size={16} /> View Details
                  </button>
                  <button 
                    onClick={() => exportToSheets(c)}
                    className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                    title="Export this campaign"
                  >
                    <Download size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-xl font-bold text-gray-900">Campaign Details</h2>
              <button onClick={() => setSelectedCampaign(null)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Campaign Name</label>
                <p className="text-lg font-medium">{selectedCampaign.campaign.name}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</label>
                  <p className="font-medium">{selectedCampaign.campaign.location}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Budget</label>
                  <p className="font-medium text-green-600">{selectedCampaign.campaign.budget || '$0.00'}</p>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Duration</label>
                <p className="font-medium">{selectedCampaign.campaign.startDate} to {selectedCampaign.campaign.endDate}</p>
              </div>
              {selectedCampaign.campaign.description && (
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Description</label>
                  <p className="text-gray-600">{selectedCampaign.campaign.description}</p>
                </div>
              )}
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button 
                onClick={() => setSelectedCampaign(null)}
                className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
