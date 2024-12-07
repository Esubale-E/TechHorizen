import { Outlet } from "react-router-dom";
import Topbar from "../components/Students/Topbar"; // Dashboard-specific navigation

const StudentLayout = () => {
  return (
    <div>
      <Topbar />
      <div className="p-4">
        <Outlet /> {/* Content for student pages */}
      </div>
    </div>
  );
};

export default StudentLayout;
