'use client';
import '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import { Typography, Box, IconButton, Drawer, List, ListItemButton, ListItemText, useMediaQuery, useTheme, Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = ({ activeSection, onNavigate }: { activeSection: string; onNavigate: (sectionId: string) => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    setMounted(true);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <Box id="header">
      <Slide direction="right" in={true} timeout={1000}>
        <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', width: '100%', borderRight: '1px solid', borderColor: 'divider' }}>
          {!isMobile && (
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 'bold'
              }}
            >
              Ejaj Ahamed
            </Typography>
          )}
          {!isMobile ? (
            <List>
              {menuItems.map((item) => (
                <ListItemButton
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  selected={activeSection === item.id}
                  color={activeSection === item.id ? 'success' : 'primary'}
                  sx={{
                    transition: 'all 0.3s ease-in-out',
                    fontWeight: activeSection === item.id ? 'bold' : 'normal'
                  }}
                >
                  <Typography
                    color={activeSection === item.id ? 'text.primary' : 'text.main'}
                    fontWeight={activeSection === item.id ? 'bold' : 'normal'}
                  >
                    {item.label}
                  </Typography>
                </ListItemButton>
              ))}
            </List>
          ) : (
            <IconButton edge="end" onClick={() => setMobileMenuOpen(true)} sx={{ color: 'navbar.text' }} aria-label="Open navigation menu">
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Slide>

      <Drawer anchor="left" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
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
    </Box>
  );
};

export default Header;
