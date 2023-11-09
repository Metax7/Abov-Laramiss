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
        "footer-bg": "url('../src/assets/img/pattern-01.61088593.png')",
        "home-about-pattern": "url('../src/assets/img/pattern-about.png')",
        "menu-gallery-1": "url('../src/assets/img/menu-gallery-1.jpg')",
        "menu-gallery-2": "url('../src/assets/img/menu-gallery-2.jpg')",
        "menu-gallery-3": "url('../src/assets/img/menu-gallery-3.jpg')",
        "menu-gallery-4": "url('../src/assets/img/menu-gallery-4.jpg')",
        "rare": "url('../src/assets/img/rare.png')",
        "special-face": "url('../src/assets/img/special-face.jpg')",
        "special-ring": "url('../src/assets/img/special-ring.jpg')",
        "special-necklace": "url('../src/assets/img/special-necklace.jpg')",
      },
    },
  },
  plugins: [],
};
