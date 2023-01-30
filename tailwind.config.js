/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        paytone: ["Paytone One", "sans-serif"],
        playFair: ["Playfair Display", "sans-serif"],
        merr: ["Merriweather", "sans-serif"],
      },
    },
  },
  plugins: [],
};
