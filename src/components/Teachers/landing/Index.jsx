import { useNavigate } from "react-router-dom";
import ContactUs from "../../landing/ContactUs";
import Footer from "../../landing/Footer";
import Features from "./Features";
import Hero from "./Hero";
import Testimonials from "./Testimonial";
import { useContext } from "react";
import AuthContext from "../../../contexts/authContext";

const Landing = () => {
  const navigateTo = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleGetStarted = () => {
    console.log("teachers login");
    navigateTo("/join/signup");
    dispatch({ type: "LOGIN", user: { role: "teacher" } });
  };
  return (
    <div>
      <Hero onGetStarted={handleGetStarted} />
      <Features />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Landing;
