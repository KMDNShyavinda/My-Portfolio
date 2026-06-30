import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink:      "#0a0a0a",
        paper:    "#ffffff",
        fog:      "#f7f7f6",
        void:     "#0f0f0e",
        obsidian: "#1a1a18",
        slate:    "#185FA5",
        "sky-tint":"#E6F1FB",
        "sky-text":"#0C447C",
        sage:     "#1D9E75",
      },
      maxWidth: {
        content: "1100px",
      },
      spacing: {
        section: "80px",
        "section-mobile": "48px",
      },
      borderRadius: {
        sm:   "4px",
        DEFAULT: "8px",
        lg:   "12px",
        pill: "9999px",
      },
      fontSize: {
        "display": ["clamp(2rem, 5vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.04em", fontWeight: "500" }],
        "h1":      ["clamp(1.5rem, 3vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.03em", fontWeight: "500" }],
        "h2":      ["1.125rem", { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "500" }],
        "h3":      ["0.9375rem", { lineHeight: "1.4", fontWeight: "500" }],
        "body":    ["0.875rem", { lineHeight: "1.7" }],
        "small":   ["0.75rem", { lineHeight: "1.55" }],
        "label":   ["0.6875rem", { lineHeight: "1", letterSpacing: "0.06em", fontWeight: "500" }],
      },
      transitionTimingFunction: {
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-snap":     "cubic-bezier(0.4, 0, 0.2, 1)",
        "ease-over":     "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        "80":  "80ms",
        "120": "120ms",
        "400": "400ms",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse_dot: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.4" },
        },
      },
      animation: {
        "fade-up":   "fadeUp 400ms cubic-bezier(0.16,1,0.3,1) forwards",
        "pulse-dot": "pulse_dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
