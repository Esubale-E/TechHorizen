/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#003366",
        secondary: "#4D7094",
        accent: "#e1b813",
        background: "#E6EBF0",
        text: "#002447",
        highlight: "#6685A3",
        // Dark mode
        darkprimary: "#33c6dd",
        darksecondary: "#39434c",
        darkaccent: "#00b8d4",
        darkbackground: "#232e38",
        darksecondarybackground: "#4f5860",
        darktext: "#E9EAEB",
        darkhighlight: "#4F5860",
      },
    },
  },
  plugins: [],
};
