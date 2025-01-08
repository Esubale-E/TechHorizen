/* eslint-disable react/prop-types */
import Heading from "../../common/Headings";
import TextHighlight from "../../common/TextHighlight";

const Hero = ({ onGetStarted }) => (
  <section
    id="hero"
    className="relative bg-cover bg-center text-white h-screen flex items-center justify-center py-16 px-4 bg-[url('/hero-bg.jpg')] "
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black z-10 bg-opacity-60"></div>

    <div className="relative z-10 max-w-4xl text-center">
      <Heading>
        Empowering <TextHighlight>Teachers</TextHighlight>
      </Heading>
      <p className="text-3xl mt-4">
        to Inspire <TextHighlight>Future Generations</TextHighlight>
      </p>
      <p className="text-white text-lg leading-relax ">
        Join a vibrant community of educators and access tools that will help
        you engage your students, manage classes, and grow as a professional...
        <a href="#about" className="inline-block text-accent hover:underline">
          Learn More
        </a>
      </p>
      <div className="mt-8">
        <button
          onClick={onGetStarted}
          className="bg-accent text-white px-6 py-3 text-xl font-semibold rounded-lg hover:bg-accent transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  </section>
);

export default Hero;