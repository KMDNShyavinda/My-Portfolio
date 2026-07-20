import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", Icon: FaGithub, url: personalInfo.github },
  { name: "LinkedIn", Icon: FaLinkedin, url: personalInfo.linkedin },
  { name: "Facebook", Icon: FaFacebook, url: personalInfo.facebook },
  { name: "WhatsApp", Icon: FaWhatsapp, url: personalInfo.whatsapp },
  { name: "Instagram", Icon: FaInstagram, url: personalInfo.instagram },
  { name: "Threads", Icon: FaThreads, url: personalInfo.threads },
  { name: "Email", Icon: FaEnvelope, url: `mailto:${personalInfo.email}` },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400 overflow-hidden border-t border-gray-150 dark:border-gray-900/60">
      {/* Decorative gradient glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand + Blurb */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
            >
              {personalInfo.name}
            </a>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-500 leading-relaxed max-w-xs font-medium">
              Computer Science undergraduate building modern, full-stack web
              applications and always learning something new.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-550 hover:text-blue-550 dark:text-gray-400 dark:hover:text-cyan-400 font-semibold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Get In Touch</h4>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm text-gray-550 hover:text-blue-550 dark:text-gray-400 dark:hover:text-cyan-400 font-semibold transition-colors block mb-1"
            >
              {personalInfo.email}
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-semibold">
              {personalInfo.location}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-200/50 dark:bg-gray-900/40 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 text-gray-600 dark:text-gray-300 hover:text-white border border-gray-300/30 dark:border-gray-800/80 transition-all duration-300 shadow-sm"
                >
                  <social.Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200/50 dark:border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1.5 text-center sm:text-left font-medium">
            © {year} {personalInfo.name}. Built with{" "}
            <FaHeart className="w-3.5 h-3.5 text-red-500" aria-label="love" />{" "}
            using React &amp; Tailwind CSS.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Back to top"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md hover:shadow-lg transition-shadow"
          >
            <FaArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
