// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'investment-blue': '#3B82F6',
        'renewable-green': '#10B981',
        'neon-primary': '#5D5DFF',
        'neon-secondary': '#33363A',
        'neon-accent': '#5D5DFF',
        'mosaic-primary': '#3B82F6',
        'mosaic-secondary': '#1E293B',
        'mosaic-accent': '#4F46E5',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'uncut-sans': ['Uncut Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
