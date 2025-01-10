/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from "react";
import capitalize from "./../../utils/capitalize";
import { ErrText } from "./Text";

const TextAreaInput = forwardRef(
  (
    {
      label = null,
      value,
      name,
      onChange,
      id,
      placeholder = "",
      required,
      errorMessage = null,
      className = "",
      rows = 4, // Default number of rows
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
        <textarea
          ref={ref} // Attach the ref here
          className={`w-full py-2 px-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-darkaccent hover:ring-2 hover:ring-darkaccent shadow-sm transition-all duration-300 ease-in-out transform ${className}`}
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          required={!!required}
          aria-invalid={!!errorMessage}
          placeholder={placeholder}
          rows={rows}
          {...rest}
        ></textarea>
        {errorMessage && <ErrText>{errorMessage}</ErrText>}
      </div>
    );
  }
);

export default TextAreaInput;
