import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FolderGit2, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  AlertCircle, 
  Code, 
  Layers, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { projectsData } from "../../data/projectsData";

export default function CaseFiles({ selectedProjectId }) {
  // Allow expanding/collapsing deep case file breakdown
  const [expandedId, setExpandedId] = useState("qr-vehicle-alert");

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-24 bg-[#0B2B26] border-b border-[#163832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-[#8ED69D] bg-[#163832] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#235347]">
              <FolderGit2 className="w-3.5 h-3.5 text-[#8ED69D]" />
              <span>Evidence Repository</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#DAF1DE] tracking-tight">
              Verified Case Files & Production Deployments
            </h2>
            <p className="mt-3 text-base text-[#DAF1DE]/80">
              Each system is documented under an authentic engineering audit: Problem &rarr; Architectural Approach &rarr; Tech Stack &rarr; Confirmed Result &rarr; What I’d Improve.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-[#8ED69D] bg-[#163832] px-3 py-1.5 rounded-lg border border-[#235347]">
            <span className="w-2 h-2 rounded-full bg-[#8ED69D] animate-pulse"></span>
            <span>ALL 4 LIVE IN PRODUCTION</span>
          </div>
        </motion.div>

        {/* Case Files Stack */}
        <div className="space-y-8">
          {projectsData.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            const isHighlighted = selectedProjectId === project.id;

            return (
              <motion.div
                key={project.id}
                id={`case-${project.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`transition-all duration-300 rounded-2xl border ${
                  isHighlighted
                    ? "ring-4 ring-[#8ED69D]/25 border-[#8ED69D] bg-[#051F20]"
                    : "border-[#163832] bg-[#051F20] hover:border-[#235347]"
                } shadow-md shadow-[#051F20]/50 overflow-hidden`}
              >
                {/* Case File Header Strip */}
                <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#163832]">
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded bg-[#8ED69D] text-[#051F20] font-bold">
                        CASE #{idx + 1}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-[#163832] text-[#8ED69D] border border-[#235347]">
                        {project.category}
                      </span>
                      <span className="text-[#235347]">•</span>
                      <span className="text-[#8ED69D] font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8ED69D] inline-block" />
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#DAF1DE] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#DAF1DE]/70 text-sm sm:text-base font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Actions & Live Button */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#8ED69D] hover:bg-[#7bc78b] text-[#051F20] text-xs font-bold shadow-xs shadow-[#8ED69D]/25 flex items-center space-x-1.5 transition-transform hover:scale-[1.02]"
                    >
                      <span>Live Production Link</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#051F20]" />
                    </a>

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="px-4 py-2.5 rounded-xl bg-[#163832] hover:bg-[#235347] text-[#8ED69D] border border-[#235347] text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? "Collapse Audit" : "Expand Case File"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Tech Chips Preview */}
                <div className="px-6 sm:px-8 py-3 bg-[#051F20]/90 border-b border-[#163832] flex flex-wrap items-center gap-2 text-xs font-mono text-[#DAF1DE]/70">
                  <span className="text-[#8ED69D] font-semibold mr-1">Stack:</span>
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded bg-[#0B2B26] border border-[#163832] text-[#DAF1DE] text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Case File Deep Audit */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 bg-[#051F20] grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#163832]">
                    
                    {/* Left Sub-column: Problem & Architecture */}
                    <div className="space-y-6 md:pr-6">
                      {/* Problem Statement */}
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#8ED69D] tracking-wider mb-2">
                          <AlertCircle className="w-4 h-4 text-[#8ED69D]" />
                          <span>01. The Problem Solved</span>
                        </div>
                        <p className="text-sm text-[#DAF1DE] leading-relaxed bg-[#0B2B26] p-4 rounded-xl border border-[#163832]">
                          {project.problem}
                        </p>
                      </div>

                      {/* Technical Approach & Role */}
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#8ED69D] tracking-wider mb-2">
                          <Layers className="w-4 h-4 text-[#8ED69D]" />
                          <span>02. Approach & Architecture Decisions</span>
                        </div>
                        <p className="text-sm text-[#DAF1DE] leading-relaxed">
                          {project.approach}
                        </p>
                        <div className="mt-3 text-xs font-mono text-[#DAF1DE]/70">
                          <strong className="text-[#DAF1DE]">Role:</strong> {project.role}
                        </div>
                      </div>

                      {/* Key Engineered Features */}
                      <div>
                        <span className="text-xs font-mono font-bold uppercase text-[#DAF1DE]/70 tracking-wider block mb-2">
                          Engineered Capabilities:
                        </span>
                        <ul className="space-y-2">
                          {project.features.map((feat, i) => (
                            <li key={i} className="flex items-start space-x-2 text-xs text-[#DAF1DE]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#8ED69D] flex-shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Sub-column: Confirmed Result & What I'd Improve */}
                    <div className="space-y-6 pt-6 md:pt-0 md:pl-6">
                      
                      {/* Confirmed Result */}
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#8ED69D] tracking-wider mb-2">
                          <CheckCircle2 className="w-4 h-4 text-[#8ED69D]" />
                          <span>03. Confirmed Result</span>
                        </div>
                        <div className="p-4 rounded-xl bg-[#0B2B26] border border-[#235347] text-sm text-[#DAF1DE] leading-relaxed font-medium">
                          {project.confirmedResult}
                        </div>
                      </div>

                      {/* What I'd Improve */}
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#8ED69D] tracking-wider mb-2">
                          <Sparkles className="w-4 h-4 text-[#8ED69D]" />
                          <span>04. Next Sprint // What I'd Improve</span>
                        </div>
                        <div className="p-4 rounded-xl bg-[#0B2B26] border border-[#163832] text-sm text-[#DAF1DE] leading-relaxed">
                          {project.whatToImprove}
                        </div>
                      </div>

                      {/* External Verifications */}
                      <div className="pt-2">
                        <span className="text-xs font-mono text-[#DAF1DE]/70 uppercase tracking-wider block mb-2">
                          Live Environment:
                        </span>
                        <div className="p-3 rounded-xl bg-[#0B2B26] text-[#DAF1DE]/80 font-mono text-xs flex items-center justify-between border border-[#163832]">
                          <span className="truncate pr-2">{project.liveUrl}</span>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#8ED69D] hover:text-[#DAF1DE] font-semibold underline flex items-center gap-1 flex-shrink-0"
                          >
                            <span>Visit</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
