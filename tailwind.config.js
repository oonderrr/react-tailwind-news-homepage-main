/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'p-inter': ["Inter", "sans-serif"],
    },

    extend: {
      colors: {
        "p-soft-orange": "hsl(35, 77%, 62%)",
        "p-soft-red": "hsl(5, 85%, 63%)",
        "p-off-white": "hsl(36, 100%, 99%)",
        "p-grayish-blue": "hsl(233, 8%, 79%)",
        "p-dark-grayish-blue": "hsl(236, 13%, 42%)",
        "p-very-dark-blue": "hsl(240, 100%, 5%)"
      },
    },
  },
  plugins: [],
}
