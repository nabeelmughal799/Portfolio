import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { profileData } from "../../data/profileData";

// ─── Sphere math ─────────────────────────────────────────────────────────────

/**
 * Distribute N points evenly on a unit sphere via golden-angle spiral.
 * Returns { x, y, z } unit vectors.
 */
function makeSpherePoints(n) {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: n }, (_, i) => {
    const y   = 1 - (i / (n - 1)) * 2;          // y ∈ [1, −1]
    const r   = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;
    return { x: r * Math.cos(theta), y, z: r * Math.sin(theta) };
  });
}

// ─── Constants ────────────────────────────────────────────────────────────────

const WORDS      = ["FULL", "STACK", "DEVELOPER"];
const N_WORDS    = 30;          // total word instances on the sphere
const BASE_R     = 0.30;        // sphere radius as a fraction of min(W,H)
const SPEED      = 0.22;        // radians per second
const TILT_X     = -0.22;       // constant X-axis tilt (radians)
const FOV_RATIO  = 1.1;         // perspective FOV relative to sphere diameter
const IMG_Z      = 20;          // developer image z-index

// ─── Component ───────────────────────────────────────────────────────────────

export default function HeroSystemEntry() {
  const containerRef  = useRef(null);
  const wordRefs      = useRef([]);
  const rotY          = useRef(0);
  const rafId         = useRef(null);
  const dimsRef       = useRef({ cx: 0, cy: 0, R: 0, fov: 0 });

  /** Unit-sphere base points (computed once) */
  const basePoints = useMemo(() => makeSpherePoints(N_WORDS), []);

  /** Recalculate viewport-dependent constants */
  const updateDims = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const W = el.offsetWidth;
    const H = el.offsetHeight;
    const R = Math.min(W, H) * BASE_R;
    dimsRef.current = {
      cx:  W * 0.50,
      cy:  H * 0.42,   // orbit center — roughly chest level of the photo
      R,
      fov: R * 2 * FOV_RATIO,
    };
  }, []);

  useEffect(() => {
    updateDims();
    window.addEventListener("resize", updateDims, { passive: true });
    return () => window.removeEventListener("resize", updateDims);
  }, [updateDims]);

  // ── Animation loop ────────────────────────────────────────────────────────
  useEffect(() => {
    // Pre-compute trig constants for the static X-tilt
    const cosX = Math.cos(TILT_X);
    const sinX = Math.sin(TILT_X);
    let lastT  = performance.now();

    function tick(t) {
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;
      rotY.current += dt * SPEED;

      const { cx, cy, R, fov } = dimsRef.current;
      if (R === 0) { rafId.current = requestAnimationFrame(tick); return; }

      const cosY = Math.cos(rotY.current);
      const sinY = Math.sin(rotY.current);

      basePoints.forEach((p, i) => {
        const el = wordRefs.current[i];
        if (!el) return;

        // 1. Rotate around Y-axis (the orbiting spin)
        const rx  = p.x * cosY - p.z * sinY;
        const ry0 = p.y;
        const rz0 = p.x * sinY + p.z * cosY;

        // 2. Rotate around X-axis (aesthetic tilt)
        const ry = ry0 * cosX - rz0 * sinX;
        const rz = ry0 * sinX + rz0 * cosX;

        // 3. Scale by sphere radius
        const wx = rx * R;
        const wy = ry * R;
        const wz = rz * R;            // world Z: positive = toward viewer

        // 4. Perspective projection → screen coords
        const scale = fov / (fov + wz);
        const sx = cx + wx * scale;
        const sy = cy - wy * scale;   // screen Y is inverted

        // 5. Depth factor [0 = back, 1 = front]
        const depth = (rz + 1) / 2;

        // 6. Apply styles
        el.style.left      = sx + "px";
        el.style.top       = sy + "px";
        el.style.transform = `translate(-50%, -50%) scale(${(0.55 + depth * 0.45).toFixed(3)})`;
        el.style.opacity   = (0.12 + depth * 0.88).toFixed(3);
        // Front words appear in front of the image; back words behind it
        el.style.zIndex    = wz > 0 ? String(IMG_Z + 5) : String(IMG_Z - 5);

        // Color: white glowing at front → mint-green mid → dark pine at back
        if (depth > 0.68) {
          const glow = ((depth - 0.68) / 0.32).toFixed(2);
          el.style.color      = "#FFFFFF";
          el.style.textShadow = `0 0 14px rgba(142,214,157,${glow}), 0 0 28px rgba(142,214,157,${(glow * 0.4).toFixed(2)})`;
        } else if (depth > 0.38) {
          el.style.color      = "#8ED69D";
          el.style.textShadow = "none";
        } else {
          el.style.color      = "#1D4B3F";
          el.style.textShadow = "none";
        }
      });

      rafId.current = requestAnimationFrame(tick);
    }

    rafId.current = requestAnimationFrame(tick);
    return () => { if (rafId.current) cancelAnimationFrame(rafId.current); };
  }, [basePoints]);

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <section
      id="system-entry"
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: "100vh", maxHeight: "100vh" }}
    >

      {/* ── LAYER 0: Rich dark background ────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 38%, #0D3028 0%, #051F20 45%, #020C0D 100%)",
        }}
      />

      {/* ── LAYER 1: Blueprint grid ───────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-os-grid pointer-events-none" style={{ opacity: 0.25 }} />

      {/* ── LAYER 2: Glowing tech accent lines ───────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Horizontal scan lines */}
        <div style={{
          position: "absolute", top: "42%", left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(142,214,157,0.18) 30%, rgba(142,214,157,0.35) 50%, rgba(142,214,157,0.18) 70%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute", top: "28%", left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(35,83,71,0.25) 40%, rgba(35,83,71,0.25) 60%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute", top: "72%", left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(35,83,71,0.20) 40%, rgba(35,83,71,0.20) 60%, transparent 100%)",
        }} />
        {/* Vertical center line */}
        <div style={{
          position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px",
          background: "linear-gradient(180deg, transparent 0%, rgba(142,214,157,0.08) 30%, rgba(142,214,157,0.16) 50%, rgba(142,214,157,0.08) 70%, transparent 100%)",
        }} />
        {/* Corner atmosphere glows */}
        <div style={{
          position: "absolute", top: "-10%", left: "-10%",
          width: "55%", height: "55%",
          background: "radial-gradient(circle, rgba(22,56,50,0.35) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-10%", right: "-10%",
          width: "55%", height: "55%",
          background: "radial-gradient(circle, rgba(11,43,38,0.50) 0%, transparent 70%)",
        }} />
        {/* Center sphere ambient glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70vmin", height: "70vmin",
          background: "radial-gradient(circle, rgba(142,214,157,0.04) 0%, transparent 65%)",
          borderRadius: "50%",
        }} />

        {/* Decorative corner tick marks */}
        {[
          { top: "5%",   left: "5%",   borderTop: "1px solid", borderLeft:  "1px solid" },
          { top: "5%",   right: "5%",  borderTop: "1px solid", borderRight: "1px solid" },
          { bottom: "5%",left: "5%",   borderBottom:"1px solid",borderLeft:  "1px solid" },
          { bottom: "5%",right: "5%",  borderBottom:"1px solid",borderRight: "1px solid" },
        ].map((s, k) => (
          <div key={k} style={{
            position: "absolute", ...s,
            width: 28, height: 28,
            borderColor: "rgba(142,214,157,0.25)",
          }} />
        ))}
      </div>

      {/* ── LAYER 3: 3-D text-globe word spans ───────────────────────────────── */}
      {/*
       * The container is the full-section overlay. Each word is absolutely
       * positioned via JS (perspective-projected 3-D → 2-D screen coords).
       * z-index alternates between IMG_Z±5 so front words overlap the photo
       * while back words recede behind it — creating true orbital depth.
       */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{ pointerEvents: "none" }}
      >
        {basePoints.map((_, i) => (
          <span
            key={i}
            ref={el => { wordRefs.current[i] = el; }}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontWeight: 800,
              fontSize: "clamp(8px, 1vmin, 13px)",
              letterSpacing: "0.22em",
              whiteSpace: "nowrap",
              userSelect: "none",
              willChange: "transform, opacity, color",
              color: "#1D4B3F",
            }}
          >
            {WORDS[i % WORDS.length]}
          </span>
        ))}
      </div>

      {/* ── LAYER 4: Developer portrait ──────────────────────────────────────── */}
      {/*
       * Pinned to the bottom-center of the section.
       * z-index IMG_Z sits between back-sphere words (IMG_Z-5) and
       * front-sphere words (IMG_Z+5) for the true-orbit layering effect.
       */}
      <div
        className="absolute bottom-0 left-1/2 pointer-events-none select-none"
        style={{ transform: "translateX(-50%)", zIndex: IMG_Z }}
      >
        <img
          src={profileData.profileImage}
          alt="Nabeel Mughal — Full Stack Developer"
          style={{
            display: "block",
            height: "clamp(320px, 68vh, 620px)",
            width: "auto",
            objectFit: "contain",
            objectPosition: "bottom center",
            filter:
              "drop-shadow(0 0 50px rgba(142,214,157,0.22)) " +
              "drop-shadow(0 -10px 70px rgba(5,31,32,0.70))",
          }}
        />
      </div>

      {/* ── LAYER 5: Name / identity label at the bottom ─────────────────────── */}
      <div
        className="absolute bottom-5 left-0 right-0 flex flex-col items-center gap-1.5 pointer-events-none"
        style={{ zIndex: IMG_Z + 10 }}
      >
        {/* Thin horizontal rule */}
        <div style={{
          width: "clamp(120px, 25vw, 240px)",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(142,214,157,0.45), transparent)",
          marginBottom: "4px",
        }} />
        <span style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "clamp(8px, 1.1vw, 11px)",
          letterSpacing: "0.45em",
          color: "rgba(218,241,222,0.55)",
          textTransform: "uppercase",
        }}>
          {profileData.name}&nbsp;·&nbsp;Full Stack Developer
        </span>
      </div>

    </section>
  );
}
