import React from "react";
import "./Button.scss";

const Button = ({ type = "primary", label, onClick, disabled, children , style}) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick} disabled={disabled} style={style}>
      {children && <span className="btn-icon">{children}</span>}
      <span className="btn-label">{label}</span>
    </button>
  );
};

export default Button;
