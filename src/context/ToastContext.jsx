import React, { createContext, useContext, useState, useCallback } from "react";
import Toast from "../components/Toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "copy", duration = 3000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const copyToClipboard = useCallback(
    (text, label = "Text") => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            showToast(`📋 Copied ${label} to clipboard! (${text})`, "copy");
          })
          .catch(() => {
            showToast(`Failed to copy ${label}`, "info");
          });
      } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showToast(`📋 Copied ${label} to clipboard!`, "copy");
      }
    },
    [showToast]
  );

  return (
    <ToastContext.Provider value={{ showToast, copyToClipboard }}>
      {children}
      <Toast toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
