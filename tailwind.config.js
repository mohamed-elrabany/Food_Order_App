/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        Caramel: ["Caramel", "san-serif"],
        Raleway: ["Raleway", "san-serif"],
      },
      colors: {
        primary: "#C2A968",
        secondary: "#F5BE32",
        creamy:"#EDE9DD",
        browny:"#544013"
      }
    },
  },
  plugins: [],
}