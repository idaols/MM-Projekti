/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "mm-pale-pink": "#fde4e8ff",
        "mm-key-lime": "#ecf877ff",
        "mm-fiery-rose": "#fe586fff",
        "mm-dark-sienna": "#2d0001ff",
        "mm-sky-blue-crayola": "#71d8f5ff",
        "mm-baby-powder": "#f7f7f2ff",
        "mm-white": "rgb(255,255,255)",
      },
      backgroundImage: {
        "bg-image": "url('/img/wave-bg.svg')",
        "nav-bg": "url('/img/nav-bg4.svg')",
        "little-wave": "url('/img/littlewave.svg')",
      },
    },
  },
  plugins: [],
};
