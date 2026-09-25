import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  Award, 
  ExternalLink, 
  Terminal
} from "lucide-react";
import { profileData } from "../../data/profileData";

export default function BehindTheSystem() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="behind-system" className="py-24 bg-white border-b border-[#E8D5C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-[#8E6D16] bg-[#F7F0D4] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#EEDD9F]">
            <User className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Behind The System // Developer Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            The Computer Science & Engineering Foundation
          </h2>
          <p className="mt-3 text-base text-[#5C5855] leading-relaxed">
            A developer profile grounded in rigorous computer science education at University of the Punjab, international Credly certifications, and industry engineering at Devsinn Technologies.
          </p>
        </motion.div>

        {/* Story Block - Human narrative without buzzwords */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#FAF6F0] border border-[#E8D5C4]"
        >
          <div className="flex items-center space-x-2 text-[#8E6D16] font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <Terminal className="w-4 h-4 text-[#C9A227]" />
            <span>Core Philosophy & Background</span>
          </div>
          <p className="text-[#1A1A1A] text-sm sm:text-base leading-relaxed">
            {profileData.summary}
          </p>
        </motion.div>

        {/* Tab Controls: Education, Internship, Certifications */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#E8D5C4] pb-4">
          <button
            onClick={() => setActiveTab("education")}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center space-x-2 ${
              activeTab === "education"
                ? "bg-[#C9A227] text-white shadow-xs shadow-[#C9A227]/30"
                : "bg-[#F4ECE1] hover:bg-[#EEDD9F] text-[#8E6D16]"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education & Academics</span>
          </button>

          <button
            onClick={() => setActiveTab("internship")}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center space-x-2 ${
              activeTab === "internship"
                ? "bg-[#C9A227] text-white shadow-xs shadow-[#C9A227]/30"
                : "bg-[#F4ECE1] hover:bg-[#EEDD9F] text-[#8E6D16]"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Industry Internship (Devsinn)</span>
          </button>

          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center space-x-2 ${
              activeTab === "certifications"
                ? "bg-[#C9A227] text-white shadow-xs shadow-[#C9A227]/30"
                : "bg-[#F4ECE1] hover:bg-[#EEDD9F] text-[#8E6D16]"
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
            <AnimatePresence mode="wait">
              {activeTab === "education" && (
                <motion.div 
                  key="education"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {profileData.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8D5C4] shadow-xs hover:border-[#C9A227] transition-all"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-lg font-bold text-[#1A1A1A]">
                          {edu.degree}
                        </h3>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#F7F0D4] text-[#8E6D16] border border-[#EEDD9F] font-medium">
                          {edu.period}
                        </span>
                      </div>

                      <p className="text-sm font-semibold text-[#8E6D16] mt-1">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-[#5C5855] mt-3 leading-relaxed">
                        {edu.highlights}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "internship" && (
                <motion.div 
                  key="internship"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="p-8 rounded-2xl bg-[#FAF6F0] border border-[#E8D5C4] shadow-xs space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E8D5C4]">
                    <div>
                      <h3 className="text-xl font-bold text-[#1A1A1A]">
                        {profileData.internship.role}
                      </h3>
                      <p className="text-base font-semibold text-[#8E6D16]">
                        {profileData.internship.company} — {profileData.internship.location}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-semibold">
                      Completed & Verified
                    </span>
                  </div>

                  <p className="text-sm text-[#5C5855] leading-relaxed pt-2">
                    {profileData.internship.description}
                  </p>

                  <div className="mt-4 p-4 rounded-xl bg-white border border-[#E8D5C4] text-xs font-mono text-[#1A1A1A]">
                    <span className="font-bold text-[#8E6D16]">Key Focus:</span> Production front-end component implementation, cross-device responsiveness, and team code reviews.
                  </div>
                </motion.div>
              )}

              {activeTab === "certifications" && (
                <motion.div 
                  key="certifications"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {profileData.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E8D5C4] shadow-xs space-y-3 hover:border-[#C9A227] transition-all"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center space-x-2">
                          <Award className="w-5 h-5 text-[#C9A227]" />
                          <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A]">
                            {cert.title}
                          </h3>
                        </div>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          {cert.verification}
                        </span>
                      </div>

                      <p className="text-xs font-mono text-[#8E6D16] font-medium">
                        Issuer: {cert.issuer} • Validated {cert.year}
                      </p>
                      <p className="text-xs text-[#5C5855] leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Verified Summary Pillbox (4 cols - Dark Contrast Element) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 bg-[#1A1A1A] text-white p-6 sm:p-7 rounded-2xl border border-[#332B18] shadow-xl shadow-[#1A1A1A]/20 space-y-6"
          >
            <div className="flex items-center space-x-2 text-[#C9A227] font-mono text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified System Digest</span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="pb-3 border-b border-[#332B18]">
                <span className="text-[#C9A227] block text-[10px] uppercase">University</span>
                <span className="font-bold text-white text-sm">Univ. of the Punjab</span>
                <span className="text-[#E8D5C4]/70 block mt-0.5">BS Computer Science (7th Sem)</span>
              </div>

              <div className="pb-3 border-b border-[#332B18]">
                <span className="text-[#C9A227] block text-[10px] uppercase">Accreditation</span>
                <span className="font-bold text-emerald-400 text-sm">Credly Verified</span>
                <span className="text-[#E8D5C4]/70 block mt-0.5">Pearson VUE & NAVTTC Corvit</span>
              </div>

              <div className="pb-3 border-b border-[#332B18]">
                <span className="text-[#C9A227] block text-[10px] uppercase">Industry Experience</span>
                <span className="font-bold text-white text-sm">Devsinn Technologies</span>
                <span className="text-[#E8D5C4]/70 block mt-0.5">Web Developer Intern</span>
              </div>

              <div>
                <span className="text-[#C9A227] block text-[10px] uppercase">GitHub Profile</span>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[#C9A227] hover:text-white underline flex items-center gap-1 mt-0.5"
                >
                  <span>github.com/nabeelmughal799</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
