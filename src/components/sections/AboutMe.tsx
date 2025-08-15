'use client';
import { Box, Typography } from '@mui/material';

export default function AboutMe() {
  return (
    <Box sx={{ py: { xs: 5, md: 10 }, textAlign: 'center' }}>
      <Typography variant="headlineLarge" component="h2">
        About Me
      </Typography>
      <Typography
        variant="bodyLarge"
        sx={{
          color: 'text.secondary',
          maxWidth: '700px',
          mx: 'auto',
          mt: 2,
        }}
      >
        Computer Engineer with 4+ years of experience building scalable software systems, streamlining operational
        workflows, and leading cross-platform IT initiatives. Invested in AI/ML applications, committed to user-centered
        design, and driven by continuous learning and innovation in fast-paced tech environments.
      </Typography>
    </Box>
  );
}
