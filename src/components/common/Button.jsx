// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return (
    <button
      className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
      type="submit"
      style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};

// eslint-disable-next-line react/prop-types
const PureButton = ({ children, onClick }) => (
  <button
    className="flex items-center space-x-2 focus:outline-none"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
export { PureButton };
