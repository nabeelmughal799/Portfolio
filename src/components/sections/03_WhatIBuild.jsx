import React, { useState } from "react";
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
    <section id="capabilities" className="py-20 bg-[#FAFAFC] border-b border-purple-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-purple-700 bg-purple-100/80 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What I Engineer for Real-World Demands
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Every capability listed here is backed by an actual, live production project built from scratch. Click any capability to inspect the architectural decisions and proof of work.
          </p>
        </div>

        {/* Interactive Capability Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Capability Selectors (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              const isSelected = activeCapability === cap.id;

              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveCapability(cap.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start space-x-4 ${
                    isSelected
                      ? "bg-white border-purple-400 shadow-md shadow-purple-900/5 ring-2 ring-purple-600/10"
                      : "bg-white/60 hover:bg-white border-purple-100 text-slate-700 hover:border-purple-200"
                  }`}
                >
                  <div className={`p-3 rounded-xl flex-shrink-0 transition-colors ${
                    isSelected 
                      ? "bg-purple-700 text-white shadow-xs shadow-purple-700/30" 
                      : "bg-purple-50 text-purple-700"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-sm sm:text-base font-bold ${
                        isSelected ? "text-purple-950" : "text-slate-900"
                      }`}>
                        {cap.title}
                      </h3>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 ml-2" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {cap.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Evidence Panel (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-lg shadow-purple-950/5 relative overflow-hidden">
              
              {/* Decorative corner tag */}
              <div className="absolute top-0 right-0 bg-purple-700 text-white text-[11px] font-mono px-3.5 py-1 rounded-bl-xl font-medium tracking-wide">
                CAPABILITY PROOF
              </div>

              <div className="space-y-6">
                
                {/* Heading & Metrics */}
                <div>
                  <span className="text-xs font-mono uppercase text-purple-600 tracking-wider font-semibold">
                    Core Problem Solved
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    {currentCap.problemSolved}
                  </h3>
                  <div className="mt-3 inline-block px-3 py-1 bg-purple-50 border border-purple-200 rounded-lg text-xs font-mono text-purple-800">
                    {currentCap.metrics}
                  </div>
                </div>

                {/* Technical Implementation details */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-slate-500 tracking-wider">
                    Architectural Stack Employed
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentCap.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-800 rounded-lg text-xs font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connected Real Project Card */}
                {linkedProject && (
                  <div className="pt-4 border-t border-purple-100">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2">
                      Verified Case File Evidence:
                    </span>

                    <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-base font-bold text-slate-900">
                          {linkedProject.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5">
                          {linkedProject.tagline}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <a
                          href={linkedProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3.5 py-2 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-lg shadow-xs transition-colors flex items-center space-x-1"
                        >
                          <span>Open Live</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={`#case-${linkedProject.id}`}
                          className="px-3.5 py-2 text-xs font-semibold text-purple-800 bg-white hover:bg-purple-100 border border-purple-200 rounded-lg transition-colors"
                        >
                          Read Case File
                        </a>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
