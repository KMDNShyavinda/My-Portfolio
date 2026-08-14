import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaLinkedin,
  FaCheckCircle,
  FaUserCircle,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Software Engineering Project Mentor",
    role: "Senior Full-Stack Architect & Academic Lead",
    organization: "SLIIT Faculty of Computing",
    quote:
      "Dinuka demonstrates exceptional full-stack software architecture capabilities. His mastery in building decoupled Spring Boot microservices, WebSockets, and React frontends is outstanding. He writes clean, scalable, and production-ready code.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/kmdnShyavinda/",
    gradient: "from-blue-500 to-indigo-500",
    avatar: null,
  },
  {
    id: 2,
    name: "Full-Stack Project Collaborator",
    role: "Lead Frontend Engineer",
    organization: "Maison Ceylon POS Project",
    quote:
      "Working with Dinuka on the Maison Ceylon POS platform was an absolute pleasure. His deep understanding of WebSockets real-time sync, database optimization in PostgreSQL, and REST API design made complex backend workflows effortless.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/kmdnShyavinda/",
    gradient: "from-cyan-500 to-blue-600",
    avatar: null,
  },
  {
    id: 3,
    name: "DevOps & Cloud Systems Peer",
    role: "Cloud Infrastructure Engineer",
    organization: "SLIIT Campus Network",
    quote:
      "Dinuka's expertise in DevOps pipelines, Docker containerization, AWS EC2 deployment, and Kubernetes orchestration stands out. He consistently delivers high quality software with modern CI/CD practices.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/kmdnShyavinda/",
    gradient: "from-emerald-500 to-teal-600",
    avatar: null,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-white dark:bg-gray-900/30 relative overflow-hidden border-b border-gray-100 dark:border-gray-800/40"
    >
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl mb-4">
            <FaQuoteLeft className="text-3xl bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-950 via-gray-700 to-gray-950 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4">
            Recommendations & Peer Endorsements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Feedback and testimonials from academic mentors, project team leads, and peer collaborators.
          </p>
        </motion.div>

        {/* Carousel Window */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="bg-white/40 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/60 dark:border-gray-800/80 relative"
            >
              {/* Quote Mark Icon */}
              <FaQuoteLeft className="text-5xl text-blue-500/15 dark:text-cyan-400/10 absolute top-8 left-8 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                {/* Rating Stars */}
                <div className="flex gap-1.5 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <FaStar key={i} className="text-base" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed italic">
                  "{current.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${current.gradient} flex items-center justify-center text-white shadow-md font-bold text-lg`}>
                      <FaUserCircle className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-950 dark:text-white flex items-center gap-2">
                        {current.name}
                        <FaCheckCircle className="text-blue-500 text-xs" title="Verified Collaborator" />
                      </h4>
                      <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400">
                        {current.role}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {current.organization}
                      </p>
                    </div>
                  </div>

                  <a
                    href={current.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/70 dark:bg-gray-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-gray-950 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 transition-all duration-300 shadow-sm"
                    title="View LinkedIn Profile"
                  >
                    <FaLinkedin className="text-lg" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-gradient-to-r from-blue-500 to-indigo-500"
                      : "w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="p-3.5 bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-200 shadow-sm"
                aria-label="Previous recommendation"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={handleNext}
                className="p-3.5 bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-200 shadow-sm"
                aria-label="Next recommendation"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
