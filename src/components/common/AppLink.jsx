import googleIcon from "../../assets/Google_Icons.png";
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

const GoogleLink = () => {
  return (
    <div className='flex items-center justify-center'>
      <AppLink to={"http://localhost:5000/auth/google"}>
        <img src={googleIcon} alt="google icon" className="h-12 " />
      </AppLink>
    </div>
  );
};

export default AppLink;
export { GoogleLink };
