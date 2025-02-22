import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111123",
        foreground: "#FFFFFF",
        highlighte:"#80B4F4",
        danger:"#FC0032"
      },
    },
  },
  plugins: [],
} satisfies Config;
