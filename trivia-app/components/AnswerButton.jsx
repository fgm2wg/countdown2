import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

const AnswerButton = ({ label, answer }) => {
  const [selected, setSelected] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleClick = () => {
    if (selected) {
      return;
    }
    setSelected(true);
    setIsCorrect(label === answer.toUpperCase());
  };

  return (
    <Button
      onClick={handleClick}
      style={{
        backgroundColor: selected
          ? isCorrect
            ? "lightgreen"
            : "salmon"
          : "lightgrey",
        color: "black",
      }}
      variant="outlined"
      color="black"
    >
      {label}
    </Button>
  );
};

export default AnswerButton;
