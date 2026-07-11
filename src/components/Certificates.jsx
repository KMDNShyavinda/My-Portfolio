import { useState } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import { personalInfo } from "../constants";
import {
  FaPython,
  FaJsSquare,
  FaReact,
  FaFigma,
  FaSearch,
  FaCertificate,
  FaCalendarAlt,
  FaAward,
  FaExternalLinkAlt,
  FaStar,
  FaLinkedin,
  FaFreeCodeCamp,
  FaGitAlt,
} from "react-icons/fa";
import { SiCoursera, SiUdemy, SiDocker, SiMysql } from "react-icons/si";

// Sample certificates matching your current skill set. Replace these with
// your real certifications (and add a screenshot/image field) as you earn
// them — each entry is marked as a placeholder in the UI until then.
const certifications = [
  {
    title: "Python for Everybody",
    issuer: "Coursera",
    issueDate: "2025",
    skills: ["Python", "Problem Solving"],
    Icon: FaPython,
    iconColor: "text-yellow-500",
    category: "Programming Language",
    gradient: "from-yellow-400 to-blue-500",
    recent: true,
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issueDate: "2024",
    skills: ["HTML", "CSS", "Responsive Design"],
    Icon: FaFreeCodeCamp,
    iconColor: "text-emerald-500",
    category: "Web Development",
    gradient: "from-emerald-500 to-teal-600",
    recent: true,
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    issueDate: "2024",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
    Icon: FaJsSquare,
    iconColor: "text-yellow-400",
    category: "Programming Language",
    gradient: "from-yellow-500 to-orange-500",
    recent: true,
  },
  {
    title: "React - The Complete Guide",
    issuer: "Udemy",
    issueDate: "2025",
    skills: ["React", "Hooks", "State Management"],
    Icon: FaReact,
    iconColor: "text-sky-500",
    category: "Web Development",
    gradient: "from-sky-500 to-blue-600",
    recent: true,
  },
  {
    title: "Docker for Beginners",
    issuer: "Udemy",
    issueDate: "2025",
    skills: ["Docker", "Containers"],
    Icon: SiDocker,
    iconColor: "text-blue-500",
    category: "DevOps & Tools",
    gradient: "from-blue-500 to-cyan-500",
    recent: false,
  },
  {
    title: "Git & GitHub Fundamentals",
    issuer: "Coursera",
    issueDate: "2024",
    skills: ["Git", "GitHub", "Version Control"],
    Icon: FaGitAlt,
    iconColor: "text-orange-600",
    category: "DevOps & Tools",
    gradient: "from-orange-500 to-red-600",
    recent: false,
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Coursera",
    issueDate: "2024",
    skills: ["Figma", "UI/UX Design"],
    Icon: FaFigma,
    iconColor: "text-pink-500",
    category: "Design",
    gradient: "from-pink-500 to-purple-600",
    recent: false,
  },
  {
    title: "SQL for Data Science",
    issuer: "Coursera",
    issueDate: "2024",
    skills: ["MySQL", "Databases"],
    Icon: SiMysql,
    iconColor: "text-blue-600",
    category: "Programming Language",
    gradient: "from-indigo-500 to-blue-600",
    recent: false,
  },
];

export default function Certificates() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(certifications.map((cert) => cert.category)),
  ];
  const filteredCertifications =
    filter === "All"
      ? certifications
      : certifications.filter((cert) => cert.category === filter);

  return (
    <section
      className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900/30 relative overflow-hidden border-b border-gray-100 dark:border-gray-800/40"
      id="certificates"
    >
      <AnimatedBackground />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/5 to-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-green-400/5 to-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl mb-6">
            <FaCertificate className="text-3xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-6">
            Licenses & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Continuous learning and professional development across
            programming, web development, and design.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-[1.02] ${
                filter === category
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md"
                  : "bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-250/50 dark:border-gray-800/80 hover:border-blue-500/20 dark:hover:border-cyan-500/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {filteredCertifications.map((cert) => {
            const Icon = cert.Icon;
            return (
              <div key={cert.title} className="group relative">
                <div className="relative bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200/50 dark:border-gray-800/80 hover:border-blue-500/20 dark:hover:border-cyan-500/20 h-full flex flex-col justify-between">
                  {/* Recent Badge */}
                  {cert.recent && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-[10px] font-bold rounded-lg shadow-sm">
                        <FaStar className="text-[10px]" />
                        Recent
                      </div>
                    </div>
                  )}

                  <div className="relative z-10 p-6 flex-1 flex flex-col justify-between">
                    {/* Header Section */}
                    <div>
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`flex-shrink-0 p-3 rounded-2xl shadow-md bg-gradient-to-br ${cert.gradient} transform transition-transform duration-300 group-hover:scale-105`}
                        >
                          <Icon className="text-3xl text-white" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5 leading-snug group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                            {cert.title}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 dark:bg-gray-850 rounded-lg mb-4 border border-gray-200/50 dark:border-gray-800/60">
                        <FaAward className="text-xs text-blue-500 dark:text-cyan-400" />
                        <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                          {cert.category}
                        </span>
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-2 mb-6 text-gray-500 dark:text-gray-400 font-semibold text-xs">
                        <FaCalendarAlt className="text-xs" />
                        <span>Issued {cert.issueDate}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2.5 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800/80">
                      <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block">
                        Skills Gained
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 bg-gray-55 dark:bg-gray-850 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-lg border border-gray-200/50 dark:border-gray-800/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`h-1 bg-gradient-to-r ${cert.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-md border border-gray-200/50 dark:border-gray-800/80 overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl mb-6">
                <FaSearch className="text-2xl text-blue-500 dark:text-cyan-400" />
              </div>

              <h3 className="text-3xl font-bold text-gray-950 dark:text-white mb-4">
                Explore My Complete Profile
              </h3>

              <p className="text-gray-605 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed text-sm font-medium">
                Discover all my certifications, professional achievements, and
                continuous learning journey across various platforms.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="relative flex items-center gap-3">
                    <FaLinkedin className="text-xl" />
                    <span className="text-base">View All Certifications</span>
                    <FaExternalLinkAlt className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center px-6 py-3.5 border border-gray-250 dark:border-gray-850 hover:bg-gray-55 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-150 font-semibold rounded-xl shadow-sm hover:shadow-md transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="relative flex items-center gap-3">
                    <FaCertificate className="text-lg" />
                    <span className="text-base">Get In Touch</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
