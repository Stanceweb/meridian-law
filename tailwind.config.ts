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
        brand: {
          navy:    "#0D1B2A",
          "navy-mid": "#1E3A5F",
          gold:    "#C9A84C",
          "gold-dark": "#B8962E",
        },
        surface: {
          light: "#F8F6F2",
          mid:   "#EEEAE3",
          border: "#E5DDD4",
        },
        text: {
          primary:   "#111827",
          secondary: "#4B5563",
          muted:     "#9CA3AF",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["4.5rem",  { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1:      ["3.5rem",  { lineHeight: "1.1",  letterSpacing: "-0.015em" }],
        h2:      ["2.5rem",  { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        h3:      ["1.625rem",{ lineHeight: "1.3" }],
        h4:      ["1.125rem",{ lineHeight: "1.4" }],
      },
      spacing: {
        section:    "6rem",
        "section-lg": "8rem",
      },
      boxShadow: {
        card:  "0 1px 4px rgba(13,27,42,0.06), 0 4px 16px rgba(13,27,42,0.06)",
        hover: "0 4px 24px rgba(13,27,42,0.12), 0 1px 4px rgba(13,27,42,0.06)",
        nav:   "0 1px 0 rgba(13,27,42,0.08)",
      },
      maxWidth: {
        prose: "68ch",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
