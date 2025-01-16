/* eslint-disable react/prop-types */
import { FaClock, FaUsers, FaBook, FaBookOpen, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import courseService from "../../services/course-service";
import { Heading2, Heading3 } from "../common/Headings";
import { AppText } from "../common/Text";
import LessonCards from "../LessonCards";
import { PureButton } from "../common/Button";

const CoursePreview = ({ courseId, onClose }) => {
  const [course, setCourse] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    courseService
      .getOne(courseId)
      .then((res) => {
        setCourse(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [courseId]);

  if (error)
    return (
      <p className="text-red-600 text-center font-semibold py-4">{error}</p>
    );
  if (isLoading) return <p>Loading...</p>;

  if (course)
    return (
      <div
        onClick={(e) => {
          e.preventDefault();
          if (e.target.classList.contains("my-overlay")) onClose();
        }}
        className="my-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        {/* close Button */}
        <span className="absolute top-3 right-3 ">
          <PureButton onClick={onClose}>
            {<FaTimes size={32} color="#fff" />}
          </PureButton>
        </span>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-4/5 h-4/5  overflow-hidden overflow-y-scroll">
          {/* Header Section */}
          <div className="text-center mb-8">
            <Heading2 className="text-3xl font-bold text-blue-600 mb-2">
              {course?.title}
            </Heading2>
            <p className="text-gray-500 italic text-lg">
              Empower your knowledge with structured learning
            </p>
          </div>

          {/* Course Overview */}
          <div className="mb-8">
            <Heading3 className="flex items-center text-xl font-semibold text-blue-500 mb-4">
              <FaBook className="mr-3" size={24} />
              Course Overview
            </Heading3>
            <AppText className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
              {course.description}
            </AppText>
          </div>

          {/* Metadata Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center bg-blue-50 dark:bg-gray-800 p-5 rounded-lg shadow-md">
              <FaClock
                className="text-blue-500 dark:text-blue-400 mr-4"
                size={28}
              />
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Duration
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {course.duration}
                </p>
              </div>
            </div>
            <div className="flex items-center bg-blue-50 dark:bg-gray-800 p-5 rounded-lg shadow-md">
              <FaBookOpen
                className="text-blue-500 dark:text-blue-400 mr-4"
                size={28}
              />
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Prerequisites
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {course.prerequisites || "None"}
                </p>
              </div>
            </div>
            <div className="flex items-center bg-blue-50 dark:bg-gray-800 p-5 rounded-lg shadow-md">
              <FaUsers
                className="text-blue-500 dark:text-blue-400 mr-4"
                size={28}
              />
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Students Enrolled
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {course.enrolledStudent.length}
                </p>
              </div>
            </div>
          </div>

          {/* Lessons Section */}
          <div>
            <Heading3 className="text-xl font-semibold text-blue-500 mb-4">
              Lessons
            </Heading3>
            <div className="space-y-4">
              {course.lesson.length > 0 ? (
                <LessonCards
                  lesson={course.lesson[0]}
                  className="p-5 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
                />
              ) : (
                <p className="text-gray-500 italic text-center">
                  No lessons available yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoursePreview;
