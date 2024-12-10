import { useState } from "react";
import Topbar from "./../components/Students/Topbar";
import StudentProfile from "../components/Students/Profile";
import Aside from "./../components/Students/Aside";
import { Outlet } from "react-router-dom";

const TeacherLayout = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar showProfile={setShowProfile} />
      {showProfile && <StudentProfile />}
      <div className="flex flex-1 bg-background dark:bg-darksecondarybackground">
        <Aside />
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherLayout;
