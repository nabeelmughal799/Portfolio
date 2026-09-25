import React, { useState, useEffect } from "react";
import { Terminal, Command, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { profileData } from "../../data/profileData";

export default function TransformingNavbar({ onOpenCommandPalette }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Dashboard", href: "#dashboard" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#tech-stack" },
    { label: "Behind The System", href: "#behind-system" },
    { label: "Contact", href: "#contact-terminal" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "py-2.5 px-4 sm:px-8" 
          : "py-4 px-4 sm:px-8 bg-white/70 backdrop-blur-md border-b border-purple-100/60"
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-xl border border-purple-200/90 shadow-lg shadow-purple-950/5 rounded-full px-5 py-2.5" 
            : ""
        }`}
      >
        {/* Brand System Tag */}
        <a 
          href="#system-entry"
          onClick={(e) => handleNavClick(e, "#system-entry")}
          className="flex items-center space-x-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-700 to-purple-500 flex items-center justify-center text-white font-mono text-sm font-bold shadow-md shadow-purple-600/20 group-hover:scale-105 transition-transform">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold tracking-tight text-slate-900 flex items-center">
              nabeel<span className="text-purple-600">.dev</span>
            </span>
            <span className="hidden sm:inline-flex items-center text-[10px] text-purple-700 font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse"></span>
              SYS:READY
            </span>
          </div>
        </a>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-purple-50/60 p-1 rounded-full border border-purple-100/70">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-purple-700 hover:bg-white rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Terminal / Command Trigger */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            aria-label="Open Command Palette (Ctrl+K)"
            className="flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 text-xs font-mono font-medium text-purple-700 bg-purple-100/70 hover:bg-purple-200/80 rounded-lg sm:rounded-full border border-purple-200 transition-colors"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Commands</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[10px] bg-white rounded border border-purple-200 text-purple-700">
              ⌘K
            </kbd>
          </button>

          {/* Quick CTA */}
          <a
            href="#contact-terminal"
            onClick={(e) => handleNavClick(e, "#contact-terminal")}
            className="hidden sm:inline-flex items-center space-x-1 px-3.5 py-1.5 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-full shadow-sm shadow-purple-600/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-slate-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-white/95 backdrop-blur-xl border border-purple-200 rounded-2xl shadow-xl space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-purple-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2 text-xs font-mono text-purple-700 bg-purple-50 rounded-xl border border-purple-200"
            >
              <Command className="w-3.5 h-3.5" />
              <span>Open Command Palette (Ctrl+K)</span>
            </button>
            <a
              href="#contact-terminal"
              onClick={(e) => handleNavClick(e, "#contact-terminal")}
              className="w-full text-center py-2 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-xl"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
