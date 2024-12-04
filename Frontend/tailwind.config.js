

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode based on a 'class' (e.g., 'dark' class on the <html> or <body> element)
  theme: {
    extend: {}, // Corrected typo here from 'estend' to 'extend'
  },
  plugins: [
    require('daisyui'), // DaisyUI plugin for additional UI components
  ],
}
