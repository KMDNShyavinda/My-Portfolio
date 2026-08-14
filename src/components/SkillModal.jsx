import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaCheckCircle,
  FaCogs,
  FaLaptopCode,
  FaRocket,
  FaStar,
} from "react-icons/fa";

const skillDetailsMap = {
  Java: {
    summary:
      "Core backend programming language used to develop robust, object-oriented, enterprise-grade applications and microservices.",
    subTools: [
      "Spring Boot & Spring Security",
      "Hibernate / JPA ORM",
      "Apache Maven Build Management",
      "Multithreading & Concurrency",
      "Object-Oriented Programming (OOP)",
      "Java Streams API & Lambdas",
    ],
    projectsUsed: ["Maison Ceylon — Restaurant Management System"],
    practicalUse:
      "Designing RESTful APIs, transactional backend logic, database persistence, and secure authentication services.",
  },
  "Spring Boot": {
    summary:
      "Enterprise Java framework for building production-ready RESTful web services, microservices, and WebSockets.",
    subTools: [
      "Spring Data JPA & Hibernate",
      "Spring Security & JWT Authentication",
      "STOMP WebSockets (Real-time Messaging)",
      "Spring MVC & REST Controllers",
      "Application Configuration & Actuator",
    ],
    projectsUsed: ["Maison Ceylon — Restaurant Management System"],
    practicalUse:
      "Architecting microservices, processing transactional orders, real-time WebSocket communication, and DB integration.",
  },
  AWS: {
    summary:
      "Cloud platform used for deploying, scaling, and managing cloud infrastructure and server hosting.",
    subTools: [
      "EC2 Virtual Servers",
      "S3 Object Storage",
      "Security Groups & VPC Networking",
      "Elastic IP & Domain Binding",
    ],
    projectsUsed: [
      "Maison Ceylon — Restaurant Management System (Deployed on AWS EC2)",
    ],
    practicalUse:
      "Hosting live production web applications, configuring SSH server instances, and managing cloud storage.",
  },
  Docker: {
    summary:
      "Containerization platform for packaging applications and dependencies into standardized, isolated containers.",
    subTools: [
      "Dockerfile Scripting",
      "Docker Compose Multi-Container Setup",
      "Container Networking & Volumes",
      "Docker Desktop Environment",
    ],
    projectsUsed: [
      "Maison Ceylon POS System",
      "Task & Analytics Management System",
    ],
    practicalUse:
      "Ensuring consistent environment configurations across development, staging, and production servers.",
  },
  Kubernetes: {
    summary:
      "Container orchestration engine for automating deployment, scaling, and management of containerized applications.",
    subTools: [
      "Pods, Services & Deployments",
      "kubectl Command Line Tools",
      "Cluster Management Concepts",
      "Load Balancing & Ingress",
    ],
    projectsUsed: ["Microservices Architecture Projects"],
    practicalUse:
      "Orchestrating container workloads, self-healing deployments, and scaling backend microservices.",
  },
  "React.js": {
    summary:
      "Modern component-based JavaScript library for building responsive, high-performance web user interfaces.",
    subTools: [
      "React Hooks (useState, useEffect, useMemo)",
      "Context API & State Management",
      "Framer Motion Animations",
      "Tailwind CSS Integration",
      "React Router & Axios / Fetch API",
    ],
    projectsUsed: [
      "Maison Ceylon POS",
      "Integrated Judicial System",
      "TimberCalc Pro",
      "Task & Analytics System",
      "Weekly Report Generator",
    ],
    practicalUse:
      "Building glassmorphic user interfaces, stateful dashboards, interactive modals, and real-time frontend components.",
  },
  PostgreSQL: {
    summary:
      "Advanced open-source relational database management system for ACID-compliant transactional data processing.",
    subTools: [
      "Relational Schema Design & FK Constraints",
      "SQL Query Optimization & Indexing",
      "PostgreSQL Triggers & Stored Procedures",
      "Spring Data JPA Integration",
    ],
    projectsUsed: [
      "Maison Ceylon — Restaurant Management System",
      "University Event Management System",
    ],
    practicalUse:
      "Ensuring strict data integrity for transactional billing, event registrations, and concurrent user sessions.",
  },
  MongoDB: {
    summary:
      "NoSQL document database designed for high scalability, flexible JSON-like schemas, and fast document queries.",
    subTools: [
      "Mongoose ODM Schema Modeling",
      "Aggregation Pipelines & Indexes",
      "Document CRUD Workflows",
    ],
    projectsUsed: [
      "Integrated Judicial System",
      "TimberCalc Pro",
      "SafeDose-MedGuide",
      "Hotel Management System",
    ],
    practicalUse:
      "Storing unstructured document data, clinical prescription records, and flexible case management files.",
  },
};

const SkillModal = ({ skill, isOpen, onClose }) => {
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

  if (!isOpen || !skill) return null;

  const { name, level, Icon, color } = skill;
  const details = skillDetailsMap[name] || {
    summary: `${name} is a core technology used in building production software applications.`,
    subTools: ["Core Concepts & Standard API", "Integration & Tooling"],
    projectsUsed: ["Full-Stack & Web Application Portfolio"],
    practicalUse: "Building scalable, maintainable application components.",
  };

  const isBlackIcon = color === "#000000";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 overflow-hidden">
        {/* Glassmorphic Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-gray-200/60 dark:border-gray-800 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3.5 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200/60 dark:border-gray-700">
                <Icon
                  className={`w-8 h-8 ${
                    isBlackIcon ? "text-gray-900 dark:text-white" : ""
                  }`}
                  style={isBlackIcon ? undefined : { color }}
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-950 dark:text-white">
                  {name}
                </h3>
                <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest flex items-center gap-1.5 mt-1">
                  <FaStar className="text-amber-400" /> Skill Proficiency: {level}%
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[70vh] text-gray-700 dark:text-gray-300">
            {/* Animated Proficiency Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-gray-500 dark:text-gray-400">
                <span>Engineering Proficiency Rating</span>
                <span className="text-blue-500 dark:text-cyan-400">{level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${level}%` }}
                  transition={{ duration: 1 }}
                  className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 shadow-sm"
                />
              </div>
            </div>

            {/* Application Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <FaLaptopCode className="text-blue-500" />
                Technology Overview & Role
              </h4>
              <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                {details.summary}
              </p>
            </div>

            {/* Sub-Tools & Concepts */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <FaCogs className="text-indigo-500" />
                Sub-Tools, Libraries & Engineering Concepts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {details.subTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800"
                  >
                    <FaCheckCircle className="text-emerald-500 text-xs shrink-0" />
                    <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Using This Skill */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <FaRocket className="text-rose-500" />
                Portfolio Projects Powered by {name}
              </h4>
              <div className="space-y-2">
                {details.projectsUsed.map((proj, idx) => (
                  <a
                    key={idx}
                    href="#projects"
                    onClick={onClose}
                    className="block p-3.5 bg-blue-50/60 dark:bg-gray-800/40 hover:bg-blue-100/60 dark:hover:bg-gray-800/80 rounded-xl border border-blue-100 dark:border-gray-800 text-xs md:text-sm font-bold text-blue-600 dark:text-cyan-400 transition-colors"
                  >
                    🚀 {proj}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 md:p-5 border-t border-gray-200/60 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/80 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold text-xs rounded-xl transition-all"
            >
              Close Insight Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SkillModal;
