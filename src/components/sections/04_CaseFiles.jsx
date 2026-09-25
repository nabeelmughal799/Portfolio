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
    <section id="projects" className="py-24 bg-white border-b border-[#E8D5C4]">
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
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-[#8E6D16] bg-[#F7F0D4] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#EEDD9F]">
              <FolderGit2 className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>Evidence Repository</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              Verified Case Files & Production Deployments
            </h2>
            <p className="mt-3 text-base text-[#5C5855]">
              Each system is documented under an authentic engineering audit: Problem &rarr; Architectural Approach &rarr; Tech Stack &rarr; Confirmed Result &rarr; What I’d Improve.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-[#8E6D16] bg-[#F4ECE1] px-3 py-1.5 rounded-lg border border-[#E8D5C4]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
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
                    ? "ring-4 ring-[#C9A227]/25 border-[#C9A227] bg-[#F7F0D4]/30"
                    : "border-[#E8D5C4] bg-white hover:border-[#C9A227]/60"
                } shadow-md shadow-[#1A1A1A]/5 overflow-hidden`}
              >
                {/* Case File Header Strip */}
                <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#E8D5C4]">
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded bg-[#C9A227] text-white font-semibold">
                        CASE #{idx + 1}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-[#F4ECE1] text-[#8E6D16] border border-[#E8D5C4]">
                        {project.category}
                      </span>
                      <span className="text-[#6E6963]">•</span>
                      <span className="text-emerald-700 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#5C5855] text-sm sm:text-base font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Actions & Live Button */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#C9A227] hover:bg-[#B08B1E] text-white text-xs font-semibold shadow-xs shadow-[#C9A227]/30 flex items-center space-x-1.5 transition-transform hover:scale-[1.02]"
                    >
                      <span>Live Production Link</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="px-4 py-2.5 rounded-xl bg-[#F4ECE1] hover:bg-[#EEDD9F] text-[#8E6D16] border border-[#E8D5C4] text-xs font-semibold flex items-center space-x-1.5 transition-colors"
                    >
                      <span>{isExpanded ? "Collapse Audit" : "Expand Case File"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Tech Chips Preview */}
                <div className="px-6 sm:px-8 py-3 bg-[#FAF6F0] border-b border-[#E8D5C4] flex flex-wrap items-center gap-2 text-xs font-mono text-[#5C5855]">
                  <span className="text-[#8E6D16] font-semibold mr-1">Stack:</span>
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded bg-white border border-[#E8D5C4] text-[#1A1A1A] text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Case File Deep Audit */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E8D5C4]">
                    
                    {/* Left Sub-column: Problem & Architecture */}
                    <div className="space-y-6 md:pr-6">
                      {/* Problem Statement */}
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#8E6D16] tracking-wider mb-2">
                          <AlertCircle className="w-4 h-4 text-[#C9A227]" />
                          <span>01. The Problem Solved</span>
                        </div>
                        <p className="text-sm text-[#1A1A1A] leading-relaxed bg-[#FAF6F0] p-4 rounded-xl border border-[#E8D5C4]">
                          {project.problem}
                        </p>
                      </div>

                      {/* Technical Approach & Role */}
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#8E6D16] tracking-wider mb-2">
                          <Layers className="w-4 h-4 text-[#C9A227]" />
                          <span>02. Approach & Architecture Decisions</span>
                        </div>
                        <p className="text-sm text-[#1A1A1A] leading-relaxed">
                          {project.approach}
                        </p>
                        <div className="mt-3 text-xs font-mono text-[#6E6963]">
                          <strong>Role:</strong> {project.role}
                        </div>
                      </div>

                      {/* Key Engineered Features */}
                      <div>
                        <span className="text-xs font-mono font-bold uppercase text-[#6E6963] tracking-wider block mb-2">
                          Engineered Capabilities:
                        </span>
                        <ul className="space-y-2">
                          {project.features.map((feat, i) => (
                            <li key={i} className="flex items-start space-x-2 text-xs text-[#1A1A1A]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227] flex-shrink-0 mt-0.5" />
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
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-emerald-700 tracking-wider mb-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>03. Confirmed Result</span>
                        </div>
                        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-sm text-emerald-900 leading-relaxed font-medium">
                          {project.confirmedResult}
                        </div>
                      </div>

                      {/* What I'd Improve (Required by Section 04) */}
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#8E6D16] tracking-wider mb-2">
                          <Sparkles className="w-4 h-4 text-[#C9A227]" />
                          <span>04. Next Sprint // What I'd Improve</span>
                        </div>
                        <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E8D5C4] text-sm text-[#1A1A1A] leading-relaxed">
                          {project.whatToImprove}
                        </div>
                      </div>

                      {/* External Verifications */}
                      <div className="pt-2">
                        <span className="text-xs font-mono text-[#6E6963] uppercase tracking-wider block mb-2">
                          Live Environment:
                        </span>
                        <div className="p-3 rounded-xl bg-[#1A1A1A] text-[#E8D5C4] font-mono text-xs flex items-center justify-between border border-[#332B18]">
                          <span className="truncate pr-2">{project.liveUrl}</span>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#C9A227] hover:text-white font-semibold underline flex items-center gap-1 flex-shrink-0"
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
