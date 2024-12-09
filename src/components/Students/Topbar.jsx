import { useState, useEffect, useRef } from "react";
import { FaUserAlt, FaCog } from "react-icons/fa";
import Profile from "./Profile";
import Setting from "./Setting";
import { PureButton } from "../common/Button";

const Topbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleButtons = (clicked) => {
    if (clicked === "profile") {
      setIsProfileOpen(true);
      setIsSettingsOpen(false);
    }
    if (clicked === "setting") {
      setIsSettingsOpen(true);
      setIsProfileOpen(false);
    }
  };

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
    <header className="fixed w-screen z-50 bg-background dark:bg-darkbackground shadow-md py-4 px-6 pr-8 flex justify-between items-center">
      <div className="text-2xl font-bold text-primary text-center">
        Tech Horizon
      </div>
      <div className="text-xl md:text-2xl font-bold text-text dark:text-darktext">
        Student Dashboard
      </div>
      <div className="flex items-center space-x-6">
        <div ref={profileRef}>
          <PureButton onClick={() => toggleButtons("profile")}>
            <FaUserAlt className="text-2xl text-text dark:text-darktext" />
            <span className="hidden md:block text-sm text-text dark:text-darktext">
              Profile
            </span>
          </PureButton>

          {isProfileOpen && <Profile />}
        </div>

        <div className="relative" ref={settingsRef}>
          <PureButton onClick={() => toggleButtons("setting")}>
            <FaCog className="text-2xl text-text dark:text-darktext" />
            <span className="hidden md:block text-sm text-text dark:text-darktext">
              Settings
            </span>
          </PureButton>
          {isSettingsOpen && (
            <Setting profile={() => toggleButtons("profile")} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
