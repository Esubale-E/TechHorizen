/* eslint-disable react/prop-types */
import { Heading2, Heading3 } from "./../common/Headings";
import Text from "./../common/Text";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import eventService from "./../../services/event-service";

const Event = () => {
  const [events, setEvents] = useState();
  const [error, setError] = useState();
  const [isLoadding, setIsLoading] = useState(true);

  useEffect(() => {
    eventService
      .getAll()
      .then((res) => {
        setEvents(res.data.slice(0, 4));
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  });

  if (error) return <p> {error}</p>;

  if (isLoadding) return <p>Loadding...</p>;
  return (
    <section id="events" className="bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <Heading2>Upcoming Events</Heading2>
        <Text>
          Stay up-to-date with the latest events, workshops, and hackathons
          hosted by TechHorizon. Join us to learn, collaborate, and innovate.
        </Text>

        {/* Event List */}
        <div className="grid grid-cols-2 gap-4">
          {events.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EventCard = ({ event }) => (
  <div className="bg-white  rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
    <Heading3>{event.title}</Heading3>

    <Text className="text-gray-700 mb-2">{event.description}</Text>
    <div className="text-sm text-blue-500 font-semibold ">
      <div className="flex items-center justify-center">
        <FaMapMarkerAlt className="text-text mr-2" />
        <span className="text-text">{event.location}</span>
      </div>
      <div className="flex items-center justify-center">
        <FaCalendarAlt className="text-blue-600 mr-2" />{" "}
        {new Date(event.date).toDateString()}
      </div>
    </div>
  </div>
);

export default Event;
