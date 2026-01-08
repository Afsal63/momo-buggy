import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3AA1A6",
        dark: "#1F5F63",
        cream: "#F9F7F3",
        accent: "#6FFFE9",
        black: "#0E0E0E",
      },
    },
  },
  plugins: [],
};
export default config;