import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
