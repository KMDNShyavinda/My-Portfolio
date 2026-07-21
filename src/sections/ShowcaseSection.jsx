import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";
import { personalInfo } from "../constants";
import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaArrowRight,
  FaCode,
  FaEye,
  FaCodeBranch,
  FaCalendarAlt,
  FaPills,
  FaHotel,
  FaGavel,
  FaCalculator,
  FaChartPie,
} from "react-icons/fa";
import { SiFigma } from "react-icons/si";

// Projects directly mapped from the user's CV
const projects = [
  {
    title: "Task & Analytics Management System",
    icon: FaChartPie,
    desc: "A full-stack Mini ERP & task management platform with JWT auth, CRUD workflows, and interactive analytics dashboards.",
    longDesc:
      "Built with React, TypeScript, Node.js/Express, and MongoDB. Features secure JWT authentication, team productivity analytics, Recharts data visualization (status & priority breakdowns), and a responsive dark burgundy theme.",
    tech: ["React.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/KMDNShyavinda/task-analytics-management-system",
    liveLink: "",
    category: "Full-Stack",
    gradient: "from-rose-600 to-red-700",
    image: "/images/task-analytics.png",
  },
  {
    title: "TimberCalc Pro",
    icon: FaCalculator,
    desc: "A smart timber volume calculator and universal unit conversion system for accurate measurement, inventory & pricing.",
    longDesc:
      "Enables accurate cubic volume calculations, multi-unit conversions (CFT, m³, CF, Kg), timber species pricing management, and calculation history tracking tailored for timber businesses and industrial supply chains.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubLink: "https://github.com/KMDNShyavinda/TimberCalc-Pro",
    liveLink: "",
    category: "Full-Stack",
    gradient: "from-emerald-600 to-teal-600",
    image: "/images/timber-calc.png",
  },
  {
    title: "Integrated Judicial Management System",
    icon: FaGavel,
    desc: "A full-stack judicial case, evidence, and prison management system streamlining the criminal justice lifecycle.",
    longDesc:
      "Streamlines the criminal justice lifecycle through secure digital workflows, role-based access control (Citizen, Police, Prosecutor, Court, Judge, Prison), digital evidence handling, and automated case tracking from incident filing to inmate release.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubLink: "https://github.com/KMDNShyavinda/integrated-judicial-management-system",
    liveLink: "",
    category: "Full-Stack",
    gradient: "from-blue-600 to-indigo-600",
    image: "/images/judicial-system.png",
  },
  {
    title: "Hotel Management System",
    icon: FaHotel,
    desc: "A full-stack web application handling reservations, room availability, customer records, and billing.",
    longDesc:
      "Developed a full-stack system streamlining hotel administration. Features complete CRUD operations with a MongoDB backend, custom dashboards, and user-friendly forms that reduce manual booking errors and improve operations.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubLink: "https://github.com/KMDNShyavinda/hotelManagement",
    liveLink: "",
    category: "Full-Stack",
    gradient: "from-purple-500 to-pink-600",
    image: "/images/hotel-management.png",
  },
  {
    title: "University Event Management System",
    icon: FaCalendarAlt,
    desc: "A web-based platform for managing university events, registrations, scheduling, and attendance tracking.",
    longDesc:
      "Features a structured PostgreSQL database schema to ensure data integrity across concurrent events. Allows administrators to easily manage events and generate attendance reports for post-event record-keeping.",
    tech: ["Python", "Node.js", "PostgreSQL"],
    githubLink: "https://github.com/KMDNShyavinda/University-Event-Management-System",
    liveLink: "",
    category: "Web App",
    gradient: "from-blue-500 to-indigo-600",
    image: "/images/event-management.png",
  },
  {
    title: "SafeDose-MedGuide",
    icon: FaPills,
    desc: "A web platform for safe medication dosage management, prescription tracking, and guidance.",
    longDesc:
      "Designed a reliable database for drug information and patient records. Integrates dosage calculation, safety alerts, and report generation to support clinical decisions and reduce dosage errors.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubLink: "https://github.com/KMDNShyavinda/safeDose-MedGuide",
    liveLink: "",
    category: "Healthcare",
    gradient: "from-green-500 to-teal-600",
    image: "/images/safedose.png",
  },
  {
    title: "Sri Lanka Railway Mobile UI Design",
    icon: SiFigma,
    desc: "A responsive, user-friendly mobile prototype design for a railway ticket booking system.",
    longDesc:
      "Applied modern UI/UX principles, including accessibility standards, visual hierarchies, and consistent design patterns, to deliver a polished Figma prototype demonstrating end-to-end booking flows across screens.",
    tech: ["Figma", "UI/UX Design"],
    githubLink: "https://github.com/KMDNShyavinda/Sri-Lanka-Railway-website-UI-for-Mobile-Clone-design-via-Figma",
    liveLink: "",
    category: "UI/UX Design",
    gradient: "from-orange-500 to-amber-500",
    image: "/images/railway-design.png",
  },
];

const ProjectCard = ({ project, index, hoveredIndex, setHoveredIndex }) => {
  const Icon = project.icon;
  const isHovered = hoveredIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group relative"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="relative bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200/60 dark:border-gray-800/80 h-full flex flex-col hover:border-blue-500/20 dark:hover:border-cyan-500/20">
        {/* Soft gradient border glow on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none`}
        />

        <div className="relative z-10 p-6 flex flex-col flex-1">
          {/* Visual header (image or icon on gradient) */}
          <div
            className={`relative overflow-hidden rounded-2xl mb-6 h-44 flex items-center justify-center bg-gradient-to-br ${project.gradient} shadow-inner`}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <Icon className="text-6xl text-white/90 drop-shadow-md transition-transform duration-500 group-hover:scale-105" />
            )}

            <div className="absolute top-3 left-3 px-3 py-1 bg-black/20 backdrop-blur-md text-white text-xs font-semibold rounded-lg">
              {project.category}
            </div>

            {project.isPlaceholder && (
              <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-100 text-xs font-semibold rounded-lg">
                Sample
              </div>
            )}

            {/* Hover overlay with visual click support */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/25 opacity-0 group-hover:opacity-100 transition-all duration-300">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                  className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-colors border border-white/10"
                >
                  <FaEye className="text-lg" />
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${project.title} on GitHub`}
                className="p-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-colors border border-white/10"
              >
                <FaCode className="text-lg" />
              </a>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4 flex-1">
            <h3 className="text-xl font-bold text-gray-950 dark:text-white flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed">
              {project.desc}
            </p>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                isHovered ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-500 dark:text-gray-500 text-xs leading-relaxed pt-3 border-t border-gray-100 dark:border-gray-800/80">
                {project.longDesc}
              </p>
            </div>

            <div className="space-y-2.5">
              <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-gray-50 dark:bg-gray-850 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-lg border border-gray-200/50 dark:border-gray-800/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div
            className={`grid gap-3 mt-6 ${
              project.liveLink ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`group/btn relative inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden`}
            >
              <span className="relative flex items-center justify-center gap-2 z-10 text-sm">
                <FaGithub />
                Code
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </span>
            </a>

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn relative inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden`}
              >
                <span className="relative flex items-center justify-center gap-2 z-10 text-sm">
                  <FaExternalLinkAlt />
                  Live Demo
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ShowcaseSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-gray-900/30 relative overflow-hidden border-b border-gray-100 dark:border-gray-800/40"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/5 to-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/5 to-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl mb-6">
            <FaCodeBranch className="text-3xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            A selection of full-stack applications I've built, spanning
            campus tools, healthcare, and data-driven dashboards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-md border border-gray-200/50 dark:border-gray-800/80 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-3">
              Explore More of My Work
            </h3>
            <p className="text-gray-650 dark:text-gray-455 mb-8 max-w-2xl mx-auto text-sm font-medium">
              Discover additional projects, contributions, and professional
              experiences across various platforms.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-6 py-3.5 border border-gray-250 dark:border-gray-850 hover:bg-gray-55 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-150 font-semibold rounded-xl shadow-sm hover:shadow-md transform hover:scale-[1.01] transition-all duration-300"
              >
                <FaGithub className="text-lg mr-3" />
                <span>GitHub Profile</span>
                <FaExternalLinkAlt className="ml-2 text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-6 py-3.5 border border-blue-200 dark:border-blue-900/40 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 text-blue-600 dark:text-blue-400 font-semibold rounded-xl shadow-sm hover:shadow-md transform hover:scale-[1.01] transition-all duration-300"
              >
                <FaLinkedin className="text-lg mr-3" />
                <span>LinkedIn Profile</span>
                <FaExternalLinkAlt className="ml-2 text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
