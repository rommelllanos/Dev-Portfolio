'use client';
import { Box, Typography, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function GetInTouch() {
  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        bgcolor: 'surfaceVariant.main',
        borderRadius: '16px',
        textAlign: 'center',
        my: 5,
      }}
    >
      <Typography variant="headlineLarge" component="h2">
        Get In Touch
      </Typography>
      <Typography variant="bodyLarge" sx={{ color: 'text.secondary', mt: 2 }}>
        Have a project in mind? Let's talk about it.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<EmailIcon />}
        sx={{ borderRadius: '9999px', mt: 4 }}
        href="mailto:rommelllanos@gmail.com"
      >
        rommelllanos@gmail.com
      </Button>
    </Box>
  );
}
