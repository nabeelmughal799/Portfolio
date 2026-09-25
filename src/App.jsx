import React, { useState } from "react";
import TransformingNavbar from "./components/layout/TransformingNavbar";
import SystemStatusBar from "./components/layout/SystemStatusBar";
import CommandPalette from "./components/os/CommandPalette";
import HeroSystemEntry from "./components/sections/01_HeroSystemEntry";
import LiveDashboard from "./components/sections/02_LiveDashboard";
import WhatIBuild from "./components/sections/03_WhatIBuild";
import CaseFiles from "./components/sections/04_CaseFiles";
import InteractiveTechStack from "./components/sections/05_InteractiveTechStack";
import BehindTheSystem from "./components/sections/06_BehindTheSystem";
import ContactTerminal from "./components/sections/07_ContactTerminal";

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [highlightedProjectId, setHighlightedProjectId] = useState(null);

  const handleExploreClick = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    const el = document.querySelector("#contact-terminal");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleHighlightProject = (projectId) => {
    setHighlightedProjectId(projectId);
    const el = document.querySelector(`#case-${projectId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#1E293B] flex flex-col font-sans selection:bg-purple-600 selection:text-white relative">
      {/* Top OS Transforming Navbar */}
      <TransformingNavbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Main Flow (Strict Roadmap Order) */}
      <main className="flex-1">
        {/* 01 — System Entry / Hero */}
        <HeroSystemEntry 
          onExploreClick={handleExploreClick} 
          onContactClick={handleContactClick} 
        />

        {/* 02 — Live System Dashboard */}
        <LiveDashboard />

        {/* 03 — What I Build */}
        <WhatIBuild onSelectProject={handleHighlightProject} />

        {/* 04 — Case Files (Real Projects) */}
        <CaseFiles selectedProjectId={highlightedProjectId} />

        {/* 05 — Interactive Technology Stack */}
        <InteractiveTechStack onHighlightProject={handleHighlightProject} />

        {/* 06 — Behind The System (CV Profile) */}
        <BehindTheSystem />

        {/* 07 — Start A Project / Contact Terminal */}
        <ContactTerminal />
      </main>

      {/* Bottom OS Telemetry & Live Clock */}
      <SystemStatusBar />

      {/* Global Command Palette (Cmd/Ctrl + K) */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        setIsOpen={setIsCommandPaletteOpen} 
      />
    </div>
  );
}
