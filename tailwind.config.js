/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2400px',
        '6xl': '2880px',
        '7xl': '3840px',
      },
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

