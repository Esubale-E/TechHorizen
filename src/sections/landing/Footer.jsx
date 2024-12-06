const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Footer Navigation Links */}
        <div className="mb-6">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-gray-400">
                Events
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-400">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            </li>
          </ul>
        </div>

        <p className="text-sm text-gray-300">
          © 2024 TechHorizon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
