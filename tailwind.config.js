/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
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
      },
      keyframes: {
        wiggle: {
          '50%': { transform: 'rotate(3deg)' },
        },
        shake: {
          '0%,': { transform: 'scale(1)' },
          '20%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'scale(1.1)' },
        },
        explode: {
          '50%': { transform: 'translateX(-5%)' }
        }
      },
      animation: {
        "wiggle": 'wiggle .5s ease-in-out infinite',
        "shake": "shake 1s infinite",
        "explode": "explode 1s ease-in-out infinite",
      }
    },
  },
}
