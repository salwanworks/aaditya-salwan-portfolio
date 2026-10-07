import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#080B12", // page background
          900: "#0C111B",
          850: "#111827", // primary surface
          800: "#151E2E", // secondary surface
          700: "#1E293B",
          600: "#2A3649",
        },
        signal: {
          DEFAULT: "#2DD4BF", // primary accent (teal / cyan)
          bright: "#5EEAD4",
          dim: "#14B8A6",
        },
        violet: {
          DEFAULT: "#818CF8", // secondary accent (indigo)
          dim: "#6366F1",
        },
        fault: "#F97066",
        warn: "#FBBF24",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        page: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
