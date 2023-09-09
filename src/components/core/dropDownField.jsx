import React from "react";
import PropTypes from "prop-types";

function DropDownField({
  value,
  data,
  label,
  placeholder,
  styleClass,
  onChange,
}) {
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div className={`form-group ${styleClass}`}>
      {label && <label htmlFor="app-input-field">{label}</label>}
      <select value={value} className="form-control" onChange={handleChange}>
        <option value="">{placeholder}</option>
        {data &&
          data.map((item, key) => (
            <option key={key} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
    </div>
  );
}

DropDownField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  styleClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

DropDownField.defaultProps = {
  value: "",
  label: "",
  styleClass: "",
  placeholder: "",
};

export default DropDownField;
