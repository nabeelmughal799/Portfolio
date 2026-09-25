import React, { useState } from "react";
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
    <section id="contact-terminal" className="py-24 bg-[#FAFAFC] border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-purple-700 bg-purple-100/80 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Contact Terminal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Start a Project // Initialize Inquiry
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Send an inquiry directly into my developer inbox. I review project scopes, team engineering openings, and full-stack contracts promptly.
          </p>
        </div>

        {/* Terminal Window Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & Direct Contact (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-purple-200 shadow-xl shadow-purple-950/5">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your project inquiry has been queued. You can also email me directly at{" "}
                  <a href={`mailto:${profileData.email}`} className="text-purple-700 font-semibold underline">
                    {profileData.email}
                  </a>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", projectType: "Full Stack Web Application", message: "" });
                  }}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs font-mono font-semibold transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-purple-50/20 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-purple-50/20 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1.5">
                    Project Type / Engagement Scope
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  >
                    <option value="Full Stack Web Application">Full Stack Web Application (MERN / React)</option>
                    <option value="Frontend Engineering / UI">Frontend Engineering / Responsive UI</option>
                    <option value="B2B E-Commerce / Catalog">B2B E-Commerce & Product Catalog</option>
                    <option value="Full-Time Engineering Role">Full-Time Entry-Level Engineering Role</option>
                    <option value="Other Technical Collaboration">Other Technical Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 uppercase mb-1.5">
                    Project Requirements / Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your objectives, timeline, or engineering role..."
                    className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-purple-50/20 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm shadow-md shadow-purple-700/25 transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Project Inquiry</span>
                  </button>

                  <span className="text-xs font-mono text-slate-500">
                    Instant dispatch to Nabeel
                  </span>
                </div>
              </form>
            )}

            {/* Quick Contact Bar */}
            <div className="mt-8 pt-6 border-t border-purple-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-slate-500">DIRECT INBOX:</span>
                <span className="text-xs font-mono font-bold text-slate-900">{profileData.email}</span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 text-xs font-mono flex items-center space-x-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied to Clipboard" : "Copy Email"}</span>
                </button>

                <a
                  href={`mailto:${profileData.email}`}
                  className="px-3 py-1.5 rounded-lg bg-purple-700 text-white text-xs font-mono flex items-center space-x-1 hover:bg-purple-800 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Mailto</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Live Terminal CLI Monitor (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 border border-purple-950 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Top Bar */}
            <div className="px-4 py-3 bg-slate-900 border-b border-purple-900/60 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-purple-300">
                bash -- nabeel.dev/cli
              </span>
              <div className="w-3 h-3" />
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs text-purple-200/90 space-y-2.5 min-h-[300px]">
              <div className="text-slate-400">
                # Developer Operating System CLI v2.4
              </div>
              <div className="text-slate-400">
                # Location: Lahore, PK (UTC+5)
              </div>
              <div className="text-emerald-400">
                $ sys.status --check
              </div>
              <div className="text-purple-300 pl-2">
                ✓ Node.js & React Core: ONLINE<br />
                ✓ Vercel Edge Serverless: HEALTHY<br />
                ✓ Inbound Inquiry Port: 443 OPEN
              </div>

              <div className="pt-2 text-slate-400">
                # Active Session Logs:
              </div>
              {logs.map((log, index) => (
                <div key={index} className="text-purple-300 text-[11px] leading-relaxed">
                  {log}
                </div>
              ))}

              <div className="pt-4 flex items-center space-x-2 text-purple-400">
                <span className="text-emerald-400">$</span>
                <span className="w-2 h-4 bg-purple-400 animate-pulse inline-block"></span>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="p-3 bg-slate-900/90 border-t border-purple-900/60 text-[11px] font-mono text-purple-400 flex items-center justify-between">
              <span>TEL: {profileData.phone}</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
