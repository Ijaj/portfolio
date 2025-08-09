import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#ffffff',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#bdbdbd',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    hero: {
      main: '#667eea',
      secondary: '#764ba2',
      light: '#e3f2fd',
      accent: '#ffd700',
      accentDark: '#ffa500',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(45deg, #1976d2 30%, #21cbf3 90%)',
      accent: 'linear-gradient(45deg, #ffd700 30%, #ffa500 90%)',
      card: 'linear-gradient(135deg, #42a5f5 0%, #1976d2 100%)',
    },
    navbar: {
      background: 'rgba(25, 118, 210, 0.95)',
      border: 'rgba(255, 255, 255, 0.1)',
      text: '#ffffff',
      textGradient: 'linear-gradient(45deg, #fff 30%, #e3f2fd 90%)',
    },
    footer: {
      background: '#212121',
      text: '#ffffff',
      textSecondary: '#757575',
      border: '#424242',
      iconHover: '#ffffff',
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    body1: {
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 24px',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 8,
          borderRadius: 4,
        },
        bar: {
          borderRadius: 4,
        },
      },
    },
  },
});

const baseTypography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: { fontWeight: 700, fontSize: '3.5rem', '@media (max-width:600px)': { fontSize: '2.5rem' } },
  h2: { fontWeight: 700, fontSize: '2.75rem', '@media (max-width:600px)': { fontSize: '2rem' } },
  h3: { fontWeight: 600, fontSize: '2.25rem', '@media (max-width:600px)': { fontSize: '1.75rem' } },
  h4: { fontWeight: 600, fontSize: '1.75rem' },
  h5: { fontWeight: 500, fontSize: '1.25rem' },
  body1: { lineHeight: 1.7 },
};

const baseComponents = {
  MuiButton: {
    styleOverrides: {
      root: { textTransform: 'none', borderRadius: 8, padding: '10px 24px', fontWeight: 500 },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: 12, transition: 'all 0.3s ease-in-out' },
    },
  },
  MuiPaper: {
    styleOverrides: { root: { borderRadius: 12 } },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: { height: 8, borderRadius: 4 },
      bar: { borderRadius: 4 },
    },
  },
};

