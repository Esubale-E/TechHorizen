const authReducer = (user = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.user; // Update state with the logged-in user object
    case "LOGOUT":
      return null; // Clear state on logout
    default:
      return user; // Return the current state for unmatched actions
  }
};

export default authReducer;
