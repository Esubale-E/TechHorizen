import { Heading2, Heading3 } from "../common/Headings";
import TextHighlight from "../common/TextHighlight";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-background dark:bg-darkbackground py-16 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <Heading2>About TechHorizon</Heading2>
        <p className="text-lg text-text dark:text-darktext mb-12">
          At <TextHighlight>TechHorizon</TextHighlight>, we are more than just a
          tech community – we are a platform where technology enthusiasts,
          innovators, and learners come together to share ideas, collaborate on
          projects, and build lasting connections. Our mission is to provide an
          inclusive space for everyone who is passionate about tech to thrive.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-darksecondarybackground shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <Heading3>Our Vision</Heading3>
            <p className="text-text dark:text-darktext mb-6">
              Our vision is to inspire, educate, and empower the next generation
              of tech leaders. By providing resources, hosting events, and
              fostering a collaborative environment, we aim to help members grow
              professionally and personally in the ever-evolving tech world.
            </p>
          </div>
          <div className="bg-white dark:bg-darksecondarybackground shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <Heading3>Our Values</Heading3>
            <ul className=" pl-6 text-text dark:text-darktext list-none space-y-2">
              <li>
                <strong>Inclusivity:</strong> We believe in creating a welcoming
                space for all backgrounds and skill levels.
              </li>
              <li>
                <strong>Collaboration:</strong> We foster a culture of teamwork
                and mutual growth.
              </li>
              <li>
                <strong>Innovation:</strong> We embrace new ideas and encourage
                creative problem-solving.
              </li>
              <li>
                <strong>Learning:</strong> We are committed to continuous
                learning and knowledge sharing.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
