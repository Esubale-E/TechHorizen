/* eslint-disable react/prop-types */
import { FaPen, FaTrash, FaInfoCircle } from "react-icons/fa";

const UserBar = ({ user, onEdit, onDelete, onDetails }) => {
  if (user.firstName === "Abule") console.log(user);
  const classes =
    "flex items-center gap-1 px-2 py-1 rounded-md text-sm bg-gray-300 border ";

  return (
    <div className="flex w-full items-center justify-between p-4  bg-gray-50 shadow-sm rounded-md border">
      <div className="text-gray-800 font-medium">
        {user.firstName} {user.lastName}
      </div>
      <div className="text-gray-600 text-sm">{user.email}</div>
      <div className="text-gray-600 text-sm">{user.phone}</div>
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            onDetails(user._id);
          }}
          className={`${classes} text-green-600 hover:border-green-600 `}
        >
          <FaInfoCircle size={15} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            onEdit(user._id);
          }}
          className={`${classes} text-blue-600 hover:border-blue-600 `}
        >
          <FaPen size={15} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            onDelete(user._id);
          }}
          className={`${classes} text-red-600 hover:border-red-600 `}
        >
          <FaTrash size={15} />
        </button>
      </div>
    </div>
  );
};

export default UserBar;
