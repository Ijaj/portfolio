import React from 'react';
import { KeyboardArrowDown } from "@mui/icons-material";
import { Fab } from "@mui/material";

const ScrollToTopFab = ({ show, onClick }: { show: boolean; onClick: () => void; }) => (
  show && (
    <Fab
      color="primary"
      onClick={onClick}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000
      }}
      aria-label="Scroll to top"
    >
      <KeyboardArrowDown sx={{ transform: 'rotate(180deg)' }} />
    </Fab>
  )
);

export default ScrollToTopFab;
