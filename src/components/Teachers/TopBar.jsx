import { useEffect, useRef, useState } from "react";
import { FaBell, FaChalkboardTeacher, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Profile from "./../Profile";
import { PureButton } from "../common/Button";
import Setting from "../Students/Setting";

const TopBar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleButtons = (clicked) => {
    if (clicked === "profile") {
      setIsProfileOpen(true);
      setIsNotificationOpen(false);
    }
    if (clicked === "setting") {
      setIsNotificationOpen(true);
      setIsProfileOpen(false);
    }
  };

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
        setIsNotificationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

        <div className="relative" ref={notificationRef}>
          <PureButton onClick={() => toggleButtons("setting")}>
            <FaBell className="text-2xl text-gray-700 " />

            <span className="absolute top-0 right-0 bg-accent text-xs rounded-full px-1">
              3
            </span>
          </PureButton>
          {isNotificationOpen && (
            <Setting profile={() => toggleButtons("profile")} />
          )}
        </div>

        {/* Profile */}
        <div ref={profileRef}>
          <PureButton onClick={() => toggleButtons("profile")}>
            <FaUserAlt className="text-2xl text-gray-700 " />
            <span className="hidden md:block text-sm  text-gray-700">
              Profile
            </span>
          </PureButton>

          {isProfileOpen && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
