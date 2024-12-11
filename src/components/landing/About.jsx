import { Heading2, Heading3 } from "../common/Headings";
import Text from "../common/Text";
import TextHighlight from "../common/TextHighlight";

const AboutUs = () => {

  return (
    <section
      id="about"
      className="bg-background dark:bg-darkbackground py-16 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <Heading2>About TechHorizon</Heading2>
        <Text>
          At <TextHighlight>TechHorizon</TextHighlight>, we are more than just a
          tech community – we are a platform where technology enthusiasts,
          innovators, and learners come together to share ideas, collaborate on
          projects, and build lasting connections. Our mission is to provide an
          inclusive space for everyone who is passionate about tech to thrive.
        </Text>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex justify-center items-center">
            <img
              src="https://via.placeholder.com/400"
              alt="Tech Community"
              className="rounded-lg shadow-lg w-full md:w-2/3 transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center text-left">
            <div className="flex flex-col justify-center text-left">
              <Heading3>Our Vision</Heading3>
              <Text>
                Our vision is to inspire, educate, and empower the next
                generation of tech leaders. By providing resources, hosting
                events, and fostering a collaborative environment, we aim to
                help members grow professionally and personally in the
                ever-evolving tech world.
              </Text>
            </div>

            <div className="flex flex-col justify-center text-left">
              <Heading3>Our Values</Heading3>
              <ul className="list-disc pl-6 text-text dark:text-darktext space-y-2">
                <li>
                  <strong>Inclusivity:</strong> We believe in creating a
                  welcoming space for all backgrounds and skill levels.
                </li>
                <li>
                  <strong>Collaboration:</strong> We foster a culture of
                  teamwork and mutual growth.
                </li>
                <li>
                  <strong>Innovation:</strong> We embrace new ideas and
                  encourage creative problem-solving.
                </li>
                <li>
                  <strong>Learning:</strong> We are committed to continuous
                  learning and knowledge sharing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
