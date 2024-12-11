import { Outlet } from "react-router-dom";
import TopBar from "../components/Teachers/TeachersTopBar";
import TeachersSideBar from "../components/Teachers/TeachersSideBar";

const TeachersLayout = () => {
  return (
    <div>
      <TopBar />
      <div className="flex flex-1 bg-gradient-to-r from-blue-100 to-gray-100">
        <TeachersSideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default TeachersLayout;
