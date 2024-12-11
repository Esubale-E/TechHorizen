// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return (
    <button
      className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-accent to-highlight rounded-xl hover:from-[#d1a810] hover:to-[#567c9a] transition-all duration-300 ease-in-out transform hover:scale-105 "
      type="submit"
    >
      {children}
    </button>
  );
};

// eslint-disable-next-line react/prop-types
const PureButton = ({ children, onClick, type }) => (
  <button
    type={type || "button"}
    className="flex items-center space-x-2 text-text hover:text-highlight focus:outline-none  transition-all duration-300 ease-in-out"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
export { PureButton };
