import React from "react";
import Button from "@mui/material/Button";

const GenerateButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} variant="contained">
      Generate New Questions
    </Button>
  );
};

export default GenerateButton;
