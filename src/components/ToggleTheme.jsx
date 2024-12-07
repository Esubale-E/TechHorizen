import { useState, useEffect } from "react";

const ToggleTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme || "light";

  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300"
    >
      {theme === "light" ? (
        <span role="img" aria-label="moon">
          🌙
        </span>
      ) : (
        <span role="img" aria-label="sun">
          🌞
        </span>
      )}
    </button>
  );
};

export default ToggleTheme;
