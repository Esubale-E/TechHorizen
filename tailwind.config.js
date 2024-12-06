/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#003366",
        secondary: "#00B0FF",
        accent: "#00B8D4",
        highlight: "#00FF7F",
        background: "#F5F5F5",
        text: "#333333",
        darkBackground: "#1A2637", // Dark mode background color
        darkText: "#F5F5F5", // Light text for dark mode
        // Optional: Add more specific dark mode colors if needed
        darkPrimary: "#002244", // Dark mode primary color
        darkSecondary: "#0066FF", // Dark mode secondary color
      },
    },
  },
  plugins: [],
};
