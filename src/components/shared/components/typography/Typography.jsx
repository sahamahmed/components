import React from "react";
import "./Typography.scss";

const Typography = ({ type, children, ...RestProps }) => {
  return <div className={`typography ${type}`} {...RestProps}>{children}</div>;
};

export default Typography;
