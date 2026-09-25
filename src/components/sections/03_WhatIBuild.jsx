import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Radio, 
  ShoppingCart, 
  UtensilsCrossed, 
  Store, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Terminal 
} from "lucide-react";
import { projectsData } from "../../data/projectsData";

export default function WhatIBuild({ onSelectProject }) {
  const [activeCapability, setActiveCapability] = useState("realtime");

  const capabilities = [
    {
      id: "realtime",
      title: "Real-Time Emergency & Incident Systems",
      summary: "Bi-directional WebSocket streaming, automated SMS fallback pipelines, and geolocation triage without exposing user privacy.",
      problemSolved: "Eliminates the friction and privacy risks of conventional roadside or emergency communication.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Twilio API", "Google Maps"],
      featuredProjectId: "qr-vehicle-alert",
      icon: Radio,
      metrics: "Sub-second event dispatch • Zero phone exposure"
    },
    {
      id: "b2b-catalog",
      title: "B2B E-Commerce & Industrial Catalogs",
      summary: "High-density technical catalog digitization, rapid search indexing, and streamlined multi-item buyer inquiry pipelines.",
      problemSolved: "Replaces fragmented manual paper catalogs and slow phone orders with instant online procurement.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Bootstrap", "REST API"],
      featuredProjectId: "nawaz-sons-industrials",
      icon: ShoppingCart,
      metrics: "Structured spare-parts taxonomy • Factory-floor mobile UX"
    },
    {
      id: "food-service",
      title: "Digital Restaurant & Culinary Platforms",
      summary: "Category-driven menu navigation, dynamic order calculations, responsive mobile-first cart flows, and live production deployment.",
      problemSolved: "Allows dining establishments to showcase regional cuisines and process digital orders smoothly.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Vercel"],
      featuredProjectId: "baithak-restaurant",
      icon: UtensilsCrossed,
      metrics: "Frictionless mobile ordering • Vercel Edge performance"
    },
    {
      id: "brand-storefront",
      title: "Responsive Brand Storefronts & UI Systems",
      summary: "High-fidelity visual storytelling, promotional product ribbons, component modularity, and lightning-fast Vite bundling.",
      problemSolved: "Converts visitors into customers through polished brand layouts and engaging culinary photography displays.",
      technologies: ["React", "Vite", "Bootstrap", "HTML5", "CSS3"],
      featuredProjectId: "keithston-bakery",
      icon: Store,
      metrics: "Lightweight bundle size • Fluid responsive grids"
    }
  ];

  const currentCap = capabilities.find(c => c.id === activeCapability) || capabilities[0];
  const linkedProject = projectsData.find(p => p.id === currentCap.featuredProjectId);

  return (
    <section id="capabilities" className="py-20 bg-[#051F20] border-b border-[#163832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-[#8ED69D] bg-[#163832] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#235347]">
            <Layers className="w-3.5 h-3.5 text-[#8ED69D]" />
            <span>Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#DAF1DE] tracking-tight">
            What I Engineer for Real-World Demands
          </h2>
          <p className="mt-3 text-base text-[#DAF1DE]/80 leading-relaxed">
            Every capability listed here is backed by an actual, live production project built from scratch. Click any capability to inspect the architectural decisions and proof of work.
          </p>
        </motion.div>

        {/* Interactive Capability Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Capability Selectors (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              const isSelected = activeCapability === cap.id;

              return (
                <motion.button
                  key={cap.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={() => setActiveCapability(cap.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start space-x-4 ${
                    isSelected
                      ? "bg-[#0B2B26] border-[#8ED69D] shadow-md shadow-[#8ED69D]/10 ring-2 ring-[#8ED69D]/20 text-[#DAF1DE]"
                      : "bg-[#0B2B26]/60 hover:bg-[#0B2B26] border-[#163832] text-[#DAF1DE]/80 hover:border-[#235347]"
                  }`}
                >
                  <div className={`p-3 rounded-xl flex-shrink-0 transition-colors ${
                    isSelected 
                      ? "bg-[#8ED69D] text-[#051F20] shadow-xs shadow-[#8ED69D]/30" 
                      : "bg-[#163832] text-[#8ED69D]"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-sm sm:text-base font-bold ${
                        isSelected ? "text-[#DAF1DE]" : "text-[#DAF1DE]/80"
                      }`}>
                        {cap.title}
                      </h3>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#8ED69D] flex-shrink-0 ml-2" />
                      )}
                    </div>
                    <p className="text-xs text-[#DAF1DE]/60 mt-1 line-clamp-2">
                      {cap.summary}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Deep Evidence Panel (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentCap.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0B2B26] border border-[#163832] rounded-2xl p-6 sm:p-8 shadow-xl shadow-[#051F20]/50 relative overflow-hidden"
              >
                
                {/* Decorative corner tag */}
                <div className="absolute top-0 right-0 bg-[#8ED69D] text-[#051F20] text-[11px] font-mono px-3.5 py-1 rounded-bl-xl font-bold tracking-wide">
                  CAPABILITY PROOF
                </div>

                <div className="space-y-6">
                  
                  {/* Heading & Metrics */}
                  <div>
                    <span className="text-xs font-mono uppercase text-[#8ED69D] tracking-wider font-semibold">
                      Core Problem Solved
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#DAF1DE] mt-1">
                      {currentCap.problemSolved}
                    </h3>
                    <div className="mt-3 inline-block px-3 py-1 bg-[#163832] border border-[#235347] rounded-lg text-xs font-mono text-[#8ED69D]">
                      {currentCap.metrics}
                    </div>
                  </div>

                  {/* Technical Implementation details */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-[#DAF1DE]/70 tracking-wider">
                      Architectural Stack Employed
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {currentCap.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-[#051F20] border border-[#163832] text-[#DAF1DE] rounded-lg text-xs font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Connected Real Project Card */}
                  {linkedProject && (
                    <div className="pt-4 border-t border-[#163832]">
                      <span className="text-xs font-mono text-[#DAF1DE]/70 uppercase tracking-wider block mb-2">
                        Verified Case File Evidence:
                      </span>

                      <div className="p-4 rounded-xl bg-[#051F20] border border-[#163832] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h4 className="text-base font-bold text-[#DAF1DE]">
                            {linkedProject.title}
                          </h4>
                          <p className="text-xs text-[#DAF1DE]/60 mt-0.5">
                            {linkedProject.tagline}
                          </p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <a
                            href={linkedProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3.5 py-2 text-xs font-bold text-[#051F20] bg-[#8ED69D] hover:bg-[#7bc78b] rounded-lg shadow-xs transition-colors flex items-center space-x-1"
                          >
                            <span>Open Live</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#051F20]" />
                          </a>
                          <a
                            href={`#case-${linkedProject.id}`}
                            className="px-3.5 py-2 text-xs font-semibold text-[#8ED69D] bg-[#163832] hover:bg-[#235347] border border-[#235347] rounded-lg transition-colors"
                          >
                            Read Case File
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
