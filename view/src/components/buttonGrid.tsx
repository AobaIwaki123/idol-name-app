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

  const sortedButtons = buttons.map((label, index) => ({
    label,
    clicked: clickedButtons[index],
    index,
  })).sort((a, b) => (b.clicked ? 1 : 0) - (a.clicked ? 1 : 0));

  return (
    <div className="grid grid-cols-3 gap-4 justify-center">
      {sortedButtons.map(({label, clicked, index}) => (
        <Button
          key={index}
          className="py-2 px-4"
          variant={clicked ? "outlined" : "contained"}
          onClick={() => handleClick(index)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGrid;
