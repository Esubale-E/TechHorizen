import { useState, useEffect } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ToggleTheme = ({ setting }) => {
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
    <a
      onClick={toggleTheme}
      href="#change-theme"
      className={`flex items-center ${
        setting
          ? "py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700"
          : "hover:text-gray-400"
      }  text-text dark:text-darkText `}
    >
      {theme === "light" ? (
        <FaToggleOff className="mr-2 " size={24} />
      ) : (
        <FaToggleOn className="mr-2" size={24} />
      )}{" "}
      Dark Theme
    </a>
  );
};

export default ToggleTheme;
