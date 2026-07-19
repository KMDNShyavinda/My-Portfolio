import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

/**
 * Tawk.to Live Chat Integration (with custom trigger button)
 *
 * The default Tawk.to widget is hidden. Instead, our own premium
 * floating button opens/closes the Tawk.to chat window.
 */

const TAWK_PROPERTY_ID = "6a5d15d4aa83a11d48ca4eb9";
const TAWK_WIDGET_ID = "1jttpqid3";

const TawkTo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize Tawk.to API object
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const initializeTawk = () => {
      setIsLoaded(true);
      if (window.Tawk_API.hideWidget) {
        window.Tawk_API.hideWidget();
      }
    };

    // Check if already loaded to prevent race conditions
    if (window.Tawk_API.hideWidget) {
      initializeTawk();
    } else {
      window.Tawk_API.onLoad = initializeTawk;
    }

    // Also hide default bubble when chat window is minimized by user
    window.Tawk_API.onChatMinimized = () => {
      if (window.Tawk_API.hideWidget) {
        window.Tawk_API.hideWidget();
      }
    };

    // Check if script is already present in head
    const existingScript = document.querySelector(`script[src*="embed.tawk.to"]`);
    let script = existingScript;

    if (!existingScript) {
      // Inject the Tawk.to script
      script = document.createElement("script");
      script.async = true;
      script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.head.appendChild(script);
    }

    return () => {
      // Only clean up script if we created it and it's present
      if (!existingScript && script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleToggle = () => {
    if (!window.Tawk_API) return;
    if (window.Tawk_API.isChatMaximized()) {
      window.Tawk_API.minimize();
    } else {
      window.Tawk_API.maximize();
    }
  };

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{
            scale: 1.1,
            y: -3,
            transition: { type: "spring", stiffness: 400, damping: 15 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={handleToggle}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 border border-blue-400/20 dark:border-cyan-400/10 text-white shadow-lg hover:shadow-[0_8px_25px_-5px_rgba(99,102,241,0.5)] transition-shadow duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Open live chat"
        >
          <IoChatbubbleEllipsesOutline className="w-6 h-6" />

          {/* Notification pulse */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white dark:border-gray-900" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default TawkTo;
