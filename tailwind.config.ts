import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#05060A",
          elevated: "#0B0E16",
          glass: "rgba(255,255,255,0.04)",
          "glass-border": "rgba(255,255,255,0.08)",
        },
        accent: {
          cyan: "#22D3EE",
          violet: "#8B5CF6",
          blue: "#3B82F6",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        "neon-glow": "0 0 24px rgba(34,211,238,0.35)",
        "neon-glow-soft": "0 0 24px rgba(34,211,238,0.15)",
        glass: "0 8px 32px rgba(0,0,0,0.37)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #22D3EE 0%, #8B5CF6 100%)",
        "gradient-text": "linear-gradient(90deg, #22D3EE, #8B5CF6)",
        "gradient-card":
          "linear-gradient(160deg, rgba(34,211,238,0.08), rgba(139,92,246,0.08))",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;