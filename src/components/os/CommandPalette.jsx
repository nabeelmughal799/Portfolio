import React, { useState, useEffect, useRef } from "react";
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

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-purple-950/40 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={() => setIsOpen(false)} />

      {/* Modal Dialog */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-label="Command Palette"
        className="relative w-full max-w-xl bg-white border border-purple-200/80 rounded-2xl shadow-2xl shadow-purple-900/15 overflow-hidden z-10"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-purple-100 bg-purple-50/40">
          <Search className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section... (e.g. 'Projects', 'React')"
            className="w-full bg-transparent border-none text-slate-800 placeholder-purple-400 focus:outline-none text-sm font-medium"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono font-medium text-purple-600 bg-purple-100/70 rounded border border-purple-200">
            ESC
          </kbd>
          <button 
            onClick={() => setIsOpen(false)}
            aria-label="Close Command Palette"
            className="ml-2 sm:hidden p-1 text-purple-500 hover:text-purple-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-purple-50">
          {filtered.length === 0 ? (
            <div className="py-10 text-center text-sm text-slate-500">
              No system commands or projects matching "<span className="text-purple-700 font-medium">{query}</span>"
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-purple-50/80 transition-colors text-left group"
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="p-2 rounded-lg bg-purple-100/60 text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-purple-900 truncate">
                        {item.title}
                      </p>
                      {item.subtext && (
                        <p className="text-xs text-slate-500 truncate">{item.subtext}</p>
                      )}
                    </div>
                  </div>
                  <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-purple-50 text-purple-600 border border-purple-100 ml-2 flex-shrink-0">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Hints */}
        <div className="px-4 py-2 bg-slate-50 border-t border-purple-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center space-x-3">
            <span><strong className="text-purple-700 font-medium">↑↓</strong> Navigate</span>
            <span><strong className="text-purple-700 font-medium">↵</strong> Select</span>
          </div>
          <span>Nabeel.dev OS Navigation</span>
        </div>
      </div>
    </div>
  );
}
