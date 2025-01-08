/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      keyframes: {
        growLine: {
          '0%': { width: '0' },
          '100%': { width: '50px' },
        },
      },
      animation: {
        'grow-line': 'growLine 0.5s ease-out forwards',
      },
    },
    fontFamily: {
      body: ['Roboto', 'sans-serif'], 
    }
  },
  plugins: [],
}