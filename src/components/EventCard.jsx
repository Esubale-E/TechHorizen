/* eslint-disable react/prop-types */
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const EventCard = ({
  event: { title, location, description, date, category },
}) => {
  return (
    <div className="transition-all transform hover:scale-105 hover:shadow-xl bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-400">
      <div className="flex items-center mb-3">
        <FaCalendarAlt className="text-blue-600 mr-3" />
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      </div>
      <div className="flex items-center mb-2">
        <FaMapMarkerAlt className="text-gray-500 mr-2" />
        <span className="text-gray-600">{location}</span>
      </div>
      <p className="text-gray-700">{description}</p>
      <div className="text-sm text-blue-600 font-medium mt-2">
        Date: {new Date(date).toDateString()}
      </div>
      <div className="text-xs text-gray-500 mt-1">Category: {category}</div>
    </div>
  );
};

export default EventCard;
