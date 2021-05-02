module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ["bt", "arial", "sans-serif"],
      body: ["bt", "arial", "sans-serif"],
    },
    extend: {
      colors: {
        lime: {
          light: "#a5e287",
          DEFAULT: "#7ED654",
          dark: "#71c14c",
        },
      },
      width: {
        "100px": "100px",
      },
      padding: {
        25: "25%",
        50: "50%",
        100: "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
