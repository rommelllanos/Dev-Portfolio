'use client';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function TopAppBar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rommel L.
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button color="inherit">About</Button>
          <Button color="inherit">Work</Button>
          <Button color="inherit">Contact</Button>
          <Button variant="contained" color="primary" sx={{ borderRadius: '9999px' }}>
            Hire me
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
