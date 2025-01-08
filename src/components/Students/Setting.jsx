import { FaCog, FaKey, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import userService from "../../services/user-service";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { SettingButton } from "./../common/Button";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Setting = ({ profile }) => {
  const { state, dispatch } = useContext(AuthContext);
  const navigateTo = useNavigate();

  const handleLogOut = () => {
    userService
      .logout()
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "LOGOUT" });
        console.log(state.user);
        navigateTo("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="absolute right-0 bg-white shadow-lg rounded-lg mt-2 py-2 w-48 z-50">
      <SettingButton>
        <FaCog className="mr-2" />
        Account Settings
      </SettingButton>
      <SettingButton onClick={profile}>
        <FaUserAlt className="mr-2" />
        View Profile
      </SettingButton>
      <SettingButton>
        <FaKey className="mr-2" />
        Change Password
      </SettingButton>
      <SettingButton onClick={handleLogOut}>
        <FaSignOutAlt className="mr-2" />
        Logout
      </SettingButton>
    </div>
  );
};

export default Setting;
