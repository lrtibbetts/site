/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mono': ['Courier New', 'Courier', 'mono']
    },
    borderWidth: {
      '2': '1px'
    }
  },
  plugins: [],
}
