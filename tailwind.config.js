/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "amber": "#fcbf49",
        "jet": "#457b9d"
      },
      screens: {
        'xs': '250px'
      },
      fontFamily: {
        "headText": ['headText'],
        "paraText": ['paraText']
      }
    },

  },
  plugins: [],
}
