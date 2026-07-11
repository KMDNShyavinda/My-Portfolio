import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaDatabase, FaPlug } from "react-icons/fa";

const services = [
  {
    Icon: FaCode,
    title: "Full-Stack Web Development",
    desc: "Building responsive, modern web applications end-to-end with React, Next.js, Node.js, and Express.js.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    Icon: FaPalette,
    title: "UI/UX Design",
    desc: "Designing clean, intuitive interfaces in Figma that balance usability with a polished, modern look.",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    Icon: FaDatabase,
    title: "Database Design",
    desc: "Structuring and managing relational and NoSQL databases — MongoDB, MySQL, and PostgreSQL — for reliable, scalable apps.",
    gradient: "from-green-500 to-teal-600",
  },
  {
    Icon: FaPlug,
    title: "API Development",
    desc: "Designing and integrating secure, well-documented REST APIs that connect frontend and backend seamlessly.",
    gradient: "from-orange-500 to-red-600",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-gray-900/30 relative overflow-hidden border-b border-gray-100 dark:border-gray-800/40"
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
            What I Can Help With
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            A few areas where I can bring your ideas to life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ Icon, title, desc, gradient }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-6 md:p-7 border border-gray-250/50 dark:border-gray-800/80 shadow-md hover:shadow-xl hover:border-blue-500/20 dark:hover:border-cyan-500/20 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform duration-300`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
