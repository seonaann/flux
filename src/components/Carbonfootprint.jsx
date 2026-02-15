import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import {
  Leaf,
  Zap,
  Wind,
  TrendingDown,
  Globe,
  Trees,
  CloudRain,
  ArrowRight,
  Info,
  Calendar,
} from "lucide-react";

Chart.register(...registerables);

/**
 * Flux Design System Tokens
 */
const colors = {
  electricCyan: "#00F0FF",
  deepPurple: "#1A0B2E",
  accentGreen: "#00FF87",
};

/**
 * Environmental Metric Card
 */
const MetricCard = ({ title, value, unit, icon: Icon, color }) => (
  <div className="bg-white/5 border border-white/10 rounded-[30px] p-8 group hover:border-emerald-400/30 transition-all duration-500">
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
        <Icon size={24} style={{ color: color }} />
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
        Monthly Data
      </span>
    </div>

    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-2">
      {title}
    </h3>

    <div className="flex items-baseline gap-2">
      <span
        className="text-4xl font-black font-['Syne'] tracking-tighter"
        style={{ color: color }}
      >
        {value}
      </span>
      <span className="text-xs font-bold text-white/30 uppercase">{unit}</span>
    </div>
  </div>
);

/**
 * ✅ Carbon Footprint Page (Final)
 */
export default function CarbonFootprint({ goToDashboard }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Oct", "Nov", "Dec", "Jan", "Feb"],
        datasets: [
          {
            label: "Clean Energy (kWh)",
            data: [450, 520, 480, 610, 590],
            backgroundColor: colors.accentGreen,
            borderRadius: 8,
            borderSkipped: false,
          },
          {
            label: "Grid Energy (kWh)",
            data: [300, 280, 320, 210, 180],
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: 8,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              color: "rgba(255,255,255,0.5)",
              font: { size: 10, weight: "bold" },
              usePointStyle: true,
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: { color: "rgba(255,255,255,0.4)", font: { size: 10 } },
            grid: { display: false },
          },
          y: {
            stacked: true,
            ticks: { color: "rgba(255,255,255,0.4)", font: { size: 10 } },
            grid: { color: "rgba(255,255,255,0.05)" },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white font-sans">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-emerald-400/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-400/5 blur-[100px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#1A0B2E]/80 backdrop-blur-xl border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        {/* Left Side: Back Button + Logo */}
        <div className="flex items-center gap-4">
          {/* ✅ Back Button */}
          <button
            onClick={goToDashboard}
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white hover:bg-emerald-400/10 transition-all"
          >
            ⬅ Back
          </button>

          {/* Logo */}
          <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
            <Leaf className="text-black" size={20} />
          </div>

          <span className="text-2xl font-black uppercase bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            FLUX
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero */}
        <header className="mb-16 flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4 text-emerald-400">
              <Globe size={20} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Environmental Impact
              </span>
            </div>

            <h1 className="text-6xl font-black tracking-tighter leading-[0.9]">
              Net Zero{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>

            <p className="mt-6 text-white/50 text-lg max-w-xl">
              You've reduced your footprint by{" "}
              <span className="text-emerald-400 font-bold">28%</span> compared to
              last year.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-[30px] flex items-center gap-4">
            <div>
              <div className="text-[10px] font-black text-white/30 uppercase mb-1">
                Impact Score
              </div>
              <div className="text-3xl font-black text-emerald-400">84/100</div>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-emerald-400/20 border-t-emerald-400 flex items-center justify-center">
              <TrendingDown size={18} className="text-emerald-400" />
            </div>
          </div>
        </header>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <MetricCard
            title="Carbon Produced"
            value="142"
            unit="kg CO2"
            icon={Wind}
            color="#FF4D4D"
          />
          <MetricCard
            title="Carbon Offset"
            value="384"
            unit="kg CO2"
            icon={Trees}
            color={colors.accentGreen}
          />
          <MetricCard
            title="Trees Equivalent"
            value="18.4"
            unit="Trees"
            icon={CloudRain}
            color={colors.electricCyan}
          />
        </div>

        {/* Chart */}
        <div className="bg-white/5 border border-white/10 rounded-[35px] p-8">
          <h2 className="text-xl font-bold flex items-center gap-3 mb-8">
            Energy Source History <Calendar size={16} className="text-white/30" />
          </h2>

          <div className="h-[400px]">
            <canvas ref={chartRef} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-white/20 text-[9px] font-bold tracking-[0.4em] uppercase border-t border-white/5">
        © 2026 FLUX ENERGY TECHNOLOGY — SUSTAINING THE FUTURE
      </footer>
    </div>
  );
}
