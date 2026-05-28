import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        noir: {
          950: "#070608",
          900: "#0b0a0d",
          850: "#100e13",
          800: "#16131b",
          700: "#1f1b26",
        },
        gold: {
          100: "#f8efce",
          200: "#f0e1b0",
          300: "#e6cd88",
          400: "#d8b766",
          500: "#c8a24e",
          600: "#a8812f",
          700: "#7e5f22",
          800: "#574115",
        },
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.02em",
        wider2: "0.18em",
        widest2: "0.32em",
      },
      maxWidth: {
        container: "1240px",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bob: {
          "0%,100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(7px)", opacity: "1" },
        },
      },
      animation: {
        shimmer: "shimmer 7s linear infinite",
        float: "float 7s ease-in-out infinite",
        bob: "bob 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
