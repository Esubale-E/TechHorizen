import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCalendarAlt,
  FaBook,
  FaPen,
  FaFolderOpen,
} from "react-icons/fa";

const Aside = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // Get current location for active link styling

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
      ? "bg-blue-200 text-blue-700"
      : "hover:bg-blue-100";

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
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative left-0 top-0 w-72  bg-white shadow-lg transition-transform duration-300 ease-in-out pt-12 z-40`}
        aria-hidden={!sidebarOpen}
      >
        <div className="p-6 text-gray-700">
          {/* Menu Items */}
          <nav className="space-y-4">
            <SidebarLink
              to="/studentDashboard/events"
              icon={<FaCalendarAlt />}
              label="Events"
              isActive={isActive}
            />
            <SidebarLink
              to="/studentDashboard/courses"
              icon={<FaBook />}
              label="Courses"
              isActive={isActive}
            />
            <SidebarLink
              to="/studentDashboard/blog"
              icon={<FaPen />}
              label="Blog"
              isActive={isActive}
            />
            <SidebarLink
              to="/studentDashboard/resources"
              icon={<FaFolderOpen />}
              label="Resources"
              isActive={isActive}
            />
          </nav>
        </div>
      </aside>

      {/* Main Content Toggle (Button) */}
      <div className="flex-1 relative md:hidden">
        <button
          aria-label="Toggle Sidebar"
          aria-expanded={sidebarOpen}
          onClick={toggleSidebar}
          className="p-3 bg-blue-500 text-white rounded-lg absolute top-4 left-4 z-50 shadow-md hover:bg-blue-600 transition duration-300"
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

// eslint-disable-next-line react/prop-types
const SidebarLink = ({ to, icon, label, isActive }) => (
  <Link
    to={to}
    className={`flex items-center py-3 px-4 rounded-lg transition duration-200 ${isActive(
      to
    )}`}
  >
    <span className="text-blue-600 mr-3">{icon}</span>
    {label}
  </Link>
);

export default Aside;
