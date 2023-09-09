import React from "react";
import PropTypes from "prop-types";

function ButtonField({ value, styleClass, onClick }) {
  return (
    <button
      className={`btn ${styleClass} m-3`}
      onClick={(event) => onClick(event)}
    >
      {value}
    </button>
  );
}
ButtonField.propTypes = {
  styleClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

ButtonField.defaultProps = {
  styleClass: "btn-success",
};

export default ButtonField;
