const AboutUs = () => {
  return (
    <section className="bg-background dark:bg-darkBackground py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary dark:text-darkText mb-6">
          About TechHorizon
        </h2>
        <p className="text-lg text-text dark:text-darkText mb-12">
          At TechHorizon, we are more than just a tech community – we are a
          platform where technology enthusiasts, innovators, and learners come
          together to share ideas, collaborate on projects, and build lasting
          connections. Our mission is to provide an inclusive space for everyone
          who is passionate about tech to thrive.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex justify-center items-center">
            <img
              src="https://via.placeholder.com/400" // Placeholder image for now
              alt="Tech Community"
              className="rounded-lg shadow-lg w-full md:w-2/3"
            />
          </div>

          <div className="flex flex-col justify-center text-left">
            <h3 className="text-2xl font-semibold text-primary dark:text-darkText mb-4">
              Our Vision
            </h3>
            <p className="text-text dark:text-darkText mb-6">
              Our vision is to inspire, educate, and empower the next generation
              of tech leaders. By providing resources, hosting events, and
              fostering a collaborative environment, we aim to help members grow
              professionally and personally in the ever-evolving tech world.
            </p>

            <h3 className="text-2xl font-semibold text-primary dark:text-darkText mb-4">
              Our Values
            </h3>
            <ul className="list-disc pl-6 text-text dark:text-darkText">
              <li>
                Inclusivity – We believe in creating a welcoming space for all
                backgrounds and skill levels.
              </li>
              <li>
                Collaboration – We foster a culture of teamwork and mutual
                growth.
              </li>
              <li>
                Innovation – We embrace new ideas and encourage creative
                problem-solving.
              </li>
              <li>
                Learning – We are committed to continuous learning and knowledge
                sharing.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
