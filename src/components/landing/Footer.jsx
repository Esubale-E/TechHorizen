import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer Navigation Links
  const navLinks = [
    { path: "/", label: "Home", aria: "Go to Home Page" },
    { path: "/about", label: "About", aria: "Learn more About Us" },
    { path: "/events", label: "Events", aria: "View Upcoming Events" },
    { path: "/blog", label: "Blog", aria: "Read our Blog" },
    { path: "/contact", label: "Contact", aria: "Contact Us" },
  ];

  // Social Media Links
  const socialLinks = [
    {
      href: "https://www.facebook.com",
      icon: FaFacebookSquare,
      aria: "Visit Facebook",
    },
    { href: "https://www.twitter.com", icon: FaTwitter, aria: "Visit Twitter" },
    {
      href: "https://www.linkedin.com",
      icon: FaLinkedin,
      aria: "Visit LinkedIn",
    },
    { href: "https://www.github.com", icon: FaGithub, aria: "Visit GitHub" },
  ];

  return (
    <footer
      id="footer"
      className="bg-gray-600 text-white py-12 px-4 animate-fadeIn"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Footer Navigation Links */}
        <div className="mb-6">
          <ul className="flex justify-center space-x-8">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="hover:scale-110 transition-transform duration-300"
              >
                <Link
                  to={link.path}
                  className="hover:text-gray-400"
                  aria-label={link.aria}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-6">
          <ul className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <li
                key={index}
                className="hover:text-gray-400 transition-transform transform hover:scale-125 duration-300"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.aria}
                >
                  <social.icon className="text-2xl" />
                </a>
              </li>
            ))}
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
