/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5D9CEC',
        'secondary': '#FFFFFF',
        'tertiary': '#F2F4F7',
        'quaternary': '#737373',
        'danger': '#DE3641'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
}