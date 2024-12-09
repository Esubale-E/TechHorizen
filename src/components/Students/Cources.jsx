import { useState } from "react";
import { FaCheckCircle, FaClock, FaBook } from "react-icons/fa";
import courses from "../../services/cource";

const Courses = () => {
  const [filter, setFilter] = useState("All");

  const filteredCourses =
    filter === "All"
      ? courses
      : courses.filter((course) => course.status === filter);

  return (
    <div className="p-6 w-full bg-background rounded-lg shadow-lg dark:bg-darkbackground">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-6 text-text text-center dark:text-darktext">
        Your Courses
      </h2>

      {/* Filter Section */}
      <div className="flex justify-center gap-4 mb-8">
        {["All", "Active", "Completed"].map((status) => (
          <button
            key={status}
            className={`px-4 py-2 rounded-lg text-white font-semibold shadow-md transition-all duration-200 ${
              filter === status
                ? "bg-primary hover:bg-secondary dark:bg-darkprimary dark:hover:bg-darksecondary"
                : "bg-gray-400 hover:bg-gray-500 dark:bg-darksecondary dark:hover:bg-darkhighlight"
            }`}
            onClick={() => setFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Courses Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div
              key={index}
              className="transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-4 rounded-lg shadow-md dark:bg-darksecondarybackground dark:text-darktext"
            >
              {/* Course Header */}
              <div className="flex items-center mb-2">
                <FaBook className="text-primary mr-2 dark:text-darkprimary" />
                <h4 className="text-xl font-semibold text-text dark:text-darktext">
                  {course.name}
                </h4>
              </div>

              {/* Course Details */}
              <p className="text-gray-700 mb-2 dark:text-darktext">
                <FaClock className="inline text-gray-600 mr-2 dark:text-darkhighlight" />
                Duration: {course.duration}
              </p>
              <p className="text-gray-700 mb-4 dark:text-darktext">
                <FaCheckCircle
                  className={`inline ${
                    course.status === "Completed"
                      ? "text-green-500 dark:text-green-400"
                      : "text-yellow-500 dark:text-yellow-400"
                  } mr-2`}
                />
                Status: {course.status}
              </p>

              {/* Progress Bar */}
              <div className="bg-gray-300 rounded-full h-3 w-full mb-2 dark:bg-darksecondarybackground">
                <div
                  className="bg-primary h-3 rounded-full"
                  style={{ width: course.progress }}
                ></div>
              </div>
              <div className="text-sm text-gray-600 dark:text-darkhighlight">
                Progress: {course.progress}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3 dark:text-darkhighlight">
            No courses available for the selected filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default Courses;
