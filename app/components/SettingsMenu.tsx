import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import ThemeModeSwitcher from './ModeSwitcher';
import ThemeSwitcherUI from './ThemeSelector';

export default function SettingsMenu({ onClose }: { onClose: () => void }) {
  return (
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
  );
}
