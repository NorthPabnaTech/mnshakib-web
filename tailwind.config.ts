import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A1628",
          elev: "#0F1F33",
          elev2: "#14283E",
          deep: "#060E1A",
        },
        line: {
          DEFAULT: "#1F3A56",
          soft: "#16304A",
        },
        text: {
          DEFAULT: "#E8EEF5",
          mute: "#8FA3BD",
          dim: "#5A7090",
        },
        accent: {
          DEFAULT: "#D4A84B",
          soft: "#B08A35",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "accent-glow":
          "radial-gradient(circle at 30% 20%, rgba(212, 168, 75, 0.18), transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
