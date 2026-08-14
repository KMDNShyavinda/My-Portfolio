import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaClipboardCheck, FaInfoCircle, FaTimes } from "react-icons/fa";

const Toast = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[150] flex flex-col space-y-3 pointer-events-none max-w-sm w-full px-4">
      <AnimatePresence>
        {toasts.map((toast) => {
          const isCopy = toast.type === "copy";
          const isSuccess = toast.type === "success";

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
              className="pointer-events-auto flex items-center justify-between p-4 rounded-2xl bg-gray-900/90 dark:bg-gray-900/95 text-white border border-gray-800 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center space-x-3 min-w-0 pr-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-base shrink-0 shadow-md">
                  {isCopy ? (
                    <FaClipboardCheck />
                  ) : isSuccess ? (
                    <FaCheckCircle className="text-emerald-400" />
                  ) : (
                    <FaInfoCircle className="text-cyan-300" />
                  )}
                </div>
                <div className="text-xs md:text-sm font-semibold truncate leading-snug">
                  {toast.message}
                </div>
              </div>

              <button
                onClick={() => removeToast(toast.id)}
                className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors shrink-0"
              >
                <FaTimes className="text-xs" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
