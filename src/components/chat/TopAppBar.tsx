'use client';
import { AppBar, Toolbar, Typography, Chip, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function TopAppBar() {
  return (
    <AppBar position="static" color="surface" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Toolbar>
        <Typography variant="titleLarge" component="div" sx={{ flexGrow: 1 }}>
          Doctor Freud.ai
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          <Chip label="GPT-5 Model" />
          <Chip label="10K LLM Data" />
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
