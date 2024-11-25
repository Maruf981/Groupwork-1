/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {screens: {
      'sm': { 'max': '576px' },
      // => @media (max-width: 576px) { ... }

      'md': { 'max': '960px' },
      // => @media (max-width: 960px) { ... }

      'lg': { 'max': '1440px' },
      // => @media (max-width: 1440px) { ... }
    },
  },
  plugins: [],
 
}}

