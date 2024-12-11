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
        darkprimary: "#232E38",
        darksecondary: "#39434C",
        darkaccent: "#5db4ff",
        darkbackground: "#0A0E11",
        darktext: "#E9EAEB",
        darkhighlight: "#4F5860",
      },
    },
  },
  plugins: [],
};
