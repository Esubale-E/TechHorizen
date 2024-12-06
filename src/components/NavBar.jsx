import { useState } from "react";
import { Link } from "react-router-dom"; // Use if you're using React Router for navigation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-700  text-white p-4 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-400">
            TechHorizon
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/events" className="hover:text-gray-400">
            Events
          </Link>
          <Link to="/blog" className="hover:text-gray-400">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Link to="/signin" className="hover:text-gray-400">
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl">
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 p-4 mt-2">
          <Link to="/" className="block text-white py-2 hover:text-gray-400">
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white py-2 hover:text-gray-400"
          >
            About
          </Link>
          <Link
            to="/events"
            className="block text-white py-2 hover:text-gray-400"
          >
            Events
          </Link>
          <Link
            to="/blog"
            className="block text-white py-2 hover:text-gray-400"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block text-white py-2 hover:text-gray-400"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
