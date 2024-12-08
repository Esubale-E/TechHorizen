import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MainLayout from "./layouts/MainLayout";
import StudentDashboard from "./pages/StudentDashboard";
import StudentLayout from "./Layouts/StudentLayout";
import Resources from "./components/Students/Resources";
import Courses from "./components/Students/Cources";
import Events from "./components/Students/Events";
import Blog from "./components/Students/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Navigation */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        {/* Student Dashboard Navigation */}
        <Route element={<StudentLayout />}>
          <Route path="/studentDashboard/" element={<StudentDashboard />} />
          <Route path="/studentDashboard/events" element={<Events />} />
          <Route path="/studentDashboard/courses" element={<Courses />} />
          <Route path="/studentDashboard/resources" element={<Resources />} />
          <Route path="/studentDashboard/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
