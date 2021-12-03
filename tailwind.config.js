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

      "hover:charcoal-300",
      "hover:stroke-charcoal-900",
      "hover:text-persianGreen-300",
      "hover:stroke-persianGreen-900",
      "hover:text-yellowCrayola-300",
      "hover:stroke-yellowCrayola-900",
      "hover:text-sandyBrown-300",
      "hover:stroke-sandyBrown-900",
      "hover:text-burntSienna-300",
      "hover:stroke-burntSienna-900",
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
