/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const MyClass = plugin(function({addUtilities}){
  addUtilities({
    ".rotate-y-180":{
      transform: "rotateY(180deg)"
    },
    ".preserve-3d":{
      transformStyle: "preserve-3d"
    },
    ".backface-hidden":{
      backfaceVisibility: "hidden"
    },
    "perspective":{
      perspective: "1000px",
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
        'sans' : ['san-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), MyClass]
}

