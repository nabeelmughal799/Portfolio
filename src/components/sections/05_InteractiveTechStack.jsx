import React, { useState } from "react";
import { Code2, ExternalLink, ArrowRight, Check, Sparkles, BookOpen } from "lucide-react";
import { skillsData } from "../../data/skillsData";
import { projectsData } from "../../data/projectsData";

export default function InteractiveTechStack({ onHighlightProject }) {
  const [selectedSkillName, setSelectedSkillName] = useState("React");

  const currentSkill = skillsData.find(s => s.name === selectedSkillName) || skillsData[0];
  const linkedProjects = projectsData.filter(p => currentSkill.projectIds.includes(p.id));

  return (
    <section id="tech-stack" className="py-24 bg-[#FAFAFC] border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-purple-700 bg-purple-100/80 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Interactive Technology Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Click Any Technology to Reveal Verified Evidence
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Skills are not arbitrary self-graded percentage bars. In this operating system, selecting any tool displays the exact production deployments where it was engineered.
          </p>
        </div>

        {/* Two Column Layout: Tech Matrix + Project Linkage Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Skill Chips (6 cols) */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-purple-200/90 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-100 text-xs font-mono text-slate-500">
              <span>SELECT TECHNOLOGY</span>
              <span className="text-purple-700 font-semibold">{skillsData.length} VERIFIED TOOLS</span>
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
                        ? "bg-purple-700 text-white border-purple-700 shadow-md shadow-purple-700/20 scale-[1.03]"
                        : "bg-slate-50 hover:bg-purple-50 text-slate-800 border-purple-100 hover:border-purple-300"
                    }`}
                  >
                    <span>{skill.name}</span>
                    {hasProjects && (
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSelected ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-700"
                      }`}>
                        {skill.projectIds.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-purple-100 text-xs text-slate-500 font-mono flex items-center justify-between">
              <span>• Numbers indicate confirmed deployed projects</span>
              <span className="text-purple-600 font-semibold">Zero fabricated skills</span>
            </div>
          </div>

          {/* Right Column: Dynamic Project Connection Box (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border-2 border-purple-300/80 p-6 sm:p-8 shadow-xl shadow-purple-950/5 relative">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-purple-100">
                <div>
                  <span className="text-xs font-mono text-purple-600 font-semibold uppercase tracking-wider">
                    {currentSkill.category} // {currentSkill.level}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                    {currentSkill.name}
                  </h3>
                </div>

                <a
                  href={currentSkill.docsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 text-xs font-mono transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Official Docs</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 my-4 leading-relaxed">
                {currentSkill.description}
              </p>

              {/* Linked Projects Connection */}
              <div className="mt-6 pt-4 border-t border-purple-100">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-3 font-semibold">
                  Used in {linkedProjects.length > 0 ? `${linkedProjects.length} Verified Projects:` : "Foundational Academics / Coursework:"}
                </span>

                {linkedProjects.length > 0 ? (
                  <div className="space-y-3">
                    {linkedProjects.map((project) => (
                      <div
                        key={project.id}
                        className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-200 flex items-center justify-between hover:bg-purple-50 transition-colors"
                      >
                        <div className="min-w-0 pr-3">
                          <h4 className="text-sm font-bold text-slate-900 truncate">
                            {project.title}
                          </h4>
                          <p className="text-xs text-slate-500 truncate">
                            {project.tagline}
                          </p>
                        </div>

                        <div className="flex items-center space-x-2 flex-shrink-0">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-2.5 py-1 rounded bg-purple-700 text-white text-xs font-mono font-medium hover:bg-purple-800 transition-colors flex items-center space-x-1"
                          >
                            <span>Live</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-mono">
                    Deep academic & theoretical grounding developed through University of the Punjab Computer Science coursework and data structure laboratories.
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
