import { createTheme } from '@mui/material/styles';

const baseTypography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: { fontWeight: 700, fontSize: '3.5rem', '@media (max-width:600px)': { fontSize: '2.5rem' } },
  h2: { fontWeight: 700, fontSize: '2.75rem', '@media (max-width:600px)': { fontSize: '2rem' } },
  h3: { fontWeight: 600, fontSize: '2.25rem', '@media (max-width:600px)': { fontSize: '1.75rem' } },
  h4: { fontWeight: 600, fontSize: '1.75rem' },
  h5: { fontWeight: 500, fontSize: '1.25rem' },
  body1: { lineHeight: 1.7 }
};

const baseComponents = {
  MuiButton: {
    styleOverrides: {
      root: { textTransform: 'none', borderRadius: 8, padding: '10px 24px', fontWeight: 500 }
    }
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: 12, transition: 'all 0.3s ease-in-out' }
    }
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: { height: 8, borderRadius: 4 },
      bar: { borderRadius: 4 }
    }
  }
};

const themeVariants = [
  {
    name: 'Vibrant',
    light: {
      primary: { main: '#ff5722', light: '#ff8a50', dark: '#c41c00', contrastText: '#fff' },
      secondary: { main: '#00bcd4', light: '#62efff', dark: '#008ba3', contrastText: '#000' },
      background: { default: '#fafafa', paper: '#fff' },
      text: { primary: '#212121', secondary: '#757575', contrast: '#fff' },
      success: { main: '#4caf50', light: '#80e27e', dark: '#087f23', contrastText: '#fff' },
      info: { main: '#2196f3', light: '#6ec6ff', dark: '#0069c0', contrastText: '#fff' },
      warning: { main: '#ff9800', light: '#ffc947', dark: '#c66900', contrastText: '#000' },
      error: { main: '#f44336', light: '#ff7961', dark: '#ba000d', contrastText: '#fff' }
    },
    dark: {
      primary: { main: '#ff8a50', light: '#ffc1a6', dark: '#c41c00', contrastText: '#000' },
      secondary: { main: '#62efff', light: '#b4ffff', dark: '#008ba3', contrastText: '#000' },
      background: { default: '#121212', paper: '#1e1e1e' },
      text: { primary: '#fff', secondary: '#bdbdbd', contrast: '#000' },
      success: { main: '#81c784', light: '#b2fab4', dark: '#519657', contrastText: '#000' },
      info: { main: '#64b5f6', light: '#9be7ff', dark: '#2286c3', contrastText: '#000' },
      warning: { main: '#ffb74d', light: '#ffe97d', dark: '#c88719', contrastText: '#000' },
      error: { main: '#e57373', light: '#ffa4a2', dark: '#af4448', contrastText: '#000' }
    }
  },
  {
    name: 'Elegant',
    light: {
      primary: { main: '#6a1b9a', light: '#9c4dcc', dark: '#38006b', contrastText: '#fff' },
      secondary: { main: '#ffca28', light: '#fffd61', dark: '#c79a00', contrastText: '#000' },
      background: { default: '#fdfdfd', paper: '#fff' },
      text: { primary: '#1a1a1a', secondary: '#666', contrast: '#fff' },
      success: { main: '#43a047', light: '#76d275', dark: '#00701a', contrastText: '#fff' },
      info: { main: '#5c6bc0', light: '#8e99f3', dark: '#26418f', contrastText: '#fff' },
      warning: { main: '#fbc02d', light: '#fff263', dark: '#c49000', contrastText: '#000' },
      error: { main: '#d32f2f', light: '#ff6659', dark: '#9a0007', contrastText: '#fff' }
    },
    dark: {
      primary: { main: '#9c4dcc', light: '#d05ce3', dark: '#6a1b9a', contrastText: '#fff' },
      secondary: { main: '#fffd61', light: '#ffff8d', dark: '#c79a00', contrastText: '#000' },
      background: { default: '#0f0f0f', paper: '#1b1b1b' },
      text: { primary: '#f5f5f5', secondary: '#aaa', contrast: '#000' },
      success: { main: '#81c784', light: '#b2fab4', dark: '#519657', contrastText: '#000' },
      info: { main: '#9fa8da', light: '#d1d9ff', dark: '#6f79a8', contrastText: '#000' },
      warning: { main: '#ffd54f', light: '#ffff81', dark: '#c8a415', contrastText: '#000' },
      error: { main: '#ef9a9a', light: '#ffcccb', dark: '#ba6b6c', contrastText: '#000' }
    }
  },
  {
    name: 'Pastel',
    light: {
      primary: { main: '#ffb6b9', light: '#ffe5ec', dark: '#ff8589', contrastText: '#000' },
      secondary: { main: '#8ac6d1', light: '#bfeaf0', dark: '#5796a1', contrastText: '#000' },
      background: { default: '#fefefe', paper: '#fff' },
      text: { primary: '#222', secondary: '#555', contrast: '#fff' },
      success: { main: '#a5d6a7', light: '#d7ffd9', dark: '#75a478', contrastText: '#000' },
      info: { main: '#81d4fa', light: '#b6ffff', dark: '#4ba3c7', contrastText: '#000' },
      warning: { main: '#ffe082', light: '#ffffb3', dark: '#caae53', contrastText: '#000' },
      error: { main: '#f48fb1', light: '#ffc1e3', dark: '#bf5f82', contrastText: '#000' }
    },
    dark: {
      primary: { main: '#ff8589', light: '#ffb6b9', dark: '#cc5d61', contrastText: '#000' },
      secondary: { main: '#5796a1', light: '#8ac6d1', dark: '#34646b', contrastText: '#fff' },
      background: { default: '#1a1a1a', paper: '#222' },
      text: { primary: '#fdfdfd', secondary: '#ccc', contrast: '#000' },
      success: { main: '#81c784', light: '#b2fab4', dark: '#519657', contrastText: '#000' },
      info: { main: '#4fc3f7', light: '#8bf6ff', dark: '#0093c4', contrastText: '#000' },
      warning: { main: '#ffcc80', light: '#ffffb0', dark: '#ca9b52', contrastText: '#000' },
      error: { main: '#f48fb1', light: '#ffc1e3', dark: '#bf5f82', contrastText: '#000' }
    }
  },
  {
    name: 'Neon',
    light: {
      primary: { main: '#39ff14', light: '#7dff68', dark: '#00ca00', contrastText: '#000' },
      secondary: { main: '#ff073a', light: '#ff5c7a', dark: '#c6001d', contrastText: '#fff' },
      background: { default: '#f5f5f5', paper: '#fff' },
      text: { primary: '#000', secondary: '#555', contrast: '#fff' },
      success: { main: '#00e676', light: '#66ffa6', dark: '#00b248', contrastText: '#000' },
      info: { main: '#00b0ff', light: '#69e2ff', dark: '#0081cb', contrastText: '#fff' },
      warning: { main: '#ffea00', light: '#ffff56', dark: '#c7b800', contrastText: '#000' },
      error: { main: '#ff1744', light: '#ff616f', dark: '#c4001d', contrastText: '#fff' }
    },
    dark: {
      primary: { main: '#7dff68', light: '#b2ff9e', dark: '#39ff14', contrastText: '#000' },
      secondary: { main: '#ff5c7a', light: '#ff91a4', dark: '#ff073a', contrastText: '#fff' },
      background: { default: '#000', paper: '#111' },
      text: { primary: '#fff', secondary: '#aaa', contrast: '#000' },
      success: { main: '#69f0ae', light: '#9fffe0', dark: '#2bbd7e', contrastText: '#000' },
      info: { main: '#40c4ff', light: '#82f7ff', dark: '#0094cc', contrastText: '#000' },
      warning: { main: '#ffee58', light: '#ffff8b', dark: '#c9bc1f', contrastText: '#000' },
      error: { main: '#ff5252', light: '#ff867f', dark: '#c50e29', contrastText: '#fff' }
    }
  },
  {
    name: 'Ocean',
    light: {
      primary: { main: '#0277bd', light: '#58a5f0', dark: '#004c8c', contrastText: '#fff' },
      secondary: { main: '#26c6da', light: '#6ff9ff', dark: '#0095a8', contrastText: '#000' },
      background: { default: '#e0f7fa', paper: '#fff' },
      text: { primary: '#002b36', secondary: '#555', contrast: '#fff' },
      success: { main: '#2e7d32', light: '#60ad5e', dark: '#005005', contrastText: '#fff' },
      info: { main: '#0288d1', light: '#5eb8ff', dark: '#005b9f', contrastText: '#fff' },
      warning: { main: '#fbc02d', light: '#fff263', dark: '#c49000', contrastText: '#000' },
      error: { main: '#c62828', light: '#ff5f52', dark: '#8e0000', contrastText: '#fff' }
    },
    dark: {
      primary: { main: '#58a5f0', light: '#a7d7ff', dark: '#0277bd', contrastText: '#000' },
      secondary: { main: '#6ff9ff', light: '#baffff', dark: '#26c6da', contrastText: '#000' },
      background: { default: '#001f29', paper: '#002b36' },
      text: { primary: '#e0f7fa', secondary: '#80deea', contrast: '#000' },
      success: { main: '#66bb6a', light: '#98ee99', dark: '#338a3e', contrastText: '#000' },
      info: { main: '#4fc3f7', light: '#8bf6ff', dark: '#0093c4', contrastText: '#000' },
      warning: { main: '#ffca28', light: '#fffd61', dark: '#c79a00', contrastText: '#000' },
      error: { main: '#ef5350', light: '#ff867c', dark: '#b61827', contrastText: '#000' }
    }
  },
  {
    name: 'Sunset',
    light: {
      primary: { main: '#ff7043', light: '#ffa270', dark: '#c63f17', contrastText: '#fff' },
      secondary: { main: '#8d6e63', light: '#be9c91', dark: '#5f4339', contrastText: '#fff' },
      background: { default: '#fff8f6', paper: '#fff' },
      text: { primary: '#3e2723', secondary: '#6d4c41', contrast: '#fff' },
      success: { main: '#66bb6a', light: '#98ee99', dark: '#338a3e', contrastText: '#000' },
      info: { main: '#29b6f6', light: '#73e8ff', dark: '#0086c3', contrastText: '#fff' },
      warning: { main: '#ffa726', light: '#ffd95b', dark: '#c77800', contrastText: '#000' },
      error: { main: '#ef5350', light: '#ff867c', dark: '#b61827', contrastText: '#fff' }
    },
    dark: {
      primary: { main: '#ffa270', light: '#ffd0a6', dark: '#ff7043', contrastText: '#000' },
      secondary: { main: '#be9c91', light: '#e2cfc2', dark: '#8d6e63', contrastText: '#fff' },
      background: { default: '#2c1a14', paper: '#3e2723' },
      text: { primary: '#fff', secondary: '#d7ccc8', contrast: '#000' },
      success: { main: '#81c784', light: '#b2fab4', dark: '#519657', contrastText: '#000' },
      info: { main: '#4fc3f7', light: '#8bf6ff', dark: '#0093c4', contrastText: '#000' },
      warning: { main: '#ffb74d', light: '#ffe97d', dark: '#c88719', contrastText: '#000' },
      error: { main: '#e57373', light: '#ffa4a2', dark: '#af4448', contrastText: '#000' }
    }
  },
  {
    name: 'Mint',
    light: {
      primary: { main: '#00c853', light: '#5efc82', dark: '#009624', contrastText: '#fff' },
      secondary: { main: '#64dd17', light: '#9cff57', dark: '#1faa00', contrastText: '#000' },
      background: { default: '#f1f8f6', paper: '#fff' },
      text: { primary: '#1b5e20', secondary: '#4caf50', contrast: '#fff' },
      success: { main: '#00c853', light: '#5efc82', dark: '#009624', contrastText: '#fff' },
      info: { main: '#00acc1', light: '#5ddef4', dark: '#007c91', contrastText: '#fff' },
      warning: { main: '#ffd600', light: '#ffff52', dark: '#c7a500', contrastText: '#000' },
      error: { main: '#d50000', light: '#ff5131', dark: '#9b0000', contrastText: '#fff' }
    },
    dark: {
      primary: { main: '#5efc82', light: '#9cffb0', dark: '#00c853', contrastText: '#000' },
      secondary: { main: '#9cff57', light: '#d0ff8c', dark: '#64dd17', contrastText: '#000' },
      background: { default: '#0d1f14', paper: '#1b5e20' },
      text: { primary: '#e8f5e9', secondary: '#a5d6a7', contrast: '#000' },
      success: { main: '#69f0ae', light: '#9fffe0', dark: '#2bbd7e', contrastText: '#000' },
      info: { main: '#4dd0e1', light: '#88ffff', dark: '#009faf', contrastText: '#000' },
      warning: { main: '#ffee58', light: '#ffff8b', dark: '#c9bc1f', contrastText: '#000' },
      error: { main: '#ef5350', light: '#ff867c', dark: '#b61827', contrastText: '#000' }
    }
  },
  {
    name: 'Rose',
    light: {
      primary: { main: '#e91e63', light: '#ff6090', dark: '#b0003a', contrastText: '#fff' },
      secondary: { main: '#f06292', light: '#ff94c2', dark: '#ba2d65', contrastText: '#fff' },
      background: { default: '#fff0f5', paper: '#fff' },
      text: { primary: '#880e4f', secondary: '#ad1457', contrast: '#fff' },
      success: { main: '#43a047', light: '#76d275', dark: '#00701a', contrastText: '#fff' },
      info: { main: '#29b6f6', light: '#73e8ff', dark: '#0086c3', contrastText: '#fff' },
      warning: { main: '#ffb300', light: '#ffe54c', dark: '#c68400', contrastText: '#000' },
      error: { main: '#ff0000ff', light: '#ff5131', dark: '#9b0000', contrastText: '#fff' }
    },
    dark: {
      primary: { main: '#ff6090', light: '#ff94c2', dark: '#e91e63', contrastText: '#000' },
      secondary: { main: '#ff94c2', light: '#ffc1e3', dark: '#f06292', contrastText: '#000' },
      background: { default: '#2c0014', paper: '#4a0d2a' },
      text: { primary: '#fce4ec', secondary: '#f8bbd0', contrast: '#000' },
      success: { main: '#81c784', light: '#b2fab4', dark: '#519657', contrastText: '#000' },
      info: { main: '#4fc3f7', light: '#8bf6ff', dark: '#0093c4', contrastText: '#000' },
      warning: { main: '#ffd54f', light: '#ffff81', dark: '#c8a415', contrastText: '#000' },
      error: { main: '#ef9a9a', light: '#ffcccb', dark: '#ba6b6c', contrastText: '#000' }
    }
  },
  {
    name: 'Amber',
    light: {
      primary: { main: '#ffb300', light: '#ffe54c', dark: '#c68400', contrastText: '#000' },
      secondary: { main: '#ff6f00', light: '#ffa040', dark: '#c43e00', contrastText: '#fff' },
      background: { default: '#fffbe6', paper: '#fff' },
      text: { primary: '#3e2723', secondary: '#795548', contrast: '#fff' },
      success: { main: '#2e7d32', light: '#60ad5e', dark: '#005005', contrastText: '#fff' },
      info: { main: '#0288d1', light: '#5eb8ff', dark: '#005b9f', contrastText: '#fff' },
      warning: { main: '#ff8f00', light: '#ffc046', dark: '#c56000', contrastText: '#000' },
      error: { main: '#c62828', light: '#ff5f52', dark: '#8e0000', contrastText: '#fff' }
    },
    dark: {
      primary: { main: '#ffe54c', light: '#ffff81', dark: '#ffb300', contrastText: '#000' },
      secondary: { main: '#ffa040', light: '#ffd180', dark: '#ff6f00', contrastText: '#000' },
      background: { default: '#2e1b00', paper: '#4e342e' },
      text: { primary: '#fff3e0', secondary: '#ffcc80', contrast: '#000' },
      success: { main: '#81c784', light: '#b2fab4', dark: '#519657', contrastText: '#000' },
      info: { main: '#4fc3f7', light: '#8bf6ff', dark: '#0093c4', contrastText: '#000' },
      warning: { main: '#ffb74d', light: '#ffe97d', dark: '#c88719', contrastText: '#000' },
      error: { main: '#ef5350', light: '#ff867c', dark: '#b61827', contrastText: '#000' }
    }
  },
  {
    name: 'Slate',
    light: {
      primary: { main: '#607d8b', light: '#8eacbb', dark: '#34515e', contrastText: '#fff' },
      secondary: { main: '#78909c', light: '#a7c0cd', dark: '#4b636e', contrastText: '#fff' },
      background: { default: '#eceff1', paper: '#fff' },
      text: { primary: '#263238', secondary: '#546e7a', contrast: '#fff' },
      success: { main: '#388e3c', light: '#66bb6a', dark: '#00600f', contrastText: '#fff' },
      info: { main: '#0288d1', light: '#5eb8ff', dark: '#005b9f', contrastText: '#fff' },
      warning: { main: '#ffa000', light: '#ffd149', dark: '#c67100', contrastText: '#000' },
      error: { main: '#d32f2f', light: '#ff6659', dark: '#9a0007', contrastText: '#fff' }
    },
    dark: {
      primary: { main: '#8eacbb', light: '#c1d5e0', dark: '#607d8b', contrastText: '#000' },
      secondary: { main: '#a7c0cd', light: '#e0f2f1', dark: '#78909c', contrastText: '#000' },
      background: { default: '#1c262b', paper: '#263238' },
      text: { primary: '#eceff1', secondary: '#b0bec5', contrast: '#000' },
      success: { main: '#81c784', light: '#b2fab4', dark: '#519657', contrastText: '#000' },
      info: { main: '#4fc3f7', light: '#8bf6ff', dark: '#0093c4', contrastText: '#000' },
      warning: { main: '#ffb74d', light: '#ffe97d', dark: '#c88719', contrastText: '#000' },
      error: { main: '#ef5350', light: '#ff867c', dark: '#b61827', contrastText: '#000' }
    }
  }
];

export const themes = themeVariants.reduce((acc, variant) => {
  acc[variant.name] = {
    light: createTheme({
      palette: { mode: 'light', ...variant.light },
      typography: baseTypography,
      components: baseComponents
    }),
    dark: createTheme({
      palette: { mode: 'dark', ...variant.dark },
      typography: baseTypography,
      components: baseComponents
    })
  };
  return acc;
}, {});

const prefersDarkMode = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

themes['System'] = {
  system: createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      ...(prefersDarkMode
        ? themeVariants[0].dark // Vibrant dark
        : themeVariants[0].light) // Vibrant light
    },
    typography: baseTypography,
    components: baseComponents
  })
};

export const themeNames = [...themeVariants.map((variant) => variant.name), 'System'];
