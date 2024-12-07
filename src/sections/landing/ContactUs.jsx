import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send an email or API request)
    console.log("Form submitted:", formData);
  };

  return (
    <section
      className="bg-background dark:bg-darkBackground py-16 px-4"
      id="contact"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary dark:text-darkText mb-6">
          Contact Us
        </h2>
        <p className="text-lg text-text dark:text-darkText mb-12">
          We would love to hear from you! If you have any questions or feedback,
          feel free to reach out to us.
        </p>

        {/* Contact Form */}
        <div className="bg-white dark:bg-darkBackground rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-text dark:text-darkText"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-text dark:text-darkText"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-text dark:text-darkText"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-accent transition-colors dark:bg-darkAccent dark:hover:bg-darkAccentHover"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-primary dark:text-darkText mb-4">
            Our Contact Information
          </h3>
          <p className="text-lg text-text dark:text-darkText">
            <strong>Email:</strong> contact@techhorizon.com
          </p>
          <p className="text-lg text-text dark:text-darkText">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>

          {/* Social Media Links */}
          <div className="mt-6">
            <ul className="flex justify-center space-x-6">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-accent dark:hover:text-yellow-400"
                >
                  <i className="fab fa-facebook-square text-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-accent dark:hover:text-yellow-400"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-accent dark:hover:text-yellow-400"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-accent dark:hover:text-yellow-400"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
