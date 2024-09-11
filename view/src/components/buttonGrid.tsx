"use client";

import React, { useState } from "react";
import Button from '@mui/material/Button';

type ButtonGridProps = {
  buttons: string[];
};

const ButtonGrid: React.FC<ButtonGridProps> = ({ buttons }) => {
  const [isClickedButtons, setIsClickedButtons] = useState<boolean[]>(new Array(buttons.length).fill(false));
  
  const handleClick = (index: number) => {
    setIsClickedButtons(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const sortedButtons = buttons.map((label, index) => ({
    label,
    clicked: isClickedButtons[index],
    index,
  })).sort((a, b) => (b.clicked ? 1 : 0) - (a.clicked ? 1 : 0));

  const clickedButtons = sortedButtons.filter(button => button.clicked);
  const unclickedButtons = sortedButtons.filter(button => !button.clicked);

  return (
  <div className="flex flex-col gap-4 p-2">
      <div className="grid grid-cols-3 gap-4 justify-center">
        {clickedButtons.map(({label, clicked, index}) => (
          <Button
            key={index}
            className="font-semibold border-2	py-2 px-4"
            variant={clicked ? "contained" : "outlined"}
            onClick={() => handleClick(index)}
          >
            {label}
          </Button>
        ))}
      </div>
      {clickedButtons.length > 0 && unclickedButtons.length > 0 && (
        <hr className="border-gray-300 w-full" />
      )}
      <div className="grid grid-cols-3 gap-4 justify-center">
        {unclickedButtons.map(({label, clicked, index}) => (
          <Button
            key={index}
            className="font-semibold border-2	py-2 px-4"
            variant={clicked ? "contained" : "outlined"}
            onClick={() => handleClick(index)}
          >
            {label}
          </Button>
        ))}
        </div>
    </div>
  );
};

export default ButtonGrid;
