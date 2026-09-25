import React, { useState } from "react";
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
    <section id="projects" className="py-24 bg-white border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-purple-700 bg-purple-100/80 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Evidence Repository</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Verified Case Files & Production Deployments
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Each system is documented under an authentic engineering audit: Problem &rarr; Architectural Approach &rarr; Tech Stack &rarr; Confirmed Result &rarr; What I’d Improve.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-purple-700 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>ALL 4 LIVE IN PRODUCTION</span>
          </div>
        </div>

        {/* Case Files Stack */}
        <div className="space-y-8">
          {projectsData.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            const isHighlighted = selectedProjectId === project.id;

            return (
              <div
                key={project.id}
                id={`case-${project.id}`}
                className={`transition-all duration-300 rounded-2xl border ${
                  isHighlighted
                    ? "ring-4 ring-purple-600/20 border-purple-500 bg-purple-50/20"
                    : "border-purple-200/90 bg-white hover:border-purple-300"
                } shadow-md shadow-purple-950/5 overflow-hidden`}
              >
                {/* Case File Header Strip */}
                <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-purple-100/70">
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded bg-purple-700 text-white font-semibold">
                        CASE #{idx + 1}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                        {project.category}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-emerald-700 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Actions & Live Button */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold shadow-xs shadow-purple-700/30 flex items-center space-x-1.5 transition-transform hover:scale-[1.02]"
                    >
                      <span>Live Production Link</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="px-4 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
                    >
                      <span>{isExpanded ? "Collapse Audit" : "Expand Case File"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Tech Chips Preview */}
                <div className="px-6 sm:px-8 py-3 bg-[#FAFAFC] border-b border-purple-100 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600">
                  <span className="text-purple-700 font-semibold mr-1">Stack:</span>
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded bg-white border border-purple-100 text-slate-700 text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expandable Case File Deep Audit */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-purple-100">
                    
                    {/* Left Sub-column: Problem & Architecture */}
                    <div className="space-y-6 md:pr-6">
                      {/* Problem Statement */}
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-purple-700 tracking-wider mb-2">
                          <AlertCircle className="w-4 h-4 text-purple-600" />
                          <span>01. The Problem Solved</span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed bg-purple-50/40 p-4 rounded-xl border border-purple-100">
                          {project.problem}
                        </p>
                      </div>

                      {/* Technical Approach & Role */}
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-purple-700 tracking-wider mb-2">
                          <Layers className="w-4 h-4 text-purple-600" />
                          <span>02. Approach & Architecture Decisions</span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {project.approach}
                        </p>
                        <div className="mt-3 text-xs font-mono text-slate-500">
                          <strong>Role:</strong> {project.role}
                        </div>
                      </div>

                      {/* Key Engineered Features */}
                      <div>
                        <span className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider block mb-2">
                          Engineered Capabilities:
                        </span>
                        <ul className="space-y-2">
                          {project.features.map((feat, i) => (
                            <li key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
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
                        <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-sm text-emerald-900 leading-relaxed font-medium">
                          {project.confirmedResult}
                        </div>
                      </div>

                      {/* What I'd Improve (Required by Section 04) */}
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-purple-700 tracking-wider mb-2">
                          <Sparkles className="w-4 h-4 text-purple-600" />
                          <span>04. Next Sprint // What I'd Improve</span>
                        </div>
                        <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 text-sm text-purple-900 leading-relaxed">
                          {project.whatToImprove}
                        </div>
                      </div>

                      {/* External Verifications */}
                      <div className="pt-2">
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2">
                          Live Environment:
                        </span>
                        <div className="p-3 rounded-xl bg-slate-900 text-purple-200 font-mono text-xs flex items-center justify-between">
                          <span className="truncate pr-2">{project.liveUrl}</span>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white hover:text-purple-300 font-semibold underline flex items-center gap-1 flex-shrink-0"
                          >
                            <span>Visit</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
