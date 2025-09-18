/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      // that is animation class
      animation: {
        fadeIn: "fadeIn 5s ease-in-out",
        fadeOut: "fadeOut 5s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  variants: {},
  plugins: [],
};
