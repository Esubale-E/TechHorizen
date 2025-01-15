import { FaClock, FaUsers, FaBook, FaBookOpen } from "react-icons/fa";
import { useEffect, useState } from "react";
import courseService from "../../../services/course-service";
import { useLocation } from "react-router-dom";
import { Heading2, Heading3 } from "../../common/Headings";
import { AppText, LightText } from "../../common/Text";
import LessonCards from "../../LessonCards";

const StudentCourseDetail = () => {
  const location = useLocation();
  const id = location.pathname.slice(-24);

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

  if (error) return <p>{error}</p>;
  if (course)
    return (
      <div className="m-6 p-6 w-full bg-white rounded-lg shadow-lg">
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
    );

  return <p>Loading course details...</p>;
};

export default StudentCourseDetail;
