import { useContext, useEffect, useState, useMemo } from "react";
import { FaCheckCircle, FaClock, FaBook, FaTimes } from "react-icons/fa";
import courseService from "../../services/course-service";
import CoursePreview from "./CoursePreview";
import AuthContext from "../../contexts/authContext";
import userService from "../../services/user-service";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollmentError, setEnrollmentError] = useState(null);
  const { state } = useContext(AuthContext);

  useEffect(() => {
    courseService
      .getAll()
      .then((res) => {
        setCourses(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  const handleEnroll = async (courseId) => {
    try {
      const userData = {
        id: courseId,
        name: `${state.user.firstName} ${state.user.lastName}`,
      };
      await userService.enroll(state.user._id, userData);
      setIsEnrolled(true);
      setEnrollmentError(null);
    } catch (err) {
      console.log(err);
      setIsEnrolled(false);
      setEnrollmentError("Failed to enroll. Try again later.");
    }
  };

  const openModal = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  const filteredCourses = useMemo(() => {
    if (filter === "Enrolled") {
      return courses.filter((course) =>
        course.enrolledStudent.some((s) => s._id === state.user._id)
      );
    }
    return courses;
  }, [courses, filter, state.user._id]);

  if (isLoading) return <div className="text-center">Loading courses...</div>;

  if (error)
    return (
      <div className="text-red-600 text-center">
        {error.response?.data?.message ||
          "Something went wrong. Please try again."}
      </div>
    );

  return (
    <div className="p-6 w-full mt-14 bg-white rounded-lg shadow-lg">
      {/* Filter Section */}
      <div className="flex justify-center gap-4 mb-8">
        {["All", "Enrolled"].map((status) => (
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

      {/* Confirmation Card */}
      {isEnrolled && (
        <div className="p-4 mb-6 bg-green-100 text-green-800 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">Enrollment Successful!</h4>
          <p>You have successfully enrolled in the course.</p>
        </div>
      )}

      {enrollmentError && (
        <div className="p-4 mb-6 bg-red-100 text-red-800 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">Enrollment Failed</h4>
          <p>{enrollmentError}</p>
        </div>
      )}

      {/* Courses Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => {
            const isEnrolled = course.enrolledStudent.some(
              (student) => student._id === state.user._id
            );
            return (
              <div
                key={course._id}
                className="transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-4 rounded-lg shadow-md"
              >
                {/* Course Header */}
                <div className="flex items-center mb-2">
                  <FaBook className="text-blue-600 mr-2" />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {course.title}
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
                    style={{ width: course.progress || 50 }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600">
                  Progress: {course.progress}
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-2">
                  {isEnrolled ? (
                    <button
                      className="px-6 py-2 bg-gray-500 text-white rounded-lg cursor-not-allowed"
                      disabled
                    >
                      Enrolled
                    </button>
                  ) : (
                    <button
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                      onClick={() => handleEnroll(course._id)}
                    >
                      Enroll
                    </button>
                  )}
                  <button
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                    onClick={() => openModal(course)}
                  >
                    View Detail
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-600 text-center col-span-3">
            No courses available for the selected filter.
          </p>
        )}
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div
          onClick={closeModal}
          className="my-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white w-full md:max-w-xl max-w-4xl rounded-3xl py-4 px-8 h-[80vh] overflow-y-auto scrollbar-hidden shadow-lg">
            <button
              className="my-overlay cursor-pointer float-right"
              onClick={closeModal}
            >
              <FaTimes size={32} className="text-red-800" />
            </button>
            <CoursePreview courseId={selectedCourse._id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
