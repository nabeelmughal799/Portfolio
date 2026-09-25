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
          : "py-4 px-4 sm:px-8 bg-[#FAF6F0]/80 backdrop-blur-md border-b border-[#E8D5C4]/80"
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? "bg-[#FAF6F0]/90 backdrop-blur-xl border border-[#C9A227]/35 shadow-lg shadow-[#1A1A1A]/5 rounded-full px-5 py-2.5" 
            : ""
        }`}
      >
        {/* Brand System Tag */}
        <a 
          href="#system-entry"
          onClick={(e) => handleNavClick(e, "#system-entry")}
          className="flex items-center space-x-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8E6D16] via-[#B08B1E] to-[#C9A227] flex items-center justify-center text-white font-mono text-sm font-bold shadow-md shadow-[#C9A227]/25 group-hover:scale-105 transition-transform">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold tracking-tight text-[#1A1A1A] flex items-center">
              nabeel<span className="text-[#C9A227]">.dev</span>
            </span>
            <span className="hidden sm:inline-flex items-center text-[10px] text-[#8E6D16] font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse"></span>
              SYS:READY
            </span>
          </div>
        </a>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#F4ECE1]/80 p-1 rounded-full border border-[#E8D5C4]/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 text-xs font-semibold text-[#1A1A1A]/80 hover:text-[#8E6D16] hover:bg-white rounded-full transition-all"
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
            className="flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 text-xs font-mono font-medium text-[#8E6D16] bg-[#F7F0D4]/80 hover:bg-[#EEDD9F] rounded-lg sm:rounded-full border border-[#E8D5C4] transition-colors"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Commands</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[10px] bg-white rounded border border-[#E8D5C4] text-[#8E6D16]">
              ⌘K
            </kbd>
          </button>

          {/* Quick CTA */}
          <a
            href="#contact-terminal"
            onClick={(e) => handleNavClick(e, "#contact-terminal")}
            className="hidden sm:inline-flex items-center space-x-1 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#C9A227] hover:bg-[#B08B1E] rounded-full shadow-sm shadow-[#C9A227]/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-[#1A1A1A] hover:text-[#8E6D16] hover:bg-[#F4ECE1] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-[#FAF6F0]/95 backdrop-blur-xl border border-[#E8D5C4] rounded-2xl shadow-xl space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-[#1A1A1A] hover:text-[#8E6D16] hover:bg-[#F4ECE1] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#E8D5C4] flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2 text-xs font-mono text-[#8E6D16] bg-[#F4ECE1] rounded-xl border border-[#E8D5C4]"
            >
              <Command className="w-3.5 h-3.5" />
              <span>Open Command Palette (Ctrl+K)</span>
            </button>
            <a
              href="#contact-terminal"
              onClick={(e) => handleNavClick(e, "#contact-terminal")}
              className="w-full text-center py-2 text-xs font-semibold text-white bg-[#C9A227] hover:bg-[#B08B1E] rounded-xl"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
