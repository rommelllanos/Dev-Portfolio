'use client';
import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function MessageInput() {
  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider' }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Send your message to Dr. Freud..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="primary" edge="end">
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
