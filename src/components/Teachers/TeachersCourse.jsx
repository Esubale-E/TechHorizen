import {
  FaCheckCircle,
  FaClock,
  FaBook,
  FaEdit,
  FaUsers,
  FaPlusCircle,
} from "react-icons/fa";
import courses from "../../services/coursesT"; // Assuming this is the course data source
import AddCourse from "./AddCourse";
import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TeachersCourse = ({ currentTeacherName }) => {
  const [ addCourse, setAddCourse ] = useState(false);

  const handleAddCourse = () => {
    setAddCourse(false);
  };
  // Filter courses by current teacher
  const filteredCourses = courses.filter(
    (course) => course.author === currentTeacherName
  );

  return (
    <div className=" relative p-6 w-full bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="relative flex justify-around ">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          Your Courses
        </h2>
        <span
          onClick={() => setAddCourse(true)}
          className="absolute top-0 right-12 flex justify-center items-center gap-2 text-text bg-blue-400 rounded-2xl py-3 px-7 cursor-pointer hover:bg-blue-500 "
        >
          <FaPlusCircle />
          Add Course{" "}
        </span>
      </div>
      {addCourse && <AddCourse onAddCourse={handleAddCourse} />}

      {/* Courses Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <Link
              to={'/teacher/coursedetail'}
              key={index}
              className="transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-4 rounded-lg shadow-md"
            >
              {/* Course Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <FaBook className="text-blue-600 mr-2" />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {course.name}
                  </h4>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </button>
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

              {/* Student Management */}
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <FaUsers className="text-gray-600 mr-2" />
                  <span className="text-gray-700 font-semibold">
                    Students Enrolled: {course.enrolledStudents.length}
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">
            No courses available for the current teacher.
          </p>
        )}
      </div>
    </div>
  );
};

export default TeachersCourse;
