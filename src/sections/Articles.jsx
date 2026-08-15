import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { articlesData } from "../constants";
import { FaBookOpen, FaClock, FaCalendarAlt, FaTimes, FaArrowRight, FaTag } from "react-icons/fa";

const categories = ["All", "Frontend", "Backend", "Security", "Architecture"];

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles =
    activeCategory === "All"
      ? articlesData
      : articlesData.filter((art) => art.category === activeCategory);

  return (
    <section
      id="articles"
      className="py-24 bg-gray-50/50 dark:bg-gray-900/40 relative overflow-hidden border-b border-gray-100 dark:border-gray-800/40"
    >
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FaBookOpen className="text-xs" /> Technical Writing & Insights
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            Engineering Articles & Notes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium text-base md:text-lg leading-relaxed">
            Exploring modern web performance, full-stack architecture, API resilience, and software security.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md shadow-cyan-500/20 scale-105"
                    : "bg-white/60 dark:bg-gray-800/40 text-gray-600 dark:text-gray-400 border border-gray-200/60 dark:border-gray-800 hover:border-cyan-500/40 hover:text-cyan-400"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white/70 dark:bg-gray-800/40 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-gray-200/60 dark:border-gray-800/80 shadow-lg hover:shadow-2xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Banner Gradient Badge & Meta */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${article.gradient} shadow-sm`}
                  >
                    {article.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-gray-400" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-cyan-500 dark:text-cyan-400" /> {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>

                {/* Article Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-normal">
                  {article.excerpt}
                </p>

                {/* Article Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-900/60 text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-800"
                    >
                      <FaTag className="text-[9px] text-cyan-500/70" /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-400">
                  By {article.author}
                </span>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-500 dark:text-cyan-400 group-hover:translate-x-1 transition-transform duration-300"
                >
                  Read Article <FaArrowRight className="text-xs" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Interactive Article Reading Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 md:p-10 shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Close article modal"
              >
                <FaTimes className="text-lg" />
              </button>

              {/* Header Info */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${selectedArticle.gradient}`}
                  >
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {selectedArticle.readTime} • {selectedArticle.date}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3">
                  {selectedArticle.title}
                </h2>

                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Written by <span className="text-cyan-500 font-semibold">{selectedArticle.author}</span>
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 dark:bg-gray-800 mb-6" />

              {/* Article Content */}
              <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed space-y-4 font-normal">
                {selectedArticle.content
                  .trim()
                  .split("\n\n")
                  .map((paragraph, idx) => {
                    if (paragraph.startsWith("### ")) {
                      return (
                        <h3
                          key={idx}
                          className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mt-6 mb-2 text-cyan-500 dark:text-cyan-400"
                        >
                          {paragraph.replace("### ", "")}
                        </h3>
                      );
                    }
                    return <p key={idx}>{paragraph}</p>;
                  })}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm shadow-md hover:scale-105 transition-transform"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Articles;
