import React, { useState } from "react";
import {
  Zap,
  CreditCard,
  Download,
  ChevronRight,
  History,
  TrendingDown,
  Calendar,
  Wallet,
  ArrowUpRight,
} from "lucide-react";

/**
 * Invoice Row Component
 */
const InvoiceRow = ({ date, amount, status, id }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all group">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400">
        <History size={18} />
      </div>
      <div>
        <h4 className="font-bold text-white/90">{date}</h4>
        <p className="text-[10px] text-white/30 uppercase tracking-widest font-black">
          Invoice #{id}
        </p>
      </div>
    </div>

    <div className="mt-4 md:mt-0 flex items-center justify-between md:gap-12">
      <div className="text-right">
        <span className="text-xl font-black font-['Syne']">₹{amount}</span>
        <div className="flex items-center justify-end gap-1.5 mt-1">
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              status === "Paid"
                ? "bg-emerald-400"
                : "bg-yellow-400 animate-pulse"
            }`}
          />
          <span
            className={`text-[9px] font-black uppercase tracking-widest ${
              status === "Paid"
                ? "text-emerald-400"
                : "text-yellow-400"
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      <button className="p-3 rounded-xl bg-white/5 text-white/40 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 transition-all">
        <Download size={18} />
      </button>
    </div>
  </div>
);

export default function Billing({ goToDashboard }) {
  const [isAutoPay, setIsAutoPay] = useState(true);

  const transactions = [
    { id: "FLX-9921", date: "Jan 12, 2026", amount: "2,480.00", status: "Paid" },
    { id: "FLX-8812", date: "Dec 11, 2025", amount: "3,120.50", status: "Paid" },
    { id: "FLX-7705", date: "Nov 10, 2025", amount: "2,890.00", status: "Paid" },
  ];

  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white font-sans">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-cyan-400/5 blur-[150px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#1A0B2E]/80 backdrop-blur-xl border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-lg flex items-center justify-center">
            <Zap className="text-black fill-black" size={20} />
          </div>
          <span className="text-2xl font-black uppercase bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            FLUX
          </span>
        </div>

        {/* Back Button */}
        <button
          onClick={goToDashboard}
          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-white hover:bg-cyan-400/10 transition-all"
        >
          ⬅ Back to Dashboard
        </button>
      </nav>

      {/* Main */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header>
          <div className="flex items-center gap-3 mb-3">
            <Wallet className="text-cyan-400" size={18} />
            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em]">
              Billing & Payments
            </span>
          </div>

          <h1 className="text-5xl font-black tracking-tighter font-['Syne']">
            Your{" "}
            <span className="text-white/40 underline decoration-cyan-400/30">
              Account
            </span>
          </h1>
        </header>

        {/* Billing History */}
        <div className="space-y-6">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white/40">
            Billing History
          </h2>

          <InvoiceRow
            date="Feb 12, 2026"
            amount="1,842.00"
            status="Pending"
            id="FLX-1024"
          />

          {transactions.map((t) => (
            <InvoiceRow key={t.id} {...t} />
          ))}
        </div>

        {/* Auto Pay Toggle */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 max-w-md">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            Auto Pay <CreditCard size={16} className="text-cyan-400" />
          </h3>

          <button
            onClick={() => setIsAutoPay(!isAutoPay)}
            className={`w-14 h-7 rounded-full relative transition ${
              isAutoPay ? "bg-cyan-400" : "bg-white/20"
            }`}
          >
            <div
              className={`absolute top-1 w-5 h-5 bg-white rounded-full transition ${
                isAutoPay ? "left-8" : "left-1"
              }`}
            />
          </button>
        </div>
      </main>
    </div>
  );
}
