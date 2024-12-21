import PropTypes from "prop-types";
import { FaClock, FaUsers, FaBook } from "react-icons/fa";
import courses from "../../services/coursesT";
import { useState } from "react";
import AddLesson from "./AddLesson";

const TeacherCourseDetail = ({ course = courses[3] }) => {
  const {
    name = "Unknown Course",
    duration = "N/A",
    enrolledStudents = [],
  } = course;

  const [showAddLesson, setShowAddLesson] = useState(false);

  return (
    <div className="m-6 p-6 w-full bg-white rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        {name} - Course Details
      </h2>

      {/* Course Header */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <FaBook className="text-blue-600 mr-2" aria-label="Book Icon" />
          <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
        </div>
        <p className="text-gray-700 mb-2">
          <FaClock
            className="inline text-gray-600 mr-2"
            aria-label="Clock Icon"
          />
          Duration: {duration}
        </p>
      </div>

      {/* Enrolled Students */}
      <div className="mt-6">
        <div className="flex items-center mb-2">
          <FaUsers className="text-gray-600 mr-2" aria-label="Users Icon" />
          <span className="text-gray-700 font-semibold">
            Students Enrolled: {enrolledStudents.length}
          </span>
        </div>

        <div className="space-y-2">
          {enrolledStudents.length > 0 ? (
            enrolledStudents.map((student, index) => (
              <div key={index} className="flex justify-between text-gray-700">
                <span>{student.name}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No students enrolled yet.</p>
          )}
        </div>
      </div>

      {/* Button to Add Lesson */}
      <div className="mt-4">
        <button
          onClick={() => setShowAddLesson(true)}
          className="w-full mt-4 text-white bg-primary px-4 py-2 rounded-lg shadow-md hover:bg-primary-dark transition-all duration-200"
        >
          Add Lesson
        </button>
      </div>
      {showAddLesson && <AddLesson onClose={()=>setShowAddLesson(false)} />}
    </div>
  );
};

TeacherCourseDetail.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    enrolledStudents: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

export default TeacherCourseDetail;
