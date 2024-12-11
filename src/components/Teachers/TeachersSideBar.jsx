/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChalkboardTeacher,
  FaBookOpen,
  FaCalendarAlt,
  FaFileAlt,
  FaPen,
} from "react-icons/fa";

const TeachersSideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false); // Automatically close overlay on larger screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeSidebar = () => setSidebarOpen(false);

  const isActive = (path) =>
    location.pathname === path
      ? "bg-secondary text-white"
      : "hover:bg-secondary hover:text-white";

  return (
    <>
      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0  h-full" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative left-0 top-0 w-72 bg-white text-primary shadow-lg transition-transform duration-300 ease-in-out z-40`}
        aria-hidden={!sidebarOpen}
      >
        <div className="p-6">


          {/* Menu Items */}
          <nav className="space-y-4">
            <SidebarLink
              to="/teacher/dashboard"
              icon={<FaChalkboardTeacher />}
              label="Dashboard"
              isActive={isActive}
            />
            <SidebarLink
              to="/teacher/courses"
              icon={<FaBookOpen />}
              label="Courses"
              isActive={isActive}
            />
            <SidebarLink
              to="/teacher/schedule"
              icon={<FaCalendarAlt />}
              label="Schedule"
              isActive={isActive}
            />
            <SidebarLink
              to="/teacher/resources"
              icon={<FaFileAlt />}
              label="Resources"
              isActive={isActive}
            />
            <SidebarLink
              to="/teacher/blog"
              icon={<FaPen />}
              label="Blog"
              isActive={isActive}
            />
          </nav>
        </div>
      </aside>

      {/* Sidebar Toggle Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          aria-label="Toggle Sidebar"
          aria-expanded={sidebarOpen}
          onClick={toggleSidebar}
          className="p-3 bg-accent text-white rounded-lg shadow-md hover:bg-accent-dark transition duration-300"
        >
          {sidebarOpen ? (
            <FaTimes className="text-lg" />
          ) : (
            <FaBars className="text-lg" />
          )}
        </button>
      </div>
    </>
  );
};

const SidebarLink = ({ to, icon, label, isActive }) => (
  <Link
    to={to}
    className={`flex items-center py-3 px-4 rounded-lg transition duration-200 ${isActive(
      to
    )}`}
  >
    <span className="text-lg mr-3">{icon}</span>
    {label}
  </Link>
);

export default TeachersSideBar;
