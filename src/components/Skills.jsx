import React from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { FaJava, FaNetworkWired } from "react-icons/fa";

// Skill proficiency levels are reasonable starting estimates for a 3rd-year
// student — adjust these numbers to reflect your own confidence level.
const skillCategories = [
  {
    category: "Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript", level: 88, Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", level: 78, Icon: SiTypescript, color: "#3178C6" },
      { name: "Python", level: 80, Icon: SiPython, color: "#3776AB" },
      { name: "Java", level: 75, Icon: FaJava, color: "#f89820" },
      { name: "C++", level: 70, Icon: SiCplusplus, color: "#00599C" },
    ],
  },
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React", level: 88, Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", level: 75, Icon: SiNextdotjs, color: "#000000" },
      {
        name: "Tailwind CSS",
        level: 85,
        Icon: SiTailwindcss,
        color: "#06B6D4",
      },
    ],
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 82, Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", level: 80, Icon: SiExpress, color: "#000000" },
      { name: "REST API", level: 83, Icon: FaNetworkWired, color: "#6366F1" },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 78, Icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", level: 80, Icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", level: 72, Icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    category: "Tools & Design",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 85, Icon: SiGit, color: "#F05032" },
      { name: "GitHub", level: 85, Icon: SiGithub, color: "#181717" },
      { name: "Docker", level: 68, Icon: SiDocker, color: "#2496ED" },
      { name: "Figma", level: 75, Icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

const SkillBar = ({ skill, index }) => {
  const { name, level, Icon, color } = skill;
  const isBlackIcon = color === "#000000";
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-3">
          <Icon
            className={`w-5 h-5 shrink-0 ${
              isBlackIcon ? "text-gray-900 dark:text-white" : ""
            }`}
            style={isBlackIcon ? undefined : { color }}
            aria-hidden="true"
          />
          <span className="font-semibold text-gray-800 dark:text-white">
            {name}
          </span>
        </div>
        <span className="text-gray-600 dark:text-gray-300 font-medium">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.08 }}
          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-sm"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900/30 relative overflow-hidden border-b border-gray-100 dark:border-gray-800/40"
    >
      {/* 3D Mesh Background */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-800/80 shadow-md hover:shadow-xl hover:border-blue-500/20 dark:hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="flex items-center space-x-3.5 mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">
                <div className="text-2xl">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
