import React, { useState, useEffect } from "react";
import { Terminal, Cpu, Clock, ShieldCheck, Activity } from "lucide-react";
import { systemData } from "../../data/systemData";

export default function SystemStatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-slate-900 border-t border-purple-900/40 text-purple-200 text-xs font-mono py-2.5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
        {/* Left: System Status & Kernel */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-white font-semibold">KERNEL {systemData.version}</span>
          </div>
          <span className="text-purple-400/60 hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center space-x-1.5 text-purple-300">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>MERN / Vercel Edge</span>
          </div>
        </div>

        {/* Center: Real Credly Verification */}
        <div className="flex items-center space-x-2 text-purple-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden md:inline text-purple-200">Credly Pearson VUE Certified</span>
          <span className="md:hidden">Credly Verified</span>
        </div>

        {/* Right: Live Clock & Latency */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-purple-300">
            <Activity className="w-3.5 h-3.5 text-purple-400" />
            <span>24ms</span>
          </div>
          <span className="text-purple-400/60">|</span>
          <div className="flex items-center space-x-1 text-white">
            <Clock className="w-3.5 h-3.5 text-purple-400" />
            <span>{time || "SYS:SYNC"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
