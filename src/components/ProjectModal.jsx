import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCheckCircle,
  FaLayerGroup,
  FaLightbulb,
  FaCogs,
} from "react-icons/fa";

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const Icon = project.icon;
  const hasLiveLink = Boolean(project.liveLink && project.liveLink !== "#");

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 overflow-hidden">
        {/* Glassmorphic Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header Visual Banner */}
          <div className={`relative aspect-[21/9] w-full bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}>
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-90"
              />
            ) : (
              <Icon className="text-7xl text-white/90 drop-shadow-md" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent pointer-events-none" />

            {/* Category Tag */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-white/10">
              {project.category}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-3 text-white/90 hover:text-white bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full border border-white/10 transition-colors duration-200"
            >
              <FaTimes className="text-base" />
            </button>

            {/* Project Title Overlay */}
            <div className="absolute bottom-4 left-6 right-6 z-10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight drop-shadow-sm">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 text-gray-700 dark:text-gray-300">
            {/* Short & Long Description */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <FaLightbulb className="text-amber-500" />
                Project Overview & Challenge
              </h4>
              <p className="text-base md:text-lg font-semibold text-gray-900 dark:text-white leading-relaxed">
                {project.desc}
              </p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                {project.longDesc}
              </p>
            </div>

            {/* Architecture Highlights */}
            {project.architecture && (
              <div className="bg-blue-50/50 dark:bg-gray-800/40 border border-blue-100 dark:border-gray-800 p-5 rounded-2xl space-y-2">
                <h4 className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                  <FaCogs />
                  System Architecture Highlights
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Key Features List */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-500" />
                  Key Technical Features
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800/80"
                    >
                      <FaCheckCircle className="text-emerald-500 text-sm mt-1 shrink-0" />
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <FaLayerGroup className="text-indigo-500" />
                Technologies & Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-bold rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Buttons */}
          <div className="p-4 md:p-6 border-t border-gray-200/60 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/80 flex flex-col sm:flex-row gap-3 justify-end">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-sm"
            >
              <FaGithub className="text-base" />
              Source Code on GitHub
            </a>

            {hasLiveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-200`}
              >
                <FaExternalLinkAlt className="text-xs" />
                Launch Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
