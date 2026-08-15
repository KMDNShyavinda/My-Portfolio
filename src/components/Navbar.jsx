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
      className={`group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500/20 font-medium text-xs xl:text-[13px] transition-all duration-300 shadow-[0_0_12px_-3px_rgba(16,185,129,0.3)] ${
        isMobile ? "w-full justify-center py-2.5 text-sm" : ""
      }`}
      title={availabilityStatus.fullText}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
      </span>
      <span className="font-semibold tracking-wide text-emerald-400 group-hover:text-emerald-300">
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
      {soundEnabled ? <FaVolumeUp className="text-sm" /> : <FaVolumeMute className="text-sm" />}
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

  // Primary links visible directly on top bar
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
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? "glass-effect py-2.5" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Primary Desktop Nav Items (Top Row - Clean 5 items) */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
              {primaryNavItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.06, y: -2, transition: { type: "spring", stiffness: 400, damping: 15 } }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3.5 py-1.5 rounded-full border border-gray-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:bg-cyan-400/5 hover:shadow-[0_4px_12px_-2px_rgba(34,211,238,0.2)] text-[13px] xl:text-sm font-semibold transition-all duration-300"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Top Bar Controls & Sidebar Toggle */}
            <div className="hidden lg:flex items-center space-x-3">
              <AvailabilityBadge />
              <SoundSwitcher />

              <motion.button
                onClick={onOpenPalette}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-3 py-1.5 rounded-full border border-gray-800 text-gray-300 bg-gray-900/60 hover:text-cyan-400 hover:border-cyan-400/60 font-semibold text-[13px] xl:text-sm flex items-center gap-1.5 transition-all duration-300 shadow-sm"
                title="Quick Search (Ctrl + K)"
              >
                <FaSearch className="text-xs" />
                <kbd className="px-1.5 py-0.5 bg-gray-800 text-gray-400 rounded text-[10px] font-mono border border-gray-700">
                  Ctrl K
                </kbd>
              </motion.button>

              {/* Sidebar Menu Drawer Toggle Button */}
              <motion.button
                onClick={() => setIsSidebarOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-3.5 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/20 font-semibold text-[13px] flex items-center gap-2 transition-all duration-300 shadow-sm"
                title="Open Side Menu"
              >
                <FaBars className="text-sm" />
                <span>Menu</span>
              </motion.button>
            </div>

            {/* Mobile Header (Brand & Menu Button) */}
            <div className="flex lg:hidden items-center justify-between w-full">
              <span className="text-sm font-bold text-gray-300 font-mono tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {personalInfo.name}
              </span>
              <button
                className="p-2 rounded-xl bg-gray-800/80 text-gray-300 hover:text-white border border-gray-700"
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open mobile menu"
              >
                <FaBars className="w-5 h-5" />
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
