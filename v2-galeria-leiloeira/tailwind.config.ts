import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Fundos claros marfim / creme / papel
        ivory: {
          50: "#fdfbf6",
          100: "#f8f4ec",
          200: "#efe7d8",
          300: "#e6dcc8",
          400: "#d6c8af",
        },
        // Texto carvão quase-preto
        ink: {
          950: "#141210",
          900: "#1b1916",
          800: "#26231f",
          700: "#3a3631",
          600: "#5a554d",
          500: "#7c766b",
          400: "#9a948a",
        },
        // Accent dourado discreto e terroso
        brass: {
          100: "#e9dcc0",
          200: "#d9c498",
          300: "#c5a86c",
          400: "#b8934e",
          500: "#9c7b3c",
          600: "#7e6230",
          700: "#5f4a25",
        },
        // Segundo accent: bordô / oxblood de leiloeira
        oxblood: {
          50: "#f3e8e6",
          300: "#a85a52",
          500: "#7a3a34",
          600: "#5c2a26",
          700: "#46201d",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.16em",
        wider3: "0.24em",
        widest3: "0.34em",
        widest4: "0.46em",
      },
      maxWidth: {
        container: "1280px",
        prose2: "640px",
      },
      keyframes: {
        bob: {
          "0%,100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(7px)", opacity: "1" },
        },
      },
      animation: {
        bob: "bob 1.9s ease-in-out infinite",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
