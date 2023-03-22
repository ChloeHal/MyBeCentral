/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Roboto Mono"'],
      sans: ['"Roboto Mono"'],
    },
    extend: {
      colors: {
        pink: "#df2f89",
        teal: "#06d6a0",
        blue: "#3258A5",
        whitish: "#fcf6ee",
      },
      fontFamily: {
        title: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
