import TextHighlight from "./../components/common/TextHighlight";
import Heading1 from "./../components/common/Heading1";

function StudentDashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-gray-100">
      <Heading1>Welcome to the Dashboard!</Heading1>
      <p className="text-gray-600 text-center max-w-xl">
        Explore the latest <TextHighlight>events</TextHighlight>,{" "}
        <TextHighlight>courses</TextHighlight>,{" "}
        <TextHighlight>resources</TextHighlight>, and{" "}
        <TextHighlight>blogs</TextHighlight> curated for your tech journey.
      </p>
    </div>
  );
}

export default StudentDashboard;
