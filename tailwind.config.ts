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
        inter: ["var(--font-inter)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        'electric-blue': '#2563EB',
        'deep-navy': '#0A0F24',
        'neon-cyan': '#00F0FF',
        'soft-purple': '#8B5CF6',
        'mint-green': '#10B981',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(145deg, rgba(37, 99, 235, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)",
        "primary-gradient": "linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)",
      },
      animation: {
        "blob": "blob 7s infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 20px 0 rgba(0, 240, 255, 0.5)",
          },
          "50%": {
            opacity: ".5",
            boxShadow: "0 0 40px 10px rgba(0, 240, 255, 0.2)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
