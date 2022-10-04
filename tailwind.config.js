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
        "mm-black": "#000000ff",
        "mm-blue": "#385368ff",
        "mm-orange": "#FE8A3Bff",
        "mm-peachy": "#FED7B5ff",
        "mm-white": "#FFFFFFff",
      },
      backgroundImage: {
        "bg-nav": "url('/img/mm-nav.jpg')",
      },
    },
  },
  plugins: [],
};
