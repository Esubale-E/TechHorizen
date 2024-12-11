import { FaBell, FaUserCircle } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full bg-white text-primary p-4 flex items-center justify-between shadow-md">
      {/* Logo Section */}
      <div className="text-lg font-semibold">TechHorizon</div>
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
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
