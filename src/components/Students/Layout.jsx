import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCalendarAlt,
  FaBook,
  FaPen,
  FaFolderOpen,
} from "react-icons/fa";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle toggle
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false); // Always ensure the sidebar doesn't overlay on large screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar when clicking on overlay
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-100 to-gray-100">
      {/* Sidebar as Overlay on Small Screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative left-0 top-0 w-72 h-screen bg-white shadow-lg transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-6 text-gray-700">
          {/* Logo Section */}
          <div className="text-2xl font-bold mb-4 text-blue-600 text-center">
            Tech Horizon
          </div>
          {/* Menu Items */}
          <nav className="mt-4 space-y-3">
            <Link
              to="/events"
              className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-200"
            >
              <FaCalendarAlt className="text-blue-600 mr-3" />
              Events
            </Link>
            <Link
              to="/courses"
              className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-200"
            >
              <FaBook className="text-blue-600 mr-3" />
              Courses
            </Link>
            <Link
              to="/blog"
              className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-200"
            >
              <FaPen className="text-blue-600 mr-3" />
              Blog
            </Link>
            <Link
              to="/resource"
              className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-200"
            >
              <FaFolderOpen className="text-blue-600 mr-3" />
              Resources
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 relative bg-white shadow-inner rounded-lg">
        {/* Toggle button for mobile view */}
        <button
          aria-label="Toggle Sidebar"
          className="p-3 bg-blue-500 text-white rounded-lg absolute top-4 left-4 z-30 shadow-md hover:bg-blue-600 md:hidden transition duration-300"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? (
            <FaTimes className="text-lg" />
          ) : (
            <FaBars className="text-lg" />
          )}
        </button>

        {/* Main content (child routes will render here) */}
        <main className="p-8 pt-12 bg-gray-50 shadow-md rounded-lg mx-4 my-6 transition-all duration-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
