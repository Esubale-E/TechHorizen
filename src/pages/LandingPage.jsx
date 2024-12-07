import AboutUs from "../components/landing/About";
import ContactUs from "../components/landing/ContactUs";
import Features from "../components/landing/Features";
import Hero from "../components/landing/Hero";
import Events from "../components/landing/Events";
import Footer from "../components/landing/Footer";
import Blog from "./../components/landing/blog";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Features />
      <Events />
      <ContactUs />
      <Blog />
      <Footer />
    </div>
  );
};

export default LandingPage;
