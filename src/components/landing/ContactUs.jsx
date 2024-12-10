import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmissionStatus("success");
    }, 1000);
  };

  return (
    <section
      className="py-16 px-6 bg-background dark:bg-darkbackground"
      id="contactus"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Contact Form */}
        <div className="bg-background dark:bg-darksecondary shadow-lg rounded-xl p-8 transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl font-bold text-primary dark:text-darkaccent mb-6 text-center">
            Get In Touch
          </h2>
          <p className="text-secondary dark:text-darkhighlight text-center mb-6">
            We would love to hear from you! Fill out the form below or reach out
            via social links.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text dark:text-darktext"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-highlight dark:border-darkhighlight rounded-lg focus:ring-2 focus:ring-accent dark:focus:ring-darkaccent focus:outline-none transition-shadow duration-300 hover:shadow-lg"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text dark:text-darktext"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-highlight dark:border-darkhighlight rounded-lg focus:ring-2 focus:ring-accent dark:focus:ring-darkaccent focus:outline-none transition-shadow duration-300 hover:shadow-lg"
                placeholder="johndoe@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text dark:text-darktext"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-2 w-full p-3 border border-highlight dark:border-darkhighlight rounded-lg focus:ring-2 focus:ring-accent dark:focus:ring-darkaccent focus:outline-none transition-shadow duration-300 hover:shadow-lg"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-darkaccent dark:bg-darkaccent text-white dark:text-darktext py-3 rounded-lg font-medium hover:bg-highlight  focus:ring-2 focus:ring-accent dark:focus:ring-darkhighlight focus:outline-none transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {submissionStatus === "success" && (
            <div className="text-green-600 dark:text-darkhighlight text-center mt-4">
              Your message has been sent successfully!
            </div>
          )}
        </div>

        {/* Right Side: Social Media & Links */}
        <div className="flex flex-col items-center justify-center bg-background dark:bg-darksecondary p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-3xl font-bold text-primary dark:text-darkaccent mb-6">
            Connect With Us
          </h3>
          <p className="text-secondary dark:text-darktext text-center mb-8">
            Follow us on social media or reach out directly.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkaccent transition-transform duration-300 hover:scale-125"
            >
              <FaFacebook size={36} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkaccent
              transition-transform duration-300 hover:scale-125"
            >
              <FaTwitter size={36} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkaccent
              transition-transform duration-300 hover:scale-125"
            >
              <FaLinkedin size={36} />
            </a>

            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-darkaccent
              transition-transform duration-300 hover:scale-125"
            >
              <FaGithub size={36} />
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center">
            <p className="text-secondary dark:text-white">
              <strong>Email:</strong> contact@techhorizon.com
            </p>
            <p className="text-secondary dark:text-white">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
          </div>

          {/* Additional Links */}
          <div className="mt-8">
            <a
              href="/about"
              className="text-primary dark:text-darktext underline hover:text-highlight dark:hover:text-darkaccent transition-transform duration-300 hover:scale-105"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
