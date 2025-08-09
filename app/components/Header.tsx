'use client';
import '@mui/material/styles';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = ({ activeSection, onNavigate }: { activeSection: string; onNavigate: (sectionId: string) => void;}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Drawer open={settingsDrawerOpen} onClose={() => setSettingsDrawerOpen(false)}>
        <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
          <Box sx={{ display: 'flex' }}>
            <Typography variant="h6">Settings</Typography>
            <IconButton onClick={() => setSettingsDrawerOpen(false)} aria-label="Close settings">
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        something
      </Drawer>
      <Slide direction="down" in={true} timeout={1000}>
        <AppBar 
          position="fixed" 
          elevation={0}
          sx={{
            background: 'navbar.background',
            backdropFilter: 'blur(10px)',
            borderBottom: `1px solid ${muiTheme.palette.navbar.border}`
          }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 'bold',
                background: muiTheme.palette.navbar.textGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Ejaj Ahamed Bhuiyan
            </Typography>
            
            {!isMobile ? (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    sx={{
                      color: 'navbar.text',
                      fontWeight: activeSection === item.id ? 'bold' : 'normal',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <IconButton onClick={() => setSettingsDrawerOpen(true)} aria-label="Open settings">
                  <SettingsIcon />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                edge="end"
                onClick={() => setMobileMenuOpen(true)}
                sx={{ color: 'navbar.text' }}
                aria-label="Open navigation menu"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Slide>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2 }}>
            <IconButton onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item) => (
              <ListItemButton key={item.id} onClick={() => handleNavigation(item.id)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
export default Header;