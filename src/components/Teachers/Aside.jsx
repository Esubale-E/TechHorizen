import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import SidebarLink from "../common/SideBarLink";
import sideLinks from "../../utils/sideLinks";

const Aside = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
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

      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative left-0 top-0 min-w-72 ${
          sidebarOpen ? "h-full" : "s-screen"
        } bg-white shadow-lg transition-transform duration-300 ease-in-out z-40`}
        aria-hidden={!sidebarOpen}
      >
        <div className="p-6">
          {/* Menu Items */}
          <nav className="space-y-4">
            {sideLinks.map((li, i) => (
              <SidebarLink
                key={i}
                to={"/teacher" + li.link}
                icon={<li.icon />}
                label={li.label}
                isActive={isActive}
              />
            ))}
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

export default Aside;
