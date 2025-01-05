/* eslint-disable react/prop-types */
import { FaBookOpen, FaClock, FaEdit, FaUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Heading3 } from "./common/Headings";
import { AppText, LightText } from "./common/Text";

const CourseCard = ({ course }) => {
  return (
    <div className="transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-4 rounded-lg shadow-md">
      {/* Course Header */}
      <div className="flex items-center justify-between mb-4">
        <Heading3>{course.title}</Heading3>
        <Link to={"/teacher/coursedetail/" + course._id} className="ms-4">
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
