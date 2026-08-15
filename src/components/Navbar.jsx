import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "../context/SoundContext";
import { FaSearch, FaTerminal, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Certificates", href: "#certificates" },
    { name: "Articles", href: "#articles" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "glass-effect py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            {navItems.map((item, index) => (
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

          {/* Right side controls (Availability Badge, Sound, Ctrl+K Search, Terminal CLI) */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
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
            <motion.button
              onClick={onOpenTerminal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-3 py-1.5 rounded-full border border-gray-800 text-gray-300 bg-gray-900/60 hover:text-green-400 hover:border-green-400/60 font-semibold text-[13px] xl:text-sm flex items-center gap-1.5 transition-all duration-300 shadow-sm"
              title="Interactive Terminal CLI (` / ~)"
            >
              <FaTerminal className="text-xs text-green-500" />
              <kbd className="px-1.5 py-0.5 bg-gray-800 text-gray-400 rounded text-[10px] font-mono border border-gray-700">
                ~
              </kbd>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest font-mono">
              Navigation
            </span>
            <button
              className="text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 glass-effect rounded-2xl p-4 border border-gray-800/50"
            >
              <div className="flex flex-col space-y-4">
                <AvailabilityBadge isMobile onClick={() => setIsMobileMenuOpen(false)} />
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white font-semibold transition-colors text-center py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
