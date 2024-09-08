import React from "react";
import { Switch } from "antd";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({
  defaultChecked = true, // Example dynamic prop
  size = "large",
  onChange = (checked) => console.log(`switch to ${checked}`),
  ...restProps // Capture additional props
}) => {
  return (
    <Switch
      defaultChecked={defaultChecked}
      onChange={onChange}
      className="custom-toggle"
      size={size}
      {...restProps} // Spread additional props
    />
  );
};

export default ToggleSwitch;
