/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, ts}"],
  theme: {
    extend: {
      colors: {
        "main-text": "#808B9F",
        "main-bg": "#E5E5E5",
        "neumorphism-bg": "#F0F0F3",
        "neumorphism-active-bg": "#EEEEEE",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
  important: true,
};
