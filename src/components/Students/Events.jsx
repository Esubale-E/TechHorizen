import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Calendar styling
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import events from "../../services/events";
const Events = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filteredEvents = events.filter(
    (event) =>
      new Date(event.date).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="p-6 w-full bg-white rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Events Calendar
      </h2>

      {/* Calendar & Filtered Events Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="rounded-lg"
          />
        </div>

        {/* Events on Selected Date */}
        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Events on {selectedDate.toDateString()}
          </h3>

          {filteredEvents.length > 0 ? (
            <div className="space-y-4">
              {filteredEvents.map((event, index) => (
                <div
                  key={index}
                  className="transition-all transform hover:scale-105 hover:shadow-lg bg-white p-4 rounded-lg shadow-md"
                >
                  {/* Event Header */}
                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className="text-blue-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-800">
                      {event.title}
                    </h4>
                  </div>

                  {/* Event Details */}
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt className="text-gray-500 mr-2" />
                    <span className="text-gray-600">{event.location}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{event.description}</p>
                  <div className="text-sm text-blue-500 font-semibold">
                    Date: {new Date(event.date).toDateString()}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No events on this date.</p>
          )}
        </div>
      </div>

      {/* All Events Section */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          All Upcoming Events
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="transition-all transform hover:scale-105 hover:shadow-lg bg-white p-4 rounded-lg shadow-md"
            >
              {/* Event Header */}
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-blue-600 mr-2" />
                <h4 className="text-lg font-semibold text-gray-800">
                  {event.title}
                </h4>
              </div>

              {/* Event Details */}
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                <span className="text-gray-600">{event.location}</span>
              </div>
              <p className="text-gray-700 mb-2">{event.description}</p>
              <div className="text-sm text-blue-500 font-semibold">
                Date: {new Date(event.date).toDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
