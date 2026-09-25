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
    <section id="tech-stack" className="py-24 bg-[#051F20] border-b border-[#163832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-[#8ED69D] bg-[#163832] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#235347]">
            <Code2 className="w-3.5 h-3.5 text-[#8ED69D]" />
            <span>Interactive Technology Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#DAF1DE] tracking-tight">
            Click Any Technology to Reveal Verified Evidence
          </h2>
          <p className="mt-3 text-base text-[#DAF1DE]/80">
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
            className="lg:col-span-6 bg-[#0B2B26] p-6 sm:p-8 rounded-2xl border border-[#163832] shadow-sm"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#163832] text-xs font-mono text-[#DAF1DE]/70">
              <span>SELECT TECHNOLOGY</span>
              <span className="text-[#8ED69D] font-semibold">{skillsData.length} VERIFIED TOOLS</span>
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
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center space-x-1.5 border cursor-pointer ${
                      isSelected
                        ? "bg-[#8ED69D] text-[#051F20] font-bold border-[#8ED69D] shadow-md shadow-[#8ED69D]/25 scale-[1.03]"
                        : "bg-[#051F20] hover:bg-[#163832] text-[#DAF1DE] border-[#163832] hover:border-[#235347]"
                    }`}
                  >
                    <span>{skill.name}</span>
                    {hasProjects && (
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSelected ? "bg-[#051F20] text-[#8ED69D]" : "bg-[#163832] text-[#8ED69D]"
                      }`}>
                        {skill.projectIds.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-[#163832] text-xs text-[#DAF1DE]/60 font-mono flex items-center justify-between">
              <span>• Numbers indicate confirmed deployed projects</span>
              <span className="text-[#8ED69D] font-semibold">Zero fabricated skills</span>
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
                className="bg-[#0B2B26] rounded-2xl border-2 border-[#235347] p-6 sm:p-8 shadow-xl shadow-[#051F20]/50 relative"
              >
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#163832]">
                  <div>
                    <span className="text-xs font-mono text-[#8ED69D] font-semibold uppercase tracking-wider">
                      {currentSkill.category} // {currentSkill.level}
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#DAF1DE] mt-1">
                      {currentSkill.name}
                    </h3>
                  </div>

                  <a
                    href={currentSkill.docsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#163832] hover:bg-[#235347] text-[#8ED69D] border border-[#235347] text-xs font-mono transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Official Docs</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-[#DAF1DE]/80 my-4 leading-relaxed">
                  {currentSkill.description}
                </p>

                {/* Linked Projects Connection */}
                <div className="mt-6 pt-4 border-t border-[#163832]">
                  <span className="text-xs font-mono text-[#DAF1DE]/70 uppercase tracking-wider block mb-3 font-semibold">
                    Used in {linkedProjects.length > 0 ? `${linkedProjects.length} Verified Projects:` : "Foundational Academics / Coursework:"}
                  </span>

                  {linkedProjects.length > 0 ? (
                    <div className="space-y-3">
                      {linkedProjects.map((project) => (
                        <div
                          key={project.id}
                          className="p-3.5 rounded-xl bg-[#051F20] border border-[#163832] flex items-center justify-between hover:bg-[#163832]/60 transition-colors"
                        >
                          <div className="min-w-0 pr-3">
                            <h4 className="text-sm font-bold text-[#DAF1DE] truncate">
                              {project.title}
                            </h4>
                            <p className="text-xs text-[#DAF1DE]/60 truncate">
                              {project.tagline}
                            </p>
                          </div>

                          <div className="flex items-center space-x-2 flex-shrink-0">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-2.5 py-1 rounded bg-[#8ED69D] text-[#051F20] text-xs font-mono font-bold hover:bg-[#7bc78b] transition-colors flex items-center space-x-1"
                            >
                              <span>Live</span>
                              <ArrowRight className="w-3 h-3 text-[#051F20]" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-[#051F20] border border-[#163832] text-xs text-[#DAF1DE]/70 font-mono">
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
