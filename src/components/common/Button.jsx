/* eslint-disable react/prop-types */

const Button = ({ children }) => {
  return (
    <button
      className="w-full py-3 text-lg font-semibold text-white bg-blue-500 rounded-xl hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 "
      type="submit"
    >
      {children}
    </button>
  );
};

const PureButton = ({ children, onClick, type }) => (
  <button
    type={type || "button"}
    className="flex items-center space-x-2 text-text hover:text-highlight focus:outline-none  transition-all duration-300 ease-in-out"
    onClick={onClick}
  >
    {children}
  </button>
);

const SignButton = ({ label }) => (
  <button
    className="w-full py-2 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
    type="submit"
    style={{
      background: "linear-gradient(135deg, #6a11cb, #2575fc)",
      border: "none",
    }}
  >{label}
  </button>
);
export default Button;
export { PureButton, SignButton };
