/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}", "./public/index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#1C64F2",
          dark: "#78FFF7",
        },
        "cool-gray": {
          200: "#E5E7EB",
          600: "#4B5563",
          900: "#111928",
        },
        "dark-cool-gray": {
          600: "#78FFF7",
        },
        "white": {
          100: 'rgba(255,255,255,1)',
          60: 'rgba(255,255,255,0.6)',
          50: 'rgba(255,255,255,0.5)',
        },
        "dark-white": {
          60: '#0F172A',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
