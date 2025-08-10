import { Typography, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { useThemeManager } from '../providers/ThemeManagerProvider';

export default function ThemeSwitcherUI() {
  const { themeName, setThemeName, allThemes } = useThemeManager();

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
        width: '100%',
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
        Choose Theme
      </Typography>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Theme</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={themeName}
          label="Theme"
          onChange={(event) => setThemeName(event.target.value as string)}
        >
          {allThemes.map((theme: string) => (
            <MenuItem key={theme} value={theme}>
              {theme}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* <ToggleButtonGroup
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
        {allThemes.map((name: string) => (
          <ToggleButton key={name} onClick={() => setThemeName(name)} selected={themeName === name} value={name}>
            {name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup> */}
    </Paper>
  );
}
