/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        root: '#EF4444',
        sacral: '#F97316',
        solar: '#EAB308',
        heart: '#22C55E',
        throat: '#06B6D4',
        thirdeye: '#6366F1',
        crown: '#A855F7',
      }
    },
  },
  plugins: [],
}
