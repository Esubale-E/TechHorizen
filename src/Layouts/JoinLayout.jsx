import { Link, Outlet } from "react-router-dom";

const JoinLayout = () => {
  return (
    <div className="">
      <nav className="bg-background text-gray-600 p-4 shadow-md fixed w-full z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link
              to="/"
              title="TechHorizon"
              className="hover:text-accent text-blue-600 "
            >
              TechHorizon
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default JoinLayout;
