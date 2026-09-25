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
    <section id="dashboard" className="py-12 bg-white border-y border-[#E8D5C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Strip Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8D5C4] gap-3"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#F7F0D4] flex items-center justify-center text-[#8E6D16]">
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-2">
                Live System Telemetry
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#F4ECE1] text-[#8E6D16] font-normal border border-[#E8D5C4]">
                  REAL DATA ONLY
                </span>
              </h2>
              <p className="text-xs text-[#6E6963] font-mono">
                System state, verified credentials, and deployment health
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-[#6E6963]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
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
            const isEmerald = item.statusColor === "emerald";

            return (
              <motion.a
                key={item.id}
                variants={cardVariants}
                href={item.href}
                className="group relative bg-[#FAF6F0] hover:bg-white p-5 rounded-xl border border-[#E8D5C4] hover:border-[#C9A227] transition-all duration-200 shadow-xs hover:shadow-md hover:shadow-[#1A1A1A]/5 flex flex-col justify-between"
              >
                <div>
                  {/* Status header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-lg bg-white border border-[#E8D5C4] text-[#8E6D16] group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span 
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${
                        isEmerald 
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                          : "bg-[#F7F0D4] text-[#8E6D16] border-[#EEDD9F]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-[#6E6963] uppercase tracking-wide">
                    {item.title}
                  </p>
                  <p className="text-2xl font-extrabold text-[#1A1A1A] mt-1 tracking-tight group-hover:text-[#8E6D16] transition-colors">
                    {item.metric}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8D5C4]/60 flex items-center justify-between text-xs text-[#5C5855]">
                  <span className="truncate pr-2">{item.detail}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C9A227] group-hover:text-[#8E6D16] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
