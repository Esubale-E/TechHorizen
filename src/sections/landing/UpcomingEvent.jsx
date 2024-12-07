import events from "../../services/events";

const UpcomingEvent = () => {
  return (
    <section className="bg-background dark:bg-darkBackground py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary dark:text-darkPrimary mb-6">
          Upcoming Events
        </h2>
        <p className="text-lg text-text dark:text-darkText mb-12">
          Stay up-to-date with the latest events, workshops, and hackathons
          hosted by TechHorizon. Join us to learn, collaborate, and innovate.
        </p>

        <div className="space-y-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white dark:bg-darkBackground rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-primary dark:text-darkPrimary mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {event.date}
              </p>
              <p className="text-text dark:text-darkText mb-6">
                {event.description}
              </p>
              <a
                href={event.link}
                className="text-secondary dark:text-darkSecondary hover:text-accent dark:hover:text-highlight font-semibold transition-colors duration-200"
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
