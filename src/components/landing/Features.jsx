import {
  FaCalendarAlt,
  FaUsersCog,
  FaChalkboardTeacher,
  FaBlog,
} from "react-icons/fa";
import { Heading2, Heading3 } from "../common/Headings";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: (
        <FaCalendarAlt className="text-4xl text-primary dark:text-accent transition duration-300 hover:text-accent" />
      ),
      title: "Upcoming Events",
      description:
        "Stay up to date with the latest tech events, workshops, and meetups happening in our community. Whether you’re looking to network, learn, or collaborate, we have something for you!",
    },
    {
      id: 2,
      icon: (
        <FaUsersCog className="text-4xl text-primary dark:text-accent transition duration-300 hover:text-accent" />
      ),
      title: "Collaborative Workshops",
      description:
        "Join our hands-on workshops where you can collaborate with like-minded individuals, share knowledge, and build real-world projects that help you grow your skills.",
    },
    {
      id: 3,
      icon: (
        <FaChalkboardTeacher className="text-4xl text-primary dark:text-accent transition duration-300 hover:text-accent" />
      ),
      title: "Tech Talks & Webinars",
      description:
        "Attend insightful tech talks and webinars by industry experts, covering the latest trends, technologies, and career development tips. Expand your knowledge and stay ahead of the curve.",
    },
    {
      id: 4,
      icon: (
        <FaBlog className="text-4xl text-primary dark:text-accent transition duration-300 hover:text-accent" />
      ),
      title: "Tech Blog",
      description:
        "Stay informed with the latest trends, tutorials, and community stories. Our blog covers tech tips, guides, and insights from both industry leaders and community members.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-background dark:bg-darkbackground py-16 px-4"
    >
      <div className="text-center max-w-6xl mx-auto">
        <Heading2>What We Offer</Heading2>
        <p className="text-lg mb-12">
          At TechHorizon, we bring together tech enthusiasts, professionals, and
          learners. We offer engaging events, collaborative workshops, valuable
          networking opportunities, and insightful blog content to help you
          grow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white dark:bg-darkbackground shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <Heading3 className="mb-2">{feature.title}</Heading3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
