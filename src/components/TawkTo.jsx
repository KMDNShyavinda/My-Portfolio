import { useEffect } from "react";

/**
 * Tawk.to Live Chat Integration
 *
 * HOW TO SET UP:
 * 1. Go to https://www.tawk.to/ and create a FREE account
 * 2. Add your website (e.g. your-portfolio-domain.com)
 * 3. Go to Administration → Channels → Chat Widget
 * 4. In the "Direct Chat Link" you'll see a URL like:
 *    https://tawk.to/chat/PROPERTY_ID/WIDGET_ID
 * 5. Copy those two IDs and paste them below
 *
 * FEATURES (all FREE):
 * - Real-time two-way chat with visitors
 * - Reply from Tawk.to Dashboard, Desktop App, or Mobile App (iOS/Android)
 * - Chat history and visitor tracking
 * - Canned responses / shortcuts
 * - File sharing
 * - Offline messaging (visitors can leave messages when you're away)
 * - Customizable widget appearance (matches your site theme from Tawk.to dashboard)
 */

// ⚠️ REPLACE THESE WITH YOUR REAL TAWK.TO IDs
const TAWK_PROPERTY_ID = "6a5d15d4aa83a11d48ca4eb9";
const TAWK_WIDGET_ID = "1jttpqid3";

const TawkTo = () => {
  useEffect(() => {
    // Don't load if IDs aren't configured
    if (
      TAWK_PROPERTY_ID === "YOUR_PROPERTY_ID" ||
      TAWK_WIDGET_ID === "YOUR_WIDGET_ID"
    ) {
      console.warn(
        "⚠️ Tawk.to: Please replace TAWK_PROPERTY_ID and TAWK_WIDGET_ID in src/components/TawkTo.jsx with your real Tawk.to credentials.\n" +
        "   Sign up for free at https://www.tawk.to/"
      );
      return;
    }

    // Inject the Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      // Remove the script tag
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Remove Tawk.to global objects
      if (window.Tawk_API) {
        delete window.Tawk_API;
      }
      if (window.Tawk_LoadStart) {
        delete window.Tawk_LoadStart;
      }
    };
  }, []);

  // Tawk.to renders its own widget — no JSX needed
  return null;
};

export default TawkTo;
