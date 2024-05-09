/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000000",
        "secondary": "#ff014f",
        "tertiary": "#c4cfde"
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
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
