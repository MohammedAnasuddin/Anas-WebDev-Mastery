/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 16 row grid
        '500': 'repeat(500, minmax(0, 1fr))',

      }
    },
  },
  plugins: [],
}

