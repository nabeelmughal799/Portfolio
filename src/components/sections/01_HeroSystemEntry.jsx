import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers, Cpu, ShieldCheck, Activity } from "lucide-react";
import { profileData } from "../../data/profileData";
import LiquidEther from "../ui/LiquidEther";

// ─── Helpers ────────────────────────────────────────────────────────────────────

/** Check WebGL support (feature detect, no error thrown) */
function detectWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

// ─── Component ──────────────────────────────────────────────────────────────────

export default function HeroSystemEntry({ onExploreClick, onContactClick }) {
  const prefersReducedMotion = useReducedMotion();

  // Detect features once on first render (synchronous, safe in SSR guard)
  const { hasWebGL, isMobile } = useMemo(() => {
    if (typeof window === "undefined") return { hasWebGL: false, isMobile: false };
    return {
      hasWebGL: detectWebGL(),
      isMobile: window.innerWidth < 768,
    };
  }, []);

  // LiquidEther is only mounted when: not reduced-motion, WebGL available
  const showFluid = !prefersReducedMotion && hasWebGL;

  // ── Framer Motion variants ──────────────────────────────────────────────────
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.08 },
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

  // ── Stat bar data ───────────────────────────────────────────────────────────
  const stats = [
    { id: "deployments", icon: Layers,     number: "04",   label: "VERIFIED DEPLOYMENTS" },
    { id: "tech",        icon: Cpu,         number: "11+",  label: "TECH VERIFIED"         },
    { id: "credentials", icon: ShieldCheck, number: "02",   label: "CREDLY CREDENTIALS"    },
    { id: "integrity",   icon: Activity,    number: "100%", label: "DATA INTEGRITY"        },
  ];

  // ── LiquidEther props – mobile gets lower resolution/intensity for perf ─────
  const fluidProps = isMobile
    ? { resolution: 0.2, autoIntensity: 0.8 }
    : { resolution: 0.35, autoIntensity: 1.2 };

  return (
    <section
      id="system-entry"
      className="relative pt-24 sm:pt-28 pb-10 sm:pb-14 overflow-hidden"
    >
      {/*
       * ── LAYER 0: WebGL fluid background ────────────────────────────────────
       *   Absolutely positioned, full-bleed, z-0.
       *   pointer-events-none so it never blocks clicks on buttons/links.
       *   Wrapped in opacity-[0.42] so it stays ambient / textural.
       *   Only mounted when WebGL + motion are available.
       */}
      {showFluid ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none touch-none opacity-[0.42]"
        >
          <LiquidEther
            colors={["#121212", "#533E10", "#2A2A2A"]}
            mouseForce={8}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={fluidProps.autoIntensity}
            resolution={fluidProps.resolution}
            backgroundColor="#FAF6F0"
            lightMode={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ) : (
        /* Fallback static gradient (reduced-motion OR no WebGL) */
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(201,162,39,0.10) 0%, rgba(250,246,240,0) 70%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(216,190,166,0.13) 0%, rgba(250,246,240,0) 70%)",
          }}
        />
      )}

      {/* Blueprint grid (always present, sits just above fluid) */}
      <div className="absolute inset-0 z-[1] bg-os-grid pointer-events-none" />

      {/* Ambient warm gold glow blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-16 right-10 w-96 h-96 bg-[#E8D5C4]/35 rounded-full blur-3xl pointer-events-none z-[1]" />

      {/*
       * ── LAYER 1: Heading-area text contrast scrim ───────────────────────────
       *   A subtle gradient behind the LEFT text column so fluid colours never
       *   kill legibility of the heading text, regardless of animation state.
       */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 z-[2] w-full lg:w-[62%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(250,246,240,0.72) 0%, rgba(250,246,240,0.45) 70%, transparent 100%)",
        }}
      />

      {/* ── Main Hero Content ────────────────────────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full relative z-10"
      >
        {/* UPPER HERO: Left column + Right bleed photo */}
        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px] lg:min-h-[540px]">

              {/* LEFT: Eyebrow / Heading / Subtext / CTAs */}
              <div className="lg:col-span-7 z-10 flex flex-col items-start pt-2 pb-4 sm:py-6">

                {/* 1. Uppercase Eyebrow Label */}
                <motion.div
                  variants={itemVariants}
                  className="mb-3 sm:mb-4 inline-flex items-center space-x-2 text-xs sm:text-sm font-mono font-bold tracking-[0.22em] uppercase text-[#8E6D16]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
                  <span>ARCHITECTING CLEAN FULL-STACK SYSTEMS</span>
                </motion.div>

                {/* 2. Massive Stacked Display Heading */}
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

                {/* 3. Subtext */}
                <motion.p
                  variants={itemVariants}
                  className="text-base sm:text-lg text-[#5C5855] max-w-xl leading-relaxed mb-8"
                >
                  I'm{" "}
                  <strong className="text-[#1A1A1A] font-semibold">
                    {profileData.name}
                  </strong>
                  , a Full Stack Developer &amp; 7th Semester CS student at
                  University of the Punjab, engineering robust web systems with
                  React, Node.js, and verifiable technical proof.
                </motion.p>

                {/* 4. CTA Buttons */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-center gap-4 sm:gap-6 w-full sm:w-auto"
                >
                  {/* Primary */}
                  <button
                    onClick={onExploreClick}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C9A227] hover:bg-[#B08B1E] text-[#1A1A1A] font-bold text-sm shadow-md shadow-[#C9A227]/25 transition-all duration-200 flex items-center justify-center space-x-2 group hover:translate-y-[-1px] cursor-pointer"
                  >
                    <span>Explore Real Case Files</span>
                    <ArrowUpRight className="w-4 h-4 text-[#1A1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  {/* Secondary */}
                  <button
                    onClick={onContactClick}
                    className="w-full sm:w-auto px-2 py-3.5 text-[#1A1A1A] hover:text-[#8E6D16] font-semibold text-sm transition-colors duration-200 flex items-center justify-center space-x-2 group underline-offset-4 hover:underline cursor-pointer"
                  >
                    <span>Initialize Contact</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8E6D16] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </motion.div>
              </div>

              {/* 5. RIGHT: Portrait photo (full-bleed desktop / contained mobile) */}
              <div className="lg:col-span-5 relative lg:static">
                <motion.div
                  variants={itemVariants}
                  className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[45vw] lg:max-w-[640px] xl:max-w-[720px] flex items-end justify-center lg:justify-end z-0"
                >
                  <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full max-h-[580px] flex items-end">

                    {/* 6. "AVAILABLE FOR PROJECTS" Badge + Circular Arc */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-6 lg:right-10 z-20">
                      {/* Decorative thin circular arc line */}
                      <div className="absolute -top-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none">
                        <svg viewBox="0 0 140 140" className="w-full h-full fill-none">
                          <circle
                            cx="140" cy="0" r="115"
                            stroke="#C9A227" strokeOpacity="0.25"
                            strokeWidth="1" strokeDasharray="4 3"
                          />
                          <circle
                            cx="140" cy="0" r="90"
                            stroke="#C9A227" strokeOpacity="0.5"
                            strokeWidth="1.2"
                          />
                          <circle cx="68" cy="58" r="2.5" fill="#C9A227" fillOpacity="0.75" />
                        </svg>
                      </div>

                      {/* Badge */}
                      <div className="relative inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A]/85 backdrop-blur-md border border-[#C9A227]/40 shadow-lg shadow-[#1A1A1A]/20">
                        <Sparkles className="w-3.5 h-3.5 text-[#C9A227] animate-pulse" />
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-[#EEDD9F] uppercase">
                          AVAILABLE FOR PROJECTS
                        </span>
                      </div>
                    </div>

                    {/* Photo container */}
                    <div className="w-full h-full rounded-2xl lg:rounded-none overflow-hidden border border-[#E8D5C4] lg:border-none shadow-lg lg:shadow-none bg-[#F4ECE1] relative">
                      <img
                        src={profileData.profileImage}
                        alt="Nabeel Mughal — Full Stack Developer"
                        className="w-full h-full object-cover object-top lg:object-[center_18%]"
                      />
                      {/* Left blend on desktop */}
                      <div className="hidden lg:block absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#FAF6F0] to-transparent pointer-events-none" />
                      {/* Bottom blend */}
                      <div className="hidden lg:block absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF6F0]/80 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>

        {/* 7. Full-width 4-stat bar */}
        <motion.div
          variants={itemVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 sm:mt-14 relative z-10"
        >
          <div className="bg-[#1A1A1A] border border-[#332B18] rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                const borderClasses = [
                  "border-r border-b lg:border-b-0 border-[#332B18]",
                  "border-b lg:border-b-0 lg:border-r border-[#332B18]",
                  "border-r lg:border-r border-[#332B18]",
                  "",
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
