import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function IntroSplash({ onComplete }) {
  const [phase, setPhase] = useState("enter"); // 'enter' (0s) -> 'reveal' (0.8s) -> 'outro' (4.0s)

  // Handle escape key to skip immediately
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onComplete();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onComplete]);

  // Master sequence timeline:
  // - 0.0s to 4.0s: Animation shows (Curtains part -> Badge forms -> NABEEL unclips -> Ambient display)
  // - 4.0s to 5.0s: Smooth transition to the website
  // - 5.0s: Complete & unmount
  useEffect(() => {
    // 0.8s: Badge & Monogram reveal
    const t1 = setTimeout(() => {
      setPhase("reveal");
    }, 800);

    // 4.0s: Begin smooth outro transition toward the navbar & fade into the website
    const t2 = setTimeout(() => {
      setPhase("outro");
    }, 4000);

    // 5.0s: Complete animation
    const t3 = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "outro" ? 0 : 1 }}
      transition={{ duration: 0.95, ease: [0.65, 0, 0.35, 1] }}
      className="fixed inset-0 z-50 overflow-hidden bg-[#051F20] select-none pointer-events-auto"
      style={{ touchAction: "none" }}
    >
      {/* Background blueprint grid overlay */}
      <div className="absolute inset-0 bg-os-grid opacity-20 pointer-events-none" />

      {/* ── 1 & 2: Liquid Curtains & Geometric Parting Layers ──────── */}
      {/* Left Liquid Curtain Layer */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-105%" }}
        transition={{
          duration: 1.4,
          delay: 0.15,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute inset-y-0 left-0 w-[55%] z-20 pointer-events-none overflow-hidden"
      >
        <div className="w-full h-full bg-gradient-to-r from-[#051F20] via-[#0B2B26] to-[#235347]/45 relative">
          {/* Decorative liquid wave curve SVG on right edge of left curtain */}
          <svg
            className="absolute -right-20 top-0 bottom-0 h-full w-24 text-[#235347]/50 fill-current"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C65,220 85,380 35,620 C0,780 55,900 10,1000 L0,1000 Z" />
          </svg>
        </div>
      </motion.div>

      {/* Right Liquid Curtain Layer */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "105%" }}
        transition={{
          duration: 1.4,
          delay: 0.15,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute inset-y-0 right-0 w-[55%] z-20 pointer-events-none overflow-hidden"
      >
        <div className="w-full h-full bg-gradient-to-l from-[#051F20] via-[#0B2B26] to-[#8ED69D]/30 relative">
          {/* Decorative liquid wave curve SVG on left edge of right curtain */}
          <svg
            className="absolute -left-20 top-0 bottom-0 h-full w-24 text-[#8ED69D]/35 fill-current"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
          >
            <path d="M100,0 C35,220 15,380 65,620 C100,780 45,900 90,1000 L100,1000 Z" />
          </svg>
        </div>
      </motion.div>

      {/* Ambient center mint glow pulse */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.25, 1.1], opacity: [0, 0.4, 0.3] }}
        transition={{ duration: 3.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8ED69D]/15 rounded-full blur-3xl pointer-events-none z-10"
      />

      {/* ── 3, 4, 5: Center Badge + "NABEEL" Wordmark Composition ───────── */}
      <div className="relative z-30 flex items-center justify-center w-full h-full">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={
            phase === "outro"
              ? {
                  // Outro beat (4.0s - 5.0s): smoothly shrinks and glides toward the navbar logo position
                  scale: 0.45,
                  x: "-38vw",
                  y: "-42vh",
                  opacity: 0,
                  transition: {
                    duration: 0.95,
                    ease: [0.65, 0, 0.35, 1],
                  },
                }
              : {
                  scale: 1,
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }
          }
          className="flex items-center space-x-4 sm:space-x-6 px-6 py-4"
        >
          {/* 3. Circular Badge with N Logo Mark (matching navbar identity) */}
          <motion.div
            initial={{ scale: 0, rotate: -25 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 24,
              delay: 0.6,
            }}
            className="relative flex items-center justify-center"
          >
            {/* Outer subtle rotating orbit ring with mint satellite */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute -inset-3.5 rounded-full border border-dashed border-[#8ED69D]/30 pointer-events-none"
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#8ED69D] shadow-sm shadow-[#8ED69D]" />
            </motion.div>

            {/* Dark circular badge container */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0B2B26] border-2 border-[#8ED69D] shadow-2xl shadow-[#8ED69D]/25 flex items-center justify-center relative z-10">
              {/* N Logo Mark - exact navbar gradient & typography */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-[#163832] via-[#235347] to-[#8ED69D] flex items-center justify-center text-[#DAF1DE] font-mono text-xl sm:text-2xl font-bold shadow-md shadow-[#8ED69D]/25">
                N
              </div>
            </div>
          </motion.div>

          {/* 4. Bold Typography "NABEEL" & System Tag */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden flex flex-col justify-center"
          >
            <div className="flex items-baseline space-x-2 whitespace-nowrap">
              <span className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#DAF1DE] uppercase">
                NABEEL
              </span>
              <span className="font-mono font-bold text-lg sm:text-2xl lg:text-3xl text-[#8ED69D]">
                .DEV
              </span>
            </div>

            {/* Subtitle system status telemetry */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5, ease: "easeOut" }}
              className="flex items-center space-x-2 mt-1 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-[#8ED69D] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono tracking-[0.22em] text-[#DAF1DE]/80 uppercase font-semibold">
                SYSTEM INITIALIZING // FULL STACK
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle bottom loading progress line */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-white/5 pointer-events-none">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4.0, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-[#163832] via-[#235347] to-[#8ED69D]"
        />
      </div>

      {/* Subtle Skip button (top-right corner) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        onClick={onComplete}
        className="absolute top-5 right-5 sm:top-7 sm:right-8 z-50 text-[11px] font-mono tracking-wider text-[#DAF1DE]/70 hover:text-[#8ED69D] px-3.5 py-1.5 rounded-full border border-[#235347] hover:border-[#8ED69D]/50 bg-[#0B2B26]/80 backdrop-blur-md transition-all flex items-center space-x-1.5 cursor-pointer"
        aria-label="Skip intro animation"
      >
        <span>SKIP INTRO</span>
        <span className="text-[#8ED69D]">→</span>
      </motion.button>
    </motion.div>
  );
}
