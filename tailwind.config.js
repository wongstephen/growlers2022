/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "climate-crisis": ["Climate Crisis", "cursive"],
        "instrument-sans": ["Instrument Sans", "sans-serif"],
        unbounded: ["Unbounded", "cursive"],
      },
    },
  },
  plugins: [],
};
