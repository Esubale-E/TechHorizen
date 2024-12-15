/* eslint-disable react/prop-types */
import capitalize from "./../../utils/capitalize";

const Input = ({
  label = null,
  type,
  value,
  name,
  onChange,
  id,
  placeholder,
  required,
}) => {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-2" htmlFor={id || name}>
        {label || capitalize(name) || capitalize(id)}
      </label>
      <input
        className="w-full py-1 px-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105"
        type={type || "text"}
        id={id || null}
        name={name || ""}
        placeholder={placeholder || ""}
        value={value}
        onChange={onChange}
        required={!!required}
      />
    </div>
  );
};

export default Input;
