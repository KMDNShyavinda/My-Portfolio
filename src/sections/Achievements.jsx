import React from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaCodeBranch,
  FaCertificate,
} from "react-icons/fa";

// Sample achievements — replace with your real accomplishments as you earn
// them (hackathon results, awards, notable contributions, etc.).
const achievements = [
  {
    Icon: FaTrophy,
    title: "Dean's List",
    desc: "Recognized for academic excellence in Computer Science.",
    gradient: "from-yellow-400 to-orange-500",
    isPlaceholder: true,
  },
  {
    Icon: FaMedal,
    title: "Hackathon Finalist",
    desc: "Reached the finals of a university-level hackathon with a team project.",
    gradient: "from-purple-500 to-pink-600",
    isPlaceholder: true,
  },
  {
    Icon: FaCodeBranch,
    title: "Open Source Contributor",
    desc: "Contributed code and documentation to an open-source project.",
    gradient: "from-blue-500 to-indigo-600",
    isPlaceholder: true,
  },
  {
    Icon: FaCertificate,
    title: "8+ Certifications",
    desc: "Completed courses across Coursera, freeCodeCamp, and Udemy.",
    gradient: "from-green-500 to-teal-600",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
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
            Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Milestones from my academic and learning journey so far
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map(
            ({ Icon, title, desc, gradient, isPlaceholder }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/50 dark:border-gray-800/80 shadow-md hover:shadow-xl hover:border-blue-500/20 dark:hover:border-cyan-500/20 transition-all duration-300 text-center flex flex-col justify-between"
              >
                {isPlaceholder && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 bg-blue-50 dark:bg-cyan-950/30 text-blue-600 dark:text-cyan-400 border border-blue-100/50 dark:border-cyan-900/30 text-[10px] font-bold rounded-lg">
                    Sample
                  </span>
                )}
                <div>
                  <div
                    className={`w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-md`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                    {title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed mt-2">
                  {desc}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
