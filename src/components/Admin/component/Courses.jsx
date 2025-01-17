import { useEffect, useState } from "react";
import courseService from "../../../services/course-service";
import CourseBar from "../bars/CourseBar";
import CourseModal from "../modals/CourseModal";

const Courses = () => {
  const [courses, setCourses] = useState(); // Store users dynamically
  const [error, setError] = useState(null); // Store users dynamically
  const [isLoading, setIsLoading] = useState(true); // Store users dynamically
  const [id, setId] = useState(null);
  const [showCourse, setShowCourse] = useState(false);

  useEffect(() => {
    courseService
      .getAll()
      .then((res) => {
        setCourses(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (courseId) => {
    console.log("Delete course:", courseId);
    const filteredCourse = courses.filter((course) => course._id !== courseId);
    setCourses(filteredCourse);
    courseService
      .delete(courseId)
      .then((res) => console.log(res.data))
      .catch((err) =>
        setError(err.message || "Couldn`t Delete the user try again")
      );
  };

  const handleDetails = (courseId) => {
    console.log("View details for user:", courseId);
    setId(courseId);
    setShowCourse(true); // Show modal for details
  };

  if (isLoading) return <p>loadding...</p>;

  if (error) return <p>{error || "some thing went wrong"}</p>;

  return (
    <div className="flex flex-col gap-2 justify-start items-start min-h-screen w-screen py-20 px-10 bg-background">
      {courses.map((course) => (
        <CourseBar
          key={course._id}
          course={course}
          onDelete={handleDelete}
          onDetails={handleDetails}
        />
      ))}

      {showCourse && (
        <CourseModal
          course={courses.find((course) => course._id === id)}
          onClose={() => setShowCourse(false)}
        />
      )}
    </div>
  );
};

export default Courses;
