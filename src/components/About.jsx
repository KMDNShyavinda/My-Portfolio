import React from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { personalInfo } from "../constants";

// Education timeline. Grades/dates are intentionally left as neutral
// placeholders — fill in your real results and years here.
const education = [
  {
    degree: "Bachelor of Science (BSc) in Computer Science",
    institution: "Eastern University, Sri Lanka",
    period: "2023 – Present",
    description:
      "Focusing on Computer Science, Software Engineering, and Full Stack Development.",
  },

  {
    degree: "Diploma in ICT & English",
    institution: "ICBT Campus, Sri Lanka",
    period: "2022",
    description: "Gained core fundamentals in Information Technology and Communication.",
  },

  {
    degree: "G.C.E. Advanced Level – Physical Science Stream",
    institution: "Mo/Medagama National School",
    period: "2019 – 2021",
    description: "Physical Science Stream (Combined Mathematics, Physics, Chemistry).",
  },
];

const interests = [
  "Web Development",
  "Network Automation",
  "Cloud Networking (AWS)",
  "Full-Stack Development",
  "Software Engineering",
  "UI/UX Design",
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900/60 relative overflow-hidden border-b border-gray-100 dark:border-gray-800/40"
    >
      {/* 3D Mesh Background */}
      <AnimatedBackground />

      {/* Content Container with proper z-index */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate Computer Science undergraduate with a strong
              foundation in full-stack development and emerging technologies.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
                My Journey
              </h3>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-base">
                <p>{personalInfo.bio}</p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/50 dark:border-gray-800/80 hover:border-blue-500/20 dark:hover:border-cyan-500/20 transition-all duration-300">
                  <div className="text-xl mb-1">🎓</div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm">
                    Education
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    BSc Computer Science
                  </p>
                </div>
                <div className="bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/50 dark:border-gray-800/80 hover:border-purple-500/20 dark:hover:border-indigo-500/20 transition-all duration-300">
                  <div className="text-xl mb-1">💼</div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm">
                    Focus
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Full Stack Dev
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div className="mt-8">
                <h4 className="font-bold text-gray-800 dark:text-white mb-3">
                  Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-blue-50/50 dark:bg-cyan-950/20 text-blue-600 dark:text-cyan-400 border border-blue-100/50 dark:border-cyan-900/30 px-3 py-1 rounded-lg text-xs font-semibold"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Education Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-800/60 shadow-md"
            >
              <h3 className="text-xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="relative pl-8 pb-4 last:pb-0"
                  >
                    {/* Timeline line */}
                    {index !== education.length - 1 && (
                      <div className="absolute left-[13px] top-6 w-[2px] h-[calc(100%+24px)] bg-gradient-to-b from-blue-500 to-cyan-500 opacity-60"></div>
                    )}

                    {/* Timeline dot */}
                    <div className="absolute left-[3px] top-1.5 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-200/60 dark:border-gray-800 shadow-sm hover:border-blue-500/20 dark:hover:border-cyan-500/20 transition-all duration-300">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      {edu.institution && (
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 font-medium">
                          {edu.institution}
                        </p>
                      )}
                      <span className="inline-block bg-blue-50 dark:bg-cyan-950/30 text-blue-600 dark:text-cyan-400 border border-blue-100/50 dark:border-cyan-900/30 px-2.5 py-1 rounded-lg text-xs font-semibold mb-3">
                        {edu.period}
                      </span>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
