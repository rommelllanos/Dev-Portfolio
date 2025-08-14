'use client';
import { Typography, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        textAlign: 'center',
        py: 16,
        background: 'linear-gradient(45deg, #6750A4 30%, #D4C4E2 90%)',
        color: 'white',
        borderRadius: '16px',
        mx: 2,
        my: 4,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Rommel Llanos
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Caracas | rommelllanos@gmail.com | +58 412-3245155
      </Typography>
      <Box>
        <IconButton
          aria-label="github"
          color="inherit"
          href="https://github.com/rommelllanos"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="email"
          color="inherit"
          href="mailto:rommelllanos@gmail.com"
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          aria-label="phone"
          color="inherit"
          href="tel:+584123245155"
        >
          <PhoneIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
