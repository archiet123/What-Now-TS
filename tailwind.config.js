/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#21252b',
        secondary: '#333842',
        tertiary: '#528bff',
        quaternary: '#778899'
      }
    },
  },
  plugins: [],
}

