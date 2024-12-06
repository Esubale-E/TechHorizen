import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SIgnin"; // Import your SignIn component
import SignUp from "./pages/SignUp"; // Import your SignUp component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} /> {/* Default route */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
