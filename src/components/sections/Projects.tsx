'use client';
import { Typography, Box, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Box id="projects" sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Projects
        </Typography>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((proj, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card sx={{ mb: 4 }}>
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
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </motion.div>
  );
}
