const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '5/6': '83.333333%',
      },
      colors: {
        bgray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
