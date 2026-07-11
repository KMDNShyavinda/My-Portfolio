import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

// Sample experience entries — replace with your real internships, freelance
// work, or notable roles as you take them on.
const experiences = [
  {
    role: "Freelance Full-Stack Developer",
    org: "Self-Employed",
    period: "2024 — Present",
    points: [
      "Design and build full-stack web applications for personal and small client projects.",
      "Work across the stack — React/Next.js on the frontend, Node.js/Express on the backend.",
    ],
    isPlaceholder: true,
  },
  {
    role: "Software Engineering Intern",
    org: "Company Name",
    period: "e.g. Jun 2025 — Aug 2025",
    points: [
      "Add a short summary of your responsibilities once you complete an internship.",
      "Highlight the tools, teams, and impact of the work you did.",
    ],
    isPlaceholder: true,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900/60 relative overflow-hidden border-b border-gray-100 dark:border-gray-800/40"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Where I've applied my skills so far
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-250/50 dark:border-gray-800/80 shadow-md hover:shadow-xl hover:border-blue-500/20 dark:hover:border-cyan-500/20 transition-all duration-300"
            >
              {exp.isPlaceholder && (
                <span className="absolute top-4 right-4 px-2 py-0.5 bg-blue-50 dark:bg-cyan-950/30 text-blue-600 dark:text-cyan-400 border border-blue-100/50 dark:border-cyan-900/30 text-[10px] font-semibold rounded-lg">
                  Sample
                </span>
              )}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                  <FaBriefcase className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {exp.org}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex gap-2 font-medium"
                      >
                        <span className="text-blue-500 dark:text-cyan-500 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
