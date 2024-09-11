import React from 'react';
import Button from '@mui/material/Button';

function RoundButton({ children, ...props }) {
  return (
    <Button
      color="primary"
      variant="outlined"
    >
      {children}
    </Button>
  );
}

export default RoundButton;
