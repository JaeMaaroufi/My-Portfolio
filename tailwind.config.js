/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "main-welcome-img": "url('/src/assets/bgImg.png')",
      },
      fontFamily: {
        "mukta-regular": ["Mukta", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
