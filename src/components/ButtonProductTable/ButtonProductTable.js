import React from "react";
import "./ButtonProductTable.css";

const ButtonProductTable = ({ text, icon: Icon }) => {
  return (
    <button className="icon-button">
      {<Icon className="button-icon" />}
      {text}
    </button>
  );
};

export default ButtonProductTable;
