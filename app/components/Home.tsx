"use client";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import HeroSection from "./Hero";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillSection";
import ProjectsSection from "./ProjectSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import ScrollToTopFab from "./ScrollToTop";
import { sections } from "../utils/constants";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

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
        <Header activeSection={activeSection} onNavigate={scrollToSection} />
        
        <Box component="main">
          <HeroSection onNavigate={scrollToSection} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </Box>
        
        <Footer />
        
        <ScrollToTopFab show={showScrollTop} onClick={scrollToTop} />

        <style jsx>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
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
      )
}
