import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Calendar styling
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import { Heading2, Heading3 } from "./common/Headings";
import eventService from "../services/event-service";

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
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <Heading3 className="text-blue-700">
            Events on {selectedDate.toDateString()}
          </Heading3>
          {filteredEvents.length > 0 ? (
            <div className="space-y-6 mt-4">
              {filteredEvents.map((event, index) => (
                <div
                  key={index}
                  className="transition-all transform hover:scale-105 hover:shadow-lg bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500"
                >
                  <div className="flex items-center mb-3">
                    <FaCalendarAlt className="text-blue-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-800">
                      {event.title}
                    </h4>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt className="text-gray-500 mr-2" />
                    <span className="text-gray-600">{event.location}</span>
                  </div>
                  <p className="text-gray-700">{event.description}</p>
                  <div className="text-sm text-blue-600 font-medium mt-2">
                    Date: {new Date(event.date).toDateString()}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Category: {event.category}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 mt-4">
              No events match your search or category.
            </p>
          )}
        </div>
      </div>

      {/* All Events Section */}
      <div className="mt-10 bg-blue-50 p-6 rounded-lg shadow-md">
        <Heading3 className="text-blue-700 mb-4">All Upcoming Events</Heading3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allFilteredEvents.length > 0 ? (
            allFilteredEvents.map((event, index) => (
              <div
                key={index}
                className="transition-all transform hover:scale-105 hover:shadow-xl bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-400"
              >
                <div className="flex items-center mb-3">
                  <FaCalendarAlt className="text-blue-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {event.title}
                  </h4>
                </div>
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-gray-500 mr-2" />
                  <span className="text-gray-600">{event.location}</span>
                </div>
                <p className="text-gray-700">{event.description}</p>
                <div className="text-sm text-blue-600 font-medium mt-2">
                  Date: {new Date(event.date).toDateString()}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Category: {event.category}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">
              No events match your search or category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
