import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  useTheme,
  Fade,
  Grow,
  TextField,
  Paper,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactSection = () => {
  const muiTheme = useTheme();

  return (
    <Box component="section" sx={{ backgroundColor: 'grey.50', py: 10 }}>
      <Container maxWidth="lg" id="contact">
        <Fade in={true} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom color="primary" fontWeight="bold">
              Get In Touch
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
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              I&apos;m always interested in hearing about new opportunities and exciting projects.
              Let&apos;s work together to bring your ideas to life!
            </Typography>
          </Box>
        </Fade>
        
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grow in={true} timeout={1500}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" component="h3" gutterBottom color="primary" fontWeight="bold">
                  Let&apos;s Talk
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <EmailIcon color="primary" />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Email
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        alex.johnson@email.com
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <PhoneIcon color="primary" />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Phone
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        +1 (555) 123-4567
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOnIcon color="primary" />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Location
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        San Francisco, CA
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grow>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Grow in={true} timeout={1800}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    placeholder="Your Name"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                  />
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => alert('Thank you for your message! I\'ll get back to you soon.')}
                    sx={{
                      background: muiTheme.palette.gradient.secondary,
                      '&:hover': {
                        background: muiTheme.palette.gradient.card
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </Grow>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
