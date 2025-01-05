import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import LandingPage from "../pages/LandingPage";
import MainLayout from "../layouts/MainLayout";
import StudentLayout from "../Layouts/StudentLayout";
import TeachersLayout from "../Layouts/TeachersLayout";
import Dashboard from "../components/Students/Dashboard";
import Resources from "../components/Students/Resources";
import Courses from "../components/Students/Cources";
import Events from "../components/Events";
import Blog from "../components/Blog";
import TCourse from "../components/Course";
import TCourseDetail from "../components/Teachers/CourseDetail";
import AddCourse from "../components/Teachers/AddCourse";
import AddBlog from "../components/Teachers/AddBlog";
import AddEvent from "./../components/Teachers/AddEvent";

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
      <Route element={<StudentLayout />}>
        <Route path="/student" element={<Dashboard />} />
        <Route path="/student/events" element={<Events />} />
        <Route path="/student/courses" element={<Courses />} />
        <Route path="/student/resources" element={<Resources />} />
        <Route path="/student/blog" element={<Blog />} />
      </Route>

      <Route element={<TeachersLayout />}>
        <Route path="/teacher" element={<Dashboard />} />
        <Route path="/teacher/events" element={<Events />} />
        <Route path="/teacher/addevent" element={<AddEvent />} />
        <Route path="/teacher/courses" element={<TCourse />} />
        <Route path="/teacher/coursedetail/:id" element={<TCourseDetail />} />
        <Route path="/teacher/resources" element={<Resources />} />
        <Route path="/teacher/addcourse" element={<AddCourse />} />
        <Route path="/teacher/blog" element={<Blog />} />
        <Route path="/teacher/addblog" element={<AddBlog />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
