/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          xl: "1270px",
        },
        padding: {
          xl: "20px",
        },

        center: true,
      },
      colors: {
        primary: "#0D63F3",
        secondary: "#f2f2f2",
      },
    },
    plugins: [],
  },
};
