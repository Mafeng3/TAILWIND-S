/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: 'inter'
      },
      colors: {
          softOrange: 'hsl(35, 77%, 62%)',
          softRed: 'hsl(5, 85%, 63%)',
          Offwhite: 'hsl(36, 100%, 99%)',
          Grayishblue: 'hsl(233, 8%, 79%)',
          Darkgrayishblue:' hsl(236, 13%, 42%)',
          Verydarkblue:' hsl(240, 100%, 5%)' 
      },
    },
  },
  plugins: [],
}

