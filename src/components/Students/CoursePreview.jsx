/* eslint-disable react/prop-types */
import { FaClock, FaUsers, FaBook, FaBookOpen } from "react-icons/fa";
import { useEffect, useState } from "react";
import courseService from "../../services/course-service";
import { Heading2, Heading3 } from "../common/Headings";
import { AppText, LightText } from "../common/Text";
import LessonCards from "../LessonCards";

const CoursePreview = ({ courseId }) => {
  const id = courseId;

  const [course, setCourse] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    courseService
      .getOne(id)
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => setError(err.message));
  }, [id]);

  if (error)
    return (
      <p className="text-red-600 text-center font-semibold py-4">{error}</p>
    );

  if (course)
    return (
      <div className="m-6 p-8 bg-gradient-to-br from-white via-blue-50 to-gray-100 rounded-3xl shadow-2xl transition-all">
        {/* Header Section */}
        <div className="text-center mb-10">
          <Heading2 className="text-4xl font-extrabold text-blue-700 mb-2">
            {course?.title}
          </Heading2>
          <p className="text-gray-600 text-lg italic">
            Empower your knowledge with structured learning
          </p>
        </div>

        {/* Course Overview */}
        <div className="mb-8">
          <Heading3 className="flex items-center text-2xl font-semibold text-blue-600 mb-4">
            <FaBook className="mr-3 text-blue-700" size={28} />
            Course Overview
          </Heading3>
          <AppText className="text-gray-700 leading-relaxed text-justify">
            {course.description}
          </AppText>
        </div>

        {/* Metadata Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <LightText className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <FaClock className="text-blue-500 mr-4" size={24} />
            <div>
              <p className="font-semibold text-gray-800">Duration</p>
              <p className="text-gray-600">{course.duration}</p>
            </div>
          </LightText>
          <LightText className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <FaBookOpen className="text-blue-500 mr-4" size={24} />
            <div>
              <p className="font-semibold text-gray-800">Prerequisites</p>
              <p className="text-gray-600">{course.prerequisites || "None"}</p>
            </div>
          </LightText>
          <LightText className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <FaUsers className="text-blue-500 mr-4" size={24} />
            <div>
              <p className="font-semibold text-gray-800">Students Enrolled</p>
              <p className="text-gray-600">{course.enrolledStudent.length}</p>
            </div>
          </LightText>
        </div>

        {/* Lessons Section */}
        <div>
          <Heading3 className="text-2xl font-semibold text-blue-600 mb-4">
            Lessons
          </Heading3>
          <div className="space-y-4">
            {course.lesson.map((lesson, i) => (
              <LessonCards
                key={i}
                lesson={lesson}
                className="p-6 bg-white rounded-lg shadow-lg border hover:shadow-2xl hover:bg-blue-50 transition-transform transform hover:-translate-y-1"
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default CoursePreview;
