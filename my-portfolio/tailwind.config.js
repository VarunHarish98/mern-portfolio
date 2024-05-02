/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0A192F",
        "secondary": "#F97316",
        "tertiary": "#54D6BB"
      }
    },
    fontFamily: {
      display: ["Satisfy", "cursive"],
    },
    screens: {
      'xl': { 'max': '3000px' },
      // => @media (max-width: 1279px) { ... }

      'sm': { 'max': '1100px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}