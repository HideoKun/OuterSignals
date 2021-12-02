const customColors = require("./styles/colors.config.js");

module.exports = {
  purge: ["./src/**/*.tsx", "./src/**/*.ts", "./src/**/*.js", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...customColors,
      },
      stroke: {
        ...customColors,
      },
    },
  },
  variants: {
    extend: {
      stroke: ["hover", "focus"],
    },
  },
  plugins: [],
};
