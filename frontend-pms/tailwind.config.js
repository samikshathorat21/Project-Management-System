/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable dark mode via 'dark' class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        'background-dark': '#1f1f1f',
        foreground: '#000000',
        'foreground-dark': '#f5f5f5',
        border: '#e5e7eb',
        ring: '#3b82f6/50',
      },
    },
  },
  plugins: [],
}
