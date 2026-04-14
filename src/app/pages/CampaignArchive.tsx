import { FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

export function CampaignArchive() {
  const [campaigns, setCampaigns] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('campaigns');
    if (saved) {
      setCampaigns(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Campaign Archive</h1>
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        {campaigns.length === 0 ? (
          <p className="text-gray-500">No archived campaigns found.</p>
        ) : (
          <div className="space-y-4">
            {campaigns.map((c, i) => (
              <div key={i} className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-bold">{c.campaign.name}</h3>
                <p className="text-sm text-gray-600">{c.campaign.location} | {c.campaign.startDate} to {c.campaign.endDate}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
