import React from "react";
import "./Button.css";

function Button({ onClick }) {
  return (
    <button className="logo-button" onClick={onClick}>
      Login
    </button>
  );
}

export default Button;