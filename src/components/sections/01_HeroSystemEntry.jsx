import React from "react";
import { Terminal, ArrowDown, ArrowUpRight, ShieldCheck, Code, Sparkles, MapPin } from "lucide-react";
import { profileData } from "../../data/profileData";

export default function HeroSystemEntry({ onExploreClick, onContactClick }) {
  return (
    <section 
      id="system-entry" 
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center bg-os-grid overflow-hidden"
    >
      {/* Background ambient purple glow rings (NO pink) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: System Narrative & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* System Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/90 shadow-xs shadow-purple-900/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-700">
                SYSTEM OPERATIONAL <span className="text-purple-600 font-semibold">• 4 ACTIVE DEPLOYMENTS</span>
              </span>
            </div>

            {/* Core Identity - Anti-generic heading */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-purple-700 font-mono text-sm font-semibold tracking-wide uppercase">
                <Terminal className="w-4 h-4" />
                <span>Developer Operating System // {profileData.displayTag}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-600 to-indigo-700">clean full-stack</span> systems with verified technical proof.
              </h1>
            </div>

            {/* Narrative Story (Concise, authentic, no buzzwords) */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              I’m <strong className="text-slate-900 font-semibold">{profileData.name}</strong>, a Full Stack Web Developer and 7th Semester Computer Science student at the University of the Punjab. I pair core CS fundamentals (C++, OOP, DSA) with modern web engineering across React, Node.js, Express, and MongoDB.
            </p>

            {/* Real verified credential badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-purple-50 border border-purple-200/70 rounded-lg text-xs font-medium text-purple-800">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                <span>Credly Verified (Pearson VUE JS)</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-purple-50 border border-purple-200/70 rounded-lg text-xs font-medium text-purple-800">
                <Code className="w-3.5 h-3.5 text-purple-600" />
                <span>Corvit NAVTTC Full Stack</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-purple-50 border border-purple-200/70 rounded-lg text-xs font-medium text-purple-800">
                <MapPin className="w-3.5 h-3.5 text-purple-600" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm shadow-md shadow-purple-700/25 transition-all duration-200 flex items-center justify-center space-x-2 group hover:translate-y-[-1px]"
              >
                <span>Explore Real Case Files</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-purple-50 text-purple-900 border border-purple-200 font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-xs"
              >
                <span>Initialize Contact</span>
                <ArrowUpRight className="w-4 h-4 text-purple-600" />
              </button>
            </div>

          </div>

          {/* Right Column: Profile Image + OS HUD Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative OS border */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-600/30 to-purple-400/10 blur-lg opacity-80" />

              {/* Main OS Card */}
              <div className="relative bg-white border border-purple-200/90 rounded-2xl shadow-xl shadow-purple-950/10 overflow-hidden">
                
                {/* OS Window Header */}
                <div className="px-4 py-2.5 bg-slate-900 border-b border-purple-900/50 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[11px] font-mono text-purple-300 font-medium">
                    SYS://ident/me.jpeg
                  </span>
                  <div className="w-2.5 h-2.5" />
                </div>

                {/* Profile Photo Container */}
                <div className="relative aspect-4/5 bg-slate-100 overflow-hidden group">
                  <img
                    src={profileData.profileImage}
                    alt="Nabeel Nawaz — Full Stack Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient mask at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent flex flex-col justify-end p-4 text-white">
                    <p className="text-base font-bold font-mono text-white flex items-center justify-between">
                      <span>Nabeel Nawaz</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-purple-700/80 font-normal">7th Sem BS CS</span>
                    </p>
                    <p className="text-xs text-purple-200 font-mono mt-0.5">
                      Full Stack Web Developer • Devsinn Alumni
                    </p>
                  </div>
                </div>

                {/* Telemetry quick bar under photo */}
                <div className="p-3.5 bg-purple-50/60 border-t border-purple-100 grid grid-cols-2 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded-lg bg-white border border-purple-100/80">
                    <p className="text-[10px] text-slate-500 uppercase">Primary Stack</p>
                    <p className="font-semibold text-purple-900">MERN + C++</p>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-purple-100/80">
                    <p className="text-[10px] text-slate-500 uppercase">Verification</p>
                    <p className="font-semibold text-emerald-700 flex items-center justify-center space-x-1">
                      <span>Credly Verified</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
