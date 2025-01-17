import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import LandingPage from "../pages/LandingPage";
import MainLayout from "../Layouts/MainLayout";
import JoinLayout from "../Layouts/JoinLayout";
import TeachersLayout from "../Layouts/TeachersLayout";
import StudentLayout from "../Layouts/StudentLayout";

import Dashboard from "../components/Students/Dashboard";
import Resources from "../components/Students/Resources";
import Courses from "../components/Students/Courses";
import Events from "../components/Events";
import Blog from "../components/Blog";
import TCourse from "../components/Course";
import TCourseDetail from "../components/Teachers/course/CourseDetail";
import AddResourse from "./../components/Teachers/AddResourse";
import AddCourse from "../components/Teachers/course/AddCourse";
import AddEvent from "./../components/Teachers/AddEvent";
import AddBlog from "../components/Teachers/AddBlog";
import ProfileSetup from "../components/ProfileSetup";
import GoogleLogin from "../pages/GoogleLogin";
import TeachersLandingPage from "./../components/Teachers/landing";
import TeachersProfileSetup from "../components/Teachers/TeachersProfileSetup";
import Adminlayout from "../Layouts/AdminLayout";
import StudentCourseDetail from "../components/Students/StudentCourseDetail";
import AdminCourses from "./../components/Admin/component/Courses";
import Users from "./../components/Admin/component/Users";
import ProtectedRoute from "./ProtectedRoute";

const RoutesConfig = () => {
  return (
    <Routes>
      {/* Main Navigation */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<TeachersLandingPage />} />
      </Route>
      <Route path="/join" element={<JoinLayout />}>
        <Route path="/join/signup" element={<SignUp />} />
        <Route path="/join/login" element={<LogIn />} />
        <Route path="/join/googlelogin" element={<GoogleLogin />} />
        <Route path="/join/profilesetup" element={<ProfileSetup />} />
        <Route
          path="/join/teacherprofilesetup"
          element={<TeachersProfileSetup />}
        />
      </Route>

      {/* Student Dashboard Navigation */}
      <Route
        element={
          <ProtectedRoute
            element={<StudentLayout />}
            allowedRoles={"student"}
          />
        }
      >
        <Route path="/student" element={<Dashboard />} />
        <Route path="/student/events" element={<Events />} />
        <Route path="/student/courses" element={<Courses />} />
        <Route
          path="/student/courses/coursedetail/:id"
          element={<StudentCourseDetail />}
        />
        <Route path="/student/resources" element={<Resources />} />
        <Route path="/student/blogs" element={<Blog />} />
        <Route path="/student/addblog" element={<AddBlog />} />
      </Route>

      <Route
        element={
          <ProtectedRoute
            element={<TeachersLayout />}
            allowedRoles={"teacher"}
          />
        }
      >
        <Route path="/teacher" element={<Dashboard />} />
        <Route path="/teacher/events" element={<Events />} />
        <Route path="/teacher/addevent" element={<AddEvent />} />
        <Route path="/teacher/courses" element={<TCourse />} />
        <Route path="/teacher/coursedetail/:id" element={<TCourseDetail />} />
        <Route path="/teacher/resources" element={<Resources />} />
        <Route path="/teacher/addresource" element={<AddResourse />} />
        <Route path="/teacher/addcourse" element={<AddCourse />} />
        <Route path="/teacher/blogs" element={<Blog />} />
        <Route path="/teacher/addblog" element={<AddBlog />} />
      </Route>

      <Route
        element={
          <ProtectedRoute element={<Adminlayout />} allowedRoles={"admin"} />
        }
      >
        <Route path="/Admin" element={<Dashboard />} />
        <Route path="/Admin/users" element={<Users />} />
        <Route path="/Admin/events" element={<Events />} />
        <Route path="/Admin/resources" element={<Resources />} />
        <Route path="/Admin/blogs" element={<Blog />} />
        <Route path="/Admin/courses" element={<AdminCourses />} />
        <Route path="/Admin/addevent" element={<AddEvent />} />
        <Route path="/Admin/addresource" element={<AddResourse />} />
        <Route path="/Admin/addblog" element={<AddBlog />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
