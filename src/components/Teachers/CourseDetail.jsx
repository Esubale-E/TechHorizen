import { FaClock, FaUsers, FaBook, FaBookOpen } from "react-icons/fa";
import { useEffect, useState } from "react";
import AddLesson from "./AddLesson";
import courseService from "../../services/course-service";
import { useLocation } from "react-router-dom";
import { Heading2, Heading3 } from "../common/Headings";
import { AppText, LightText } from "../common/Text";

const TeacherCourseDetail = () => {
  const l = useLocation();
  const id = l.pathname.slice(-24);

  const [course, setCourse] = useState();
  const [error, setError] = useState();

  const [showAddLesson, setShowAddLesson] = useState(false);

  const handleAddLesson = async (formData) => {
    try {
      console.log("file upload began");
      const response = await courseService.updateWithFile(id, formData);

      console.log("Lesson added successfully:", response.data);

      // Update your UI or state with the new course data
      // setCourse(response.data);
    } catch (err) {
      console.error("Failed to add lesson:", err);
    }
  };

  useEffect(() => {
    courseService
      .getOne(id)
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => setError(err.messge));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (course)
    return (
      <div className="m-6 p-6 w-full bg-white rounded-lg shadow-lg ">
        <div className="flex items-center justify-center mb-2">
          <Heading2>{course?.title}</Heading2>
        </div>
        <Heading3>
          <FaBook
            size={24}
            className="text-blue-500"
            aria-label=" inline Book Icon"
          />
          {course.title}
        </Heading3>
        {/* Course Details */}
        <AppText>{course.description}</AppText>
        <LightText>
          <FaClock className="inline text-darkaccent mx-2" />
          Duration : {course.duration}
        </LightText>
        <LightText>
          <FaBookOpen className="inline text-darkaccent mx-2" />
          prerequisites : {course.prerequisites}
        </LightText>
        <LightText>
          <FaUsers className="inline text-darkaccent mx-2" />
          Students Enrolled : {course.enrolledStudent.length}
        </LightText>

        <div className="space-y-2">
          {course?.enrolledStudent.length > 0 ? (
            course?.enrolledStudent.map((student, index) => (
              <div key={index} className="flex justify-between text-gray-700">
                <span>{student.name}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No students enrolled yet.</p>
          )}
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
        {showAddLesson && (
          <AddLesson
            onClose={() => setShowAddLesson(false)}
            onAddLesson={handleAddLesson}
          />
        )}
      </div>
    );
};

export default TeacherCourseDetail;
