import { Link } from "react-router-dom";
import Heading1 from "../common/Headings";
import TextHighlight from "../common/TextHighlight";
import AppLink from "../common/AppLink";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center text-white h-screen flex items-center justify-center py-16 px-4 bg-[url('/hero-bg.jpg')] dark:bg-[url('/hero-bg.jpg')]"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-4xl text-center">
        <Heading1>
          Welcome to <TextHighlight>TechHorizon</TextHighlight>
        </Heading1>
        <p className="text-3xl mt-4">
          Your Gateway to <TextHighlight>Tech Excellence</TextHighlight>
        </p>
        <p className="text-lg mt-6 mb-8 leading-relaxed">
          At TechHorizon, we are a vibrant community of innovators, learners,
          and tech enthusiasts passionate about exploring the ever-evolving
          world of technology. Join us to connect, learn, and collaborate as we
          shape the future of tech.
        </p>
        <AppLink
          to="#aboutus"
          className="inline-block text-yellow-400 hover:underline"
        >
          Learn More
        </AppLink>
        <div className="mt-8">
          <Link
            to="#join"
            className="bg-yellow-400 text-white px-6 py-3 text-xl font-semibold rounded-lg hover:bg-yellow-500 dark:bg-yellow-300 dark:text-blue-900 dark:hover:bg-yellow-400 transition duration-300"
          >
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;