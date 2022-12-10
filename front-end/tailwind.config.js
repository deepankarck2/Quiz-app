/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brown-light' : '#fdf6e3',
        'brown-darker' : '#d9d2c2',
      },
      fontFamily: {
        'sans' : ['-apple-system']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

