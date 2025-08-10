'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { themes } from '@/app/theme'; // from our themes.js

const ThemeManagerContext = createContext();

export function ThemeManagerProvider({ children }) {
  const [themeName, setThemeName] = useState('Vibrant');
  const [mode, setMode] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Load from localStorage (client only)
  useEffect(() => {
    const savedTheme = localStorage.getItem('mui-theme-name');
    const savedMode = localStorage.getItem('mui-theme-mode');
    if (savedTheme && themes[savedTheme]) setThemeName(savedTheme);
    if (savedMode === 'light' || savedMode === 'dark') setMode(savedMode);
    setMounted(true);
  }, []);

  // Save changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('mui-theme-name', themeName);
      localStorage.setItem('mui-theme-mode', mode);
    }
  }, [themeName, mode, mounted]);

  // Handlers
  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const changeTheme = useCallback((name) => {
    if (themes[name]) setThemeName(name);
  }, []);

  const value = {
    themeName,
    mode,
    setThemeName: changeTheme,
    setMode,
    toggleMode,
    allThemes: Object.keys(themes)
  };

  // Avoid rendering until mounted (prevents hydration issues)
  if (!mounted) return null;

  const prefersDarkMode = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentMode = mode === 'system' ? (prefersDarkMode ? 'dark' : 'light') : mode;
  const currentTheme = themes[themeName]?.[currentMode] || themes['Vibrant'].light;

  return (
    <ThemeManagerContext.Provider value={value}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeManagerContext.Provider>
  );
}

export const useThemeManager = () => useContext(ThemeManagerContext);
