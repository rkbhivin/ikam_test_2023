import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Form from "react-bootstrap/Form";
function TextBox({
  name,
  type = "text",
  onChange,
  value,
  error,
  label,
  required = false,
  touched = false,
  placeholder,
  min,
  max,
  ...props
}) {
  const showError = error && touched;

  return (
    <div className="text-box">
      <label htmlFor={name}>
        {label}
        {required && <span className="required-indicator">*</span>}
      </label>

      <Form.Control
        placeholder={placeholder}
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  );
}

TextBox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password", "date", "file"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  touched: PropTypes.bool,
  placeholder: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
};

export default TextBox;
