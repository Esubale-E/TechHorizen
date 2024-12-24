import { FaBell, FaChalkboardTeacher, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="w-full bg-white text-primary p-4 flex items-center justify-between shadow-md shadow-gray-900">
      <div className="text-2xl font-bold">
        <Link
          to="/teacher"
          title="TechHorizon"
          className="hover:text-accent text-blue-600 "
        >
          TechHorizon
        </Link>
      </div>
      <Link to="/teacher" className="flex items-center font-bold ">
        <FaChalkboardTeacher size={24} />{" "}
        <span className="font-bold ms-5 text-lg">Dashboard</span>
      </Link>
      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <button
          className="relative focus:outline-none"
          aria-label="Notifications"
        >
          <FaBell className="text-xl" />
          <span className="absolute top-0 right-0 bg-accent text-xs rounded-full px-1">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <FaUserCircle className="text-2xl" />
          <span className="hidden md:block">Teacher Name</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
