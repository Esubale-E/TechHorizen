import { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Students/Topbar";
import Aside from "../components/Students/Aside";
import ProfileDetail from "../components/Students/Profile";

const StudentLayout = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar showProfile={setShowProfile} />
      {showProfile && <ProfileDetail />}
      <div className="flex flex-1 bg-background dark:bg-darkbackground">
        <Aside />
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
