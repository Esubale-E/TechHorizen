import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* Content will be rendered here */}
    </div>
  );
};

export default MainLayout;
