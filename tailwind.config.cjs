/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
    },
    colors: {
      transparent: 'transparent',

      blue: {
        500: '#3294F8',
      },

      gray: {
        100: '#E7EDF4',
        200: '#C4D4E3',
        300: '#AFC2D4',
        400: '#7B96B2',
        500: '#3A536B',
        600: '#1C2F41',
        700: '#112131',
        800: '#0B1B2B',
        900: '#0C2036',
      },

      black: {
        800: '#071422',
        900: '#040F1A',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Nunito, sans-serif',
      },
    },
  },
}
