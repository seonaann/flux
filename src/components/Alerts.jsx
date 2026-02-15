import React, { useState } from "react";
import {
  Zap,
  Bell,
  Leaf,
  AlertTriangle,
  CheckCircle2,
  TrendingDown,
  ArrowRight,
  Clock,
  Settings,
  ChevronLeft,
} from "lucide-react";

const colors = {
  electricCyan: "#00F0FF",
  energyYellow: "#FFF500",
  accentGreen: "#00FF87",
  alertRed: "#FF4D4D",
};

/* ---------------- ALERT CARD ---------------- */

const AlertCard = ({ alert, onDismiss, onArchive }) => {
  const Icon = alert.icon;

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all group relative overflow-hidden">
      {/* Color Strip */}
      <div
        className="absolute left-0 top-0 h-full w-1.5"
        style={{ backgroundColor: alert.color }}
      />

      <div className="flex gap-5">
        {/* Icon */}
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
          <Icon size={24} style={{ color: alert.color }} />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-lg text-white/90">
              {alert.title}
            </h3>

            <span className="text-[10px] text-white/30 font-bold flex items-center gap-1 uppercase tracking-widest">
              <Clock size={10} /> {alert.time}
            </span>
          </div>

          <p className="text-white/60 text-sm mb-4 leading-relaxed">
            {alert.message}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => onArchive(alert.id)}
              className="text-[10px] font-black uppercase tracking-widest text-cyan-400 hover:underline flex items-center gap-1"
            >
              Archive <ArrowRight size={12} />
            </button>

            <button
              onClick={() => onDismiss(alert.id)}
              className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white/70 transition"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- RECOMMENDATION CARD ---------------- */

const RecommendationCard = ({ title, impact, description }) => (
  <div className="bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 border border-cyan-400/20 rounded-[30px] p-8">
    <div className="flex items-center gap-2 mb-4">
      <Leaf className="text-emerald-400" size={18} />
      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">
        Efficiency Boost
      </span>
    </div>

    <h3 className="text-2xl font-black mb-3 tracking-tight">
      {title}
    </h3>

    <p className="text-white/60 text-sm leading-relaxed mb-6">
      {description}
    </p>

    <div className="flex justify-between items-center pt-4 border-t border-white/10">
      <div>
        <span className="text-[10px] text-white/30 uppercase font-bold">
          Estimated Saving
        </span>
        <div className="text-emerald-400 font-bold">
          ₹{impact} / month
        </div>
      </div>

      <button className="px-6 py-2 rounded-full bg-cyan-400 text-black font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform">
        Apply
      </button>
    </div>
  </div>
);

/* ---------------- MAIN PAGE ---------------- */

export default function Alerts({ goToDashboard }) {
  const [activeTab, setActiveTab] = useState("active");

  /* Alerts State */
  const [activeAlerts, setActiveAlerts] = useState([
    {
      id: 1,
      title: "Peak Load Detected",
      message:
        "Consumption is 45% higher than your average for this hour. Turn off non-essential appliances.",
      time: "2m ago",
      icon: AlertTriangle,
      color: colors.alertRed,
    },
    {
      id: 2,
      title: "Unusual Fridge Cycle",
      message:
        "Your refrigerator compressor is running longer than usual. Check the door seal.",
      time: "1h ago",
      icon: TrendingDown,
      color: colors.energyYellow,
    },
    {
      id: 3,
      title: "Eco-Mode Available",
      message:
        "Switching your AC to Eco-Mode could save 2.4 kWh today.",
      time: "4h ago",
      icon: Zap,
      color: colors.electricCyan,
    },
  ]);

  const [archivedAlerts, setArchivedAlerts] = useState([]);

  /* ---------------- BUTTON FUNCTIONS ---------------- */

  const dismissAlert = (id) => {
    setActiveAlerts(activeAlerts.filter((a) => a.id !== id));
  };

  const archiveAlert = (id) => {
    const alertToArchive = activeAlerts.find((a) => a.id === id);

    setActiveAlerts(activeAlerts.filter((a) => a.id !== id));
    setArchivedAlerts([alertToArchive, ...archivedAlerts]);
  };

  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white font-sans overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-emerald-400/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-cyan-400/5 blur-[100px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#1A0B2E]/80 backdrop-blur-xl border-b border-white/5 py-4 px-6 flex justify-between items-center">
        {/* Back Button */}
        <button
          onClick={goToDashboard}
          className="flex items-center gap-2 text-white/50 hover:text-white transition"
        >
          <ChevronLeft size={18} />
          <span className="text-sm font-bold">Dashboard</span>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Zap className="text-cyan-400" size={22} />
          <span className="font-black text-xl tracking-tight">
            FLUX Alerts
          </span>
        </div>

        <Settings className="text-white/40" size={20} />
      </nav>

      {/* Content */}
      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Bell className="text-cyan-400 animate-bounce" size={20} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400">
              Alerts & Insights
            </span>
          </div>

          <h1 className="text-5xl font-black tracking-tight mb-6">
            Optimization{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Center
            </span>
          </h1>

          {/* Tabs */}
          <div className="flex gap-8 border-b border-white/10">
            {["active", "archived", "settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-xs font-black uppercase tracking-widest relative ${
                  activeTab === tab
                    ? "text-white"
                    : "text-white/30 hover:text-white/60"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400" />
                )}
              </button>
            ))}
          </div>
        </header>

        {/* ---------------- TAB CONTENT ---------------- */}

        {/* ACTIVE TAB */}
        {activeTab === "active" && (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Alerts */}
            <div className="lg:col-span-2 space-y-6">
              {activeAlerts.length === 0 ? (
                <p className="text-white/40 font-bold">
                  🎉 No active alerts right now.
                </p>
              ) : (
                activeAlerts.map((alert) => (
                  <AlertCard
                    key={alert.id}
                    alert={alert}
                    onDismiss={dismissAlert}
                    onArchive={archiveAlert}
                  />
                ))
              )}
            </div>

            {/* AI Suggestions */}
            <div className="space-y-6">
              <RecommendationCard
                title="Shift Laundry Time"
                impact="420"
                description="Run washing cycles after 11PM to reduce peak tariff costs."
              />
              <RecommendationCard
                title="Phantom Load Fix"
                impact="180"
                description="Unplug idle devices at night to stop constant energy drain."
              />
            </div>
          </div>
        )}

        {/* ARCHIVED TAB */}
        {activeTab === "archived" && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white/70">
              Archived Alerts
            </h2>

            {archivedAlerts.length === 0 ? (
              <p className="text-white/40">
                Nothing archived yet.
              </p>
            ) : (
              archivedAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 opacity-60"
                >
                  <p className="font-bold">{alert.title}</p>
                  <p className="text-sm text-white/40">
                    {alert.message}
                  </p>
                </div>
              ))
            )}
          </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === "settings" && (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-xl">
            <h2 className="text-xl font-black mb-4">
              Alert Settings
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Settings panel coming next:
              <br />
              ✅ Enable SMS Alerts  
              <br />
              ✅ Custom Thresholds  
              <br />
              ✅ Smart Automation Rules  
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
