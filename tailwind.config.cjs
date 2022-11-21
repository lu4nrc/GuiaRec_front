/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#FF0066',
        'secondary': '#161E29',
        'gray' : '#CEDBEB'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'serif'],
        inter: ['Inter', 'serif'],
      },
    },
  },
  plugins: [],
}
