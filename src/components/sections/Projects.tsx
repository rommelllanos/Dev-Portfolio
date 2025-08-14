'use client';
import { Typography, Box, Card, CardContent, Button } from '@mui/material';

const projects = [
  {
    title: 'Petroglyph Detection System (ANAR)',
    description: 'Converted an academic prototype into a production-ready detection system for petroglyphs. Deployed the model as a GPU-backed FastAPI microservice on Google Cloud. Built a React Native app that streams photos to the cloud endpoint and overlays real-time detections with metadata.',
    link: null,
  },
  {
    title: 'E-commerce Platform (ZAS Group LLC)',
    description: 'Built and launched an e-commerce platform for more than 200 Venezuelan fashion brands. Oversaw product vision, team hiring, and technology strategy. Migrated to Google Cloud Platform, improved load times, and boosted conversion by redesigning the UI/UX.',
    link: null,
  },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Projects
      </Typography>
      {projects.map((proj, index) => (
        <Card key={index} sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6">{proj.title}</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>{proj.description}</Typography>
            {proj.link && (
              <Button
                variant="contained"
                color="secondary"
                href={proj.link}
                target="_blank"
                sx={{ mt: 2 }}
              >
                View Project
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
