/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        prata: ["Prata, serif"],
        rubik: ["Rubik, sans-serif"],
      },
      colors: {
        "main-yellow": "#fcd462",
        "main-bg-gray": "#353530",
        "main-bg-dark": "#1c1b19",
      },
      backgroundImage: {
        "footer-bg": "url('../src/assets/img/pattern-01.61088593.png')" 
      }
    },
  },
  plugins: [],
};
