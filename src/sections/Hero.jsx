import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

// Interleave each rotating role with a 2s pause for react-type-animation's sequence prop.
const typingSequence = personalInfo.taglineRoles.flatMap((role) => [
  role,
  2000,
]);

const quickStats = [
  { number: "4+", label: "Projects" },
  { number: "15+", label: "Tech Stack" },
  { number: "3rd Year", label: "Undergraduate" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative bg-gradient-to-br from-gray-50 via-gray-100/50 to-gray-200 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 overflow-hidden pt-16"
    >
      {/* 3D Dot Animation Background */}
      <div className="absolute inset-0">
        {/* Animated dots */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-500/20 dark:bg-cyan-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Background gradient elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/5 dark:bg-cyan-600/5 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          {/* Profile Image - Modern clean developer card frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0 -translate-y-6 lg:-translate-y-16 relative group"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.03 }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 aspect-square cursor-pointer"
            >
              {/* Dynamic Pulsing Background Glow */}
              <motion.div 
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-400/10 rounded-full blur-3xl pointer-events-none" 
              />
              
              {/* Image Frame Container */}
              <div className="relative w-full h-full rounded-full border border-gray-200/80 dark:border-gray-800/80 bg-white/80 dark:bg-gray-900/80 p-3 shadow-2xl transition-all duration-500 group-hover:border-blue-500/40 dark:group-hover:border-cyan-400/40 overflow-hidden backdrop-blur-md">
                {/* Glow ring effect inside the frame on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="w-full h-full bg-gray-50 dark:bg-gray-950 rounded-full overflow-hidden relative">
                  <img
                    src={import.meta.env.BASE_URL + "images/my.png"}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback */}
                  <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full">
                    <span className="text-4xl md:text-5xl font-bold text-white font-mono">
                      {personalInfo.initials}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight"
            >
              <span className="block text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 text-gray-500 dark:text-gray-400 font-semibold tracking-normal font-sans">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent font-bold">
                  {personalInfo.name}
                </span>
              </span>
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                <TypeAnimation
                  sequence={typingSequence}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg lg:text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-medium"
            >
              Passionate about building modern web applications and
              continuously learning new technologies. Currently pursuing
              Computer Science at {personalInfo.university}.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href={personalInfo.cvPath}
                download={personalInfo.cvDownloadName}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 text-white px-6 py-3.5 rounded-xl font-semibold text-base shadow-md hover:shadow-indigo-500/10 hover:shadow-lg transition-all duration-350 text-center"
              >
                📄 Download CV
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 px-6 py-3.5 rounded-xl font-semibold text-base hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-350 text-center"
              >
                🚀 View Projects
              </motion.a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-4 mt-10 max-w-md mx-auto lg:mx-0"
            >
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3.5 bg-white/40 dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-800/50 rounded-2xl backdrop-blur-sm hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-300"
                >
                  <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 dark:text-gray-500"
        >
          <span className="text-xs font-semibold mb-1 uppercase tracking-wider">Scroll Down</span>
          <div className="w-5 h-8 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1 h-2 bg-gray-300 dark:bg-gray-700 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
