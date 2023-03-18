/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./portfolio/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main": "#FFF",
        "subcolor": "#BCBCBC",
        "background": "#0F1624",
      },
      fontFamily: {
        'body': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'base': ['18px', '1.75'],
        'base-sm': ['16px', '1.75'],
        'nav': ['20px', '1.75'],
        'nav-sm': ['18px', '1.75'],
        'lg': ['24px', '1.75'],
        'lg-sm': ['18px', '1.75'],
        'ttl': ['42px', '1.75'],
        'ttl-sm': ['28px', '1.75'],
      },
      screens: {
        'tabv': {'max': '1000px'},
        'sm': {'max': '768px'},
      }  
    },

  },
  plugins: [],
}
