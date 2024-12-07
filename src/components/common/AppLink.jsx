import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AppLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="text-purple-600 hover:text-indigo-600 transition-all duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
};

export default AppLink;
