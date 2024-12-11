/* eslint-disable react/prop-types */
import { FaClock, FaCheckCircle, FaUsers, FaBook } from "react-icons/fa";
import courses from "../../services/coursesT";

const TeacherCourseDetail = ({ course = courses[3] }) => {
  const { name, duration, status, progress, enrolledStudents } = course;
  return (
    <div className="m-6 p-6 w-full bg-white rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        {name} - Course Details
      </h2>

      {/* Course Header */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <FaBook className="text-blue-600 mr-2" />
          <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
        </div>
        <p className="text-gray-700 mb-2">
          <FaClock className="inline text-gray-600 mr-2" />
          Duration: {duration}
        </p>
        <p className="text-gray-700 mb-4">
          <FaCheckCircle
            className={`inline ${
              status === "Completed" ? "text-green-500" : "text-yellow-500"
            } mr-2`}
          />
          Status: {status}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-300 rounded-full h-3 w-full mb-2">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: progress }}
        ></div>
      </div>
      <div className="text-sm text-gray-600">Progress: {progress}</div>

      {/* Enrolled Students */}
      <div className="mt-6">
        <div className="flex items-center mb-2">
          <FaUsers className="text-gray-600 mr-2" />
          <span className="text-gray-700 font-semibold">
            Students Enrolled: {enrolledStudents.length}
          </span>
        </div>

        <div className="space-y-2">
          {enrolledStudents.map((student, index) => (
            <div key={index} className="flex justify-between text-gray-700">
              <span>{student.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Button to Manage Students or Edit Course */}
      <div className="mt-4">
        <button className="w-full mt-4 text-white bg-green-600 px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-200">
          Edit Course
        </button>
      </div>
    </div>
  );
};

export default TeacherCourseDetail;
