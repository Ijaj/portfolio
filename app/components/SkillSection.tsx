import { Box, Container, Typography, Grid, Fade, useTheme, Grow, Paper, LinearProgress } from "@mui/material";

const SkillsSection = () => {
  const muiTheme = useTheme();
  
  const skills = [
    { name: 'React/Next.js', level: 90 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'UI/UX Design', level: 70 },
    { name: 'Database Design', level: 80 }
  ];

  return (
    <Box component="section" sx={{ backgroundColor: 'grey.50', py: 10 }}>
      <Container maxWidth="lg" id="skills">
        <Fade in={true} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom color="primary" fontWeight="bold">
              Skills & Expertise
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
        
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={skill.name}>
              <Grow in={true} timeout={1000 + index * 200}>
                <Paper elevation={2} sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6" component="h3" fontWeight="medium">
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.level}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    aria-label={`${skill.name} skill level: ${skill.level}%`}
                    sx={{
                      backgroundColor: 'grey.200',
                      '& .MuiLinearProgress-bar': {
                        background: muiTheme.palette.gradient.secondary
                      }
                    }}
                  />
                </Paper>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;
