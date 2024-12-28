/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        custom: ["CooperMdBT", "sans-serif"],
      },
    },
  },
  plugins: [],
};
