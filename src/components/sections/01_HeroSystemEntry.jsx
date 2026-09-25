import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers, Cpu, ShieldCheck, Activity } from "lucide-react";
import { profileData } from "../../data/profileData";

export default function HeroSystemEntry({ onExploreClick, onContactClick }) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
      }
    : {
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
        },
      };

  const stats = [
    {
      id: "deployments",
      icon: Layers,
      number: "04",
      label: "VERIFIED DEPLOYMENTS",
    },
    {
      id: "tech",
      icon: Cpu,
      number: "11+",
      label: "TECH VERIFIED",
    },
    {
      id: "credentials",
      icon: ShieldCheck,
      number: "02",
      label: "CREDLY CREDENTIALS",
    },
    {
      id: "integrity",
      icon: Activity,
      number: "100%",
      label: "DATA INTEGRITY",
    },
  ];

  return (
    <section
      id="system-entry"
      className="relative pt-24 sm:pt-28 pb-10 sm:pb-14 bg-os-grid overflow-hidden"
    >
      {/* Ambient background warm gold and beige glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-16 right-10 w-96 h-96 bg-[#E8D5C4]/35 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Hero Container with Mount Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full relative"
      >
        {/* UPPER HERO CONTENT: Left Heading/Content Column + Right Bleed Photo */}
        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[480px] lg:min-h-[540px]">
              
              {/* LEFT COLUMN: Eyebrow, Stacked Display Heading, Subtext, Buttons (Col-Span-7) */}
              <div className="lg:col-span-7 z-10 flex flex-col items-start pt-2 pb-4 sm:py-6">
                
                {/* 1. Small Uppercase Eyebrow Label */}
                <motion.div
                  variants={itemVariants}
                  className="mb-3 sm:mb-4 inline-flex items-center space-x-2 text-xs sm:text-sm font-mono font-bold tracking-[0.22em] uppercase text-[#8E6D16]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
                  <span>ARCHITECTING CLEAN FULL-STACK SYSTEMS</span>
                </motion.div>

                {/* 2. Massive, Bold, Tight-Leading Display Heading (Two Stacked Lines) */}
                <h1 className="font-sans font-black tracking-tight text-[#1A1A1A] leading-[0.92] text-[clamp(2.75rem,7vw,6.25rem)] uppercase mb-5 sm:mb-6">
                  <motion.span variants={itemVariants} className="block">
                    FULL STACK
                  </motion.span>
                  <motion.span
                    variants={itemVariants}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] via-[#8E6D16] to-[#C9A227]"
                  >
                    DEVELOPER
                  </motion.span>
                </h1>

                {/* 3. Short 1–2 Line Subtext Paragraph */}
                <motion.p
                  variants={itemVariants}
                  className="text-base sm:text-lg text-[#5C5855] max-w-xl leading-relaxed mb-8"
                >
                  I’m <strong className="text-[#1A1A1A] font-semibold">{profileData.name}</strong>, a Full Stack Developer & 7th Semester CS student at University of the Punjab, engineering robust web systems with React, Node.js, and verifiable technical proof.
                </motion.p>

                {/* 4. Two CTA Buttons Side by Side */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-center gap-4 sm:gap-6 w-full sm:w-auto"
                >
                  {/* Primary CTA: Solid filled button in gold with dark text, rounded, small arrow icon */}
                  <button
                    onClick={onExploreClick}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C9A227] hover:bg-[#B08B1E] text-[#1A1A1A] font-bold text-sm shadow-md shadow-[#C9A227]/25 transition-all duration-200 flex items-center justify-center space-x-2 group hover:translate-y-[-1px] cursor-pointer"
                  >
                    <span>Explore Real Case Files</span>
                    <ArrowUpRight className="w-4 h-4 text-[#1A1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  {/* Secondary CTA: Plain text-style button (no fill) with arrow icon */}
                  <button
                    onClick={onContactClick}
                    className="w-full sm:w-auto px-2 py-3.5 text-[#1A1A1A] hover:text-[#8E6D16] font-semibold text-sm transition-colors duration-200 flex items-center justify-center space-x-2 group underline-offset-4 hover:underline cursor-pointer"
                  >
                    <span>Initialize Contact</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8E6D16] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </motion.div>

              </div>

              {/* 5. RIGHT SIDE: Portrait Photo (Full-bleed on desktop, contained on mobile) */}
              <div className="lg:col-span-5 relative lg:static">
                <motion.div
                  variants={itemVariants}
                  className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[45vw] lg:max-w-[640px] xl:max-w-[720px] flex items-end justify-center lg:justify-end z-0"
                >
                  <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full max-h-[580px] flex items-end">
                    
                    {/* 6. "AVAILABLE FOR PROJECTS" Badge + Decorative Thin Circular Arc Line */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-6 lg:right-10 z-20">
                      {/* Decorative thin circular arc line centered at the top-right corner */}
                      <div className="absolute -top-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none">
                        <svg viewBox="0 0 140 140" className="w-full h-full fill-none">
                          <circle
                            cx="140"
                            cy="0"
                            r="115"
                            stroke="#C9A227"
                            strokeOpacity="0.25"
                            strokeWidth="1"
                            strokeDasharray="4 3"
                          />
                          <circle
                            cx="140"
                            cy="0"
                            r="90"
                            stroke="#C9A227"
                            strokeOpacity="0.5"
                            strokeWidth="1.2"
                          />
                          <circle cx="68" cy="58" r="2.5" fill="#C9A227" fillOpacity="0.75" />
                        </svg>
                      </div>

                      {/* Small "AVAILABLE FOR PROJECTS" Badge */}
                      <div className="relative inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A]/85 backdrop-blur-md border border-[#C9A227]/40 shadow-lg shadow-[#1A1A1A]/20">
                        <Sparkles className="w-3.5 h-3.5 text-[#C9A227] animate-pulse" />
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-[#EEDD9F] uppercase">
                          AVAILABLE FOR PROJECTS
                        </span>
                      </div>
                    </div>

                    {/* Photo Container: Contained on mobile, full-bleed to right edge on desktop */}
                    <div className="w-full h-full rounded-2xl lg:rounded-none overflow-hidden border border-[#E8D5C4] lg:border-none shadow-lg lg:shadow-none bg-[#F4ECE1] relative">
                      <img
                        src={profileData.profileImage}
                        alt="Nabeel Mughal — Full Stack Developer"
                        className="w-full h-full object-cover object-top lg:object-[center_18%]"
                      />

                      {/* Subtle left blend gradient on desktop so it seamlessly transitions into the background */}
                      <div className="hidden lg:block absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#FAF6F0] to-transparent pointer-events-none" />
                      
                      {/* Subtle bottom gradient on desktop */}
                      <div className="hidden lg:block absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF6F0]/80 to-transparent pointer-events-none" />
                    </div>

                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>

        {/* 7. FULL-WIDTH STAT BAR PANEL (4 Stats horizontally / 2x2 grid on mobile) */}
        <motion.div variants={itemVariants} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 sm:mt-14 relative z-10">
          <div className="bg-[#1A1A1A] border border-[#332B18] rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                
                // Border logic to achieve thin vertical dividers on desktop and 2x2 cross dividers on mobile
                const borderClasses = [
                  "border-r border-b lg:border-b-0 border-[#332B18]", // Item 0: Top-left
                  "border-b lg:border-b-0 lg:border-r border-[#332B18]", // Item 1: Top-right
                  "border-r lg:border-r border-[#332B18]",              // Item 2: Bottom-left
                  "",                                                   // Item 3: Bottom-right
                ][idx];

                return (
                  <div
                    key={stat.id}
                    className={`flex flex-col items-center justify-center p-5 sm:p-7 text-center group hover:bg-[#222222] transition-colors duration-200 ${borderClasses}`}
                  >
                    <Icon className="w-5 h-5 text-[#C9A227] mb-2 sm:mb-2.5 transition-transform duration-200 group-hover:scale-110" />
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white group-hover:text-[#EEDD9F] tracking-tight font-sans transition-colors duration-200">
                      {stat.number}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-[#C9A227] uppercase mt-1 sm:mt-2">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
