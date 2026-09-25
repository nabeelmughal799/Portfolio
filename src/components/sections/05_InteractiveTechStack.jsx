import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ExternalLink, ArrowRight, Check, Sparkles, BookOpen } from "lucide-react";
import { skillsData } from "../../data/skillsData";
import { projectsData } from "../../data/projectsData";

export default function InteractiveTechStack({ onHighlightProject }) {
  const [selectedSkillName, setSelectedSkillName] = useState("React");

  const currentSkill = skillsData.find(s => s.name === selectedSkillName) || skillsData[0];
  const linkedProjects = projectsData.filter(p => currentSkill.projectIds.includes(p.id));

  return (
    <section id="tech-stack" className="py-24 bg-[#FAF6F0] border-b border-[#E8D5C4]">
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
            <Code2 className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Interactive Technology Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Click Any Technology to Reveal Verified Evidence
          </h2>
          <p className="mt-3 text-base text-[#5C5855]">
            Skills are not arbitrary self-graded percentage bars. In this operating system, selecting any tool displays the exact production deployments where it was engineered.
          </p>
        </motion.div>

        {/* Two Column Layout: Tech Matrix + Project Linkage Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Skill Chips (6 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E8D5C4] shadow-sm"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8D5C4] text-xs font-mono text-[#6E6963]">
              <span>SELECT TECHNOLOGY</span>
              <span className="text-[#8E6D16] font-semibold">{skillsData.length} VERIFIED TOOLS</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skillsData.map((skill) => {
                const isSelected = selectedSkillName === skill.name;
                const hasProjects = skill.projectIds.length > 0;

                return (
                  <button
                    key={skill.name}
                    onClick={() => {
                      setSelectedSkillName(skill.name);
                      if (onHighlightProject && skill.projectIds.length > 0) {
                        onHighlightProject(skill.projectIds[0]);
                      }
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center space-x-1.5 border ${
                      isSelected
                        ? "bg-[#C9A227] text-white border-[#C9A227] shadow-md shadow-[#C9A227]/25 scale-[1.03]"
                        : "bg-[#FAF6F0] hover:bg-[#F4ECE1] text-[#1A1A1A] border-[#E8D5C4] hover:border-[#C9A227]"
                    }`}
                  >
                    <span>{skill.name}</span>
                    {hasProjects && (
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSelected ? "bg-[#8E6D16] text-white" : "bg-[#F7F0D4] text-[#8E6D16]"
                      }`}>
                        {skill.projectIds.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-[#E8D5C4] text-xs text-[#6E6963] font-mono flex items-center justify-between">
              <span>• Numbers indicate confirmed deployed projects</span>
              <span className="text-[#8E6D16] font-semibold">Zero fabricated skills</span>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Project Connection Box (6 cols) */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSkill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border-2 border-[#C9A227]/50 p-6 sm:p-8 shadow-xl shadow-[#1A1A1A]/5 relative"
              >
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E8D5C4]">
                  <div>
                    <span className="text-xs font-mono text-[#8E6D16] font-semibold uppercase tracking-wider">
                      {currentSkill.category} // {currentSkill.level}
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#1A1A1A] mt-1">
                      {currentSkill.name}
                    </h3>
                  </div>

                  <a
                    href={currentSkill.docsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#F7F0D4] hover:bg-[#EEDD9F] text-[#8E6D16] border border-[#E8D5C4] text-xs font-mono transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Official Docs</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-[#5C5855] my-4 leading-relaxed">
                  {currentSkill.description}
                </p>

                {/* Linked Projects Connection */}
                <div className="mt-6 pt-4 border-t border-[#E8D5C4]">
                  <span className="text-xs font-mono text-[#6E6963] uppercase tracking-wider block mb-3 font-semibold">
                    Used in {linkedProjects.length > 0 ? `${linkedProjects.length} Verified Projects:` : "Foundational Academics / Coursework:"}
                  </span>

                  {linkedProjects.length > 0 ? (
                    <div className="space-y-3">
                      {linkedProjects.map((project) => (
                        <div
                          key={project.id}
                          className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#E8D5C4] flex items-center justify-between hover:bg-[#F4ECE1] transition-colors"
                        >
                          <div className="min-w-0 pr-3">
                            <h4 className="text-sm font-bold text-[#1A1A1A] truncate">
                              {project.title}
                            </h4>
                            <p className="text-xs text-[#6E6963] truncate">
                              {project.tagline}
                            </p>
                          </div>

                          <div className="flex items-center space-x-2 flex-shrink-0">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-2.5 py-1 rounded bg-[#C9A227] text-white text-xs font-mono font-medium hover:bg-[#B08B1E] transition-colors flex items-center space-x-1"
                            >
                              <span>Live</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E8D5C4] text-xs text-[#5C5855] font-mono">
                      Deep academic & theoretical grounding developed through University of the Punjab Computer Science coursework and data structure laboratories.
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
