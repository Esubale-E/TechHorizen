import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ToggleTheme from "../utils/ToggleTheme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Current location for active link styling

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-400 font-semibold"
      : "hover:text-gray-400";

  return (
    <nav className="bg-background dark:bg-darkBackground text-gray-600 p-4 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link
            to="/"
            title="TechHorizon"
            className="hover:text-accent text-blue-600 dark:hover:text-highlight"
          >
            TechHorizon
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <CustomNavLink to="#" text="Home" isActive={isActive} />
          <CustomNavLink to="#about" text="About" isActive={isActive} />
          <CustomNavLink to="#events" text="Events" isActive={isActive} />
          <CustomNavLink to="#blog" text="Blog" isActive={isActive} />
          <CustomNavLink to="#contact" text="Contact" isActive={isActive} />
          <Link to="signin" className="transition hover:text-gray-400 duration-300 text-text dark:text-darkText">
            Sign In
          </Link>
          <ToggleTheme />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-3xl transition duration-300"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 p-4 mt-2 transition-all duration-300 ease-in-out">
          {[
            { to: "/", text: "Home" },
            { to: "/about", text: "About" },
            { to: "/events", text: "Events" },
            { to: "/blog", text: "Blog" },
            { to: "/contact", text: "Contact Us" },
            { to: "/signin", text: "Sign In" },
          ].map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              className="block text-white py-2 hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)} // Close menu
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// eslint-disable-next-line react/prop-types
const CustomNavLink = ({ to, text, isActive }) => (
  <a
    href={to}
    className={`transition duration-300 ${isActive(
      to
    )}  text-text dark:text-darkText`}
  >
    {text}
  </a>
);
