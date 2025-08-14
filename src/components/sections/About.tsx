'use client';
import { Typography, Box } from '@mui/material';

export default function About() {
  return (
    <Box id="about" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Computer Engineer with 4+ years of experience building scalable software systems, streamlining operational
        workflows, and leading cross-platform IT initiatives. Invested in AI/ML applications, committed to user-centered
        design, and driven by continuous learning and innovation in fast-paced tech environments.
      </Typography>
    </Box>
  );
}
