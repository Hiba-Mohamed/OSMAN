/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mullish: "Mulish, sans-serif",
        Montserrat: "Montserrat",
      },
      width: {
        200: "200px",
        250: "250px",
        300: "300px",
        350: "350px",
        400: "500px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
      },
      colors: {
        lightBlue: "#8BD4BE",
        darkBlue: "#29339B",
      },
    },
  },
  plugins: [],
};

