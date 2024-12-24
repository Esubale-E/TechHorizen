/* eslint-disable react/prop-types */
import { FaBookOpen, FaClock, FaEdit, FaUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Heading3 } from "../common/Headings";
import { AppText, LightText } from "../common/Text";

// const course1 = {
//   _id: "676a7dc61406709b973e3790",
//   title: "Introduction to Web Development",
//   description:
//     "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
//   prerequisites: "None",
//   duration: "6 weeks",
//   author: [
//     {
//       _id: "676a7a6a4795607bde9d34bf",
//       name: "Dr. Alan Turing",
//     },
//   ],
//   lesson: [
//     {
//       title: "HTML Basics",
//       description: "Understand the structure of web pages using HTML.",
//     },
//     {
//       title: "CSS Essentials",
//       description: "Learn how to style web pages using CSS.",
//     },
//   ],
//   enrolledStudent: [
//     {
//       _id: "64c5e3f812e3c5d5f9b5c6d2",
//       name: "Jane Smith",
//     },
//     {
//       _id: "64c5e3f812e3c5d5f9b5c6d3",
//       name: "Ali Khan",
//     },
//   ],
// };

const CourseCard = ({ course }) => {
  return (
    <div
      to={"/teacher/coursedetail/:" + course._id}
      className="transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-4 rounded-lg shadow-md"
    >
      {/* Course Header */}
      <div className="flex items-center justify-between mb-4">
        <Heading3>{course.title}</Heading3>
        <Link to={"/teacher/coursedetail/:" + course._id} className="ms-4">
          <FaEdit size={32} className="text-darkaccent " />
        </Link>
      </div>
      {/* Course Details */}
      <AppText>{course.description}</AppText>
      <LightText>
        <FaClock className="inline text-darkaccent mx-2" />
        Duration: {course.duration}
      </LightText>
      <LightText>
        <FaBookOpen className="inline text-darkaccent mx-2" />
        prerequisites :{course.prerequisites}
      </LightText>
      <LightText>
        <FaUsers className="inline text-darkaccent mx-2" />
        Students Enrolled: {course.enrolledStudent.length}
      </LightText>
      <LightText>
        <FaUser className="inline text-darkaccent mr-2" />
        Author: {course.author[0].name}
      </LightText>
    </div>
  );
};
export default CourseCard;
