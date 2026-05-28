import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Fundos verde-escuro/esmeralda muito profundo (quase-preto)
        forest: {
          950: "#08120d",
          900: "#0b1a13",
          850: "#0d1f17",
          800: "#11281d",
          750: "#163326",
          700: "#1c402f",
        },
        // Esmeralda vibrante — cor de marca
        emerald: {
          200: "#9be9c7",
          300: "#6fdcab",
          400: "#43c78d",
          500: "#2f9d72",
          600: "#1f7a59",
          700: "#175e45",
          800: "#114634",
        },
        // Dourado champanhe — accent de luxo
        champagne: {
          50: "#f7efdc",
          100: "#f0e3c4",
          200: "#e6cfa0",
          300: "#d9bd86",
          400: "#c9a86a",
          500: "#b6904f",
        },
        ink: {
          100: "#eef5f0",
          200: "#cfe0d6",
          300: "#a6bcb0",
          400: "#7d9488",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
        wide2: "0.12em",
        wider2: "0.18em",
        widest2: "0.28em",
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        glass: "0 24px 60px -28px rgba(0,0,0,0.7)",
        "glow-emerald":
          "0 0 0 1px rgba(67,199,141,0.35), 0 24px 70px -24px rgba(31,122,89,0.55)",
        "glow-champagne":
          "0 0 0 1px rgba(217,189,134,0.4), 0 24px 70px -24px rgba(182,144,79,0.4)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        bob: {
          "0%,100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(7px)", opacity: "1" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.5" },
          "100%": { transform: "scale(1.7)", opacity: "0" },
        },
      },
      animation: {
        floaty: "floaty 8s ease-in-out infinite",
        bob: "bob 1.8s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.16,1,0.3,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
