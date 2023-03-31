/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Roboto Mono"'],
      sans: ['"Roboto Mono"'],
      display: ['"Roboto Mono"'],
      mono: ['"Roboto Mono"'],
    },
    extend: {
      colors: {
        pink: "#df2f89",
        teal: "#06d6a0",
        blue: "#3258A5",
        whitish: "#fcf6ee",
        whitless: "#f9eddd",
        grey: "#C2BDB7",
        dark: "#141414",
        black: "#141414",
        darkless: "#2e2f30",
      },
      fontFamily: {
        title: ["Rubik", "sans-serif"],
        roboto: ["Roboto Mono", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
