/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': { 'max': '576px' },
        'md': { 'max': '960px' },
        'lg': { 'max': '1440px' },
      },
      backgroundImage: {
        'pattern': "url('./img/Ellipse 125.png')",
      },
    },
  },
  plugins: [],
};

