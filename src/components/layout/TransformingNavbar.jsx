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
    handleScroll();
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
    <header className="fixed top-0 left-0 right-0 z-40 flex flex-col items-center pointer-events-none transition-[max-width,padding,margin] duration-300" style={{ willChange: "transform", transform: "translateZ(0)" }}>
      {/* 
        Transforming Navbar Container:
        - Initial State (at top): full-width normal rectangular navbar with solid/semi-trans background & bottom border.
        - Scrolled State: floating trapezoid / cut-corner navbar with slanted diagonal edges on left and right,
          semi-transparent background, subtle backdrop blur, and smooth transition.
      */}
      <div 
        style={{
          clipPath: isScrolled
            ? "polygon(0% 0%, 100% 0%, calc(100% - 24px) 100%, 24px 100%)"
            : "polygon(0% 0%, 100% 0%, calc(100% - 0px) 100%, 0px 100%)",
          WebkitClipPath: isScrolled
            ? "polygon(0% 0%, 100% 0%, calc(100% - 24px) 100%, 24px 100%)"
            : "polygon(0% 0%, 100% 0%, calc(100% - 0px) 100%, 0px 100%)",
        }}
        className={`pointer-events-auto w-full transition-[max-width,margin,padding,background-color,border] duration-300 ease-out ${
          isScrolled 
            ? "max-w-6xl mt-2 sm:mt-2.5 px-6 sm:px-10 py-2.5 bg-[#132E35]/90 border border-[#2D4A53]" 
            : "max-w-full px-4 sm:px-8 py-4 bg-[#0D1F23]/95 border-b border-[#2D4A53]/80"
        }`}
        style={{ backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand System Tag */}
          <a 
            href="#system-entry"
            onClick={(e) => handleNavClick(e, "#system-entry")}
            className="flex items-center space-x-2.5 group"
          >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#132E35] via-[#2D4A53] to-[#73C38A] flex items-center justify-center text-[#0D1F23] font-mono text-sm font-bold group-hover:scale-105 transition-transform">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold tracking-tight text-[#AFB3B7] flex items-center">
              nabeel<span className="text-[#73C38A]">.dev</span>
            </span>
            <span className="hidden sm:inline-flex items-center text-[10px] text-[#73C38A] font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#73C38A] mr-1 animate-pulse"></span>
              SYS:READY
            </span>
          </div>
        </a>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#132E35]/80 p-1 rounded-full border border-[#2D4A53]/60">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 text-xs font-semibold text-[#AFB3B7]/80 hover:text-[#73C38A] hover:bg-[#2D4A53] rounded-full transition-colors duration-200"
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
            className="flex items-center space-x-2 px-2.5 sm:px-3 py-1.5 text-xs font-mono font-medium text-[#73C38A] bg-[#2D4A53]/40 hover:bg-[#2D4A53] rounded-lg sm:rounded-full border border-[#2D4A53] transition-colors duration-200"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Commands</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[10px] bg-[#132E35] rounded border border-[#2D4A53] text-[#73C38A]">
              ⌘K
            </kbd>
          </button>

          {/* Quick CTA */}
          <a
            href="#contact-terminal"
            onClick={(e) => handleNavClick(e, "#contact-terminal")}
            className="hidden sm:inline-flex items-center space-x-1 px-3.5 py-1.5 text-xs font-bold text-[#0D1F23] bg-[#73C38A] hover:bg-[#62b379] rounded-full transition-colors duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0D1F23]" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-[#AFB3B7] hover:text-[#73C38A] hover:bg-[#2D4A53] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto w-full max-w-7xl px-4 sm:px-8 mt-2">
          <div className="md:hidden p-4 bg-[#132E35] border border-[#2D4A53] rounded-2xl space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-[#AFB3B7] hover:text-[#73C38A] hover:bg-[#2D4A53] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-[#2D4A53] flex flex-col space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="w-full flex items-center justify-center space-x-2 py-2 text-xs font-mono text-[#73C38A] bg-[#2D4A53] rounded-xl border border-[#2D4A53]"
              >
                <Command className="w-3.5 h-3.5" />
                <span>Open Command Palette (Ctrl+K)</span>
              </button>
              <a
                href="#contact-terminal"
                onClick={(e) => handleNavClick(e, "#contact-terminal")}
                className="w-full text-center py-2 text-xs font-bold text-[#0D1F23] bg-[#73C38A] hover:bg-[#62b379] rounded-xl"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
