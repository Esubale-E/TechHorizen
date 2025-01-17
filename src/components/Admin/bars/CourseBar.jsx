/* eslint-disable react/prop-types */
import { FaTrash, FaInfoCircle } from "react-icons/fa";

const CourseBar = ({ course, onDelete, onDetails }) => {
  const classes =
    "flex items-center gap-1 px-2 py-1 rounded-md text-sm bg-gray-300 border ";

  return (
    <div className="flex w-full items-center justify-between p-4  bg-gray-50 shadow-sm rounded-md border">
      <div className="text-gray-800 font-medium">{course.title}</div>
      <div className="text-gray-600 text-sm">{course.author[0].name}</div>
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            onDetails(course._id);
          }}
          className={`${classes} text-green-600 hover:border-green-600 `}
        >
          <FaInfoCircle size={15} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            onDelete(course._id);
          }}
          className={`${classes} text-red-600 hover:border-red-600 `}
        >
          <FaTrash size={15} />
        </button>
      </div>
    </div>
  );
};

export default CourseBar;
