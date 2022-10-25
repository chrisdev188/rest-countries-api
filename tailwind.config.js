/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-dm-elements": "hsl(209, 23%, 22%)",
        "brand-dm-bg": "hsl(207, 26%, 17%)",
        "brand-lm-text": "hsl(200, 15%, 8%)",
        "brand-lm-input": "hsl(0, 0%, 52%)",
        "brand-lm-bg": "hsl(0, 0%, 98%)",
        "brand-white": "hsl(0, 0%, 100%)",
      },
      boxShadow: {
        "bottom-lightmode": "0 1px 5px 0px rgba(0,0,0,.2)",
        "bottom-darkmode": "0 1px 5px 0px rgba(0,0,0,.2)",
      },
    },
  },
  plugins: [],
};
