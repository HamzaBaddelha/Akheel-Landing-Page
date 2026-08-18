import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        ivory: "var(--ivory)",
        olive: "var(--olive)",
        mist: "var(--mist)",
      },
      fontFamily: {
        display: ["Iowan Old Style", "Baskerville", "Georgia", "serif"],
        sans: ["Arial", "Tahoma", "sans-serif"],
        arabic: ["Tahoma", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
