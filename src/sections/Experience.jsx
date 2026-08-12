import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBriefcase } from "react-icons/fa";

const workExperience = [
  {
    role: "Intern Software Engineer",
    company: "Dream Trillions (Pvt) Ltd",
    period: "July 2026 — Present",
    type: "Internship",
    points: [
      "Contributing to full-stack web application development utilizing modern frameworks and tools.",
      "Collaborating with engineering teams to design, test, and deploy scalable software solutions.",
      "Engaging in agile development workflows, code reviews, and performance optimization.",
    ],
  },
];

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
            Experience & Leadership
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Professional work experience, leadership roles, and extracurricular contributions
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-12">
          {/* Work Experience Sub-section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FaBriefcase className="text-blue-500 dark:text-cyan-400" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-blue-200/50 dark:border-cyan-500/20 shadow-lg hover:shadow-xl hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                      <FaBriefcase className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {exp.role}
                          </h4>
                          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                            {exp.type}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-950/50 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
                        {exp.company}
                      </p>
                      <ul className="space-y-2">
                        {exp.points.map((point) => (
                          <li
                            key={point}
                            className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex gap-2 font-medium"
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

          {/* Leadership & Activities Sub-section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FaUsers className="text-blue-500 dark:text-cyan-400" />
              Leadership & Activities
            </h3>
            <div className="space-y-6">
              {activities.map((act, index) => (
                <motion.div
                  key={act.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-800/80 shadow-md hover:shadow-xl hover:border-blue-500/20 dark:hover:border-cyan-500/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                      <FaUsers className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {act.role}
                        </h4>
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
        </div>
      </div>
    </section>
  );
};

export default Experience;
