/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: "#e8dbc9",
        navHover: "#c8ac86",
        button: "#e8dbc9",
        buttonHover: "#c8ac86",
        span: "#361b17",
        tableHead: "#faf2e8",
        tableBody: "#e8dbc9",
        skeleton: "#c8ac86",
      },
      screens: {
        "4xl": "1840px",
      },
    },
  },

  plugins: [],
};
