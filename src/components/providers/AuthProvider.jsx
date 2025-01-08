/* eslint-disable react/prop-types */
import { useReducer, useEffect } from "react";
import AuthContext from "../../contexts/authContext";
import authReducer from "../../reducers/authReducer";

// Load initial state from localStorage
const getInitialState = () => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? { user: JSON.parse(storedUser) } : { user: null };
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, getInitialState);

  // Persist state to localStorage whenever it changes
  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
