/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef, useState } from "react";
import capitalize from "./../../utils/capitalize";
import { ErrText } from "./Text";

const AutoCompleteInput = forwardRef(
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
      errorMessage = null,
      className = "",
      options = [], // Array of options for autocomplete
      ...rest
    },
    ref
  ) => {
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [showOptions, setShowOptions] = useState(false);

    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      onChange(e); // Update parent component's state
      if (options.length > 0) {
        setFilteredOptions(
          options.filter((option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
        setShowOptions(true);
      }
    };

    const handleOptionSelect = (e) => {
      console.log(e);
      onChange({
        target: { name, value: e },
      });
      setShowOptions(false); // Hide dropdown after selection
    };

    const handleBlur = () => {
      setTimeout(() => setShowOptions(false), 1000); // Delay to allow click on options
    };

    return (
      <div className="relative mb-4">
        <label
          className="block text-sm text-gray-700 mb-2"
          htmlFor={id || name}
        >
          {label || capitalize(name || id)}
        </label>
        <input
          ref={ref}
          className={`w-full py-1 px-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-darkaccent hover:ring-2 hover:ring-darkaccent shadow-sm transition-all duration-300 ease-in-out transform ${className}`}
          type={type}
          id={id || name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          required={!!required}
          aria-invalid={!!errorMessage}
          onFocus={() => setShowOptions(true)}
          onBlur={handleBlur}
          {...rest}
        />
        {errorMessage && <ErrText>{errorMessage}</ErrText>}
        {showOptions && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-xl shadow-lg max-h-48 overflow-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleOptionSelect(option.label)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No matches found</li>
            )}
          </ul>
        )}
      </div>
    );
  }
);

export default AutoCompleteInput;
