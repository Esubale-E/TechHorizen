import { Outlet } from "react-router-dom";
import TopBar from "../components/Teachers/TopBar";
import Aside from "../components/Teachers/Aside";

const TeachersLayout = () => {
  return (
    <div>
      <TopBar />
      <div className="flex flex-1 bg-gradient-to-r from-blue-100 to-gray-100">
        <Aside />
        <Outlet />
      </div>
    </div>
  );
};

export default TeachersLayout;
