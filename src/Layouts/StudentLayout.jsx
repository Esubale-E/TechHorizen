import { Outlet } from "react-router-dom";
import Topbar from "../components/Students/Topbar"; // Dashboard-specific navigation
import Aside from "../components/Students/Aside";
import Profile from "../components/Profile";
import { useState } from "react";

const StudentLayout = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar showProfile={setShowProfile} className="" />
      {showProfile && <Profile />}
      <div className="flex flex-1 bg-gradient-to-r from-blue-100 to-gray-100">
        <Aside />
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
