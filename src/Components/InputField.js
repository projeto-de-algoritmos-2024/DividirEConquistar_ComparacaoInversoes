import React from "react";
import "./InputField.css";

const InputField = ({ value, onChange }) => {
  return (
    <input
      type="text"
      maxLength="1"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="inputField"
    />
  );
};

export default InputField;
