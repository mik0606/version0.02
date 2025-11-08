import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        border: "#d4a373",
        input: "#fff7ed",
        ring: "#f59e0b",
        background: "#fffaf0",
        foreground: "#3b2f2f",
        primary: { DEFAULT: "#dc2626", foreground: "#ffffff" },
        secondary: { DEFAULT: "#fcd34d", foreground: "#3b2f2f" },
        destructive: { DEFAULT: "#b91c1c", foreground: "#ffffff" },
        muted: { DEFAULT: "#f5e0c3", foreground: "#3b2f2f" },
        accent: { DEFAULT: "#d97706", foreground: "#ffffff" },
        popover: { DEFAULT: "#ffffff", foreground: "#3b2f2f" },
        card: { DEFAULT: "#ffffff", foreground: "#3b2f2f" },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #dc2626, #f59e0b)",
        "gradient-dark": "linear-gradient(to right, #fffaf0, #f5e0c3)",
        "gradient-hero": "linear-gradient(135deg, #dc2626, #f59e0b)",
      },
      boxShadow: {
        glow: "0 0 25px #f59e0b33",
        card: "0 4px 20px #d4a37333",
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "fade-in-up": { from: { opacity: "0", transform: "translateY(40px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "scale-in": { from: { opacity: "0", transform: "scale(0.9)" }, to: { opacity: "1", transform: "scale(1)" } },
        "slide-in-right": { from: { transform: "translateX(100%)" }, to: { transform: "translateX(0)" } },
        glow: { "0%, 100%": { boxShadow: "0 0 20px #f59e0b33" }, "50%": { boxShadow: "0 0 40px #f59e0b66" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.4s ease-out",
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
