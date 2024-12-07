import { useState, useEffect } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

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
      className="flex gap-2 text-center  bg-stale-800 text-white  shadow-lg hover:bg-gray-700 transition-colors duration-300"
    >
      Dark Mode
      {theme === "light" ? <FaToggleOff size={24} /> : <FaToggleOn size={24} />}
    </button>
  );
};

export default ToggleTheme;
