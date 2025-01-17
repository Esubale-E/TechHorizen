/* eslint-disable react/prop-types */
import { Heading2, Heading3 } from "../../common/Headings";
import { FaBook, FaBookOpen, FaClock, FaUsers } from "react-icons/fa";
import { AppText, LightText } from "../../common/Text";
import LessonCards from "../../LessonCards";

const CourseModal = ({ course, onClose }) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        if (e.target.classList.contains("my-overlay")) onClose();
      }}
      className="my-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="m-6 p-6 w-4/5 h-4/5 overflow-y-scroll bg-white rounded-lg  shadow-lg">
        <div className="flex items-center justify-center mb-2">
          <Heading2>{course?.title}</Heading2>
        </div>
        <Heading3>
          <FaBook
            size={24}
            className="text-blue-500"
            aria-label="inline Book Icon"
          />
          {course.title}
        </Heading3>
        {/* Course Details */}
        <AppText>{course.description}</AppText>
        <LightText>
          <FaClock className="inline text-darkaccent mx-2" />
          Duration: {course.duration}
        </LightText>
        <LightText>
          <FaBookOpen className="inline text-darkaccent mx-2" />
          Prerequisites: {course.prerequisites}
        </LightText>
        <LightText>
          <FaUsers className="inline text-darkaccent mx-2" />
          Students Enrolled: {course.enrolledStudent.length}
        </LightText>

        {/* Lesson List */}
        {course.lesson.map((lesson, i) => (
          <LessonCards key={i} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default CourseModal;
