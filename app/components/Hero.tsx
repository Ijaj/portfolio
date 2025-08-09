
import React, {  } from 'react';
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Avatar,
  IconButton,
  useTheme,
  Fade
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

import '@mui/material/styles';

const HeroSection = ({ onNavigate }: { onNavigate: (sectionId: string) => void; }) => {
  const muiTheme = useTheme();

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: muiTheme.palette.gradient.primary,
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
                <Typography variant="h1" component="h1" gutterBottom>
                  Hello, I&apos;m{' '}
                  <Typography
                    component="span"
                    variant="h1"
                    sx={{
                      background: muiTheme.palette.gradient.accent,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 'bold'
                    }}
                  >
                    Ejaj Ahamed Bhuiyan
                  </Typography>
                </Typography>
                <Typography variant="h5" component="p" paragraph sx={{ mb: 4, opacity: 0.9 }}>
                  Full-stack developer passionate about creating beautiful, functional web applications
                  that solve real-world problems.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => onNavigate('projects')}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: 'common.white',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.3)'
                      }
                    }}
                  >
                    View My Work
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => onNavigate('contact')}
                    sx={{
                      borderColor: 'common.white',
                      color: 'common.white',
                      '&:hover': {
                        borderColor: 'common.white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
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
                    background: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  role="img"
                  aria-label="Developer illustration"
                >
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
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
        <IconButton
          onClick={() => onNavigate('about')}
          sx={{ color: 'common.white' }}
          aria-label="Scroll to about section"
        >
          <KeyboardArrowDown fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default HeroSection;