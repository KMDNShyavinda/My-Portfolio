import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hey there! 👋 I'm Dinuka's portfolio assistant. Drop me a message and I'll make sure he gets it!",
      time: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [step, setStep] = useState("name"); // "name" → "email" → "chat"
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens or step changes
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, step]);

  const addBotMessage = (text, delay = 600) => {
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), type: "bot", text, time: new Date() },
      ]);
    }, delay);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), type: "user", text: trimmed, time: new Date() },
    ]);
    setInput("");

    if (step === "name") {
      setSenderName(trimmed);
      setStep("email");
      addBotMessage(`Nice to meet you, ${trimmed}! 😊 What's your email address so Dinuka can get back to you?`);
      return;
    }

    if (step === "email") {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) {
        addBotMessage("Hmm, that doesn't look like a valid email. Could you try again? 📧");
        return;
      }
      setSenderEmail(trimmed);
      setStep("chat");
      addBotMessage(`Perfect! ✅ You can now type your message and I'll send it straight to Dinuka.`);
      return;
    }

    // step === "chat" — Send the message via EmailJS
    setIsSending(true);

    // TODO: Replace with your real EmailJS credentials
    const EMAILJS_CONFIG = {
      SERVICE_ID: "",
      TEMPLATE_ID: "",
      PUBLIC_KEY: "",
    };

    const isConfigured =
      EMAILJS_CONFIG.SERVICE_ID &&
      EMAILJS_CONFIG.TEMPLATE_ID &&
      EMAILJS_CONFIG.PUBLIC_KEY;

    if (isConfigured) {
      try {
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          {
            from_name: senderName,
            from_email: senderEmail,
            message: trimmed,
            to_name: "Dinuka",
          },
          EMAILJS_CONFIG.PUBLIC_KEY
        );
        addBotMessage("Message sent successfully! ✨ Dinuka will get back to you soon. Feel free to send another message!");
      } catch {
        addBotMessage("Oops! Something went wrong sending that. Please try the Contact section below or email directly. 🙏");
      }
    } else {
      // Demo mode — just acknowledge the message
      addBotMessage("Thanks for your message! 💬 Dinuka will review it and get back to you. Want to send another?");
    }
    setIsSending(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const getPlaceholder = () => {
    if (step === "name") return "Enter your name...";
    if (step === "email") return "Enter your email...";
    return "Type a message...";
  };

  return (
    <>
      {/* Floating Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1, y: -3, transition: { type: "spring", stiffness: 400, damping: 15 } }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 border border-blue-400/20 dark:border-cyan-400/10 text-white shadow-lg hover:shadow-[0_8px_25px_-5px_rgba(99,102,241,0.5)] transition-shadow duration-300 flex items-center justify-center"
            aria-label="Open chat"
          >
            <IoChatbubbleEllipsesOutline className="w-6 h-6" />

            {/* Notification pulse dot */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white dark:border-gray-900" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] flex flex-col rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 shadow-2xl shadow-indigo-500/10 dark:shadow-cyan-500/5"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <IoChatbubbleEllipsesOutline className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide">
                    Quick Chat
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                    <span className="text-white/70 text-[11px] font-medium">Online</span>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <FaTimes className="w-3.5 h-3.5 text-white" />
              </motion.button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-[#0c0f1a] scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-800">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed font-medium ${
                      msg.type === "user"
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-br-md shadow-sm"
                        : "bg-white dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 border border-gray-200/60 dark:border-gray-700/60 rounded-bl-md shadow-sm"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p
                      className={`text-[10px] mt-1.5 ${
                        msg.type === "user"
                          ? "text-white/50"
                          : "text-gray-400 dark:text-gray-500"
                      }`}
                    >
                      {formatTime(msg.time)}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator when sending */}
              {isSending && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="bg-white dark:bg-[#0e1225] border-t border-gray-200/50 dark:border-gray-800/50 p-3 shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type={step === "email" ? "email" : "text"}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={getPlaceholder()}
                  disabled={isSending}
                  className="flex-1 bg-gray-100 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60 rounded-full px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-cyan-400/30 focus:border-blue-500/50 dark:focus:border-cyan-400/50 transition-all duration-200 font-medium disabled:opacity-50"
                />
                <motion.button
                  whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 15 } }}
                  whileTap={{ scale: 0.85 }}
                  onClick={handleSend}
                  disabled={!input.trim() || isSending}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 border border-blue-400/20 dark:border-cyan-400/10 text-white flex items-center justify-center shrink-0 shadow-md hover:shadow-[0_4px_15px_-3px_rgba(99,102,241,0.5)] transition-shadow duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-md"
                  aria-label="Send message"
                >
                  <FaPaperPlane className="w-3.5 h-3.5" />
                </motion.button>
              </div>

              {/* Step indicator */}
              <div className="flex items-center justify-center gap-1.5 mt-2">
                {["name", "email", "chat"].map((s, i) => (
                  <div
                    key={s}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      step === s
                        ? "w-6 bg-gradient-to-r from-blue-500 to-cyan-500"
                        : i < ["name", "email", "chat"].indexOf(step)
                        ? "w-3 bg-blue-500/40"
                        : "w-3 bg-gray-300 dark:bg-gray-700"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBox;
