import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  ChevronRight,
  MapPin,
  Save,
  Plus,
} from "lucide-react";

export function CampaignSetup() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [campaign, setCampaign] = useState({
    name: "",
    location: "",
    startDate: "",
    endDate: "",
    adminName: "",
    adminEmail: "",
    adminNumber: "",
  });

  const [staff, setStaff] = useState<{ name: string; role: string }[]>([]);
  const [security, setSecurity] = useState<{ name: string }[]>([]);
  const [volunteers, setVolunteers] = useState<
    { name: string; station: string }[]
  >([]);

  const [resources, setResources] = useState({
    vaccines: "",
    gloves: "",
    other: "",
  });

  const [operations, setOperations] = useState({
    species: [] as string[],
    services: [] as string[],
    goals: {
      registration: "",
      vaccination: "",
      surgery: "",
      recovery: "",
    },
  });

  const [newStaff, setNewStaff] = useState({ name: "", role: "" });
  const [newSecurity, setNewSecurity] = useState({ name: "" });
  const [newVolunteer, setNewVolunteer] = useState({
    name: "",
    station: "",
  });

  const addStaff = () => {
    if (newStaff.name && newStaff.role) {
      setStaff([...staff, newStaff]);
      setNewStaff({ name: "", role: "" });
    }
  };

  const addSecurity = () => {
    if (newSecurity.name) {
      setSecurity([...security, newSecurity]);
      setNewSecurity({ name: "" });
    }
  };

  const addVolunteer = () => {
    if (newVolunteer.name && newVolunteer.station) {
      setVolunteers([...volunteers, newVolunteer]);
      setNewVolunteer({ name: "", station: "" });
    }
  };

  const saveCampaign = () => {
    const saved = localStorage.getItem("campaigns");
    const campaigns = saved ? JSON.parse(saved) : [];

    campaigns.push({
      campaign,
      staff,
      security,
      volunteers,
      resources,
      operations,
    });

    localStorage.setItem("campaigns", JSON.stringify(campaigns));
    navigate("/campaign-archive");
  };

  const stepTitles = [
    "Campaign Details",
    "Staffing",
    "Volunteers",
    "Resources",
    "Operations",
  ];

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen text-gray-900 flex justify-center">
      <div className="w-full lg:w-300 mx-auto bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-950">
            Campaign Setup
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Step {step} of 5: {stepTitles[step - 1]}
          </p>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Campaign Name"
              value={campaign.name}
              onChange={(e) =>
                setCampaign({ ...campaign, name: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                value={campaign.location}
                onChange={(e) =>
                  setCampaign({ ...campaign, location: e.target.value })
                }
                className="w-full pl-10 p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Staffing</h2>

            <div className="flex gap-2">
              <input
                placeholder="Name"
                value={newStaff.name}
                onChange={(e) =>
                  setNewStaff({ ...newStaff, name: e.target.value })
                }
                className="flex-1 p-2 border rounded-lg"
              />
              <input
                placeholder="Role"
                value={newStaff.role}
                onChange={(e) =>
                  setNewStaff({ ...newStaff, role: e.target.value })
                }
                className="flex-1 p-2 border rounded-lg"
              />
              <button
                onClick={addStaff}
                className="bg-blue-900 text-white p-2 rounded-lg"
              >
                <Plus />
              </button>
            </div>

            {staff.map((s, i) => (
              <p key={i}>{s.name} - {s.role}</p>
            ))}
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Volunteers</h2>

            <div className="flex gap-2">
              <input
                placeholder="Name"
                value={newVolunteer.name}
                onChange={(e) =>
                  setNewVolunteer({
                    ...newVolunteer,
                    name: e.target.value,
                  })
                }
                className="flex-1 p-2 border rounded-lg"
              />
              <input
                placeholder="Station"
                value={newVolunteer.station}
                onChange={(e) =>
                  setNewVolunteer({
                    ...newVolunteer,
                    station: e.target.value,
                  })
                }
                className="flex-1 p-2 border rounded-lg"
              />
              <button
                onClick={addVolunteer}
                className="bg-blue-900 text-white p-2 rounded-lg"
              >
                <Plus />
              </button>
            </div>

            {volunteers.map((v, i) => (
              <p key={i}>{v.name} - {v.station}</p>
            ))}
          </div>
        )}

        {/* STEP NAV */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Back
          </button>

          {step < 5 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-blue-900 text-white rounded-lg flex items-center gap-2"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={saveCampaign}
              className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}