const themeVariants = [
  {
    name: 'Vibrant',
    light: {
      primary: { main: '#ff5722', light: '#ff8a50', dark: '#c41c00', contrastText: '#fff' },
      secondary: { main: '#00bcd4', light: '#62efff', dark: '#008ba3', contrastText: '#fff' },
      background: { default: '#fafafa', paper: '#fff' },
      text: { primary: '#212121', secondary: '#757575' },
    },
    dark: {
      primary: { main: '#ff8a50', light: '#ffc1a6', dark: '#c41c00', contrastText: '#000' },
      secondary: { main: '#62efff', light: '#b4ffff', dark: '#008ba3', contrastText: '#000' },
      background: { default: '#121212', paper: '#1e1e1e' },
      text: { primary: '#fff', secondary: '#bdbdbd' },
    },
  },
  {
    name: 'Elegant',
    light: {
      primary: { main: '#6a1b9a', light: '#9c4dcc', dark: '#38006b', contrastText: '#fff' },
      secondary: { main: '#ffca28', light: '#fffd61', dark: '#c79a00', contrastText: '#000' },
      background: { default: '#fdfdfd', paper: '#fff' },
      text: { primary: '#1a1a1a', secondary: '#666' },
    },
    dark: {
      primary: { main: '#9c4dcc', light: '#d05ce3', dark: '#6a1b9a', contrastText: '#fff' },
      secondary: { main: '#fffd61', light: '#ffff8d', dark: '#c79a00', contrastText: '#000' },
      background: { default: '#0f0f0f', paper: '#1b1b1b' },
      text: { primary: '#f5f5f5', secondary: '#aaa' },
    },
  },
  {
    name: 'Pastel',
    light: {
      primary: { main: '#ffb6b9', light: '#ffe5ec', dark: '#ff8589', contrastText: '#000' },
      secondary: { main: '#8ac6d1', light: '#bfeaf0', dark: '#5796a1', contrastText: '#000' },
      background: { default: '#fefefe', paper: '#fff' },
      text: { primary: '#222', secondary: '#555' },
    },
    dark: {
      primary: { main: '#ff8589', light: '#ffb6b9', dark: '#cc5d61', contrastText: '#000' },
      secondary: { main: '#5796a1', light: '#8ac6d1', dark: '#34646b', contrastText: '#fff' },
      background: { default: '#1a1a1a', paper: '#222' },
      text: { primary: '#fdfdfd', secondary: '#ccc' },
    },
  },
  {
    name: 'Neon',
    light: {
      primary: { main: '#39ff14', light: '#7dff68', dark: '#00ca00', contrastText: '#000' },
      secondary: { main: '#ff073a', light: '#ff5c7a', dark: '#c6001d', contrastText: '#fff' },
      background: { default: '#f5f5f5', paper: '#fff' },
      text: { primary: '#000', secondary: '#555' },
    },
    dark: {
      primary: { main: '#7dff68', light: '#b2ff9e', dark: '#39ff14', contrastText: '#000' },
      secondary: { main: '#ff5c7a', light: '#ff91a4', dark: '#ff073a', contrastText: '#fff' },
      background: { default: '#000', paper: '#111' },
      text: { primary: '#fff', secondary: '#aaa' },
    },
  },
  {
    name: 'Ocean',
    light: {
      primary: { main: '#0277bd', light: '#58a5f0', dark: '#004c8c', contrastText: '#fff' },
      secondary: { main: '#26c6da', light: '#6ff9ff', dark: '#0095a8', contrastText: '#000' },
      background: { default: '#e0f7fa', paper: '#fff' },
      text: { primary: '#002b36', secondary: '#555' },
    },
    dark: {
      primary: { main: '#58a5f0', light: '#a7d7ff', dark: '#0277bd', contrastText: '#000' },
      secondary: { main: '#6ff9ff', light: '#baffff', dark: '#26c6da', contrastText: '#000' },
      background: { default: '#001f29', paper: '#002b36' },
      text: { primary: '#e0f7fa', secondary: '#80deea' },
    },
  },
  {
    name: 'Sunset',
    light: {
      primary: { main: '#ff7043', light: '#ffa270', dark: '#c63f17', contrastText: '#fff' },
      secondary: { main: '#8d6e63', light: '#be9c91', dark: '#5f4339', contrastText: '#fff' },
      background: { default: '#fff8f6', paper: '#fff' },
      text: { primary: '#3e2723', secondary: '#6d4c41' },
    },
    dark: {
      primary: { main: '#ffa270', light: '#ffd0a6', dark: '#ff7043', contrastText: '#000' },
      secondary: { main: '#be9c91', light: '#e2cfc2', dark: '#8d6e63', contrastText: '#fff' },
      background: { default: '#2c1a14', paper: '#3e2723' },
      text: { primary: '#fff', secondary: '#d7ccc8' },
    },
  },
  {
    name: 'Mint',
    light: {
      primary: { main: '#00c853', light: '#5efc82', dark: '#009624', contrastText: '#fff' },
      secondary: { main: '#64dd17', light: '#9cff57', dark: '#1faa00', contrastText: '#000' },
      background: { default: '#f1f8f6', paper: '#fff' },
      text: { primary: '#1b5e20', secondary: '#4caf50' },
    },
    dark: {
      primary: { main: '#5efc82', light: '#9cffb0', dark: '#00c853', contrastText: '#000' },
      secondary: { main: '#9cff57', light: '#d0ff8c', dark: '#64dd17', contrastText: '#000' },
      background: { default: '#0d1f14', paper: '#1b5e20' },
      text: { primary: '#e8f5e9', secondary: '#a5d6a7' },
    },
  },
  {
    name: 'Rose',
    light: {
      primary: { main: '#e91e63', light: '#ff6090', dark: '#b0003a', contrastText: '#fff' },
      secondary: { main: '#f06292', light: '#ff94c2', dark: '#ba2d65', contrastText: '#fff' },
      background: { default: '#fff0f5', paper: '#fff' },
      text: { primary: '#880e4f', secondary: '#ad1457' },
    },
    dark: {
      primary: { main: '#ff6090', light: '#ff94c2', dark: '#e91e63', contrastText: '#000' },
      secondary: { main: '#ff94c2', light: '#ffc1e3', dark: '#f06292', contrastText: '#000' },
      background: { default: '#2c0014', paper: '#4a0d2a' },
      text: { primary: '#fce4ec', secondary: '#f8bbd0' },
    },
  },
  {
    name: 'Amber',
    light: {
      primary: { main: '#ffb300', light: '#ffe54c', dark: '#c68400', contrastText: '#000' },
      secondary: { main: '#ff6f00', light: '#ffa040', dark: '#c43e00', contrastText: '#fff' },
      background: { default: '#fffbe6', paper: '#fff' },
      text: { primary: '#3e2723', secondary: '#795548' },
    },
    dark: {
      primary: { main: '#ffe54c', light: '#ffff81', dark: '#ffb300', contrastText: '#000' },
      secondary: { main: '#ffa040', light: '#ffd180', dark: '#ff6f00', contrastText: '#000' },
      background: { default: '#2e1b00', paper: '#4e342e' },
      text: { primary: '#fff3e0', secondary: '#ffcc80' },
    },
  },
  {
    name: 'Slate',
    light: {
      primary: { main: '#607d8b', light: '#8eacbb', dark: '#34515e', contrastText: '#fff' },
      secondary: { main: '#78909c', light: '#a7c0cd', dark: '#4b636e', contrastText: '#fff' },
      background: { default: '#eceff1', paper: '#fff' },
      text: { primary: '#263238', secondary: '#546e7a' },
    },
    dark: {
      primary: { main: '#8eacbb', light: '#c1d5e0', dark: '#607d8b', contrastText: '#000' },
      secondary: { main: '#a7c0cd', light: '#e0f2f1', dark: '#78909c', contrastText: '#000' },
      background: { default: '#1c262b', paper: '#263238' },
      text: { primary: '#eceff1', secondary: '#b0bec5' },
    },
  },
];

export const themes = themeVariants.reduce((acc, variant) => {
  acc[variant.name] = {
    light: createTheme({ palette: { mode: 'light', ...variant.light }, typography: baseTypography, components: baseComponents }),
    dark: createTheme({ palette: { mode: 'dark', ...variant.dark }, typography: baseTypography, components: baseComponents }),
  };
  return acc;
}, {});

export const themeNames = themeVariants.map(variant => variant.name);
