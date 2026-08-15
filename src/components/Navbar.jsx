import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "../context/SoundContext";
import {
  FaSearch,
  FaTerminal,
  FaVolumeUp,
  FaVolumeMute,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaFolderOpen,
  FaCogs,
  FaAward,
  FaBookOpen,
  FaFileCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { personalInfo } from "../constants";

// AvailabilityBadge Component
const AvailabilityBadge = ({ isMobile = false, onClick }) => {
  const { availabilityStatus } = personalInfo;
  if (!availabilityStatus?.isAvailable) return null;

  return (
    <motion.a
      href="#contact"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500/20 font-medium text-xs transition-all duration-300 shadow-[0_0_12px_-3px_rgba(16,185,129,0.3)] ${
        isMobile ? "w-full justify-center py-2.5 text-sm" : ""
      }`}
      title={availabilityStatus.fullText}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
      </span>
      <span className="font-semibold tracking-wide text-emerald-400 group-hover:text-emerald-300 whitespace-nowrap">
        {availabilityStatus.badgeText}
      </span>
    </motion.a>
  );
};

// SoundSwitcher Component
const SoundSwitcher = () => {
  const { soundEnabled, toggleSound, playSound } = useSound();

  return (
    <button
      onClick={() => {
        toggleSound();
        if (!soundEnabled) playSound("click");
      }}
      aria-label={soundEnabled ? "Mute UI Sound Effects" : "Unmute UI Sound Effects"}
      className={`p-2 rounded-full border transition-all duration-200 ${
        soundEnabled
          ? "bg-blue-500/10 border-blue-500/30 text-blue-500 dark:text-cyan-400 shadow-sm"
          : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400"
      }`}
      title={soundEnabled ? "Mute UI Sound Effects" : "Unmute UI Sound Effects"}
    >
      {soundEnabled ? <FaVolumeUp className="text-xs" /> : <FaVolumeMute className="text-xs" />}
    </button>
  );
};

const Navbar = ({ onOpenPalette, onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Primary links visible directly on top pill bar
  const primaryNavItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Full section list for the slide-over sidebar
  const sidebarNavItems = [
    { name: "Home", href: "#home", icon: FaHome },
    { name: "About", href: "#about", icon: FaUser },
    { name: "Skills", href: "#skills", icon: FaCode },
    { name: "Experience", href: "#experience", icon: FaBriefcase },
    { name: "Projects", href: "#projects", icon: FaFolderOpen },
    { name: "Services", href: "#services", icon: FaCogs },
    { name: "Certificates", href: "#certificates", icon: FaAward },
    { name: "Articles", href: "#articles", icon: FaBookOpen },
    { name: "Code", href: "#snippets", icon: FaFileCode },
    { name: "Contact", href: "#contact", icon: FaEnvelope },
  ];

  return (
    <>
      {/* Floating Island Capsule Container */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 pt-3.5"
      >
        <div className="max-w-6xl mx-auto pointer-events-auto">
          <div
            className={`flex items-center justify-between px-5 py-2 rounded-full transition-all duration-500 border ${
              isScrolled
                ? "bg-gray-950/90 border-gray-800 shadow-2xl backdrop-blur-xl shadow-cyan-500/5 py-2"
                : "bg-gray-900/80 border-gray-800/80 backdrop-blur-md py-2.5"
            }`}
          >
            {/* Left Side: Modern Developer Tech Logo */}
            <a
              href="#home"
              className="flex items-center gap-2.5 text-gray-200 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-500 p-[1.5px] shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-gray-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                  &lt;/&gt;
                </div>
              </div>
              <span className="font-bold text-sm tracking-tight text-white font-mono flex items-center">
                Shyavinda<span className="text-cyan-400 font-bold">.dev</span>
              </span>
            </a>

            {/* Center: Primary Desktop Nav Links (Clean 5 items) */}
            <div className="hidden lg:flex items-center space-x-1.5 xl:space-x-2">
              {primaryNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1.5 rounded-full border border-transparent text-gray-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 text-xs xl:text-sm font-semibold transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Side: Quick Controls & Sidebar Drawer Toggle */}
            <div className="hidden lg:flex items-center space-x-2.5">
              <AvailabilityBadge />
              <SoundSwitcher />

              <motion.button
                onClick={onOpenPalette}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-2.5 py-1.5 rounded-full border border-gray-800 text-gray-300 bg-gray-900/60 hover:text-cyan-400 hover:border-cyan-500/50 font-semibold text-xs flex items-center gap-1.5 transition-all duration-200"
                title="Quick Search (Ctrl + K)"
              >
                <FaSearch className="text-[11px]" />
                <kbd className="px-1.5 py-0.5 bg-gray-800 text-gray-400 rounded text-[9px] font-mono border border-gray-700">
                  Ctrl K
                </kbd>
              </motion.button>

              {/* Sidebar Menu Drawer Toggle Button */}
              <motion.button
                onClick={() => setIsSidebarOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-3.5 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/20 font-semibold text-xs flex items-center gap-2 transition-all duration-300 shadow-sm"
                title="Open Side Menu"
              >
                <FaBars className="text-xs" />
                <span>Menu</span>
              </motion.button>
            </div>

            {/* Mobile Header (Brand & Menu Button) */}
            <div className="flex lg:hidden items-center justify-between w-full">
              <a href="#home" className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 p-[1.5px]">
                  <div className="w-full h-full bg-gray-950 rounded-[9px] flex items-center justify-center font-mono font-bold text-[10px] text-cyan-400">
                    &lt;/&gt;
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-200 font-mono tracking-wider">
                  Shyavinda<span className="text-cyan-400">.dev</span>
                </span>
              </a>
              <button
                className="p-1.5 rounded-xl bg-gray-800/80 text-gray-300 hover:text-white border border-gray-700"
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open mobile menu"
              >
                <FaBars className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Executive Slide-Over Sidebar Drawer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Sidebar Content Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-sm bg-gray-900/95 border-l border-gray-800 h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto backdrop-blur-xl z-10"
            >
              <div>
                {/* Sidebar Header */}
                <div className="flex items-center justify-between pb-5 border-b border-gray-800/80 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-white font-mono">Navigation Menu</h3>
                    <p className="text-xs text-gray-400 font-medium">Explore all portfolio sections</p>
                  </div>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                    aria-label="Close menu"
                  >
                    <FaTimes className="text-lg" />
                  </button>
                </div>

                {/* Status Badge in Sidebar */}
                <div className="mb-6">
                  <AvailabilityBadge isMobile onClick={() => setIsSidebarOpen(false)} />
                </div>

                {/* Section Links */}
                <div className="space-y-1.5">
                  {sidebarNavItems.map(({ name, href, icon: Icon }) => (
                    <a
                      key={name}
                      href={href}
                      onClick={() => setIsSidebarOpen(false)}
                      className="group flex items-center justify-between px-4 py-3 rounded-2xl text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 font-semibold text-sm transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="text-gray-400 group-hover:text-cyan-400 text-base transition-colors" />
                        <span>{name}</span>
                      </div>
                      <span className="text-xs font-mono text-gray-600 group-hover:text-cyan-500/70 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Sidebar Footer Controls & Social Links */}
              <div className="pt-6 border-t border-gray-800/80 space-y-4">
                {/* Developer Tools */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setIsSidebarOpen(false);
                      onOpenPalette();
                    }}
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-gray-800/60 border border-gray-700/60 text-xs font-semibold text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  >
                    <FaSearch className="text-xs text-cyan-400" /> Search (Ctrl+K)
                  </button>
                  <button
                    onClick={() => {
                      setIsSidebarOpen(false);
                      onOpenTerminal();
                    }}
                    className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-gray-800/60 border border-gray-700/60 text-xs font-semibold text-gray-300 hover:text-green-400 hover:border-green-500/40 transition-colors"
                  >
                    <FaTerminal className="text-xs text-green-400" /> Terminal (~)
                  </button>
                </div>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-gray-800 text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-colors"
                    title="GitHub Profile"
                  >
                    <FaGithub className="text-base" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-gray-800 text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <FaLinkedin className="text-base" />
                  </a>
                  <a
                    href={personalInfo.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-gray-800 text-gray-400 hover:text-emerald-400 hover:bg-gray-700 transition-colors"
                    title="WhatsApp Contact"
                  >
                    <FaWhatsapp className="text-base" />
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
