import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background dark:bg-darkBackground text-text dark:text-darkText p-4 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-accent dark:hover:text-highlight">
            TechHorizon
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-accent dark:hover:text-highlight">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-accent dark:hover:text-highlight"
          >
            About
          </Link>
          <Link
            to="/events"
            className="hover:text-accent dark:hover:text-highlight"
          >
            Events
          </Link>
          <Link
            to="/blog"
            className="hover:text-accent dark:hover:text-highlight"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="hover:text-accent dark:hover:text-highlight"
          >
            Contact
          </Link>
          <Link
            to="/signin"
            className="hover:text-accent dark:hover:text-highlight"
          >
            Sign In
          </Link>
          
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-3xl text-text dark:text-darkText"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background dark:bg-darkBackground p-4 mt-2">
          <Link
            to="/"
            className="block text-text dark:text-darkText py-2 hover:text-accent dark:hover:text-highlight"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-text dark:text-darkText py-2 hover:text-accent dark:hover:text-highlight"
          >
            About
          </Link>
          <Link
            to="/events"
            className="block text-text dark:text-darkText py-2 hover:text-accent dark:hover:text-highlight"
          >
            Events
          </Link>
          <Link
            to="/blog"
            className="block text-text dark:text-darkText py-2 hover:text-accent dark:hover:text-highlight"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block text-text dark:text-darkText py-2 hover:text-accent dark:hover:text-highlight"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
