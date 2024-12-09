import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AppLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="text-accent hover:text-highlight transition-all duration-300 ease-in-out dark:text-darkaccent dark:hover:text-darkhighlight"
    >
      {children}
    </Link>
  );
};

export default AppLink;
