import { Outlet } from "react-router-dom";
import TopBar from './../components/Admin/Topbar'
import Aside from "../components/Admin/Aside";

const Adminlayout = () => {
  return (
    <div>
      <TopBar />
      <div className="flex flex-1 bg-gradient-to-r from-blue-100 to-gray-100 ">
        <Aside />
        <Outlet />
      </div>
    </div>
  );
};

export default Adminlayout;
