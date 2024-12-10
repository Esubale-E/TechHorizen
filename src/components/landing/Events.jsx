import { Heading2, Heading3 } from "./../common/Headings";
import AppLink from "./../common/AppLink";
import events from "../../services/events";

const Event = () => {
  return (
    <section
      id="events"
      className="bg-background dark:bg-darkbackground py-16 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <Heading2>Upcoming Events</Heading2>
        <p className="text-lg text-text dark:text-darktext mb-12">
          Stay up-to-date with the latest events, workshops, and hackathons
          hosted by TechHorizon. Join us to learn, collaborate, and innovate.
        </p>

        {/* Event List */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white dark:bg-darksecondarybackground rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              {/* Event Title */}
              <Heading3>{event.title}</Heading3>

              {/* Event Date */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {event.date}
              </p>

              {/* Event Description */}
              <p className="text-text dark:text-darktext mb-6">
                {event.description}
              </p>

              {/* Learn More Link */}
              <AppLink to={event.link}>Learn More &rarr;</AppLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
