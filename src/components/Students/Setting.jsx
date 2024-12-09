import { FaCog, FaKey, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import ToggleTheme from "../../utils/ToggleTheme";

// eslint-disable-next-line react/prop-types
const Setting = ({ profile }) => {
  return (
    <div className="absolute right-0 bg-white dark:bg-darkbackground shadow-lg rounded-lg mt-2 py-2 w-48 z-50">
      <a
        href="#account"
        className="flex items-center px-4 py-2 text-text dark:text-darktext hover:bg-gray-200 dark:hover:bg-darksecondarybackground"
      >
        <FaCog className="mr-2" />
        Account Settings
      </a>
      <a
        onClick={profile}
        className="flex items-center px-4 py-2 text-text dark:text-darktext hover:bg-gray-200 dark:hover:bg-darksecondarybackground"
      >
        <FaUserAlt className="mr-2" />
        View Profile
      </a>
      <a
        href="#change-password"
        className="flex items-center px-4 py-2 text-text dark:text-darktext hover:bg-gray-200 dark:hover:bg-darksecondarybackground"
      >
        <FaKey className="mr-2" />
        Change Password
      </a>
      <ToggleTheme setting />
      <a
        href="#logout"
        className="flex items-center px-4 py-2 text-red-500 dark:text-red-400 hover:bg-gray-200 dark:hover:bg-darksecondarybackground"
      >
        <FaSignOutAlt className="mr-2" />
        Logout
      </a>
    </div>
  );
};

export default Setting;
