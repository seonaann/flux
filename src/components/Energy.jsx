import React, { useState, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { Zap, Activity, ShieldCheck, PieChart, Info } from "lucide-react";

Chart.register(...registerables);

/* Flux Colors */
const colors = {
  electricCyan: "#00F0FF",
  deepPurple: "#1A0B2E",
  accentGreen: "#00FF87",
};

/* KPI Card */
const KPICard = ({ title, value, unit }) => (
  <div className="bg-white/5 border border-cyan-400/20 rounded-[25px] p-6 transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 group">
    <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">
      {title}
    </h3>

    <div className="flex items-baseline gap-1">
      <span className="text-4xl font-black bg-gradient-to-br from-cyan-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
        {value}
      </span>

      {unit && (
        <span className="text-sm font-bold text-cyan-400/60 uppercase">
          {unit}
        </span>
      )}
    </div>
  </div>
);

/* Device Card */
const DeviceCard = ({ name, usage }) => (
  <div className="bg-black/30 border border-white/10 rounded-2xl p-5 hover:border-cyan-400/30 transition-all">
    <div className="flex justify-between items-center mb-4">
      <h4 className="font-bold text-sm text-white/90">{name}</h4>

      <span className="text-[10px] font-black text-cyan-400 uppercase tracking-tighter">
        {Math.round(usage)}% Load
      </span>
    </div>

    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-1000 ease-out"
        style={{ width: `${usage}%` }}
      />
    </div>
  </div>
);

export default function Energy() {
  const [live, setLive] = useState(1.82);
  const [total, setTotal] = useState(24.7);
  const [cost, setCost] = useState(284);

  const [deviceLoads, setDeviceLoads] = useState({
    ac: 65,
    fridge: 40,
    light: 25,
    wm: 8,
  });

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  /* Chart Setup */
  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstance.current) chartInstance.current.destroy();

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "Power (kW)",
            data: [],
            borderColor: colors.electricCyan,
            backgroundColor: "rgba(0, 240, 255, 0.15)",
            tension: 0.4,
            fill: true,
            pointRadius: 0,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            ticks: { color: "rgba(255,255,255,0.4)", font: { size: 10 } },
            grid: { display: false },
          },
          y: {
            ticks: { color: "rgba(255,255,255,0.4)", font: { size: 10 } },
            grid: { color: "rgba(255, 255, 255, 0.05)" },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, []);

  /* Live Update Loop */
  useEffect(() => {
    const interval = setInterval(() => {
      const nextLive = live + (Math.random() - 0.5) * 0.25;
      const nextTotal = total + nextLive / 120;

      setLive(nextLive);
      setTotal(nextTotal);
      setCost(Math.round(nextTotal * 11.5));

      setDeviceLoads({
        ac: 60 + Math.random() * 20,
        fridge: 40,
        light: 20 + Math.random() * 10,
        wm: Math.random() * 15,
      });

      if (chartInstance.current) {
        const time = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        chartInstance.current.data.labels.push(time);
        chartInstance.current.data.datasets[0].data.push(nextLive.toFixed(2));

        if (chartInstance.current.data.labels.length > 12) {
          chartInstance.current.data.labels.shift();
          chartInstance.current.data.datasets[0].data.shift();
        }

        chartInstance.current.update("none");
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [live, total]);

  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white font-sans overflow-hidden selection:bg-cyan-400 selection:text-black relative">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-400/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-emerald-400/10 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#1A0B2E]/80 backdrop-blur-xl border-b border-cyan-400/10 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/20">
            <Zap className="text-black" size={20} />
          </div>

          <span className="text-2xl font-black tracking-tighter uppercase bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            FLUX
          </span>
        </div>

        <div className="flex items-center gap-2 text-cyan-400 text-xs font-black uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          Live Monitoring
        </div>
      </nav>

      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl font-black tracking-tight">
              Energy <span className="text-cyan-400">Dashboard</span>
            </h1>

            <p className="text-white/40 font-bold uppercase tracking-widest text-[11px] mt-2 flex items-center gap-2">
              <Activity size={14} className="text-cyan-400" />
              Real-time telemetry active
            </p>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-full border border-cyan-400/30 text-cyan-400 text-xs font-bold hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-2">
              <ShieldCheck size={14} /> Admin Tools
            </button>

            <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              <Info size={14} /> Reports
            </button>
          </div>
        </header>

        {/* KPI Grid + Fade Animation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <KPICard title="Total Today" value={total.toFixed(1)} unit="kWh" />
          <KPICard title="Current Load" value={live.toFixed(2)} unit="kW" />
          <KPICard title="Cost Today" value={`₹${cost}`} />
          <KPICard title="Carbon Saved" value="-18%" />
        </div>

        {/* Chart + Devices */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chart Card Premium */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-[35px] p-8 relative overflow-hidden group">
            {/* Big Zap Glow Icon */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Zap size={120} className="text-cyan-400" />
            </div>

            {/* Title + Active Badge */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold flex items-center gap-3">
                Live Power Trend
                <span className="text-[10px] bg-cyan-400/20 text-cyan-400 px-2 py-0.5 rounded-full uppercase">
                  Active
                </span>
              </h2>

              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
            </div>

            <div className="h-[350px]">
              <canvas ref={chartRef}></canvas>
            </div>
          </div>

          {/* Device Column Premium */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 flex flex-col">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <PieChart className="text-emerald-400" size={18} />
              Device Breakdown
            </h2>

            <div className="space-y-4 flex-grow">
              <DeviceCard name="Air Conditioner" usage={deviceLoads.ac} />
              <DeviceCard name="Refrigerator" usage={deviceLoads.fridge} />
              <DeviceCard name="Smart Lighting" usage={deviceLoads.light} />
              <DeviceCard name="Washing Machine" usage={deviceLoads.wm} />
            </div>

            {/* Efficiency Footer */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/30">
                <span>System Efficiency</span>
                <span className="text-emerald-400">94.2% Peak</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-white/20 text-[9px] font-bold tracking-[0.4em] uppercase border-t border-white/5">
        © 2026 FLUX ENERGY TECHNOLOGY — SENSING THE FUTURE
      </footer>
    </div>
  );
}
