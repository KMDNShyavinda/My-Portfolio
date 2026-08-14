import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../constants";
import { useTheme } from "../context/ThemeContext";
import {
  FaSearch,
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaRocket,
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaMoon,
  FaSun,
  FaTimes,
  FaArrowRight,
  FaChartLine,
  FaGraduationCap,
  FaAward,
  FaEnvelope,
} from "react-icons/fa";

const CommandPalette = ({ isOpen, onClose, onOpenResume }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, setTheme } = useTheme();

  const commands = useMemo(
    () => [
      {
        category: "Navigation",
        id: "nav-home",
        title: "Go to Home",
        subtitle: "Hero section, tagline & introduction",
        icon: FaHome,
        color: "text-blue-500",
        action: () => {
          window.location.hash = "#home";
          onClose();
        },
      },
      {
        category: "Navigation",
        id: "nav-about",
        title: "Go to About Me",
        subtitle: "Education, journey & quick facts",
        icon: FaUser,
        color: "text-indigo-500",
        action: () => {
          window.location.hash = "#about";
          onClose();
        },
      },
      {
        category: "Navigation",
        id: "nav-skills",
        title: "Go to Skills & Technologies",
        subtitle: "Java, Spring Boot, DevOps, Cloud, AWS, React, etc.",
        icon: FaCode,
        color: "text-cyan-500",
        action: () => {
          window.location.hash = "#skills";
          onClose();
        },
      },
      {
        category: "Navigation",
        id: "nav-[#experience]",
        title: "Go to Experience",
        subtitle: "Work experience & career milestones",
        icon: FaBriefcase,
        color: "text-amber-500",
        action: () => {
          window.location.hash = "#experience";
          onClose();
        },
      },
      {
        category: "Navigation",
        id: "nav-projects",
        title: "Go to Featured Projects",
        subtitle: "Full-stack apps, POS, ERPs & UI designs",
        icon: FaRocket,
        color: "text-rose-500",
        action: () => {
          window.location.hash = "#projects";
          onClose();
        },
      },
      {
        category: "Navigation",
        id: "nav-github",
        title: "Go to Live GitHub Activity & Stats",
        subtitle: "Real-time metrics, stargazers & language graphs",
        icon: FaChartLine,
        color: "text-purple-500",
        action: () => {
          window.location.hash = "#github";
          onClose();
        },
      },
      {
        category: "Navigation",
        id: "nav-certificates",
        title: "Go to Certificates",
        subtitle: "Verified credentials & course completions",
        icon: FaGraduationCap,
        color: "text-emerald-500",
        action: () => {
          window.location.hash = "#certificates";
          onClose();
        },
      },
      {
        category: "Navigation",
        id: "nav-achievements",
        title: "Go to Achievements",
        subtitle: "Awards, hackathons & honors",
        icon: FaAward,
        color: "text-yellow-500",
        action: () => {
          window.location.hash = "#achievements";
          onClose();
        },
      },
      {
        category: "Navigation",
        id: "nav-contact",
        title: "Go to Contact",
        subtitle: "Send an email message or reach out",
        icon: FaEnvelope,
        color: "text-blue-600",
        action: () => {
          window.location.hash = "#contact";
          onClose();
        },
      },
      {
        category: "Quick Actions",
        id: "act-resume",
        title: "Preview Curriculum Vitae / Resume",
        subtitle: "Open interactive PDF viewer modal",
        icon: FaFilePdf,
        color: "text-red-500",
        action: () => {
          onClose();
          if (onOpenResume) onOpenResume();
        },
      },
      {
        category: "Quick Actions",
        id: "act-theme",
        title: `Switch Theme (Current: ${theme})`,
        subtitle: "Toggle between Dark and Light mode",
        icon: theme === "dark" ? FaSun : FaMoon,
        color: "text-amber-400",
        action: () => {
          setTheme(theme === "dark" ? "light" : "dark");
          onClose();
        },
      },
      {
        category: "Quick Actions",
        id: "act-github-profile",
        title: "Open GitHub Profile",
        subtitle: "@KMDNShyavinda on GitHub",
        icon: FaGithub,
        color: "text-gray-700 dark:text-gray-300",
        action: () => {
          window.open(personalInfo.github, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        category: "Quick Actions",
        id: "act-linkedin-profile",
        title: "Open LinkedIn Profile",
        subtitle: "Connect on LinkedIn",
        icon: FaLinkedin,
        color: "text-blue-600",
        action: () => {
          window.open(personalInfo.linkedin, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
    ],
    [theme, setTheme, onClose, onOpenResume]
  );

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter(
      (cmd) =>
        cmd.title.toLowerCase().includes(q) ||
        cmd.subtitle.toLowerCase().includes(q) ||
        cmd.category.toLowerCase().includes(q)
    );
  }, [query, commands]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-hidden">
        {/* Glassmorphic Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
          aria-hidden="true"
        />

        {/* Command Palette Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
          className="relative w-full max-w-2xl bg-white/90 dark:bg-gray-900/90 border border-gray-200/80 dark:border-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 backdrop-blur-xl"
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-5 py-4 border-b border-gray-200/60 dark:border-gray-800">
            <FaSearch className="text-gray-400 dark:text-gray-500 text-lg mr-3 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search sections (e.g. Projects, Skills, Resume)..."
              className="w-full bg-transparent text-gray-950 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-medium text-sm md:text-base focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-lg transition-colors"
            >
              <FaTimes />
            </button>
          </div>

          {/* Command Options List */}
          <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
            {filteredCommands.length === 0 ? (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400 text-sm font-medium">
                No matching commands found for "{query}"
              </div>
            ) : (
              filteredCommands.map((cmd, index) => {
                const Icon = cmd.icon;
                const isSelected = index === selectedIndex;
                return (
                  <motion.div
                    key={cmd.id}
                    onClick={cmd.action}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition-all duration-150 ${
                      isSelected
                        ? "bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/30 dark:border-cyan-400/30 text-blue-600 dark:text-cyan-400 shadow-sm"
                        : "hover:bg-gray-100/60 dark:hover:bg-gray-800/40 text-gray-700 dark:text-gray-300 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`text-lg ${cmd.color}`}>
                        <Icon />
                      </div>
                      <div className="truncate">
                        <div className="font-bold text-sm text-gray-950 dark:text-white">
                          {cmd.title}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {cmd.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-md">
                        {cmd.category}
                      </span>
                      <FaArrowRight className="text-xs text-gray-400 opacity-60" />
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts Guide */}
          <div className="px-5 py-3 border-t border-gray-200/60 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-between font-medium">
            <div className="flex items-center gap-3">
              <span>
                <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded text-[10px] font-mono border border-gray-300 dark:border-gray-700">
                  ↑
                </kbd>{" "}
                <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded text-[10px] font-mono border border-gray-300 dark:border-gray-700">
                  ↓
                </kbd>{" "}
                to navigate
              </span>
              <span>
                <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded text-[10px] font-mono border border-gray-300 dark:border-gray-700">
                  ↵
                </kbd>{" "}
                to select
              </span>
            </div>
            <span>
              <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 rounded text-[10px] font-mono border border-gray-300 dark:border-gray-700">
                ESC
              </kbd>{" "}
              to close
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CommandPalette;
