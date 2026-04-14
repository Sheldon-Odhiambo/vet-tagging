import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ChevronLeft, ChevronRight, Target, Activity, Map } from 'lucide-react';

export function CampaignSetup() {
  const navigate = useNavigate();
  const campaigns = [
    { name: 'Nairobi West Outreach', id: '#C-2024-001', timeline: 'Oct 12 - Oct 15, 2024', region: 'Nairobi', impact: '120 Est.', status: 'UPCOMING', sub: 'Kibera Community Drive' },
    { name: 'Mombasa Coastal Drive', id: '#C-2023-142', timeline: 'Aug 02 - Aug 05, 2024', region: 'Mombasa', impact: '342 Total', status: 'COMPLETED', sub: 'Old Town Vaccination' },
    { name: 'Kisumu Lakeside Clinic', id: '#C-2024-DRF', timeline: 'Unscheduled', region: 'Kisumu', impact: '--', status: 'DRAFT', sub: 'Dunga Beach Outreach' },
    { name: 'Nakuru Rift Valley Deworming', id: '#C-2023-138', timeline: 'Jul 18 - Jul 20, 2024', region: 'Nakuru', impact: '88 Total', status: 'COMPLETED', sub: 'Lake Nakuru Survey' },
    { name: 'Eldoret Pet Health', id: '#C-2024-005', timeline: 'Nov 01 - Nov 03, 2024', region: 'Eldoret', impact: '150 Est.', status: 'UPCOMING', sub: 'Uasin Gishu Drive' },
    { name: 'Thika Road Vaccination', id: '#C-2024-006', timeline: 'Sep 10 - Sep 12, 2024', region: 'Thika', impact: '200 Total', status: 'COMPLETED', sub: 'Kiambu Outreach' },
    { name: 'Malindi Beach Clinic', id: '#C-2024-007', timeline: 'Dec 05 - Dec 07, 2024', region: 'Malindi', impact: '95 Est.', status: 'UPCOMING', sub: 'Kilifi Survey' },
    { name: 'Kericho Tea Farm Outreach', id: '#C-2024-008', timeline: 'Oct 20 - Oct 22, 2024', region: 'Kericho', impact: '110 Total', status: 'COMPLETED', sub: 'Tea Zone Survey' },
  ];

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(campaigns.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCampaigns = campaigns.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-900">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-blue-950">Campaign Operations</h1>
          <p className="text-gray-600">Manage field precision and animal welfare logistics.</p>
        </div>
        <button 
          onClick={() => navigate('/campaign-architect')}
          className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-950 flex items-center gap-2"
        >
          + Start New Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        <div className="md:col-span-6 bg-white p-6 rounded-xl border border-gray-200 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500 font-semibold flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-900" />
              OPERATIONAL REACH
            </p>
            <p className="text-4xl font-bold text-blue-950">1,284</p>
            <p className="text-sm text-green-700 font-medium">Total Animals Served YTD</p>
          </div>
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-200 rounded-full" />
          </div>
        </div>
        <div className="md:col-span-3 bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500 font-semibold">Vaccinations Pending</p>
          <p className="text-4xl font-bold text-blue-950">428</p>
        </div>
        <div className="md:col-span-3 bg-white p-6 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-500 font-semibold">Active Regions</p>
          <p className="text-4xl font-bold text-blue-950">12</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-blue-950">Active & Historical Campaigns</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm bg-white text-gray-700">Filters</button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm bg-white text-gray-700">Export CSV</button>
          </div>
        </div>
        <table className="w-full text-sm text-gray-700">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-200">
              <th className="py-2">CAMPAIGN NAME</th>
              <th className="py-2">TIMELINE</th>
              <th className="py-2">REGION</th>
              <th className="py-2">PET IMPACT</th>
              <th className="py-2">STATUS</th>
              <th className="py-2">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCampaigns.map((c) => (
              <tr key={c.id} className="border-b border-gray-100">
                <td className="py-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    {c.status === 'COMPLETED' ? '✅' : '📄'}
                  </div>
                  <div>
                    <p className="font-medium text-blue-950">{c.name}</p>
                    <p className="text-xs text-blue-700">{c.sub}</p>
                    <p className="text-xs text-gray-400">{c.id}</p>
                  </div>
                </td>
                <td className="py-3">{c.timeline}</td>
                <td className="py-3">📍 {c.region}</td>
                <td className="py-3">{c.impact}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${c.status === 'UPCOMING' ? 'bg-blue-100 text-blue-800' : c.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {c.status}
                  </span>
                </td>
                <td className="py-3 text-blue-900 cursor-pointer font-medium">{c.status === 'COMPLETED' ? 'View Analytics' : '...'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <p>Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, campaigns.length)} of {campaigns.length} campaigns</p>
          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="p-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${page === currentPage ? 'bg-blue-900 text-white' : 'hover:bg-gray-100'}`}
              >
                {page}
              </button>
            ))}
            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="p-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold mb-4 text-blue-950">Regional Density</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
            Map Placeholder
          </div>
        </div>
        <div className="md:col-span-4 space-y-4">
          <h2 className="text-lg font-semibold text-blue-950">Impact Highlights</h2>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <p className="text-xs text-blue-800 font-bold uppercase">Top Performer</p>
            <p className="font-bold text-blue-950">Harbor District Team</p>
            <p className="text-sm text-gray-600">Surpassed monthly vaccination goal by 24% during July outreach.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <p className="text-xs text-blue-800 font-bold uppercase">Efficiency Metric</p>
            <p className="font-bold text-blue-950">12.4m Intake Speed</p>
            <p className="text-sm text-gray-600">Average time from pet arrival to medical triage completion.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <p className="text-xs text-blue-800 font-bold uppercase">Community Note</p>
            <p className="font-bold text-blue-950">92% Satisfaction</p>
            <p className="text-sm text-gray-600">Owner feedback score for the City Center Neutering Drive.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
