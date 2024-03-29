/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

const fontFamily = defaultTheme.fontFamily;
fontFamily["sans"] = ["Poppins", "sans-serif"];

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: fontFamily,
    extend: {
      colors: {
        primary: "#DEF81C",
        "primary-700": "#C1CD00",
        "primary-400": "#DFF547",
        "primary-300": "#E5F96E",
        "primary-100": "#F6FCC3",
        "primary-50": "#FBFFE7",
        secondary: "#222222",
        "secondary-700": "#626262",
        "secondary-500": "#9F9F9F",
        "secondary-300": "#E1E1E1",
        "secondary-100": "#F5F5F5",
        "secondary-50": "#FAFAFA",
        success: "#13CE66",
        info: "#3366FF",
        warning: "#FFB020",
        danger: "#FF000D",
      },
      fontSize: {
        h1: "96px",
        h2: "64px",
        h3: "48px",
        h4: "40px",
        h5: "32px",
        h6: "24px",
        sub: "18px",
        body: "16px",
        subtitle: "14px",
        caption: "12px",
      },
      screens: {
        mobile: { max: "431px" },
        dx: { max: "1552px" },
        "3xl": { min: "1720px" },
      },
    },
  },
  plugins: [],
};
