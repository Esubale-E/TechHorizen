import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Calendar styling
import { FaSearch, FaFilter } from "react-icons/fa";
import { Heading2, Heading3 } from "./common/Headings";
import eventService from "../services/event-service";
import EventCard from "./EventCard";
import Text from "./common/Text";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories from events
  const categories = ["All", ...new Set(events.map((event) => event.category))];

  const filteredEventsByDate = events.filter(
    (event) =>
      new Date(event.date).toDateString() === selectedDate.toDateString()
  );

  const filteredEvents = filteredEventsByDate.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const allFilteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    eventService
      .getAll()
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => setError(err));
  }, []);

  if (error) return <p>hey ther</p>;

  return (
    <div className="p-6 w-full bg-gradient-to-b from-blue-100 via-white to-blue-50 rounded-lg shadow-xl">
      <Heading2 className="text-center text-blue-800 mb-6">
        Events Calendar
      </Heading2>

      {/* Search and Filter Section */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <FaSearch className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search events by title or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 rounded-lg border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Filter */}
        <div className="relative flex items-center">
          <FaFilter className="absolute left-3 text-gray-500" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-3 pl-10 rounded-lg border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md flex justify-center items-center">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="rounded-lg border-2 border-blue-300 shadow-md"
          />
        </div>

        {/* Events Section */}
        <div className="">
          <Heading3>Events on {selectedDate.toDateString()}</Heading3>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md max-h-80 overflow-scroll bg-gradient-to-b from-transparent to-gray-100 scrollbar-hidden">
            {filteredEvents.length > 0 ? (
              <div className="space-y-6 mt-4 ">
                {filteredEvents.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            ) : (
              <Text>No events match your search or category.</Text>
            )}
          </div>
        </div>
      </div>

      {/* All Events Section */}
      <div className="mt-10 bg-blue-50 p-6 rounded-lg shadow-md">
        <Heading3>All Upcoming Events</Heading3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allFilteredEvents.length > 0 ? (
            allFilteredEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))
          ) : (
            <Text>No events match your search or category.</Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
