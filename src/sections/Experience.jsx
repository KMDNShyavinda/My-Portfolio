import React from "react";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

const activities = [
  {
    role: "Student Union President",
    org: "Faculty of Applied Science, Eastern University Sri Lanka",
    period: "2025 — 2026",
    points: [
      "Served as the primary representative for the student body, driving active communication between faculty administration and students.",
      "Led initiatives to enhance student welfare, improve campus facilities, and encourage extracurricular engagement.",
      "Organized student-led academic, social, and cultural events across the faculty.",
    ],
  },
  {
    role: "Member",
    org: "TRICOM Computer Science Society, Department of Computer Science, Eastern University, Sri Lanka",
    period: "2023 — Present",
    points: [
      "Contributed to organizing technical workshops, coding bootcamps, and technology networking sessions.",
      "Collaborated with peers to promote computer science education and innovation within the university community.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="leadership"
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
            Leadership & Activities
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Leadership roles and extracurricular contributions
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {activities.map((act, index) => (
            <motion.div
              key={act.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-250/50 dark:border-gray-800/80 shadow-md hover:shadow-xl hover:border-blue-500/20 dark:hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                  <FaUsers className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {act.role}
                    </h3>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      {act.period}
                    </span>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {act.org}
                  </p>
                  <ul className="space-y-2">
                    {act.points.map((point) => (
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
