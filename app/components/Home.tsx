'use client';
import { useEffect, useState } from 'react';
import { Box, Drawer, Fab, Grid, useMediaQuery, useTheme } from '@mui/material';
import SettingsMenu from './SettingsMenu';
import SettingsIcon from '@mui/icons-material/Settings';

import Header from './Header';
import HeroSection from './Hero';
import AboutSection from './AboutSection';
import SkillsSection from './SkillSection';
import ProjectsSection from './ProjectSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ScrollToTopFab from './ScrollToTop';
import { sections } from '../utils/constants';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container direction={'row'} spacing={0} sx={{ minHeight: !isMobile ? '100vh' : 'auto' }}>
        <Grid
          size={{ xs: 12, md: 2 }}
          sx={{
            height: !isMobile ? '100vh' : 'auto',
            position: 'sticky',
            top: 0,
            bgcolor: 'background.paper',
            borderRight: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Header activeSection={activeSection} onNavigate={scrollToSection} />
        </Grid>
        <Grid
          size={{ xs: 12, md: 10 }}
          sx={{
            height: '100%',
            overflowY: 'auto'
          }}
          id="scrollable-content"
        >
          <Box component="main">
            <HeroSection onNavigate={scrollToSection} />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </Box>
          <Footer />
        </Grid>
      </Grid>

      <ScrollToTopFab show={showScrollTop} onClick={scrollToTop} />

      <Drawer anchor="right" open={settingsDrawerOpen} onClose={() => setSettingsDrawerOpen(false)} disableScrollLock>
        <SettingsMenu onClose={() => setSettingsDrawerOpen(false)} />
      </Drawer>

      <Fab sx={{ top: 16, right: 16, position: 'fixed' }} onClick={() => setSettingsDrawerOpen(true)} aria-label="Open settings">
        <SettingsIcon />
      </Fab>

      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
      `}</style>
    </Box>
  );
}
