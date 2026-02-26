import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        beige: "#EDE5D4",
        parchment: "#DDD3C0",
        charcoal: "#2C2C2C",
        "charcoal-light": "#4A4A4A",
        gold: "#B8963E",
        "gold-light": "#D4AF6A",
        "gold-dark": "#8B6914",
        mist: "#F9F6F0",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #B8963E 0%, #D4AF6A 50%, #B8963E 100%)",
        "cream-gradient": "linear-gradient(180deg, #F5F0E8 0%, #EDE5D4 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
