/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const MyClass = plugin(function({addUtilities}){
  addUtilities({
    ".rotate-y-180":{
      transform: "rotateY(180deg)"
    },
    ".preserve-3d":{
      transformStyle: "perserve-3d"
    },
    ".backHidden":{
      backfaceHidden: "back-hidden"
    }
  })
})
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
    MyClass
  ],
}

