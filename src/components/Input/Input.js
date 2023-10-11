import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Input.css";
import Button from "../Button/Button";


function Input() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginAttempted, setLoginAttempted] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const validationErrors = { ...errors };
  
    if (name === "username") {
      setUsername(value);
      validationErrors.username = value.trim() ? "" : "Це поле обов'язкове";
    } else if (name === "password") {
      setPassword(value);
      validationErrors.password = value.trim() ? "" : "Це поле обов'язкове";
    }
  
    setErrors(validationErrors);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    const validationErrors = { ...errors };

    if (name === "username") {
      validationErrors.username = value.trim() ? "" : "Це поле обов'язкове";
    } else if (name === "password") {
      validationErrors.password = value.trim() ? "" : "Це поле обов'язкове";
    }

    setErrors(validationErrors);
  };

  const handleLoginClick = () => {
    if (username === "admin" && password === "password") {
      setLoginAttempted(false);
      const Token = "yourToken123123";
      localStorage.setItem("Token", Token);
    } else {
      setLoginAttempted(true);
    }
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="username"
          placeholder="User Name"
          className="input-text"
          value={username}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        {errors.username && <div className="error-message">{errors.username}</div>}
      </div>
      <div className="input-wrapper password">
        <input
          type={isPasswordVisible ? "text" : "password"}
          name="password"
          placeholder="Password"
          className="input-password"
          value={password}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        {errors.password && <div className="error-message">{errors.password}</div>}
        {isPasswordVisible ? (
          <FaEyeSlash className="input-icon" onClick={togglePasswordVisibility} />
        ) : (
          <FaEye className="input-icon" onClick={togglePasswordVisibility} />
        )}  
      </div>
      {loginAttempted && (
        <div className="error-message-login">Невірний логін чи пароль. <br/> Спробуйте ще раз.</div>
      )}
          <Button onClick={handleLoginClick} />
    </div>
  );
}

export default Input;