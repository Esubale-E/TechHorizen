// eslint-disable-next-line react/prop-types
const Input = ({ type, value, name, onChange, id, placeholder, required }) => {
  return (
    <input
      className="w-full p-2 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105"
      type={type || "text"}
      id={id || null}
      name={name || ""}
      placeholder={placeholder || ""}
      value={value}
      onChange={onChange}
      required={required || null}
    />
  );
};

export default Input;
