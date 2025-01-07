import { useContext, useEffect } from "react";
import AuthContext from "../contexts/authContext";
import { useLocation, useNavigate } from "react-router-dom";
import userService from "../services/user-service";

const GoogleLogin = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  const { state, dispatch } = useContext(AuthContext); // Corrected 'dispach' to 'dispatch'
  const navigateToStudent = useNavigate();

  useEffect(() => {
    // Fetch user data only if userId exists
    if (userId) {
      userService
        .getOne(userId)
        .then((res) => {
          dispatch({ type: "LOGIN", user: res.data });
          navigateToStudent("/student", { replace: true }); // Use replace as an option
        })
        .catch((err) => console.error("Failed to fetch user data:", err));
    }
  }, [userId, dispatch, navigateToStudent]); // Add necessary dependencies

  return (
    <div>
      <div className="p-36">{state.user?.firstname || "Please wait..."}</div>
    </div>
  );
};

export default GoogleLogin;
