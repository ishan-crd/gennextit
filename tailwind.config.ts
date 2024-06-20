import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["outfit", "sans-serif"],
        manrope: ["manrope", "sans-serif"],
        inter: ["inter", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
