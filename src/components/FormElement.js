import React from "react";

function FormElement({
  type,
  label,
  placeholder,
  options,
  fieldRef,
  hasError,
}) {
  const general_style =
    "form-control px-3 py-1.5 text-gray-700 rounded border border-solid border-gray-300 focus:border-green-600 focus:outline-none";

  const text_input_style =
    "form-control w-[400px] px-3 h-10 py-1.5 text-gray-700 rounded border border-solid border-gray-300 focus:border-green-600 focus:outline-none";

  const textarea_style =
    "form-control w-[820px] px-3 h-10 py-1.5 text-gray-700 rounded border border-solid border-gray-300 focus:border-green-600 focus:outline-none";

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
          className={textarea_style}
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
                className={general_style}
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
                className={general_style}
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
          className={text_input_style}
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
