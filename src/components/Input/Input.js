import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Input.css";

function Input() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="input-container">
      <input type="text" placeholder="User Name" className="input-text" />
      <div className="input-password password">
        <input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Password"
          className="input-password"
        />
        {isPasswordVisible ? (
          <FaEyeSlash
            className="input-icon"
            onClick={togglePasswordVisibility}
          />
        ) : (
          <FaEye className="input-icon" onClick={togglePasswordVisibility} />
        )}
      </div>
    </div>
  );
}

export default Input;
