import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroSplash({ onComplete }) {
  const [phase, setPhase] = useState("enter"); // 'enter' -> 'reveal' -> 'outro'

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

  // Master sequence timeline (Total duration ~ 1.9s)
  useEffect(() => {
    // Phase 1: Badge & NABEEL reveal happens after initial liquid curtain pull (0.3s)
    const t1 = setTimeout(() => {
      setPhase("reveal");
    }, 320);

    // Phase 2: Outro transition begins (1.35s)
    const t2 = setTimeout(() => {
      setPhase("outro");
    }, 1350);

    // Phase 3: Animation complete, unmount splash (1.85s)
    const t3 = setTimeout(() => {
      onComplete();
    }, 1850);

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
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 overflow-hidden bg-[#121212] select-none pointer-events-auto"
      style={{ touchAction: "none" }}
    >
      {/* Background blueprint grid overlay */}
      <div className="absolute inset-0 bg-os-grid opacity-15 pointer-events-none" />

      {/* ── 1 & 2: Liquid Curtains & Geometric Gold Parting Layers ──────── */}
      {/* Left Gold Liquid Curtain Layer */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-105%" }}
        transition={{
          duration: 0.9,
          delay: 0.1,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute inset-y-0 left-0 w-[55%] z-20 pointer-events-none overflow-hidden"
      >
        <div className="w-full h-full bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#8E6D16]/30 relative">
          {/* Decorative liquid wave curve SVG on right edge of left curtain */}
          <svg
            className="absolute -right-16 top-0 bottom-0 h-full w-20 text-[#8E6D16]/40 fill-current"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C60,250 80,400 30,650 C0,800 50,920 10,1000 L0,1000 Z" />
          </svg>
        </div>
      </motion.div>

      {/* Right Gold Liquid Curtain Layer */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "105%" }}
        transition={{
          duration: 0.9,
          delay: 0.1,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute inset-y-0 right-0 w-[55%] z-20 pointer-events-none overflow-hidden"
      >
        <div className="w-full h-full bg-gradient-to-l from-[#1A1A1A] via-[#2A2A2A] to-[#C9A227]/25 relative">
          {/* Decorative liquid wave curve SVG on left edge of right curtain */}
          <svg
            className="absolute -left-16 top-0 bottom-0 h-full w-20 text-[#C9A227]/30 fill-current"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
          >
            <path d="M100,0 C40,200 20,420 70,680 C100,850 50,940 90,1000 L100,1000 Z" />
          </svg>
        </div>
      </motion.div>

      {/* Ambient background gold glow pulse */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1.3, opacity: 0.35 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C9A227]/20 rounded-full blur-3xl pointer-events-none z-10"
      />

      {/* ── 3, 4, 5: Center Badge + "NABEEL" Wordmark Composition ───────── */}
      <div className="relative z-30 flex items-center justify-center w-full h-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            phase === "outro"
              ? {
                  // Outro beat: shrinks and glides toward the navbar logo position (top-left)
                  scale: 0.45,
                  x: "-38vw",
                  y: "-42vh",
                  opacity: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.32, 0, 0.67, 0],
                  },
                }
              : {
                  scale: 1,
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                  },
                }
          }
          className="flex items-center space-x-3.5 sm:space-x-5 px-6 py-4"
        >
          {/* 3. Circular Badge with N Logo Mark (matching navbar identity) */}
          <motion.div
            initial={{ scale: 0, rotate: -25 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.15,
            }}
            className="relative flex items-center justify-center"
          >
            {/* Outer decorative gold ring */}
            <div className="absolute -inset-2 rounded-full border border-[#C9A227]/40 animate-pulse pointer-events-none" />

            {/* Dark circular badge container */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1A1A1A] border-2 border-[#C9A227] shadow-xl shadow-[#C9A227]/20 flex items-center justify-center">
              {/* N Logo Mark - exact navbar gradient & font */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-tr from-[#8E6D16] via-[#B08B1E] to-[#C9A227] flex items-center justify-center text-white font-mono text-base sm:text-lg font-bold shadow-md shadow-[#C9A227]/30">
                N
              </div>
            </div>
          </motion.div>

          {/* 4. Bold Typography "NABEEL" & System Tag */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            transition={{
              duration: 0.45,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden flex flex-col justify-center"
          >
            <div className="flex items-baseline space-x-1.5 whitespace-nowrap">
              <span className="font-sans font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white uppercase">
                NABEEL
              </span>
              <span className="font-mono font-bold text-base sm:text-2xl text-[#C9A227]">
                .DEV
              </span>
            </div>

            {/* Subtitle tag */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.3 }}
              className="flex items-center space-x-1.5 mt-0.5 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#E8D5C4]/80 uppercase font-semibold">
                SYSTEM INITIALIZING
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Skip button (top-right corner) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.2 }}
        onClick={onComplete}
        className="absolute top-5 right-5 sm:top-7 sm:right-8 z-50 text-[11px] font-mono tracking-wider text-[#E8D5C4]/60 hover:text-[#C9A227] px-3 py-1.5 rounded-full border border-white/10 hover:border-[#C9A227]/40 bg-black/40 backdrop-blur-md transition-all flex items-center space-x-1.5 cursor-pointer hover:bg-black/60"
        aria-label="Skip intro animation"
      >
        <span>SKIP</span>
        <span className="text-[#C9A227]">→</span>
      </motion.button>
    </motion.div>
  );
}
