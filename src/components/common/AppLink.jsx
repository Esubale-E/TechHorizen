import googleIcon from "../../assets/Google_Icons.png";
import { Link } from "react-router-dom";
import { baseUrl } from "../../services/api-client";

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
    <div className=" ms-5 w-full py-2 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105">
      <AppLink to={`${baseUrl}auth/google`}>
        <div className="flex items-center justify-center">
          <img src={googleIcon} alt="google icon" className="h-10  " />{" "}
          <p className="text-nowrap  text-white  text-xl">Continue</p>
        </div>
      </AppLink>
    </div>
  );
};

export default AppLink;
export { GoogleLink };
