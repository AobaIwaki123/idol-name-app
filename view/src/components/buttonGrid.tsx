"use client";

import React, { useState } from "react";
import Button from '@mui/material/Button';

type ButtonGridProps = {
  buttons: string[];
};

const ButtonGrid: React.FC<ButtonGridProps> = ({ buttons }) => {
  const [clickedButtons, setClickedButtons] = useState<boolean[]>(new Array(buttons.length).fill(false));

  const handleClick = (index: number) => {
    setClickedButtons(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4 justify-center">
      {buttons.map((buttonLabel, index) => (
        <Button
          key={index}
          className="py-2 px-4"
          variant={clickedButtons[index] ? "outlined" : "contained"}
          onClick={() => handleClick(index)}
        >
          {buttonLabel}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGrid;
