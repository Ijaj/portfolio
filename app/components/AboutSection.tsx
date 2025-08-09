'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  useTheme,
  Fade,
  Grow,
  IconButton,
  Paper,
} from '@mui/material';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

type Stat = {
  label: string;
  value: string;
  color: 'primary' | 'secondary' | 'success' | 'warning';
};

const AboutSection = () => {
  const muiTheme = useTheme();

  const stats: Stat[] = [
    { label: 'Projects Completed', value: '50+', color: 'primary' },
    { label: 'Years Experience', value: '5+', color: 'secondary' },
    { label: 'Happy Clients', value: '30+', color: 'success' },
    { label: 'Technologies', value: '15+', color: 'warning' }
  ];

  return (
    <Container maxWidth="lg" id="about" component="section" sx={{ py: 10 }}>
      <Fade in={true} timeout={1000}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom color="primary" fontWeight="bold">
            About Me
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              backgroundColor: 'primary.main',
              mx: 'auto',
              mb: 3
            }}
          />
        </Box>
      </Fade>

      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Grow in={true} timeout={1500}>
            <Card elevation={3} sx={{ p: 3 }}>
              <Typography variant="h4" component="h3" gutterBottom color="primary" fontWeight="bold">
                Passionate Developer & Problem Solver
              </Typography>
              <Typography variant="body1" paragraph>
                With over 5 years of experience in web development, I specialize in creating 
                modern, scalable applications using cutting-edge technologies. I&apos;m passionate 
                about writing clean, efficient code and delivering exceptional user experiences.
              </Typography>
              <Typography variant="body1" paragraph>
                When I&apos;m not coding, you can find me contributing to open-source projects, 
                learning new technologies, or mentoring aspiring developers in my local community.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <IconButton color="primary" aria-label="GitHub profile">
                  <GithubIcon />
                </IconButton>
                <IconButton color="primary" aria-label="LinkedIn profile">
                  <LinkedInIcon />
                </IconButton>
                <IconButton color="primary" aria-label="Email contact">
                  <EmailIcon />
                </IconButton>
              </Box>
            </Card>
          </Grow>
        </Grid>
        
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6 }} key={stat.label}>
                <Grow in={true} timeout={1000 + index * 200}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      background: `linear-gradient(135deg, ${muiTheme.palette[stat.color].light} 0%, ${muiTheme.palette[stat.color].main} 100%)`,
                      color: `${stat.color}.contrastText`
                    }}
                  >
                    <Typography variant="h3" component="div" fontWeight="bold" gutterBottom>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" component="div">
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;