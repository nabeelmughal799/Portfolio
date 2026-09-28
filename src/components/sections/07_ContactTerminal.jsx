import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, Check, Copy, Mail, Phone, ExternalLink, Sparkles } from "lucide-react";
import { profileData } from "../../data/profileData";

export default function ContactTerminal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full Stack Web Application",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [logs, setLogs] = useState([
    "INITIALIZING SECURE TERMINAL...",
    "SOCKET CONNECTION ESTABLISHED: nabeel.dev/gateway",
    "STATUS: LISTENING FOR PROJECT DISCOVERY INQUIRIES"
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate OS Terminal Log Stream
    setLogs((prev) => [
      ...prev,
      `> PACKET DISPATCHED FROM [${formData.name} <${formData.email}>]`,
      `> SCOPE: ${formData.projectType}`,
      `> STATUS: 200 OK — TRANSMITTED TO ${profileData.email}`
    ]);
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact-terminal" className="py-24 bg-[#0D1F23] border-b border-[#2D4A53]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          {/* <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-[#73C38A] bg-[#132E35] px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-[#2D4A53]">
            <Terminal className="w-3.5 h-3.5 text-[#73C38A]" />
            <span>Interactive Contact Terminal</span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#AFB3B7] tracking-tight">
            Start a Project // Initialize Inquiry
          </h2>
          <p className="mt-3 text-base text-[#69818D]">
            Send an inquiry directly into my developer inbox. I review project scopes, team engineering openings, and full-stack contracts promptly.
          </p>
        </motion.div>

        {/* Terminal Window Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & Direct Contact (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#132E35] p-6 sm:p-8 rounded-2xl border border-[#2D4A53]"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-[#2D4A53] text-[#73C38A] rounded-full flex items-center justify-center mx-auto shadow-xs border border-[#2D4A53]">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#AFB3B7]">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-[#AFB3B7]/70 max-w-md mx-auto">
                  Thank you, <strong className="text-[#AFB3B7]">{formData.name}</strong>. Your project inquiry has been queued. You can also email me directly at{" "}
                  <a href={`mailto:${profileData.email}`} className="text-[#73C38A] font-semibold underline">
                    {profileData.email}
                  </a>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", projectType: "Full Stack Web Application", message: "" });
                  }}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-[#2D4A53] hover:bg-[#5A636A] text-[#73C38A] text-xs font-mono font-semibold transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#AFB3B7] uppercase mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl border border-[#2D4A53] bg-[#0D1F23] text-[#AFB3B7] placeholder-[#69818D] text-sm focus:outline-none focus:ring-2 focus:ring-[#73C38A] focus:border-transparent transition-[border-color,box-shadow] duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#AFB3B7] uppercase mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#2D4A53] bg-[#0D1F23] text-[#AFB3B7] placeholder-[#69818D] text-sm focus:outline-none focus:ring-2 focus:ring-[#73C38A] focus:border-transparent transition-[border-color,box-shadow] duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#AFB3B7] uppercase mb-1.5">
                    Project Type / Engagement Scope
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#2D4A53] bg-[#0D1F23] text-[#AFB3B7] text-sm focus:outline-none focus:ring-2 focus:ring-[#73C38A] focus:border-transparent transition-[border-color,box-shadow] duration-200"
                  >
                    <option value="Full Stack Web Application">Full Stack Web Application (MERN / React)</option>
                    <option value="Frontend Engineering / UI">Frontend Engineering / Responsive UI</option>
                    <option value="B2B E-Commerce / Catalog">B2B E-Commerce & Product Catalog</option>
                    <option value="Full-Time Engineering Role">Full-Time Entry-Level Engineering Role</option>
                    <option value="Other Technical Collaboration">Other Technical Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#AFB3B7] uppercase mb-1.5">
                    Project Requirements / Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your objectives, timeline, or engineering role..."
                    className="w-full px-4 py-3 rounded-xl border border-[#2D4A53] bg-[#0D1F23] text-[#AFB3B7] placeholder-[#69818D] text-sm focus:outline-none focus:ring-2 focus:ring-[#73C38A] focus:border-transparent transition-[border-color,box-shadow] duration-200"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#73C38A] hover:bg-[#62b379] text-[#0D1F23] font-bold text-sm transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#0D1F23]" />
                    <span>Transmit Project Inquiry</span>
                  </button>

                  <span className="text-xs font-mono text-[#69818D]">
                    Instant dispatch to Nabeel
                  </span>
                </div>
              </form>
            )}

            {/* Quick Contact Bar */}
            <div className="mt-8 pt-6 border-t border-[#2D4A53] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-[#69818D]">DIRECT INBOX:</span>
                <span className="text-xs font-mono font-bold text-[#AFB3B7]">{profileData.email}</span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#2D4A53] hover:bg-[#5A636A] text-[#73C38A] border border-[#2D4A53] text-xs font-mono flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#73C38A]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied to Clipboard" : "Copy Email"}</span>
                </button>

                <a
                  href={`mailto:${profileData.email}`}
                  className="px-3 py-1.5 rounded-lg bg-[#73C38A] text-[#0D1F23] text-xs font-mono font-bold flex items-center space-x-1 hover:bg-[#62b379] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Mailto</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Live Terminal CLI Monitor (5 cols - Dark Element) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-[#0D1F23] border border-[#2D4A53] rounded-2xl overflow-hidden"
          >
            {/* Terminal Top Bar */}
            <div className="px-4 py-3 bg-[#132E35] border-b border-[#2D4A53] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#73C38A] inline-block" />
              </div>
              <span className="text-xs font-mono text-[#AFB3B7]/80">
                bash -- nabeel.dev/cli
              </span>
              <div className="w-3 h-3" />
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs text-[#AFB3B7]/80 space-y-2.5 min-h-[300px]">
              <div className="text-[#69818D]">
                # Developer Operating System CLI v2.4
              </div>
              <div className="text-[#69818D]">
                # Location: Lahore, PK (UTC+5)
              </div>
              <div className="text-[#73C38A]">
                $ sys.status --check
              </div>
              <div className="text-[#AFB3B7] pl-2">
                ✓ Node.js & React Core: ONLINE<br />
                ✓ Vercel Edge Serverless: HEALTHY<br />
                ✓ Inbound Inquiry Port: 443 OPEN
              </div>

              <div className="pt-2 text-[#69818D]">
                # Active Session Logs:
              </div>
              {logs.map((log, index) => (
                <div key={index} className="text-[#AFB3B7]/90 text-[11px] leading-relaxed">
                  {log}
                </div>
              ))}

              <div className="pt-4 flex items-center space-x-2 text-[#73C38A]">
                <span className="text-[#73C38A]">$</span>
                <span className="w-2 h-4 bg-[#73C38A] animate-pulse inline-block"></span>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="p-3 bg-[#132E35] border-t border-[#2D4A53] text-[11px] font-mono text-[#AFB3B7]/80 flex items-center justify-between">
              <span>TEL: {profileData.phone}</span>
              <span className="text-[#73C38A] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73C38A] animate-pulse" />
                LIVE
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
