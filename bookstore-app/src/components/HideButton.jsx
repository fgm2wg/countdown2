import React from "react";

const HideButton = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default HideButton;
