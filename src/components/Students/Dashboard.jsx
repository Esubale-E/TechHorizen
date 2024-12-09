import TextHighlight from "../common/TextHighlight";
import Heading1 from "../common/Headings";

function StudentDashboard() {
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-gray-100 dark:bg-gradient-to-r dark:from-darkprimary dark:to-darksecondarybackground">
      <Heading1 className="text-text dark:text-darktext">
        Welcome to the Dashboard!
      </Heading1>
      <p className="text-gray-600 text-center max-w-xl dark:text-darktext">
        Explore the latest{" "}
        <TextHighlight className="text-accent dark:text-darkaccent">
          events
        </TextHighlight>
        ,
        <TextHighlight className="text-accent dark:text-darkaccent">
          courses
        </TextHighlight>
        ,
        <TextHighlight className="text-accent dark:text-darkaccent">
          resources
        </TextHighlight>
        , and
        <TextHighlight className="text-accent dark:text-darkaccent">
          blogs
        </TextHighlight>{" "}
        curated for your tech journey.
      </p>
    </div>
  );
}

export default StudentDashboard;
