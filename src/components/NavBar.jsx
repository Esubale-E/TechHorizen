import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Use react-icons for better icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current location for active link styling

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) =>
    location.pathname === path ? "text-blue-400" : "hover:text-gray-400";

  return (
    <nav className="bg-background dark:bg-darkBackground text-text dark:text-darkText p-4 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-accent dark:hover:text-highlight">
            TechHorizon
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className={`transition duration-300 ${isActive("/")}`}>
            Home
          </Link>
          <Link
            to="/about"
            className={`transition duration-300 ${isActive("/about")}`}
          >
            About
          </Link>
          <Link
            to="/events"
            className={`transition duration-300 ${isActive("/events")}`}
          >
            Events
          </Link>
          <Link
            to="/blog"
            className={`transition duration-300 ${isActive("/blog")}`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`transition duration-300 ${isActive("/contact")}`}
          >
            Contact
          </Link>
          <Link
            to="/signin"
            className={`transition duration-300 ${isActive("/signin")}`}
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-3xl transition duration-300 text-text dark:text-darkText"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 dark:bg-darkBackground p-4 mt-2 transition-all duration-300 ease-in-out">
          <Link
            to="/"
            className="block text-text dark:text-darkText py-2 hover:text-accent dark:hover:text-highlight"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-text dark:text-darkText py-2 hover:text-accent dark:hover:text-highlight"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/events"
            className="block text-text dark:text-darkText py-2 hover:text-accent dark:hover:text-highlight"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/blog"
            className="block text-text dark:text-darkText py-2 hover:text-accent dark:hover:text-highlight"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block text-text dark:text-darkText py-2 hover:text-accent dark:hover:text-highlight"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/signin"
            className="block text-text dark:text-darkText py-2 hover:text-accent dark:hover:text-highlight"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
