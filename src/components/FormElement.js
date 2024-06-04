import React from "react";

function FormElement({
  type,
  label,
  placeholder,
  options,
  fieldRef,
  hasError,
}) {
  const classes =
    "form-control w-1/2 px-3 py-1.5 text-gray-700 rounded border border-solid border-gray-300 focus:border-green-600 focus:outline-none";
  const handleCheckboxChange = (value) => {
    if (fieldRef.value.includes(value)) {
      fieldRef.onChange(fieldRef.value.filter((item) => item !== value));
    } else {
      fieldRef.onChange([...fieldRef.value, value]);
    }
  };
  return (
    <div className="form-group mb-6">
      <label className="block text-gray-700 text-md font-bold mb-2 ">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className={classes}
          rows="3"
          placeholder={placeholder}
          {...fieldRef}
        />
      ) : type === "radio" ? (
        <div className="flex justify-center gap-3">
          {options.map((option) => (
            <label key={option.value} className="flex items-center gap-2">
              <input
                type="radio"
                className={classes}
                value={option.value}
                checked={fieldRef.value === option.value}
                onChange={() => fieldRef.onChange(option.value)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      ) : type === "checkbox" ? (
        <div className="flex justify-center gap-3">
          {options.map((option) => (
            <label key={option.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                className={classes}
                value={option.value}
                checked={fieldRef.value.includes(option.label)}
                onChange={() => handleCheckboxChange(option.label)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      ) : (
        <input
          type={type}
          className={classes}
          placeholder={placeholder}
          {...fieldRef}
        />
      )}
      {hasError && (
        <p className="text-red-500 text-xs italic">{`${label} is required`}</p>
      )}
    </div>
  );
}

export default FormElement;
