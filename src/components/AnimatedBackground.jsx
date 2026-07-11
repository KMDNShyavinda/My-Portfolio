import React from "react";
import { motion } from "framer-motion";

// Lightweight decorative background: animated grid lines, dots, and shapes.
// Note: this is pure CSS/SVG via Framer Motion, not actual WebGL/3D —
// keep element counts modest since it renders on several sections at once,
// and it automatically respects the user's prefers-reduced-motion setting
// (see the media query in index.css) so motion-sensitive visitors get a
// static version.
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-[1px] bg-slate-300/10 dark:bg-slate-800/10"
            style={{ top: `${i * 13}%` }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-[1px] bg-slate-300/10 dark:bg-slate-800/10"
            style={{ left: `${i * 13}%` }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-500/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`tri-${i}`}
            className="absolute w-10 h-10"
            style={{ left: `${15 + i * 30}%`, top: `${20 + i * 25}%` }}
            animate={{ rotate: [0, 180, 360], y: [0, -15, 0] }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <div className="w-full h-full border-l-[1px] border-b-[1px] border-blue-500/10 dark:border-slate-800/30"></div>
          </motion.div>
        ))}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`sq-${i}`}
            className="absolute w-8 h-8"
            style={{ right: `${15 + i * 25}%`, top: `${30 + i * 20}%` }}
            animate={{ rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            <div className="w-full h-full border-[1px] border-purple-500/10 dark:border-slate-800/30 rounded-sm"></div>
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
