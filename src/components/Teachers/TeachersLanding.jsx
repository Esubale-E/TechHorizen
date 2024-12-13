import Footer from "../landing/Footer";
import TextHighlight from "../common/TextHighlight";
import Heading from "../common/Headings";
import { Link } from "react-router-dom";

// Main Landing Page Component
const LandingPage = () => (
  <div>
    <Hero />
    <Features />
    <Testimonials />
    <CallToAction />
    <Footer />
  </div>
);

export default LandingPage;

// Hero Section Component
const Hero = () => (
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
        <Link
          to="#join"
          className="bg-accent text-white px-6 py-3 text-xl font-semibold rounded-lg hover:bg-accent transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  </section>
);
// Features Section
const Features = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto text-center space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">
        Features that Make Teaching Easier
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Interactive Learning Tools
          </h3>
          <p className="mt-4 text-gray-600">
            Engage your students with interactive quizzes, multimedia content,
            and real-time feedback.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Classroom Management
          </h3>
          <p className="mt-4 text-gray-600">
            Organize your classes, assign homework, and track student progress
            effortlessly.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Professional Development
          </h3>
          <p className="mt-4 text-gray-600">
            Access courses and resources to enhance your teaching skills and
            grow your career.
          </p>
        </div>
      </div>
    </div>
  </section>
);
// Testimonials Section
const Testimonials = () => (
  <section className="py-16 bg-blue-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        What Teachers Are Saying
      </h2>
      <div className="mt-8 space-y-6">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700">
            &quot;This platform has transformed the way I teach. My students are
            more engaged, and I’m able to track their progress effortlessly.
            Highly recommended!&quot;
          </p>
          <p className="mt-4 font-semibold text-gray-800">
            Sarah L., High School Teacher
          </p>
        </div>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700">
            &quot;The professional development resources are excellent. I’ve
            learned so much and feel more confident in my teaching
            abilities.&quot;
          </p>
          <p className="mt-4 font-semibold text-gray-800">
            John D., Elementary School Teacher
          </p>
        </div>
      </div>
    </div>
  </section>
);
// Call to Action Section
const CallToAction = () => (
  <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center">
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Ready to Make a Difference?</h2>
      <p className="text-lg max-w-xl mx-auto">
        Sign up today and unlock a world of resources and tools designed to help
        you excel as an educator.
      </p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg mt-4 hover:bg-blue-100 transition duration-300">
        Join Us Now
      </button>
    </div>
  </section>
);
