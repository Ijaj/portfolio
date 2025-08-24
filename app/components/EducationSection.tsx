import React from 'react';
import { Fade, Typography, Box, Container } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const educationData = [
  {
    degree: 'Bachelor of Science (BSc) in Computer Science & Engineering',
    institution: 'Daffodil International University',
    result: 'CGPA: 3.21 / 4.00',
    year: '2018 - 2022'
  },
  {
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'Comilla Polytechnic Institute',
    result: 'CGPA: 2.92 / 4.00',
    year: '2013 - 2017'
  },
  {
    degree: 'SSC in Science',
    institution: 'Textile Vocational Institute, Akhaura',
    result: 'GPA: 4.92 / 5.00',
    year: '2010 - 2012'
  }
];

export default function EducationSectionVertical() {
  return (
    <Box component="section" sx={{ py: 10 }}>
      <Container maxWidth="lg" id="education">
        <Fade in={true} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom color="primary" fontWeight="bold">
              Education
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                backgroundColor: 'primary.main',
                mx: 'auto'
              }}
            />
          </Box>
        </Fade>
        <Timeline position="right" sx={{ pl: 0 }}>
          {educationData.map((edu, index) => (
            <TimelineItem key={index} sx={{ minHeight: 'auto', '&::before': { flex: 0, padding: 0 } }}>
              <TimelineSeparator>
                <TimelineDot />
                {index < educationData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6">{edu.degree}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {edu.institution}
                </Typography>
                <Typography variant="body2">{edu.result}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.year}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
