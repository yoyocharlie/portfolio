/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "amber": "#FC5130",
        "jet": "#303036"
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
