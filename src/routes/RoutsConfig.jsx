import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import MainLayout from "../layouts/MainLayout";
import StudentLayout from "../Layouts/StudentLayout";
import Dashboard from "../components/Students/Dashboard";
import Resources from "../components/Students/Resources";
import Courses from "../components/Students/Cources";
import Events from "../components/Students/Events";
import Blog from "../components/Students/Blog";
import TeachersLayout from "../Layouts/TeachersLayout";
import TeachersCourse from "../components/Teachers/TeachersCourse";
import TeacherCourseDetail from "../components/Teachers/TeachersCourseDetail";
import PrivateRoute from "./PrivateRoute";
import SignIn from "../pages/SIgnin";

const RoutesConfig = () => {
  return (
    <Routes>
      {/* Main Navigation */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>

      {/* Student Dashboard Navigation */}
      <Route element={<PrivateRoute role="student" />}>
        <Route element={<StudentLayout />}>
          <Route path="/student" element={<Dashboard />} />
          <Route path="/student/events" element={<Events />} />
          <Route path="/student/courses" element={<Courses />} />
          <Route path="/student/resources" element={<Resources />} />
          <Route path="/student/blog" element={<Blog />} />
        </Route>
      </Route>

      {/* Teacher Dashboard Navigation */}
      <Route element={<PrivateRoute role="teacher" />}>
        <Route element={<TeachersLayout />}>
          <Route path="/teacher" element={<Dashboard />} />
          <Route path="/teacher/events" element={<Events />} />
          <Route
            path="/teacher/courses"
            element={<TeachersCourse currentTeacherName={"Dr. Alan Turing"} />}
          />
          <Route
            path="/teacher/coursedetail"
            element={<TeacherCourseDetail />}
          />
          <Route path="/teacher/resources" element={<Resources />} />
          <Route path="/teacher/blog" element={<Blog />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
