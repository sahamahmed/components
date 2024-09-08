import React from "react";
import "./Typography.scss";

const Typography = ({ type, children }) => {
  return <div className={`typography ${type}`}>{children}</div>;
};

export default Typography;
