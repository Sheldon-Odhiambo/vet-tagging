import {
  Users,
  Briefcase,
  CheckCircle,
  AlertTriangle,
  Syringe,
} from "lucide-react";

export function Dashboard() {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen text-gray-900 flex justify-center">
      <div className="w-full lg:w-300 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8 border-b border-gray-200 pb-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-blue-950">PawCare</h1>
            <span className="text-sm text-gray-500">Active: 8:05:52 am</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-semibold text-sm md:text-base">
              John Doe - Volunteer 110
            </span>
            <button className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Emergency Alert
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {[
            { label: "Total Registered", value: "150" },
            { label: "Waiting for vax", value: "20" },
            { label: "In Surgery", value: "05" },
            { label: "In Recovery", value: "10" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center"
            >
              <p className="text-xs text-gray-500 font-semibold mb-2 uppercase">
                {stat.label}
              </p>
              <p className="text-2xl md:text-3xl font-bold text-blue-950">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stations */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-blue-950 mb-4">
              Stations
            </h2>

            {[
              {
                name: "Intake and Triage",
                active: "2 active volunteers",
                station: "Station A-D",
                queue: "12",
                icon: Users,
              },
              {
                name: "Vaccination Clinic",
                active: "4 active volunteers",
                station: "Station E-H",
                queue: "20",
                icon: Syringe,
              },
              {
                name: "Surgical Unit",
                active: "6 active volunteers",
                station: "Station I-K",
                queue: "05",
                icon: Briefcase,
              },
              {
                name: "Recovery and Discharge",
                active: "4 active volunteers",
                station: "Station L-N",
                queue: "10",
                icon: CheckCircle,
              },
            ].map((station, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <station.icon className="w-6 h-6 text-blue-900" />
                  </div>

                  <div>
                    <h3 className="font-bold text-blue-950">
                      {station.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {station.active} • {station.station}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-blue-950">
                    {station.queue}
                  </p>
                  <p className="text-xs text-gray-500">In queue</p>
                </div>
              </div>
            ))}
          </div>

          {/* Alerts & Activity */}
          <div className="space-y-8">
            {/* Alerts */}
            <div>
              <h2 className="text-xl font-bold text-blue-950 mb-4 flex justify-between items-center">
                Critical Alerts for Staff
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </h2>

              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-4">
                <div className="border-b border-gray-100 pb-2">
                  <p className="text-sm font-bold text-red-700">
                    1. Urgent Station K • 8:20 am
                  </p>
                  <p className="text-xs text-gray-600">
                    Surgical needles are low, also gown size M. Immediate
                    restock needed
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-blue-800">
                    2. Information | Shift Change • 8:25 am
                  </p>
                  <p className="text-xs text-gray-600">
                    Volunteers in station F and J report to station N to
                    assist discharge
                  </p>
                </div>
              </div>
            </div>

            {/* Live Activity */}
            <div>
              <h2 className="text-xl font-bold text-blue-950 mb-4 flex justify-between items-center">
                Live Activity
                <span className="text-xs text-blue-600 cursor-pointer">
                  view full
                </span>
              </h2>

              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-4">
                {[
                  { time: "8:40 am", text: "Patient 124 intake done." },
                  { time: "8:45 am", text: "Patient 115 surgery started" },
                  { time: "8:50 am", text: "Patient 106 discharged" },
                  { time: "9:20 am", text: "Patient 084 recovery" },
                  { time: "10:00 am", text: "Patient 130 vaccinated" },
                ].map((act, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-900 mt-1.5" />
                    <div>
                      <p className="text-xs font-bold text-blue-950">
                        {act.time}
                      </p>
                      <p className="text-xs text-gray-600">
                        {act.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}