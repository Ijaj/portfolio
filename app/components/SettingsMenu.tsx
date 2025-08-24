'use client';
import { Box, Drawer, Fab, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';

import ThemeModeSwitcher from './ModeSwitcher';
import ThemeSwitcherUI from './ThemeSelector';
import { useState } from 'react';

export default function SettingsMenu() {
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);
  function onClose() {
    setSettingsDrawerOpen(false);
  }
  return (
    <>
      <Fab sx={{ top: 16, right: 16, position: 'fixed' }} onClick={() => setSettingsDrawerOpen(true)} aria-label="Open settings">
        <SettingsIcon />
      </Fab>
      <Drawer anchor="right" open={settingsDrawerOpen} onClose={onClose} disableScrollLock>
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6">Settings</Typography>
            <IconButton onClick={onClose} aria-label="Close settings">
              <CloseIcon />
            </IconButton>
          </Box>
          <ThemeModeSwitcher />
          <ThemeSwitcherUI />
        </Box>
      </Drawer>
    </>
  );
}
