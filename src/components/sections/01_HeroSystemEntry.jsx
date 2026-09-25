import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Terminal, ArrowDown, ArrowUpRight, ShieldCheck, Code, Sparkles, MapPin } from "lucide-react";
import { profileData } from "../../data/profileData";

export default function HeroSystemEntry({ onExploreClick, onContactClick }) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      id="system-entry" 
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center bg-os-grid overflow-hidden"
    >
      {/* Background ambient warm gold and beige glow rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E8D5C4]/35 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#C9A227]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: System Narrative & Actions (7 cols) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            
            {/* System Status Pill */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E8D5C4] shadow-xs shadow-[#1A1A1A]/5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-[#1A1A1A]">
                SYSTEM OPERATIONAL <span className="text-[#8E6D16] font-semibold">• 4 ACTIVE DEPLOYMENTS</span>
              </span>
            </motion.div>

            {/* Core Identity */}
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center space-x-2 text-[#8E6D16] font-mono text-sm font-semibold tracking-wide uppercase">
                <Terminal className="w-4 h-4 text-[#C9A227]" />
                <span>Developer Operating System // {profileData.displayTag}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] tracking-tight leading-[1.12]">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] via-[#8E6D16] to-[#C9A227]">clean full-stack</span> systems with verified technical proof.
              </h1>
            </motion.div>

            {/* Narrative Story */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-[#5C5855] max-w-2xl leading-relaxed">
              I’m <strong className="text-[#1A1A1A] font-semibold">{profileData.name}</strong>, a Full Stack Web Developer and 7th Semester Computer Science student at the University of the Punjab. I pair core CS fundamentals (C++, OOP, DSA) with modern web engineering across React, Node.js, Express, and MongoDB.
            </motion.p>

            {/* Real verified credential badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#F4ECE1] border border-[#E8D5C4] rounded-lg text-xs font-medium text-[#1A1A1A]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Credly Verified (Pearson VUE JS)</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#F4ECE1] border border-[#E8D5C4] rounded-lg text-xs font-medium text-[#1A1A1A]">
                <Code className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Corvit NAVTTC Full Stack</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#F4ECE1] border border-[#E8D5C4] rounded-lg text-xs font-medium text-[#1A1A1A]">
                <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Lahore, Pakistan</span>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#C9A227] hover:bg-[#B08B1E] text-white font-semibold text-sm shadow-md shadow-[#C9A227]/25 transition-all duration-200 flex items-center justify-center space-x-2 group hover:translate-y-[-1px]"
              >
                <span>Explore Real Case Files</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-[#F4ECE1] text-[#1A1A1A] border border-[#E8D5C4] font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-xs"
              >
                <span>Initialize Contact</span>
                <ArrowUpRight className="w-4 h-4 text-[#C9A227]" />
              </button>
            </motion.div>

          </motion.div>

          {/* Right Column: Profile Image + OS HUD Card with Orbital Animation (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative warm glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#C9A227]/25 to-[#E8D5C4]/30 blur-xl opacity-90 pointer-events-none" />

              {/* Orbital Rotating Element 1: Inner continuous ring with orbiting gold planet */}
              <motion.div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[2rem] border border-[#C9A227]/35 pointer-events-none z-10"
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
              >
                {/* Orbiting dot/satellite */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#C9A227] shadow-lg shadow-[#C9A227]/60 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </div>
                <div className="absolute -bottom-1.5 right-1/4 w-2.5 h-2.5 rounded-full bg-[#E8D5C4] border border-[#C9A227]/50" />
              </motion.div>

              {/* Orbital Rotating Element 2: Counter-rotating subtle dashed ring */}
              <motion.div
                aria-hidden="true"
                className="absolute -inset-9 rounded-[2.5rem] border border-dashed border-[#C9A227]/20 pointer-events-none"
                animate={prefersReducedMotion ? {} : { rotate: -360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              >
                <div className="absolute top-1/4 -right-1.5 w-2 h-2 rounded-full bg-[#C9A227]/60" />
              </motion.div>

              {/* Main OS Card (Glassmorphism + elevation) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-white/80 backdrop-blur-md border border-[#E8D5C4] rounded-2xl shadow-xl shadow-[#1A1A1A]/10 overflow-hidden"
              >
                
                {/* OS Window Header */}
                <div className="px-4 py-2.5 bg-[#1A1A1A] border-b border-[#332B18] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[11px] font-mono text-[#E8D5C4] font-medium">
                    SYS://ident/me.jpeg
                  </span>
                  <div className="w-2.5 h-2.5" />
                </div>

                {/* Profile Photo Container */}
                <div className="relative aspect-4/5 bg-[#F4ECE1] overflow-hidden group">
                  <img
                    src={profileData.profileImage}
                    alt="Nabeel Mughal — Full Stack Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient mask at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent flex flex-col justify-end p-4 text-white">
                    <p className="text-base font-bold font-mono text-white flex items-center justify-between">
                      <span>Nabeel Mughal</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-[#C9A227] text-white font-normal">7th Sem BS CS</span>
                    </p>
                    <p className="text-xs text-[#E8D5C4] font-mono mt-0.5">
                      Full Stack Web Developer • Devsinn Alumni
                    </p>
                  </div>
                </div>

                {/* Telemetry quick bar under photo */}
                <div className="p-3.5 bg-[#FAF6F0] border-t border-[#E8D5C4] grid grid-cols-2 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded-lg bg-white border border-[#E8D5C4]">
                    <p className="text-[10px] text-[#6E6963] uppercase">Primary Stack</p>
                    <p className="font-semibold text-[#1A1A1A]">MERN + C++</p>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-[#E8D5C4]">
                    <p className="text-[10px] text-[#6E6963] uppercase">Verification</p>
                    <p className="font-semibold text-emerald-700 flex items-center justify-center space-x-1">
                      <span>Credly Verified</span>
                    </p>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
