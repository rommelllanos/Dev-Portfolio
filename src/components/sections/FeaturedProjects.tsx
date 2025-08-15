'use client';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Chip } from '@mui/material';

const projects = [
  {
    imageUrl: "/path/to/project1.jpg", // Placeholder
    title: "Petroglyph Detection System",
    description: "Converted an academic prototype into a production-ready detection system for petroglyphs, boosting YOLOv8 to 87% mAP.",
    tags: ["React Native", "FastAPI", "Google Cloud", "YOLOv8"],
  },
  {
    imageUrl: "/path/to/project2.jpg", // Placeholder
    title: "E-commerce Platform",
    description: "Built and launched an e-commerce platform for more than 200 Venezuelan fashion brands.",
    tags: ["E-commerce", "Google Cloud", "UI/UX"],
  },
];

export default function FeaturedProjects() {
  return (
    <Box sx={{ py: { xs: 5, md: 10 } }}>
      <Typography variant="headlineLarge" component="h2" sx={{ textAlign: 'center', mb: 5 }}>
        Featured Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ bgcolor: 'surfaceVariant.main' }}>
              <CardMedia
                component="img"
                height="250"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="titleLarge" component="h3">
                  {project.title}
                </Typography>
                <Typography variant="bodyLarge" sx={{ color: 'text.secondary', my: 1 }}>
                  {project.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {project.tags.map((tag) => (
                    <Chip key={tag} label={tag} sx={{ mr: 1, mb: 1 }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
