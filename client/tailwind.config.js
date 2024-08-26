/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        theme:{
          primary: "hsl(var(--bg-primary))",
          secondary: "hsl(var(--bg-secondary))",
        },
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          tertiary: "hsl(var(--text-tertiary))",
          quaternary: "hsl(var(--text-quaternary))",
          quinary: "hsl(var(--text-quinary))",
          sextary: "hsl(var(--text-sextary))",
        },
        border: {
          primary: "hsl(var(--border-primary))",
          secondary: "hsl(var(--border-secondary))",
        },
        hover: {
          primary: "hsl(var(--hover-primary))",
          secondary: "hsl(var(--hover-secondary))",
        },

      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        logo1: ["Marck Script", "cursive"],
        logo2: ["Meow Script", "cursive"],
        primary: ["Abhaya Libre", "serif"],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}