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

export default Button;
