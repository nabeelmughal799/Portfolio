import React from "react";
import { motion } from "framer-motion";
import { Activity, ExternalLink, ShieldCheck, Briefcase, Layers } from "lucide-react";
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
      statusColor: "gold",
      href: "#behind-system"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="dashboard" className="py-12 bg-[#0B2B26] border-y border-[#163832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Strip Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#163832] gap-3"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#163832] flex items-center justify-center text-[#8ED69D]">
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#DAF1DE] flex items-center gap-2">
                Live System Telemetry
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#163832] text-[#8ED69D] font-normal border border-[#235347]">
                  REAL DATA ONLY
                </span>
              </h2>
              <p className="text-xs text-[#DAF1DE]/70 font-mono">
                System state, verified credentials, and deployment health
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-[#DAF1DE]/70">
            <span className="w-2 h-2 rounded-full bg-[#8ED69D] animate-ping"></span>
            <span>DATA INTEGRITY: 100% VERIFIED</span>
          </div>
        </motion.div>

        {/* Dashboard Modules Grid (3 cards) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6"
        >
          {telemetryModules.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.id}
                variants={cardVariants}
                href={item.href}
                className="group relative bg-[#051F20]/70 hover:bg-[#051F20] p-5 rounded-xl border border-[#163832] hover:border-[#8ED69D]/60 transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-[#051F20]/60 flex flex-col justify-between"
              >
                <div>
                  {/* Status header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-lg bg-[#163832] border border-[#235347] text-[#8ED69D] group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span 
                      className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border bg-[#163832] text-[#8ED69D] border-[#235347]"
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-[#DAF1DE]/70 uppercase tracking-wide">
                    {item.title}
                  </p>
                  <p className="text-2xl font-extrabold text-[#DAF1DE] mt-1 tracking-tight group-hover:text-[#8ED69D] transition-colors">
                    {item.metric}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#163832] flex items-center justify-between text-xs text-[#DAF1DE]/70">
                  <span className="truncate pr-2">{item.detail}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8ED69D] group-hover:text-[#DAF1DE] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
