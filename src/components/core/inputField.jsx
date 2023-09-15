import React, { useState } from "react";
import PropTypes from "prop-types";

import { validateInput } from "../../Utilities/validator";

function InputField({
  value,
  name,
  label,
  placeholder,
  validators,
  type,
  onChange,
}) {
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setError(validateInput(validators, value));
    onChange(value);
  };

  return (
    <div className="form-group">
      {label && <label htmlFor="app-input-field">{label}</label>}
      {
        <input
          type={type}
          name={name}
          value={value}
          className="form-control"
          placeholder={placeholder}
          onChange={handleChange}
        />
      }
      {error && <span className="text-danger">{error.message}</span>}
    </div>
  );
}

InputField.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  value: "",
  name: "",
  label: "",
  placeholder: "",
  type: "text",
  validators: [],
};

export default InputField;
