'use client';
import { Typography, Box, Chip } from '@mui/material';

const skills = {
  'Languages & Frameworks': ['JavaScript', 'TypeScript', 'Python', 'Node.js', 'React.js', 'Flutter', 'HTML/CSS'],
  'Tools & Databases': ['MongoDB', 'SQL', 'Docker', 'Git', 'GraphQL', 'Figma', 'Linux', 'Windows'],
  'Cloud & DevOps': ['Google Cloud Platform', 'GitHub Actions', 'CI/CD'],
  'UI Design': ['Figma', 'Adobe XD'],
};

export default function Skills() {
  return (
    <Box id="skills" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Skills
      </Typography>
      {Object.entries(skills).map(([category, items]) => (
        <Box key={category} sx={{ mb: 2 }}>
          <Typography variant="h6">{category}</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
            {items.map((skill) => (
              <Chip key={skill} label={skill} color="primary" variant="outlined" />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
