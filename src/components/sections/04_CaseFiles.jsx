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
    <section id="projects" className="py-24 bg-[#F2F5F6] border-b border-[#2D4A53]/20">
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
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-[#2D4A53] bg-[#FFFFFF] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#2D4A53]/30 shadow-xs">
              <FolderGit2 className="w-3.5 h-3.5 text-[#73C38A]" />
              <span>Evidence Repository</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1F23] tracking-tight">
              Verified Case Files & Production Deployments
            </h2>
            <p className="mt-3 text-base text-[#2D4A53]">
              Each system is documented under an authentic engineering audit: Problem &rarr; Architectural Approach &rarr; Tech Stack &rarr; Confirmed Result &rarr; What I’d Improve.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-[#2D4A53] bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#2D4A53]/30 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#73C38A] animate-pulse"></span>
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
                className={`transition-[border-color] duration-200 rounded-2xl border ${
                  isHighlighted
                    ? "ring-2 ring-[#73C38A]/30 border-[#73C38A] bg-[#FFFFFF]"
                    : "border-[#2D4A53]/20 bg-[#FFFFFF] hover:border-[#73C38A]"
                } overflow-hidden`}
              >
                {/* Case File Header Strip */}
                <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#2D4A53]/15">
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded bg-[#0D1F23] text-[#FFFFFF] font-bold">
                        CASE #{idx + 1}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-[#F2F5F6] text-[#2D4A53] border border-[#2D4A53]/20 font-medium">
                        {project.category}
                      </span>
                      <span className="text-[#2D4A53]/50">•</span>
                      <span className="text-[#73C38A] font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#73C38A] inline-block" />
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D1F23] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#69818D] text-sm sm:text-base font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Actions & Live Button */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#73C38A] hover:bg-[#62b379] text-[#0D1F23] text-xs font-bold flex items-center space-x-1.5 transition-[background-color,transform] duration-200 hover:scale-[1.02]"
                    >
                      <span>Live Production Link</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0D1F23]" />
                    </a>

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="px-4 py-2.5 rounded-xl bg-[#F2F5F6] hover:bg-[#EAEFEF] text-[#0D1F23] border border-[#2D4A53]/20 text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? "Collapse Audit" : "Expand Case File"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Tech Chips Preview */}
                <div className="px-6 sm:px-8 py-3 bg-[#F2F5F6] border-b border-[#2D4A53]/15 flex flex-wrap items-center gap-2 text-xs font-mono text-[#2D4A53]">
                  <span className="text-[#0D1F23] font-semibold mr-1">Stack:</span>
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-0.5 rounded bg-[#AFB3B7] border border-[#2D4A53]/20 text-[#0D1F23] text-[11px] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Case File Deep Audit */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 bg-[#FFFFFF] grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#2D4A53]/15">
                    
                    {/* Left Sub-column: Problem & Architecture */}
                    <div className="space-y-6 md:pr-6">
                      {/* Problem Statement */}
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#73C38A] tracking-wider mb-2">
                          <AlertCircle className="w-4 h-4 text-[#73C38A]" />
                          <span>01. The Problem Solved</span>
                        </div>
                        <p className="text-sm text-[#2D4A53] leading-relaxed bg-[#F2F5F6] p-4 rounded-xl border border-[#2D4A53]/20">
                          {project.problem}
                        </p>
                      </div>

                      {/* Technical Approach & Role */}
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#73C38A] tracking-wider mb-2">
                          <Layers className="w-4 h-4 text-[#73C38A]" />
                          <span>02. Approach & Architecture Decisions</span>
                        </div>
                        <p className="text-sm text-[#2D4A53] leading-relaxed">
                          {project.approach}
                        </p>
                        <div className="mt-3 text-xs font-mono text-[#69818D]">
                          <strong className="text-[#0D1F23]">Role:</strong> {project.role}
                        </div>
                      </div>

                      {/* Key Engineered Features */}
                      <div>
                        <span className="text-xs font-mono font-bold uppercase text-[#0D1F23] tracking-wider block mb-2">
                          Engineered Capabilities:
                        </span>
                        <ul className="space-y-2">
                          {project.features.map((feat, i) => (
                            <li key={i} className="flex items-start space-x-2 text-xs text-[#2D4A53]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#73C38A] flex-shrink-0 mt-0.5" />
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
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#73C38A] tracking-wider mb-2">
                          <CheckCircle2 className="w-4 h-4 text-[#73C38A]" />
                          <span>03. Confirmed Result</span>
                        </div>
                        <div className="p-4 rounded-xl bg-[#F2F5F6] border border-[#73C38A]/50 text-sm text-[#0D1F23] leading-relaxed font-medium">
                          {project.confirmedResult}
                        </div>
                      </div>

                      {/* What I'd Improve */}
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-[#73C38A] tracking-wider mb-2">
                          <Sparkles className="w-4 h-4 text-[#73C38A]" />
                          <span>04. Next Sprint // What I'd Improve</span>
                        </div>
                        <div className="p-4 rounded-xl bg-[#F2F5F6] border border-[#2D4A53]/20 text-sm text-[#2D4A53] leading-relaxed">
                          {project.whatToImprove}
                        </div>
                      </div>

                      {/* External Verifications */}
                      <div className="pt-2">
                        <span className="text-xs font-mono text-[#0D1F23] uppercase tracking-wider block mb-2">
                          Live Environment:
                        </span>
                        <div className="p-3 rounded-xl bg-[#F2F5F6] text-[#2D4A53] font-mono text-xs flex items-center justify-between border border-[#2D4A53]/20">
                          <span className="truncate pr-2">{project.liveUrl}</span>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#73C38A] hover:text-[#0D1F23] font-semibold underline flex items-center gap-1 flex-shrink-0"
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
