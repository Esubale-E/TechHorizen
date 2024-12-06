const UpcomingEvent = () => {
  const events = [
    {
      title: "TechTalk: The Future of AI",
      date: "January 15, 2024",
      description:
        "Join us for a deep dive into the future of AI with industry experts. Explore its impact on tech, business, and society.",
      link: "/events/ai-future",
    },
    {
      title: "Workshop: Intro to React",
      date: "February 5, 2024",
      description:
        "A hands-on workshop designed for beginners to get started with React. Learn how to build dynamic UIs with this powerful library.",
      link: "/events/react-workshop",
    },
    {
      title: "Hackathon: Code for a Cause",
      date: "March 22, 2024",
      description:
        "A 24-hour hackathon where developers, designers, and tech enthusiasts collaborate to create innovative solutions for social causes.",
      link: "/events/hackathon",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Upcoming Events
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Stay up-to-date with the latest events, workshops, and hackathons
          hosted by TechHorizon. Join us to learn, collaborate, and innovate.
        </p>

        <div className="space-y-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-blue-900">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{event.date}</p>
              <p className="text-gray-700 mb-6">{event.description}</p>
              <a
                href={event.link}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
