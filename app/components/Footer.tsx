import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material';

import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const muiTheme = useTheme();

  return (
    <Box component="footer" sx={{ backgroundColor: 'footer.background', color: 'footer.text', py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Ejaj Ahamed Bhuiyan
          </Typography>
          <Typography variant="body1" color="footer.textSecondary" paragraph>
            Building the future, one line of code at a time.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <IconButton sx={{ 
              color: 'footer.textSecondary', 
              '&:hover': { color: 'footer.iconHover' } 
            }} aria-label="GitHub profile">
              <GithubIcon />
            </IconButton>
            <IconButton sx={{ 
              color: 'footer.textSecondary', 
              '&:hover': { color: 'footer.iconHover' } 
            }} aria-label="LinkedIn profile">
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ 
              color: 'footer.textSecondary', 
              '&:hover': { color: 'footer.iconHover' } 
            }} aria-label="Email contact">
              <EmailIcon />
            </IconButton>
          </Box>
          <Box sx={{ pt: 4 }}>
            <Typography variant="body2" color="footer.textSecondary">
              © 2025 Ejaj Ahamed Bhuiyan. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
