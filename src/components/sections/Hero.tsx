'use client';
import { Box, Typography, Button, Avatar, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Hero() {
  return (
    <Box sx={{ py: { xs: 5, md: 10 }, px: { xs: 2, md: 10 } }}>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography variant="displayLarge" component="h1" sx={{ color: 'text.primary' }}>
            Computer Engineer
          </Typography>
          <Typography variant="bodyLarge" sx={{ color: 'text.secondary', maxWidth: '500px', my: 3 }}>
            Hi, I'm Rommel Llanos. A passionate Computer Engineer based in Caracas.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SendIcon />}
            sx={{ borderRadius: '9999px', mt: 3 }}
          >
            Let's talk
          </Button>
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar sx={{ width: 300, height: 300, bgcolor: 'primary.main' }}>
            <Typography variant="h1">RL</Typography>
          </Avatar>
        </Grid>
      </Grid>
    </Box>
  );
}
