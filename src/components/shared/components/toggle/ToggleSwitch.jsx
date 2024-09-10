import React from "react";
import { Switch } from "antd";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({
  defaultChecked = true, 
  size = "large",
  onChange = (checked) => console.log(`switch to ${checked}`),
  ...restProps 
}) => {
  return (
    <Switch
      defaultChecked={defaultChecked}
      onChange={onChange}
      className="custom-toggle"
      size={size}
      {...restProps} 
    />
  );
};

export default ToggleSwitch;
