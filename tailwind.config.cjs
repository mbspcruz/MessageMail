/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#408CFF",
          95: "#ECF2FA",
          100: "#80B2FF",
          25: "#002152",
          75: "#B0B9C6",
        },
        secondary: {},
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
