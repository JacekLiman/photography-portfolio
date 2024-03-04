/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Mulish",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    container: {
      padding: "1rem",
    },
    extend: {
      animation: {
        pageAnimation: "pageAnimation 1.5s 0.3s ease-in forwards ",
      },
      keyframes: {
        pageAnimation: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      colors: {
        primary: "#0E1112",
        grey: "#484B4B",

        accent: "#EEF7F9",
      },
    },
  },
  plugins: [],
};
