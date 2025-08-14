'use client';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
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
    </motion.div>
  );
}
