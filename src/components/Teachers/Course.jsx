import { FaPlusCircle } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import courseService from "../../services/course-service";
import CourseCard from "./CourseCard";

const Course = () => {
  const [courses, setCourses] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    courseService
      .getAll()
      .then((res) => setCourses(res.data))
      .catch((err) => setError(err.message));
  });

  if (error) return <p>{error}</p>;
  if (courses)
    return (
      <div className=" relative p-6 w-full bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="relative flex justify-around ">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
            Your Courses
          </h2>
          <Link
            to={"/teacher/addcourse"}
            className="absolute top-0 right-12 flex justify-center items-center gap-2 text-text bg-blue-400 rounded-2xl py-3 px-7 cursor-pointer hover:bg-blue-500 "
          >
            <FaPlusCircle />
            Add Course
          </Link>
        </div>
        {/* Courses Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length > 0 ? (
            courses.map((course, i) => <CourseCard course={course} key={i} />)
          ) : (
            <p className="text-gray-600 text-center col-span-3">
              No courses available for the current teacher.
            </p>
          )}
        </div>
      </div>
    );
};

export default Course;
