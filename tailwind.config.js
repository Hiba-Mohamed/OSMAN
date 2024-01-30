/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mullish: "Mulish, sans-serif",
        Montserrat: "Montserrat",
      },
      colors: {
        lightBlue: "#8BD4BE",
        darkBlue: "#29339B",
      },
    },
  },
  plugins: [],
};

