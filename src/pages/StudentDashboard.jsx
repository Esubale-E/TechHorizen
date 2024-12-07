import { Routes, Route } from "react-router-dom";
import Layout from "../components/Students/Layout";
import Events from "../components/Students/Events";
import Courses from "../components/Students/Cources";
import Topbar from "../components/Students/Topbar";
import Blog from "../components/Students/Blog";
import Resources from "../components/Students/Resources";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function StudentDashboard({ changeNav }) {
  useEffect(() => {
    changeNav();
  });
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <h2 className="text-center mt-20 text-gray-600">
                Welcome to the Dashboard!
              </h2>
            }
          />
          <Route path="/events" element={<Events />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/resource" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
}

export default StudentDashboard;
