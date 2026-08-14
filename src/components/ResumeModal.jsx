import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../constants";
import { FaDownload, FaExternalLinkAlt, FaTimes, FaFilePdf } from "react-icons/fa";

const ResumeModal = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 overflow-hidden">
        {/* Glassmorphic Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/60 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-sm">
                <FaFilePdf className="text-lg" />
              </div>
              <div>
                <h3 className="font-bold text-gray-950 dark:text-white text-base md:text-lg">
                  {personalInfo.name} — Curriculum Vitae
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {personalInfo.cvDownloadName}
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 md:gap-3">
              <a
                href={personalInfo.cvPath}
                download={personalInfo.cvDownloadName}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold text-xs md:text-sm rounded-xl shadow-sm hover:shadow transition-all duration-200"
              >
                <FaDownload className="text-xs" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <a
                href={personalInfo.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume in new tab"
                className="p-2.5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 bg-gray-200/60 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-colors duration-200"
              >
                <FaExternalLinkAlt className="text-sm" />
              </a>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2.5 text-gray-600 dark:text-gray-300 hover:text-red-500 bg-gray-200/60 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-colors duration-200"
              >
                <FaTimes className="text-base" />
              </button>
            </div>
          </div>

          {/* PDF Viewer Body */}
          <div className="flex-1 bg-gray-100 dark:bg-gray-950 relative overflow-hidden">
            <iframe
              src={`${personalInfo.cvPath}#toolbar=0&navpanes=0`}
              title="Resume Preview"
              className="w-full h-full border-none"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
