/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/authContext";

const ProtectedRoute = ({ element, allowedRole }) => {
  const { state } = useContext(AuthContext);

  // Redirect to login if user is not authenticated
  if (!state.user) {
    return <Navigate to="/join/login" />;
  }

  // Redirect if the user role is not allowed
  if (allowedRole === state.user.role) {
    return <Navigate to="/" />;
  }

  return element; 
};

export default ProtectedRoute;
