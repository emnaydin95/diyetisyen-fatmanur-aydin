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
        brandBg: "#FAF8F5",
        brandSurface: "#F2EFE9",
        brandWhite: "#FFFFFF",
        sage: {
          DEFAULT: "#4A6B5D",
          dark: "#385246",
          light: "#6B8D7F",
          soft: "#E8EFEA",
        },
        terracotta: {
          DEFAULT: "#D97757",
          dark: "#BF5E3E",
          soft: "#FCEEE8",
        },
        charcoal: "#1E242B",
        mutedSlate: "#5A6570",
        borderHairline: "#E5E0D8",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
