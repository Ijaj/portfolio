import { Typography, ToggleButtonGroup, ToggleButton, Paper } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useThemeManager } from '../providers/ThemeManagerProvider';

export default function ThemeModeSwitcher() {
  const { mode, setMode } = useThemeManager();
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        p: 3,
        borderRadius: 4,
        backdropFilter: 'blur(12px)',
        maxWidth: 320,
        mx: 'auto'
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          letterSpacing: '0.5px'
        }}
      >
        Theme Mode
      </Typography>

      <ToggleButtonGroup
        exclusive
        sx={{
          borderRadius: 0,
          overflow: 'hidden',
          // backgroundColor: 'background.default',
          '& .MuiToggleButton-root': {
            flex: 1,
            // px: 3,
            py: 1.5,
            border: 'none',
            transition: 'all 0.25s ease'
          },
          '& .Mui-selected': {
            // backgroundColor: 'background.paper',
            color: '#fff',
            '&:hover': {
              // backgroundColor: 'background.default'
            }
          }
        }}
      >
        <ToggleButton onClick={() => setMode('light')} selected={mode === 'light'} value="light">
          <LightModeIcon sx={{ mr: 1 }} />
          Light
        </ToggleButton>
        <ToggleButton onClick={() => setMode('system')} selected={mode === 'system'} value="system">
          <DarkModeIcon sx={{ mr: 1 }} />
          System
        </ToggleButton>
        <ToggleButton onClick={() => setMode('dark')} selected={mode === 'dark'} value="dark">
          <AutoAwesomeIcon sx={{ mr: 1 }} />
          Dark
        </ToggleButton>
      </ToggleButtonGroup>
    </Paper>
  );
}
