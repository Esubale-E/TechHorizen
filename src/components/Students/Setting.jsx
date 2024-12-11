import { FaCog, FaKey, FaSignOutAlt, FaUserAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Setting = ({ profile }) => {
  return (
    <div className="absolute right-0 bg-white shadow-lg rounded-lg mt-2 py-2 w-48 z-50">
      <a
        href="#account"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
      >
        <FaCog className="mr-2" />
        Account Settings
      </a>
      <a
        onClick={profile}
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 "
      >
        <FaUserAlt className="mr-2" />
        View Profile
      </a>
      <a
        href="#change-password"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 "
      >
        <FaKey className="mr-2" />
        Change Password
      </a>
      <a
        href="#logout"
        className="flex items-center px-4 py-2 text-red-500 hover:bg-gray-200 "
      >
        <FaSignOutAlt className="mr-2" />
        Logout
      </a>
    </div>
  );
};

export default Setting;
