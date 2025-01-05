/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import capitalize from "./../../utils/capitalize";
import { ErrText } from "./Text";

const Input = forwardRef(
  (
    {
      label = null,
      type = "text",
      value,
      name,
      onChange,
      id,
      placeholder = "",
      required,
      errorMessage = null, // For displaying validation errors
      className = "", // Allow dynamic styling
      ...rest
    },
    ref
  ) => {
    return (
      <div className="mb-4">
        <label
          className="block text-sm text-gray-700 mb-2"
          htmlFor={id || name}
        >
          {label || capitalize(name || id)}
        </label>
        <input
          ref={ref} // Attach the ref here
          className={`w-full py-1 px-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-darkaccent hover:ring-2 hover:ring-darkaccent shadow-sm transition-all duration-300 ease-in-out transform ${className}`}
          type={type}
          id={id || name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={!!required}
          aria-invalid={!!errorMessage}
          {...rest}
        />
        {errorMessage && <ErrText>{errorMessage}</ErrText>}
      </div>
    );
  }
);

export default Input;
