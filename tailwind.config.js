const customColors = require("./styles/colors.config.js");

module.exports = {
  purge: {
    content: [
      "./src/**/*.tsx",
      "./src/**/*.ts",
      "./src/**/*.js",
      "./src/**/*.jsx",
    ],
    safelist: [
      "text-charcoal-100",
      "stroke-charcoal-500",
      "text-persianGreen-100",
      "stroke-persianGreen-500",
      "text-yellowCrayola-100",
      "stroke-yellowCrayola-500",
      "text-sandyBrown-100",
      "stroke-sandyBrown-500",
      "text-burntSienna-100",
      "stroke-burntSienna-500",

      "hover:charcoal-100",
      "hover:stroke-charcoal-500",
      "hover:text-persianGreen-100",
      "hover:stroke-persianGreen-500",
      "hover:text-yellowCrayola-100",
      "hover:stroke-yellowCrayola-500",
      "hover:text-sandyBrown-100",
      "hover:stroke-sandyBrown-500",
      "hover:text-burntSienna-100",
      "hover:stroke-burntSienna-500",
    ],
  },
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
