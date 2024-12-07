import { Link } from "react-router-dom";
import Heading1 from "../common/Heading1";
import TextHighlight from "../common/TextHighlight";
import AppLink from "../common/AppLink";

const Hero = () => {
  return (
    <section
      id="#"
      className="relative bg-cover bg-center text-white h-screen flex items-center justify-center py-16 px-4 bg-[url('/hero-bg.jpg')] dark:bg-[url('/hero-bg.jpg')]"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="flex justify-between">
        <div className="relative  max-w-4xl mx-auto z-10">
          <Heading1>
            Welcome to
            <TextHighlight>TechHorizon</TextHighlight>
          </Heading1>
          <p className="text-3xl text-center">
            Your Gateway to
            <TextHighlight>Tech Excellence</TextHighlight>
          </p>
          <p className="text-lg mb-8">
            At TechHorizon, we are a vibrant community of innovators, learners,
            and tech enthusiasts passionate about exploring the ever-evolving
            world of technology. Join us to connect, learn, and collaborate as
            we shape the future of tech.
            <AppLink to="#aboutus"> Learn More </AppLink>
          </p>
          <Link
            to="#join"
            className="bg-yellow-400 text-white px-6 py-3 text-xl font-semibold rounded-lg hover:bg-yellow-500 dark:bg-yellow-300 dark:text-blue-900 dark:hover:bg-yellow-400 transition duration-300"
          >
            Join Us
          </Link>
        </div>
        <div className=" w-4/5"></div>
      </div>
    </section>
  );
};

export default Hero;
