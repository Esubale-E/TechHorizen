import TextHighlight from "../common/TextHighlight";
import Heading1 from "../common/Headings";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

function StudentDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-gray-100">
      <Heading1>Welcome {user.firstName || "to the Dashboard"}!</Heading1>
      <p className="text-gray-600 text-center max-w-xl">
        Explore the latest <TextHighlight>events</TextHighlight>,
        <TextHighlight>courses</TextHighlight>,
        <TextHighlight>resources</TextHighlight>, and
        <TextHighlight>blogs</TextHighlight> curated for your tech journey.
      </p>
    </div>
  );
}

export default StudentDashboard;
