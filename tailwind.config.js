module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["BR Firma", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#372AA4",
        black: "#2F2F2F",
        ash: "#6C757D",
        secondary: "#FF6A2C",
        light: "#F8F9FB",
      },
    },
  },
  plugins: [],
};
