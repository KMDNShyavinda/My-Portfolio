import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { personalInfo } from "../constants";

// ThemeSwitcher Component
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
      {["light", "system", "dark"].map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          aria-label={`${t} theme`}
          aria-pressed={theme === t}
          className={`px-2.5 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            theme === t
              ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-700/50"
          }`}
          title={
            t === "light"
              ? "Light Mode"
              : t === "dark"
              ? "Dark Mode"
              : "System Theme"
          }
        >
          {t === "light" ? "☀️" : t === "dark" ? "🌙" : "💻"}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
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
    { name: "Leadership", href: "#leadership" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Certificates", href: "#certificates" },
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
          {/* Brand */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text font-['JetBrains_Mono']"
          >
            Dinuka<span className="text-gray-400 dark:text-gray-500">.</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-cyan-400 hover:border-blue-500 dark:hover:border-cyan-400 hover:bg-blue-500/5 dark:hover:bg-cyan-400/5 text-[13px] xl:text-sm font-semibold transition-all duration-300"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Right side controls */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeSwitcher />
            <motion.a
              href={personalInfo.cvPath}
              download={personalInfo.cvDownloadName}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-4.5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 bg-white/60 dark:bg-gray-900/60 hover:text-blue-500 dark:hover:text-cyan-400 hover:border-blue-500 dark:hover:border-cyan-400 hover:bg-blue-500/5 dark:hover:bg-cyan-400/5 font-semibold text-[13px] xl:text-sm transition-all duration-300 shadow-sm"
            >
              Download CV
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-4">
            <ThemeSwitcher />
            <button
              className="text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white"
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
              className="lg:hidden mt-4 glass-effect rounded-2xl p-4 border border-gray-200/50 dark:border-gray-800/50"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white font-semibold transition-colors text-center py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <motion.a
                  href={personalInfo.cvPath}
                  download={personalInfo.cvDownloadName}
                  whileTap={{ scale: 0.98 }}
                  className="border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 hover:text-blue-500 dark:hover:text-cyan-400 hover:border-blue-500 dark:hover:border-cyan-400 hover:bg-blue-500/5 dark:hover:bg-cyan-400/5 text-gray-800 dark:text-gray-100 py-2.5 rounded-full font-semibold mt-4 text-center block shadow-sm transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
