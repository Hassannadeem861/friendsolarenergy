/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep green — primary brand color (trust, energy, sustainability)
        brand: {
          50: "#eefaf3",
          100: "#d6f1e0",
          200: "#aee0c2",
          300: "#7bc99f",
          400: "#48ab7a",
          500: "#26895c",
          600: "#186c47",
          700: "#14563a",
          800: "#12452f",
          900: "#0f3927",
          950: "#082017",
        },
        // Solar yellow — accent / CTA color
        solar: {
          50: "#fffceb",
          100: "#fff6c2",
          200: "#ffea85",
          300: "#ffd747",
          400: "#ffc41e",
          500: "#f7a409",
          600: "#db7d04",
          700: "#b55807",
          800: "#93440d",
          900: "#79390f",
        },
        ink: {
          900: "#101613",
          800: "#1b2420",
          700: "#2a352f",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        urdu: ["var(--font-urdu)", "Noto Nastaliq Urdu", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
