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
      ? "bg-highlight text-darktext"
      : "hover:bg-highlight hover:text-darktext";

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
        } md:translate-x-0 fixed md:relative left-0 top-0 w-72 ${
          sidebarOpen ? "h-full" : "s-screen"
        } bg-backgound shadow-lg transition-transform duration-300 ease-in-out mt-16 z-40 dark:bg-darksecondarybackground`}
        aria-hidden={!sidebarOpen}
      >
        <div className="p-6 text-gray-700 dark:text-darktext">
          {/* Menu Items */}
          <nav className="space-y-4 ">
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
      <div className="flex-1 fixed top- left-2 z-50 md:hidden">
        <button
          aria-label="Toggle Sidebar"
          aria-expanded={sidebarOpen}
          onClick={toggleSidebar}
          className="p-3 bg-primary text-darktext rounded-lg absolute top-16 left-4 z-50 shadow-md hover:bg-secondary transition duration-300"
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
    className={`flex items-center py-3 px-4  border-b border-highlight w-full transition duration-200 ${isActive(
      to
    )}`}
  >
    <span className="text-accent dark:text-darkaccent mr-3">{icon}</span>
    {label}
  </Link>
);

export default Aside;
