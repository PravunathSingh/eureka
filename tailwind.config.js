/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5.5rem',
        '3xl': '6.5rem',
      },
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'Roboto'],
      },
      colors: {
        accent: '#41B883',
        'accent-dark': '#34495E',
        primary: '#181818',
      },
    },
  },
  plugins: [],
};
