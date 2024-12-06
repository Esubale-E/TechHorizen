import AboutUs from "../sections/landing/AboutUs";
import Features from "../sections/landing/Features";
import Hero from "../sections/landing/Hero";
import UpcomingEvent from "../sections/landing/UpcomingEvent";
import Footer from "./../sections/landing/Footer";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Features />
      <UpcomingEvent />
      <Footer />
    </div>
  );
};

export default LandingPage;
