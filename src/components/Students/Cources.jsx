import { useState } from "react";
import { FaCheckCircle, FaClock, FaBook } from "react-icons/fa";
import courses from "../../services/cource";
const Courses = () => {
  const [filter, setFilter] = useState("All");

  const filteredCourses =
    filter === "All"
      ? courses
      : courses.filter((course) => course.status === filter);

  const handleEnroll = () => {
    alert("you have enrolled successfuly");
  };

  return (
    <div className="p-6 w-full bg-white rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Your Courses
      </h2>

      {/* Filter Section */}
      <div className="flex justify-center gap-4 mb-8">
        {["All", "Active", "Completed"].map((status) => (
          <button
            key={status}
            className={`px-4 py-2 rounded-lg text-white font-semibold shadow-md transition-all duration-200 ${
              filter === status
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 hover:bg-gray-500"
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
              className="transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-4 rounded-lg shadow-md"
            >
              {/* Course Header */}
              <div className="flex items-center mb-2">
                <FaBook className="text-blue-600 mr-2" />
                <h4 className="text-xl font-semibold text-gray-800">
                  {course.name}
                </h4>
              </div>

              {/* Course Details */}
              <p className="text-gray-700 mb-2">
                <FaClock className="inline text-gray-600 mr-2" />
                Duration: {course.duration}
              </p>
              <p className="text-gray-700 mb-4">
                <FaCheckCircle
                  className={`inline ${
                    course.status === "Completed"
                      ? "text-green-500"
                      : "text-yellow-500"
                  } mr-2`}
                />
                Status: {course.status}
              </p>

              {/* Progress Bar */}
              <div className="bg-gray-300 rounded-full h-3 w-full mb-2">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: course.progress }}
                ></div>
              </div>
              <div className="text-sm text-gray-600">
                Progress: {course.progress}
              </div>

              {/* Enroll Button */}
              <div className="mt-4">
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                  onClick={() => handleEnroll(course.id)} // Assuming handleEnroll is a function to handle enrollment
                >
                  Enroll
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">
            No courses available for the selected filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default Courses;
