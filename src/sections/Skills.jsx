import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";
import SkillModal from "../components/SkillModal";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiSwagger,
  SiSpringboot,
  SiSpringsecurity,
  SiJetbrains,
  SiJenkins,
  SiKubernetes,
  SiApachemaven,
  SiGitlab,
  SiGithubactions,
} from "react-icons/si";
import { FaJava, FaBrain, FaInfinity, FaDatabase, FaCss3Alt, FaAws, FaInfoCircle } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { TbApi } from "react-icons/tb";

// Skill categories incorporating user skills
const skillCategories = [
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 90, Icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", level: 85, Icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", level: 92, Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", level: 88, Icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", level: 90, Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "PHP", level: 80, Icon: SiPhp, color: "#777BB4" },
    ],
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Java", level: 88, Icon: FaJava, color: "#F89820" },
      { name: "Spring Boot", level: 88, Icon: SiSpringboot, color: "#6DB33F" },
      { name: "Spring Security", level: 85, Icon: SiSpringsecurity, color: "#6DB33F" },
      { name: "REST API", level: 88, Icon: TbApi, color: "#009688" },
      { name: "Maven", level: 82, Icon: SiApachemaven, color: "#C71A36" },
      { name: "Node.js", level: 85, Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", level: 85, Icon: SiExpress, color: "#000000" },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 85, Icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", level: 88, Icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", level: 82, Icon: SiMongodb, color: "#47A248" },
      { name: "SQL Server", level: 80, Icon: FaDatabase, color: "#CC292B" },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "🚀",
    skills: [
      { name: "AWS", level: 82, Icon: FaAws, color: "#FF9900" },
      { name: "Docker", level: 85, Icon: SiDocker, color: "#2496ED" },
      { name: "Docker Desktop", level: 85, Icon: SiDocker, color: "#2496ED" },
      { name: "Docker Compose", level: 82, Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", level: 80, Icon: SiKubernetes, color: "#326CE5" },
      { name: "Jenkins", level: 82, Icon: SiJenkins, color: "#D24939" },
      { name: "GitLab CI", level: 80, Icon: SiGitlab, color: "#FC6D26" },
      { name: "GitHub Actions", level: 82, Icon: SiGithubactions, color: "#2088FF" },
      { name: "CI/CD Pipelines", level: 85, Icon: FaInfinity, color: "#6366F1" },
    ],
  },
  {
    category: "Tools & Testing",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90, Icon: SiGit, color: "#F05032" },
      { name: "GitHub", level: 92, Icon: SiGithub, color: "#181717" },
      { name: "Postman (API Testing)", level: 88, Icon: SiPostman, color: "#FF6C37" },
      { name: "Swagger", level: 85, Icon: SiSwagger, color: "#85EA2D" },
    ],
  },
  {
    category: "IDEs & Languages",
    icon: "💻",
    skills: [
      { name: "VS Code", level: 92, Icon: DiVisualstudio, color: "#007ACC" },
      { name: "IntelliJ IDEA", level: 88, Icon: SiJetbrains, color: "#000000" },
      { name: "Java", level: 88, Icon: FaJava, color: "#F89820" },
      { name: "JavaScript", level: 90, Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", level: 85, Icon: SiPython, color: "#3776AB" },
    ],
  },
];

const SkillBar = ({ skill, index, onSelectSkill }) => {
  const { name, level, Icon, color } = skill;
  const isBlackIcon = color === "#000000";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={() => onSelectSkill(skill)}
      className="group mb-4 p-2.5 rounded-2xl hover:bg-white/60 dark:hover:bg-gray-800/60 border border-transparent hover:border-blue-500/20 dark:hover:border-cyan-400/20 transition-all duration-200 cursor-pointer"
      title={`Click to view ${name} engineering breakdown & projects`}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-3">
          <Icon
            className={`w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
              isBlackIcon ? "text-gray-900 dark:text-white" : ""
            }`}
            style={isBlackIcon ? undefined : { color }}
            aria-hidden="true"
          />
          <span className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
            {name}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <FaInfoCircle className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="text-gray-600 dark:text-gray-300 font-medium text-sm">
            {level}%
          </span>
        </div>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 }}
          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-sm"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

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
            Click any skill card below to open its engineering breakdown, tools, and associated portfolio projects.
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

              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                    onSelectSkill={setSelectedSkill}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Skill Detail Modal */}
      <SkillModal
        skill={selectedSkill}
        isOpen={Boolean(selectedSkill)}
        onClose={() => setSelectedSkill(null)}
      />
    </section>
  );
};

export default Skills;
