import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 60px rgba(56, 189, 248, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
