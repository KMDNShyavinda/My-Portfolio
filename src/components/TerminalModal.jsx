import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../constants";
import { useTheme } from "../context/ThemeContext";
import { FaTerminal, FaTimes, FaMinus, FaExpandAlt } from "react-icons/fa";

const WELCOME_BANNER = `
  ███████╗██╗  ██╗██╗   ██╗██████╗  █████╗ ██╗   ██╗██╗███╗   ██╗██████╗  █████╗ 
  ██╔════╝██║  ██║╚██╗ ██╔╝██╔══██╗██╔══██╗██║   ██║██║████╗  ██║██╔══██╗██╔══██╗
  ███████╗███████║ ╚████╔╝ ██████╔╝███████║██║   ██║██║██╔██╗ ██║██║  ██║███████║
  ╚════██║██╔══██║  ╚██╔╝  ██╔══██╗██╔══██║╚██╗ ██╔╝██║██║╚██╗██║██║  ██║██╔══██║
  ███████║██║  ██║   ██║   ██████╔╝██║  ██║ ╚████╔╝ ██║██║ ╚████║██████╔╝██║  ██║
  ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝
  --------------------------------------------------------------------------------
  Welcome to Dinuka Shyavinda's Developer CLI v2.0!
  Type 'help' to see the list of available commands.
  Type 'matrix' for a digital rain surprise!
  --------------------------------------------------------------------------------
`;

