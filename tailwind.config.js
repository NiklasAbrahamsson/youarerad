const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js', './src/**/*.ts', './src/**/*.jsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#22181c',
      },
      boxShadow: {
        primary: '0px 10px 0px 0px rgba(34, 24, 28, 1)',
        secondary: '0px 8px 0px 0px rgba(90, 103, 216, 1)',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
}
