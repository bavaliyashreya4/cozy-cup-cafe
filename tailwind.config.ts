import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mocha: {
          dark: "#3E2723",
        },
        brown: {
          medium: "#6F4E37",
        },
        beige: {
          warm: "#F5F0E8",
        },
        cream: {
          soft: "#FDF6EC",
        },
        gold: {
          accent: "#C4956A",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        heading: ["var(--font-cormorant)"],
      },
    },
  },
  plugins: [],
};
export default config;
