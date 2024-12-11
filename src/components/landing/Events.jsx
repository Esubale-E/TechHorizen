/* eslint-disable react/prop-types */
import { Heading2, Heading3 } from "./../common/Headings";
import { latestEvents } from "../../services/events";
import Text from "./../common/Text";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Event = () => {
  return (
    <section
      id="events"
      className="bg-background dark:bg-darkbackground py-16 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <Heading2>Upcoming Events</Heading2>
        <Text>
          Stay up-to-date with the latest events, workshops, and hackathons
          hosted by TechHorizon. Join us to learn, collaborate, and innovate.
        </Text>

        {/* Event List */}
        <div className="grid grid-cols-2 gap-4">
          {latestEvents.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EventCard = ({ event }) => (
  <div className="bg-white dark:bg-darksecondarybackground rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
    <Heading3>{event.title}</Heading3>

    <Text className="text-gray-700 mb-2">{event.description}</Text>
    <div className="text-sm text-blue-500 font-semibold ">
      <div className="flex items-center justify-center">
        <FaMapMarkerAlt className="text-gray-500 mr-2" />
        <span className="text-gray-600">{event.location}</span>
      </div>
      <div className="flex items-center justify-center">
        <FaCalendarAlt className="text-blue-600 mr-2" />{" "}
        {new Date(event.date).toDateString()}
      </div>
    </div>
  </div>
);

export default Event;
