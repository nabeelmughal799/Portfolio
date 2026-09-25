import React, { useState } from "react";
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  Award, 
  ExternalLink, 
  Code, 
  Terminal,
  BookOpen
} from "lucide-react";
import { profileData } from "../../data/profileData";

export default function BehindTheSystem() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="behind-system" className="py-24 bg-white border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-purple-700 bg-purple-100/80 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Behind The System // Developer Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Computer Science & Engineering Foundation
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            A developer profile grounded in rigorous computer science education at University of the Punjab, international Credly certifications, and industry engineering at Devsinn Technologies.
          </p>
        </div>

        {/* Story Block - Human narrative without buzzwords */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-purple-50/50 border border-purple-100">
          <div className="flex items-center space-x-2 text-purple-700 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <Terminal className="w-4 h-4" />
            <span>Core Philosophy & Background</span>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {profileData.summary}
          </p>
        </div>

        {/* Tab Controls: Education, Internship, Certifications */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-purple-100 pb-4">
          <button
            onClick={() => setActiveTab("education")}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center space-x-2 ${
              activeTab === "education"
                ? "bg-purple-700 text-white shadow-xs shadow-purple-700/30"
                : "bg-purple-50 hover:bg-purple-100 text-purple-900"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education & Academics</span>
          </button>

          <button
            onClick={() => setActiveTab("internship")}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center space-x-2 ${
              activeTab === "internship"
                ? "bg-purple-700 text-white shadow-xs shadow-purple-700/30"
                : "bg-purple-50 hover:bg-purple-100 text-purple-900"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Industry Internship (Devsinn)</span>
          </button>

          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center space-x-2 ${
              activeTab === "certifications"
                ? "bg-purple-700 text-white shadow-xs shadow-purple-700/30"
                : "bg-purple-50 hover:bg-purple-100 text-purple-900"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Credly Certifications</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Main Info Timeline / Cards (8 cols) */}
          <div className="md:col-span-8 space-y-6">
            
            {activeTab === "education" && (
              <div className="space-y-4">
                {profileData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-purple-200/90 shadow-sm hover:border-purple-300 transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 font-medium">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-purple-800 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                      {edu.highlights}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "internship" && (
              <div className="p-8 rounded-2xl bg-white border border-purple-200/90 shadow-sm space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-purple-100">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {profileData.internship.role}
                    </h3>
                    <p className="text-base font-semibold text-purple-700">
                      {profileData.internship.company} — {profileData.internship.location}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-semibold">
                    Completed & Verified
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed pt-2">
                  {profileData.internship.description}
                </p>

                <div className="mt-4 p-4 rounded-xl bg-purple-50/60 border border-purple-200 text-xs font-mono text-purple-900">
                  <span className="font-bold">Key Focus:</span> Production front-end component implementation, cross-device responsiveness, and team code reviews.
                </div>
              </div>
            )}

            {activeTab === "certifications" && (
              <div className="space-y-4">
                {profileData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-purple-200/90 shadow-sm space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-purple-600" />
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {cert.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {cert.verification}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-purple-700 font-medium">
                      Issuer: {cert.issuer} • Validated {cert.year}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Quick Verified Summary Pillbox (4 cols) */}
          <div className="md:col-span-4 bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-purple-900 shadow-xl space-y-6">
            <div className="flex items-center space-x-2 text-purple-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified System Digest</span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="pb-3 border-b border-purple-950">
                <span className="text-purple-400 block text-[10px] uppercase">University</span>
                <span className="font-bold text-white text-sm">Univ. of the Punjab</span>
                <span className="text-slate-400 block mt-0.5">BS Computer Science (7th Sem)</span>
              </div>

              <div className="pb-3 border-b border-purple-950">
                <span className="text-purple-400 block text-[10px] uppercase">Accreditation</span>
                <span className="font-bold text-emerald-400 text-sm">Credly Verified</span>
                <span className="text-slate-400 block mt-0.5">Pearson VUE & NAVTTC Corvit</span>
              </div>

              <div className="pb-3 border-b border-purple-950">
                <span className="text-purple-400 block text-[10px] uppercase">Industry Experience</span>
                <span className="font-bold text-white text-sm">Devsinn Technologies</span>
                <span className="text-slate-400 block mt-0.5">Web Developer Intern</span>
              </div>

              <div>
                <span className="text-purple-400 block text-[10px] uppercase">GitHub Profile</span>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-purple-300 hover:text-white underline flex items-center gap-1 mt-0.5"
                >
                  <span>github.com/nabeelmughal799</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
