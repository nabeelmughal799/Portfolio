import React, { useState, useEffect, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
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

  // Page load entrance state for hero heading text
  const [headingRevealed, setHeadingRevealed] = useState(false);

  useEffect(() => {
    // Check if IntroSplash overlay is currently present
    const isSplashActive = () => !!document.querySelector(".fixed.z-50");

    if (!isSplashActive()) {
      // Immediate entrance on page load (or reduced motion / skip)
      const timer = setTimeout(() => {
        setHeadingRevealed(true);
      }, 150);
      return () => clearTimeout(timer);
    }

    // If splash is running, wait until it fades/unmounts so entrance plays smoothly as website opens
    const observer = new MutationObserver(() => {
      if (!isSplashActive()) {
        setHeadingRevealed(true);
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const safetyTimer = setTimeout(() => {
      setHeadingRevealed(true);
    }, 4200);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
  }, []);

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

  // Dedicated entrance reveal animation for hero heading: initially hidden, then smoothly slide up + fade in
  const headingTextVariants = prefersReducedMotion
    ? {
      hidden: { opacity: 0 },
      visible: (customDelay = 0) => ({
        opacity: 1,
        transition: { duration: 0.4, delay: customDelay },
      }),
    }
    : {
      hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
      visible: (customDelay = 0) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.95,
          delay: customDelay,
          ease: [0.16, 1, 0.3, 1],
        },
      }),
    };



  // ── LiquidEther props – mobile gets lower resolution/intensity for perf ─────
  const fluidProps = isMobile
    ? { resolution: 0.2, autoIntensity: 0.8 }
    : { resolution: 0.35, autoIntensity: 1.2 };

  return (
    <section
      id="system-entry"
      className="relative h-screen h-[100dvh] min-h-[100vh] max-h-[100vh] pt-16 sm:pt-20 pb-4 sm:pb-6 overflow-hidden flex flex-col justify-between bg-[#0D1F23]"
    >
      {/*
       * ── LAYER 0: WebGL fluid background ────────────────────────────────────
       *   Absolutely positioned, full-bleed, z-0.
       *   pointer-events-none so it never blocks clicks on buttons/links.
       *   Wrapped in opacity-[0.45] so it stays ambient / textural.
       *   Only mounted when WebGL + motion are available.
       */}
      {showFluid ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none touch-none opacity-[0.45]"
        >
          <LiquidEther
            colors={["#0D1F23", "#132E35", "#2D4A53", "#73C38A"]}
            mouseForce={8}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={fluidProps.autoIntensity}
            resolution={fluidProps.resolution}
            backgroundColor="#0D1F23"
            lightMode={false}
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
              "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(115,195,138,0.14) 0%, rgba(13,31,35,0) 70%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(45,74,83,0.3) 0%, rgba(13,31,35,0) 70%)",
          }}
        />
      )}

      {/* Blueprint grid (always present, sits just above fluid) */}
      <div className="absolute inset-0 z-[1] bg-os-grid pointer-events-none" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#73C38A]/10 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-16 right-10 w-96 h-96 bg-[#2D4A53]/30 rounded-full blur-3xl pointer-events-none z-[1]" />

      {/*
       * ── LAYER 1: Heading-area text contrast scrim ───────────────────────────
       */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 z-[2] w-full lg:w-[62%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(13,31,35,0.85) 0%, rgba(13,31,35,0.55) 70%, transparent 100%)",
        }}
      />

      {/* ── Main Hero Content ────────────────────────────────────────────────── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-0"
      >
        {/* UPPER HERO: Left column + Right portrait */}
        <div className="relative w-full flex-1 flex items-center min-h-0 py-2 sm:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full h-full min-h-0">

            {/* LEFT: Eyebrow / Heading / CTAs */}
            <div className="lg:col-span-7 z-10 flex flex-col items-start justify-center">

              {/* 1. Uppercase Eyebrow Label */}
              <motion.div
                variants={itemVariants}
                className="mb-2 sm:mb-3 inline-flex items-center space-x-2 text-xs sm:text-sm font-mono font-bold tracking-[0.22em] uppercase text-[#73C38A]"
              >
                <span className="w-2 h-2 rounded-full bg-[#73C38A] animate-pulse" />
                <span>ARCHITECTING CLEAN FULL-STACK SYSTEMS</span>
              </motion.div>

              {/* 2. Massive Stacked Display Heading */}
              <h1 className="font-sans font-black tracking-tight text-[#AFB3B7] leading-[0.92] text-[clamp(2.5rem,5.5vw,5.5rem)] uppercase mb-6 sm:mb-8">
                <motion.span
                  custom={0.12}
                  variants={headingTextVariants}
                  initial="hidden"
                  animate={headingRevealed ? "visible" : "hidden"}
                  className="block text-[#AFB3B7]"
                >
                  FULL STACK
                </motion.span>
                <motion.span
                  custom={0.28}
                  variants={headingTextVariants}
                  initial="hidden"
                  animate={headingRevealed ? "visible" : "hidden"}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#AFB3B7] to-[#73C38A]"
                >
                  DEVELOPER
                </motion.span>
              </h1>

              {/* 3. CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 sm:gap-6 w-full sm:w-auto"
              >
                {/* Primary */}
                <button
                  onClick={onExploreClick}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#73C38A] hover:bg-[#62b379] text-[#0D1F23] font-bold text-sm transition-colors duration-200 flex items-center justify-center space-x-2 group hover:translate-y-[-1px] cursor-pointer"
                >
                  <span>Explore Real Case Files</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0D1F23] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                {/* Secondary */}
                <button
                  onClick={onContactClick}
                  className="w-full sm:w-auto px-2 py-3.5 text-[#AFB3B7] hover:text-[#73C38A] font-semibold text-sm transition-colors duration-200 flex items-center justify-center space-x-2 group underline-offset-4 hover:underline cursor-pointer"
                >
                  <span>Initialize Contact</span>
                  <ArrowUpRight className="w-4 h-4 text-[#73C38A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* 4. RIGHT: Portrait photo without background or card element */}
            <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end h-full min-h-[220px] sm:min-h-[280px] lg:min-h-0">
              <motion.div
                variants={itemVariants}
                className="relative w-full max-w-sm sm:max-w-md lg:max-w-none h-full flex items-end justify-center lg:justify-end z-0 min-h-0"
              >
                <div className="relative w-full h-full max-h-[340px] sm:max-h-[400px] lg:max-h-[480px] flex items-end justify-center lg:justify-end">

                  {/* "AVAILABLE FOR PROJECTS" Badge + Circular Arc */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-4 lg:right-6 z-20">
                    {/* Decorative thin circular arc line */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 pointer-events-none">
                      <svg viewBox="0 0 140 140" className="w-full h-full fill-none">
                        <circle
                          cx="140" cy="0" r="115"
                          stroke="#73C38A" strokeOpacity="0.25"
                          strokeWidth="1" strokeDasharray="4 3"
                        />
                        <circle
                          cx="140" cy="0" r="90"
                          stroke="#73C38A" strokeOpacity="0.5"
                          strokeWidth="1.2"
                        />
                        <circle cx="68" cy="58" r="2.5" fill="#73C38A" fillOpacity="0.75" />
                      </svg>
                    </div>

                    {/* Badge
                    <div className="relative inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0B2B26]/90 backdrop-blur-md border border-[#8ED69D]/50 shadow-lg shadow-[#051F20]/40">
                      <Sparkles className="w-3.5 h-3.5 text-[#8ED69D] animate-pulse" />
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-[#DAF1DE] uppercase">
                        AVAILABLE FOR PROJECTS
                      </span>
                    </div>
                    */}
                  </div>

                    {/* Transparent Photo Container - no card, no background, no borders */}
                    <div className="w-full h-full flex items-end justify-center lg:justify-end relative">
                      <img
                        src={profileData.profileImage}
                        alt="Nabeel Mughal — Full Stack Developer"
                        className="h-full w-auto max-h-[320px] sm:max-h-[380px] lg:max-h-[460px] object-contain object-bottom pointer-events-none select-none"
                      />
                    </div>
                  </div>
              </motion.div>
            </div>

          </div>
        </div>


        {/* ── Minimal tech-stack pill strip ───────────────────────────────── */}
        <motion.div
          variants={itemVariants}
          className="w-full shrink-0 pt-4 sm:pt-6 relative z-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {["React", "Node.js", "MongoDB", "Express", "Tailwind", "Git", "REST APIs", "C++"].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider text-[#73C38A] border border-[#2D4A53] bg-[#132E35] uppercase hover:border-[#73C38A]/60 hover:text-[#FFFFFF] transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
