import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Terminal, 
  FolderGit2, 
  Layers, 
  User, 
  Mail, 
  ExternalLink, 
  Sparkles, 
  X,
  Code2
} from "lucide-react";
import { projectsData } from "../../data/projectsData";

export default function CommandPalette({ isOpen, setIsOpen, onSelectSkill }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const navigateTo = (selector) => {
    setIsOpen(false);
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const staticCommands = [
    {
      id: "sec-hero",
      title: "System Entry (Hero)",
      category: "Navigation",
      icon: Terminal,
      action: () => navigateTo("#system-entry")
    },
    {
      id: "sec-dashboard",
      title: "Live Telemetry Dashboard",
      category: "Navigation",
      icon: Sparkles,
      action: () => navigateTo("#dashboard")
    },
    {
      id: "sec-capabilities",
      title: "What I Build (Capabilities)",
      category: "Navigation",
      icon: Layers,
      action: () => navigateTo("#capabilities")
    },
    {
      id: "sec-projects",
      title: "Case Files (Real Projects)",
      category: "Navigation",
      icon: FolderGit2,
      action: () => navigateTo("#projects")
    },
    {
      id: "sec-stack",
      title: "Interactive Tech Stack",
      category: "Navigation",
      icon: Code2,
      action: () => navigateTo("#tech-stack")
    },
    {
      id: "sec-profile",
      title: "Behind The System (Profile & CV)",
      category: "Navigation",
      icon: User,
      action: () => navigateTo("#behind-system")
    },
    {
      id: "sec-contact",
      title: "Contact Terminal (Start a Project)",
      category: "Navigation",
      icon: Mail,
      action: () => navigateTo("#contact-terminal")
    }
  ];

  // Project quick links
  const projectCommands = projectsData.map((project) => ({
    id: `project-${project.id}`,
    title: `Project: ${project.title}`,
    category: "Projects",
    subtext: project.tagline,
    icon: ExternalLink,
    action: () => {
      window.open(project.liveUrl, "_blank");
      setIsOpen(false);
    }
  }));

  const allItems = [...staticCommands, ...projectCommands];
  const filtered = query.trim() === "" 
    ? allItems 
    : allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        (item.subtext && item.subtext.toLowerCase().includes(query.toLowerCase())) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop click */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#051F20]/75 backdrop-blur-sm" 
            onClick={() => setIsOpen(false)} 
          />

          {/* Modal Dialog */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Command Palette"
            className="relative w-full max-w-xl bg-[#0B2B26] border border-[#235347] rounded-2xl shadow-2xl shadow-[#051F20]/80 overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-[#163832] bg-[#051F20]/50">
              <Search className="w-5 h-5 text-[#8ED69D] mr-3 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command, project, or section... (e.g. 'Projects', 'React')"
                className="w-full bg-transparent border-none text-[#DAF1DE] placeholder-[#8ED69D]/40 focus:outline-none text-sm font-medium"
              />
              <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono font-medium text-[#8ED69D] bg-[#163832] rounded border border-[#235347]">
                ESC
              </kbd>
              <button 
                onClick={() => setIsOpen(false)} 
                aria-label="Close Command Palette"
                className="ml-2 sm:hidden p-1 text-[#8ED69D] hover:text-[#DAF1DE]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[#163832]/60">
              {filtered.length === 0 ? (
                <div className="py-10 text-center text-sm text-[#DAF1DE]/60">
                  No system commands or projects matching "<span className="text-[#8ED69D] font-medium">{query}</span>"
                </div>
              ) : (
                filtered.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#163832] transition-colors text-left group"
                    >
                      <div className="flex items-center space-x-3 min-w-0">
                        <div className="p-2 rounded-lg bg-[#163832] text-[#8ED69D] group-hover:bg-[#8ED69D] group-hover:text-[#051F20] transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <p className="text-sm font-semibold text-[#DAF1DE] group-hover:text-[#8ED69D] truncate">
                            {item.title}
                          </p>
                          {item.subtext && (
                            <p className="text-xs text-[#DAF1DE]/60 truncate">{item.subtext}</p>
                          )}
                        </div>
                      </div>
                      <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-[#163832] text-[#8ED69D] border border-[#235347] ml-2 flex-shrink-0">
                        {item.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Shortcut Hints */}
            <div className="px-4 py-2 bg-[#051F20]/60 border-t border-[#163832] flex items-center justify-between text-[11px] text-[#DAF1DE]/60 font-mono">
              <div className="flex items-center space-x-3">
                <span><strong className="text-[#8ED69D] font-medium">↑↓</strong> Navigate</span>
                <span><strong className="text-[#8ED69D] font-medium">↵</strong> Select</span>
              </div>
              <span className="text-[#8ED69D]/80">Nabeel.dev OS Navigation</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
