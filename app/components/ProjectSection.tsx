import { Container, Fade, Box, Typography, Grid, Grow, Card, CardMedia, Chip, CardContent, CardActions, Button } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import GithubIcon from '@mui/icons-material/GitHub';
const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL featuring user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tags: ['Next.js', 'Socket.io', 'MongoDB', 'Redux'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with data visualization, location-based forecasts, and interactive maps.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      tags: ['React', 'Chart.js', 'API', 'Material-UI'],
      demo: '#',
      github: '#'
    }
  ];

  return (
    <Container maxWidth="lg" id="projects" component="section" sx={{ py: 10 }}>
      <Fade in={true} timeout={1000}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom color="primary" fontWeight="bold">
            Featured Projects
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
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.title}>
            <Grow in={true} timeout={1000 + index * 300}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                  <Button
                    size="small"
                    startIcon={<LaunchIcon />}
                    href={project.demo}
                    aria-label={`View live demo of ${project.title}`}
                  >
                    Live Demo
                  </Button>
                  <Button
                    size="small"
                    startIcon={<GithubIcon />}
                    href={project.github}
                    aria-label={`View source code of ${project.title}`}
                  >
                    Code
                  </Button>
                </CardActions>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsSection;
