import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AppLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="text-accent hover:text-highlight transition-all duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
};

export default AppLink;
