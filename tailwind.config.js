/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        "main-gray": "#353530",
        "main-dark": "#1c1b19",
        "main-light": "#f3e9dc",
        "main-light-choco": "#c7ad98",
        "main-light-dark-choco": "#382315",
      },
      backgroundImage: {
        "footer-bg": "url('/img/pattern-01.61088593.png')",
        "home-about-pattern": "url('/img/pattern-about.png')",
        "menu-gallery-1": "url('/img/menu-gallery-1.jpg')",
        "menu-gallery-2": "url('/img/menu-gallery-2.jpg')",
        "menu-gallery-3": "url('/img/menu-gallery-3.jpg')",
        "menu-gallery-4": "url('/img/menu-gallery-4.jpg')",
        "rare": "url('/img/rare.png')",
        "special-face": "url('/img/special-face.jpg')",
        "special-ring": "url('/img/special-ring.jpg')",
        "special-necklace": "url('/img/special-necklace.jpg')",
        "video-pattern": "url('/img/video-pattern.png')",
        "video-bg": "url('/img/video-bg.jpg')",
        "blog-1": "url('/img/blog-1.png')",
        "blog-2": "url('/img/blog-2.png')",
        "blog-3": "url('/img/blog-3.png')",
        "blog-4": "url('/img/blog-4.png')",
      },
    },
  },
  plugins: [],
};