const TerminalModal = ({ isOpen, onClose, onOpenResume }) => {
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState([
    { id: 1, type: "banner", text: WELCOME_BANNER },
  ]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMatrix, setIsMatrix] = useState(false);
  const { theme, setTheme } = useTheme();

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const newLogs = [...logs, { id: Date.now(), type: "command", text: raw }];
    setHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    const cmd = raw.toLowerCase();

    switch (cmd) {
      case "help":
        newLogs.push({
          id: Date.now() + 1,
          type: "output",
          text: `
Available Commands:
  • help       : Display this command list
  • bio        : Show biography & educational background
  • skills     : Output categorized technical skills
  • projects   : View featured software engineering projects
  • github     : Show GitHub statistics & profile link
  • contact    : Get email, phone, location & social links
  • resume     : Launch the interactive PDF Resume Previewer
  • theme      : Toggle between Dark and Light mode
  • matrix     : Toggle Digital Rain Easter Egg mode
  • clear      : Clear terminal screen
  • whoami     : Display current session user identity
  • sudo       : Administrative access check
  • exit       : Close terminal window
`,
        });
        break;

      case "bio":
      case "about":
        newLogs.push({
          id: Date.now() + 1,
          type: "output",
          text: `
Name        : ${personalInfo.name}
Role        : Full-Stack Engineer / CS Undergraduate
University  : ${personalInfo.university}
Degree      : ${personalInfo.degree}
Location    : ${personalInfo.location}
Bio         : Passionate Full-Stack Engineer specializing in Java, Spring Boot, React, DevOps, Cloud (AWS), and RESTful microservice architectures.
`,
        });
        break;

      case "skills":
        newLogs.push({
          id: Date.now() + 1,
          type: "output",
          text: `
TECHNICAL SKILLS & TOOLKIT:
--------------------------------------------------------------------------------
[Core Languages]  : Java, JavaScript (ES6+), TypeScript, Python, HTML5, CSS3
[Backend & Frameworks]: Spring Boot, Maven, REST APIs, Node.js, Express.js, WebSockets
[Cloud & DevOps]  : AWS (EC2/S3), Docker, Kubernetes, Jenkins, GitLab CI, GitHub Actions
[Databases]       : PostgreSQL, MongoDB, MySQL
[Testing & Tools] : Postman API Testing, Swagger OpenAPI, Git, Linux CLI, Vite
--------------------------------------------------------------------------------
`,
        });
        break;

      case "projects":
        newLogs.push({
          id: Date.now() + 1,
          type: "output",
          text: `
FEATURED PROJECTS:
--------------------------------------------------------------------------------
1. Maison Ceylon POS      - Full-stack Restaurant POS, Spring Boot, WebSockets & KDS
2. Judicial Management    - Full-stack case, evidence & prison management system
3. TimberCalc Pro         - Smart timber volume calculator & unit converter
4. Weekly Report Generator- MERN team dashboard with Gemini AI integration
5. Task Analytics System  - Mini ERP dashboard with JWT auth & Recharts analytics
6. SafeDose MedGuide      - Clinical medication dosage & safety alert platform
--------------------------------------------------------------------------------
Type 'projects' on the portfolio page or click project cards for full case studies!
`,
        });
        break;

      case "github":
        newLogs.push({
          id: Date.now() + 1,
          type: "output",
          text: `
GitHub Profile : ${personalInfo.github}
Username       : KMDNShyavinda
Repositories   : 10+ Public Repos (Full-Stack, Spring Boot, React, Node.js)
Status         : Active Contributor
`,
        });
        break;

      case "contact":
        newLogs.push({
          id: Date.now() + 1,
          type: "output",
          text: `
CONTACT DETAILS:
--------------------------------------------------------------------------------
Email    : ${personalInfo.email}
Phone    : ${personalInfo.phone}
Location : ${personalInfo.location}
LinkedIn : ${personalInfo.linkedin}
GitHub   : ${personalInfo.github}
--------------------------------------------------------------------------------
`,
        });
        break;

      case "resume":
        newLogs.push({
          id: Date.now() + 1,
          type: "output",
          text: "Opening interactive PDF Resume Previewer Modal...",
        });
        onClose();
        if (onOpenResume) onOpenResume();
        break;

      case "theme":
        newLogs.push({
          id: Date.now() + 1,
          type: "output",
          text: "Portfolio is permanently locked to DARK MODE 🌙 for optimal engineering aesthetics.",
        });
        break;

      case "matrix":
        setIsMatrix(!isMatrix);
        newLogs.push({
          id: Date.now() + 1,
          type: "output",
          text: !isMatrix
            ? "🟢 Entering Digital Matrix Rain Mode... (Type 'matrix' to exit)"
            : "🔴 Exiting Matrix Rain Mode.",
        });
        break;

      case "clear":
      case "cls":
        setLogs([]);
        setInputVal("");
        return;

      case "whoami":
        newLogs.push({
          id: Date.now() + 1,
          type: "output",
          text: "guest@shyavinda-portfolio ~ (Authorized Developer Visitor)",
        });
        break;

      case "sudo":
        newLogs.push({
          id: Date.now() + 1,
          type: "output",
          text: "Permission Granted: Dinuka Shyavinda is verified as a high-performing Full-Stack Engineer! 🚀",
        });
        break;

      case "exit":
      case "close":
      case "quit":
        onClose();
        break;

      default:
        newLogs.push({
          id: Date.now() + 1,
          type: "error",
          text: `Command not found: '${raw}'. Type 'help' for available commands.`,
        });
        break;
    }

    setLogs(newLogs);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx =
          historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(history[nextIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= history.length) {
          setHistoryIndex(-1);
          setInputVal("");
        } else {
          setHistoryIndex(nextIdx);
          setInputVal(history[nextIdx] || "");
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 md:p-6 overflow-hidden font-mono">
        {/* Glassmorphic Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          aria-hidden="true"
        />

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className={`relative w-full max-w-4xl h-[80vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border z-10 transition-colors duration-300 ${
            isMatrix
              ? "bg-black text-green-400 border-green-500/50 shadow-green-500/20"
              : "bg-gray-950 text-gray-100 border-gray-800 shadow-blue-500/10"
          }`}
        >
          {/* Mac-Style Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-900/90 border-b border-gray-800 select-none">
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center group"
                title="Close"
              >
                <FaTimes className="text-[8px] text-red-950 opacity-0 group-hover:opacity-100" />
              </button>
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 flex items-center justify-center">
                <FaMinus className="text-[8px] text-yellow-950 opacity-0" />
              </div>
              <div className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center">
                <FaExpandAlt className="text-[8px] text-green-950 opacity-0" />
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
              <FaTerminal className="text-blue-400" />
              <span>shyavinda@portfolio:~ (zsh)</span>
            </div>

            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hidden sm:block">
              CLI v2.0
            </div>
          </div>

          {/* Terminal Output Log Area */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3 font-mono text-xs md:text-sm leading-relaxed cursor-text"
          >
            {logs.map((log) => {
              if (log.type === "banner") {
                return (
                  <pre
                    key={log.id}
                    className={`font-mono text-[10px] md:text-xs overflow-x-auto leading-tight ${
                      isMatrix ? "text-green-400" : "text-cyan-400"
                    }`}
                  >
                    {log.text}
                  </pre>
                );
              }
              if (log.type === "command") {
                return (
                  <div key={log.id} className="flex items-center gap-2 font-bold">
                    <span className={isMatrix ? "text-green-500" : "text-blue-400"}>
                      shyavinda@portfolio:~$
                    </span>
                    <span className="text-white">{log.text}</span>
                  </div>
                );
              }
              if (log.type === "error") {
                return (
                  <div key={log.id} className="text-red-400 whitespace-pre-wrap">
                    {log.text}
                  </div>
                );
              }
              return (
                <div
                  key={log.id}
                  className={`whitespace-pre-wrap ${
                    isMatrix ? "text-green-300" : "text-gray-300"
                  }`}
                >
                  {log.text}
                </div>
              );
            })}

            {/* Prompt Input Line */}
            <div className="flex items-center gap-2 pt-2">
              <span className={`font-bold ${isMatrix ? "text-green-500" : "text-blue-400"}`}>
                shyavinda@portfolio:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white font-mono focus:outline-none caret-blue-400"
                autoFocus
              />
            </div>
            <div ref={terminalEndRef} />
          </div>

          {/* Footer Keyboard Guide */}
          <div className="px-4 py-2 border-t border-gray-800 bg-gray-900/60 text-[11px] text-gray-500 flex justify-between items-center select-none">
            <span>
              Type <span className="text-blue-400 font-bold">'help'</span> for list of commands
            </span>
            <span>Press <kbd className="px-1 bg-gray-800 rounded">ESC</kbd> to exit</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TerminalModal;
