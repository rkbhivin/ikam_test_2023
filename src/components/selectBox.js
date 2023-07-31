import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Form from "react-bootstrap/Form";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";

function SelectBox({
  options,
  value,
  onChange,
  label,
  name,
  isRequired = false,
  isTouched = false,
  error,
  className,
  isIdSelect = false,
  labelHide = false,
}) {
  const selectValue = (option) => {
    let value = option.value;

    if (option.name) {
      value = option.name;
    } else if (option.Name) {
      value = option.Name;
    }

    return value;
  };

  const selectLabel = (option) => {
    let value = option.value;
    if (option.name) {
      value = option.name;
    } else if (option.Name) {
      value = option.Name;
    }

    return value;
  };

  const toLower = (label) => {
    const value = label ? label.toLowerCase() : label;
    return value;
  };
  return (
    <div className="text-box">
      {label && !labelHide && (
        <label htmlFor={name}>
          {label}
          <span className="required-indicator">*</span>
        </label>
      )}
      <Form.Select
        value={value}
        onChange={onChange}
        className={"text-input"}
        name={name}
      >
        <option key={"id"} id={"id"} value={""}>
          {`Please select ${toLower(label)} `}
        </option>

        {options &&
          options.map((option) => (
            <option
              key={option.id ? option.id : option.value}
              id={option.id ? option.id : option.value}
              value={selectValue(option)}
            >
              {selectLabel(option)}
            </option>
          ))}
      </Form.Select>
      {isTouched && <p className="error-message">{error}</p>}
    </div>
  );
}

SelectBox.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.any,
  label: PropTypes.any,
  name: PropTypes.any,
  isRequired: PropTypes.bool,
  isTouched: PropTypes.bool,
  error: PropTypes.any,
  className: PropTypes.any,
};

export default SelectBox;
