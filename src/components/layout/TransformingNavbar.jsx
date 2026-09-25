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
          : "py-4 px-4 sm:px-8 bg-[#051F20]/80 backdrop-blur-md border-b border-[#163832]/80"
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? "bg-[#0B2B26]/90 backdrop-blur-xl border border-[#235347] shadow-lg shadow-[#051F20]/50 rounded-full px-5 py-2.5" 
            : ""
        }`}
      >
        {/* Brand System Tag */}
        <a 
          href="#system-entry"
          onClick={(e) => handleNavClick(e, "#system-entry")}
          className="flex items-center space-x-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#163832] via-[#235347] to-[#8ED69D] flex items-center justify-center text-[#051F20] font-mono text-sm font-bold shadow-md shadow-[#8ED69D]/20 group-hover:scale-105 transition-transform">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold tracking-tight text-[#DAF1DE] flex items-center">
              nabeel<span className="text-[#8ED69D]">.dev</span>
            </span>
            <span className="hidden sm:inline-flex items-center text-[10px] text-[#8ED69D] font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8ED69D] mr-1 animate-pulse"></span>
              SYS:READY
            </span>
          </div>
        </a>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#0B2B26]/80 p-1 rounded-full border border-[#235347]/60">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 text-xs font-semibold text-[#DAF1DE]/80 hover:text-[#8ED69D] hover:bg-[#163832] rounded-full transition-all"
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
            className="flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 text-xs font-mono font-medium text-[#8ED69D] bg-[#163832]/60 hover:bg-[#163832] rounded-lg sm:rounded-full border border-[#235347] transition-colors"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Commands</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[10px] bg-[#0B2B26] rounded border border-[#235347] text-[#8ED69D]">
              ⌘K
            </kbd>
          </button>

          {/* Quick CTA */}
          <a
            href="#contact-terminal"
            onClick={(e) => handleNavClick(e, "#contact-terminal")}
            className="hidden sm:inline-flex items-center space-x-1 px-3.5 py-1.5 text-xs font-bold text-[#051F20] bg-[#8ED69D] hover:bg-[#7bc78b] rounded-full shadow-sm shadow-[#8ED69D]/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#051F20]" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-[#DAF1DE] hover:text-[#8ED69D] hover:bg-[#163832] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-[#0B2B26]/95 backdrop-blur-xl border border-[#235347] rounded-2xl shadow-xl space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-[#DAF1DE] hover:text-[#8ED69D] hover:bg-[#163832] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#235347] flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2 text-xs font-mono text-[#8ED69D] bg-[#163832] rounded-xl border border-[#235347]"
            >
              <Command className="w-3.5 h-3.5" />
              <span>Open Command Palette (Ctrl+K)</span>
            </button>
            <a
              href="#contact-terminal"
              onClick={(e) => handleNavClick(e, "#contact-terminal")}
              className="w-full text-center py-2 text-xs font-bold text-[#051F20] bg-[#8ED69D] hover:bg-[#7bc78b] rounded-xl"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
