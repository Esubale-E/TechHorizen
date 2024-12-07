import { useState, useEffect, useRef } from "react";
import { FaUserAlt, FaSignOutAlt, FaCog, FaKey } from "react-icons/fa";

const Topbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const profileRef = useRef(null);
  const settingsRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        settingsRef.current &&
        !settingsRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white dark:bg-darkBackground shadow-md py-4 px-6 flex justify-between items-center">
      {/* Branding */}
      <div className="text-xl font-bold text-primary dark:text-white">
        Student Dashboard
      </div>

      {/* Navigation Icons */}
      <div className="flex items-center space-x-6">
        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            className="flex items-center space-x-2 focus:outline-none"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <FaUserAlt className="text-2xl text-gray-700 dark:text-white" />
            <span className="text-sm text-gray-700 dark:text-white">
              Profile
            </span>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 py-2 w-48 z-50">
              <a
                href="#profile"
                className="flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <FaUserAlt className="mr-2" />
                View Profile
              </a>
              <a
                href="#logout"
                className="flex items-center px-4 py-2 text-red-500 dark:text-red-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <FaSignOutAlt className="mr-2" />
                Logout
              </a>
            </div>
          )}
        </div>

        {/* Settings Dropdown */}
        <div className="relative" ref={settingsRef}>
          <button
            className="flex items-center space-x-2 focus:outline-none"
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          >
            <FaCog className="text-2xl text-gray-700 dark:text-white" />
            <span className="text-sm text-gray-700 dark:text-white">
              Settings
            </span>
          </button>

          {isSettingsOpen && (
            <div className="absolute right-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 py-2 w-48 z-50">
              <a
                href="#account"
                className="flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <FaCog className="mr-2" />
                Account Settings
              </a>
              <a
                href="#change-password"
                className="flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <FaKey className="mr-2" />
                Change Password
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
