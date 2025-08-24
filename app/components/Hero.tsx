import React from 'react';
import { Typography, Button, Box, Container, Grid, Avatar, IconButton, Fade, useTheme } from '@mui/material';
import { KeyboardArrowDown, Code, Build } from '@mui/icons-material';

import '@mui/material/styles';

import { useThemeManager } from '@/app/providers/ThemeManagerProvider';

const HeroSection = ({ onNavigate }: { onNavigate: (sectionId: string) => void }) => {
  const { mode } = useThemeManager();
  const theme = useTheme();
  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'common.white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Fade in={true} timeout={1500}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Avatar
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Ejaj Ahamed Bhuiyan - Full Stack Developer"
                  sx={{
                    width: 120,
                    height: 120,
                    mx: { xs: 'auto', md: 0 },
                    mb: 3,
                    border: '4px solid rgba(255, 255, 255, 0.3)'
                  }}
                />
                <Typography variant="h1" component="h1" gutterBottom color="text.primary">
                  Hello, I&apos;m{' '}
                  <Typography
                    component="span"
                    variant="h1"
                    sx={{
                      WebkitBackgroundClip: 'text',
                      fontWeight: 'bold'
                    }}
                  >
                    Ejaj Ahamed Bhuiyan
                  </Typography>
                </Typography>
                <Typography variant="h5" component="p" sx={{ mb: 4, opacity: 0.9 }} color="text.secondary">
                  Full-Stack Web Developer | React & Node.js Specialist | Real-Time Systems Enthusiast{' '}
                </Typography>
                <Typography variant="h6" component="p" sx={{ mb: 4, opacity: 0.9 }} color="text.secondary">
                  Hi, I am a passionate full-stack developer with 3+ years of experience building scalable, efficient, and innovative
                  solutions. Skilled in React, Node.js, and real-time communication systems, I thrive in dynamic environments where
                  technology meets creativity. Currently expanding my expertise into DevOps and .NET.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button variant="contained" size="large" onClick={() => onNavigate('projects')}>
                    View My Work
                  </Button>
                  <Button variant="outlined" size="large" onClick={() => onNavigate('contact')}>
                    Get In Touch
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    background: `linear-gradient(135deg, ${mode === 'light' ? theme.palette.secondary.main : theme.palette.success.main} 0%, ${mode === 'light' ? theme.palette.info.main : theme.palette.warning.main} 100%)`
                  }}
                  role="img"
                  aria-label="Developer illustration"
                >
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    {/* <Code fontSize="large" color="error" /> <Build fontSize="large" /> */}
                    💻 🚀
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Fade>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}
      >
        <IconButton onClick={() => onNavigate('about')} sx={{ color: 'secondary.main' }} aria-label="Scroll to about section">
          <KeyboardArrowDown fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default HeroSection;
