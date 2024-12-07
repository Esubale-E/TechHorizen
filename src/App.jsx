import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar";
import ToggleTheme from './components/ToggleTheme';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToggleTheme/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
};

export default App;
