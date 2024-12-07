import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gray-600 text-white py-12 px-4 animate-fadeIn">
      <div className="max-w-6xl mx-auto text-center">
        {/* Footer Navigation Links */}
        <div className="mb-6">
          <ul className="flex justify-center space-x-8">
            <li className="hover:scale-110 transition-transform duration-300">
              <Link
                to="/"
                className="hover:text-gray-400"
                aria-label="Go to Home Page"
              >
                Home
              </Link>
            </li>
            <li className="hover:scale-110 transition-transform duration-300">
              <Link
                to="/about"
                className="hover:text-gray-400"
                aria-label="Learn more About Us"
              >
                About
              </Link>
            </li>
            <li className="hover:scale-110 transition-transform duration-300">
              <Link
                to="/events"
                className="hover:text-gray-400"
                aria-label="View Upcoming Events"
              >
                Events
              </Link>
            </li>
            <li className="hover:scale-110 transition-transform duration-300">
              <Link
                to="/blog"
                className="hover:text-gray-400"
                aria-label="Read our Blog"
              >
                Blog
              </Link>
            </li>
            <li className="hover:scale-110 transition-transform duration-300">
              <Link
                to="/contact"
                className="hover:text-gray-400"
                aria-label="Contact Us"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li className="hover:text-gray-400 transition-transform transform hover:scale-125 duration-300">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Facebook"
              >
                <FaFacebookSquare className="text-2xl" />
              </a>
            </li>
            <li className="hover:text-gray-400 transition-transform transform hover:scale-125 duration-300">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Twitter"
              >
                <FaTwitter className="text-2xl" />
              </a>
            </li>
            <li className="hover:text-gray-400 transition-transform transform hover:scale-125 duration-300">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </li>
            <li className="hover:text-gray-400 transition-transform transform hover:scale-125 duration-300">
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Copyright */}
        <p className="text-sm text-gray-300">
          © {currentYear} Tech Horizon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
