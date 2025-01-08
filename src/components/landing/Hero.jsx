import { Link } from "react-router-dom";
import Heading1 from "../common/Headings";
import TextHighlight from "../common/TextHighlight";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center text-white h-screen flex items-center justify-center py-16 px-4 bg-[url('/hero-bg.jpg')] "
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
        <p className="text-white">
          At TechHorizon, we are a vibrant community of innovators, learners,
          and tech enthusiasts passionate about exploring the ever-evolving
          world of technology. Join us to connect, learn, and collaborate as we
          shape the future of tech...
          <a href="#about" className="inline-block text-accent hover:underline">
            Learn More
          </a>
        </p>
        <div className="mt-8">
          <Link
            to="/join/signup"
            className="bg-accent text-white px-6 py-3 text-xl font-semibold rounded-lg hover:bg-accent transition duration-300"
          >
            Join Us
          </Link>
          <Link
            to="/home"
            className="bg-darkaccent text-white px-6 py-3 text-xl font-semibold rounded-lg hover:bg-highlight transition duration-300 ms-4"
          >
            Join as a Teacher
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
