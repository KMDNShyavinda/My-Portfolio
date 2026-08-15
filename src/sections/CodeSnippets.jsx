import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { snippetsData } from "../constants";
import { FaCode, FaCopy, FaCheck, FaTerminal, FaCheckCircle, FaFileCode } from "react-icons/fa";

const CodeSnippets = () => {
  const [activeSnippetId, setActiveSnippetId] = useState(snippetsData[0].id);
  const [copied, setCopied] = useState(false);

  const activeSnippet =
    snippetsData.find((s) => s.id === activeSnippetId) || snippetsData[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  // Basic syntax highlighter helper for rendering code cleanly
  const renderFormattedCode = (codeText) => {
    const lines = codeText.split("\n");
    return lines.map((line, index) => (
      <div key={index} className="table-row font-mono text-xs md:text-sm leading-relaxed">
        {/* Line Number */}
        <span className="table-cell select-none text-right pr-4 md:pr-6 text-gray-500/70 font-mono text-[11px] md:text-xs">
          {index + 1}
        </span>

        {/* Code Content */}
        <span className="table-cell whitespace-pre text-gray-200">
          {line.split(/(import|export|from|const|let|var|return|try|catch|if|else|async|await|function|new|default|timeout|clearTimeout|setTimeout)/g).map((token, idx) => {
            if (["import", "export", "from", "const", "let", "var", "return", "try", "catch", "if", "else", "async", "await", "function", "new", "default"].includes(token)) {
              return <span key={idx} className="text-pink-400 font-semibold">{token}</span>;
            }
            if (token.includes("'") || token.includes('"') || token.includes("`")) {
              return <span key={idx} className="text-emerald-300">{token}</span>;
            }
            if (token.startsWith("//") || token.startsWith("/*") || token.startsWith("*")) {
              return <span key={idx} className="text-gray-500 italic">{token}</span>;
            }
            return <span key={idx}>{token}</span>;
          })}
        </span>
      </div>
    ));
  };

  return (
    <section
      id="snippets"
      className="py-24 bg-gray-900/60 relative overflow-hidden border-b border-gray-800/40"
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FaCode className="text-xs" /> Clean Code & Architecture
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent tracking-tight">
            Interactive Code Snippets
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4 rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto font-medium text-base md:text-lg leading-relaxed">
            Clean, reusable React hooks, backend middleware, and utility functions built with best practices.
          </p>
        </motion.div>

        {/* IDE Outer Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto rounded-3xl border border-gray-800 bg-[#0d1117] shadow-2xl overflow-hidden backdrop-blur-xl"
        >
          {/* IDE Window Titlebar & Tabs */}
          <div className="bg-[#161b22] border-b border-gray-800/80 px-4 pt-3 flex flex-wrap items-center justify-between gap-3 select-none">
            {/* Window Dots & Info */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-gray-500 hidden sm:inline-flex items-center gap-1.5">
                <FaTerminal className="text-cyan-500" /> developer-workspace
              </span>
            </div>

            {/* File Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar scrollbar-none pt-1">
              {snippetsData.map((snippet) => {
                const isActive = snippet.id === activeSnippet.id;
                return (
                  <button
                    key={snippet.id}
                    onClick={() => {
                      setActiveSnippetId(snippet.id);
                      setCopied(false);
                    }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-t-xl text-xs font-mono font-medium transition-all duration-200 border-t border-x ${
                      isActive
                        ? "bg-[#0d1117] text-cyan-400 border-gray-800 border-b-transparent shadow-sm"
                        : "bg-[#161b22] text-gray-400 border-transparent hover:text-gray-200 hover:bg-[#1f242d]"
                    }`}
                  >
                    <FaFileCode className={isActive ? "text-cyan-400" : "text-gray-500"} />
                    {snippet.filename}
                  </button>
                );
              })}
            </div>
          </div>

          {/* IDE Body */}
          <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-800/80 min-h-[420px]">
            {/* Code Content Area (2 Columns) */}
            <div className="lg:col-span-2 p-4 md:p-6 flex flex-col justify-between relative bg-[#0d1117]">
              {/* Copy Code Floating Action Button */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-800/50">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-mono font-semibold uppercase">
                    {activeSnippet.category}
                  </span>
                  <span className="text-xs text-gray-400 font-mono hidden sm:inline">
                    {activeSnippet.filename}
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all duration-300 border ${
                    copied
                      ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-sm"
                      : "bg-gray-800/80 hover:bg-gray-700/80 border-gray-700 text-gray-300"
                  }`}
                  title="Copy code to clipboard"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <FaCopy className="text-gray-400" /> Copy Code
                    </>
                  )}
                </button>
              </div>

              {/* Code Display Frame */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSnippet.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="table w-full font-mono overflow-x-auto py-2"
                >
                  {renderFormattedCode(activeSnippet.code)}
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 pt-3 border-t border-gray-800/40 text-[11px] font-mono text-gray-500 flex justify-between">
                <span>UTF-8 • JavaScript</span>
                <span>Ln 1, Col 1</span>
              </div>
            </div>

            {/* Snippet Insights Sidebar (1 Column) */}
            <div className="p-6 bg-[#161b22]/60 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {activeSnippet.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-normal">
                  {activeSnippet.description}
                </p>

                <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 font-mono">
                  Key Technical Highlights
                </h4>

                <ul className="space-y-3 mb-6">
                  {activeSnippet.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-medium">
                      <FaCheckCircle className="text-emerald-400 text-sm shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Note */}
              <div className="p-3.5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
                <p className="text-[11px] text-cyan-300 font-mono leading-relaxed">
                  💡 <strong>Engineering Note:</strong> Built with strict error boundaries and production-ready performance considerations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeSnippets;
