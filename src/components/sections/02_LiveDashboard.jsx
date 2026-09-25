import React from "react";
import { Activity, Radio, ExternalLink, ShieldCheck, GraduationCap, Briefcase, Layers } from "lucide-react";
import { systemData } from "../../data/systemData";

export default function LiveDashboard() {
  const telemetryModules = [
    {
      id: "projects",
      title: "Active Production Deployments",
      metric: "4 Systems",
      detail: "Live on Vercel Edge with real user access",
      icon: Layers,
      status: "100% OPERATIONAL",
      statusColor: "emerald",
      href: "#projects"
    },
    {
      id: "academics",
      title: "Computer Science Rigor",
      metric: "7th Semester",
      detail: "University of the Punjab, Lahore (C++, OOP, DSA)",
      icon: GraduationCap,
      status: "IN PROGRESS",
      statusColor: "purple",
      href: "#behind-system"
    },
    {
      id: "certifications",
      title: "Global Credential Verification",
      metric: "2 Credentials",
      detail: "Credly Verified: Pearson VUE JS & NAVTTC Full Stack",
      icon: ShieldCheck,
      status: "AUTHENTICATED",
      statusColor: "emerald",
      href: "#behind-system"
    },
    {
      id: "internship",
      title: "Industry Development Experience",
      metric: "Devsinn Tech",
      detail: "Web Developer Intern: Component design & testing",
      icon: Briefcase,
      status: "VERIFIED",
      statusColor: "purple",
      href: "#behind-system"
    }
  ];

  return (
    <section id="dashboard" className="py-12 bg-white border-y border-purple-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Strip Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-purple-100 gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700">
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                Live System Telemetry
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-normal">
                  REAL DATA ONLY
                </span>
              </h2>
              <p className="text-xs text-slate-500 font-mono">
                System state, academic milestones, and deployment health
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>DATA INTEGRITY: 100% VERIFIED</span>
          </div>
        </div>

        {/* Dashboard Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {telemetryModules.map((item) => {
            const Icon = item.icon;
            const isEmerald = item.statusColor === "emerald";

            return (
              <a
                key={item.id}
                href={item.href}
                className="group relative bg-[#FAFAFC] hover:bg-white p-5 rounded-xl border border-purple-100 hover:border-purple-300 transition-all duration-200 shadow-xs hover:shadow-md hover:shadow-purple-950/5 flex flex-col justify-between"
              >
                <div>
                  {/* Status header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-lg bg-white border border-purple-100 text-purple-700 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span 
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${
                        isEmerald 
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                          : "bg-purple-50 text-purple-700 border-purple-200"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wide">
                    {item.title}
                  </p>
                  <p className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight group-hover:text-purple-700 transition-colors">
                    {item.metric}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-purple-50 flex items-center justify-between text-xs text-slate-600">
                  <span className="truncate pr-2">{item.detail}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400 group-hover:text-purple-700 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
