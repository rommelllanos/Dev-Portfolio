'use client';
import { Box, Typography, Paper, Chip } from '@mui/material';

export default function ChatMessage({ message }) {
  const isAi = message.author === 'ai';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isAi ? 'flex-start' : 'flex-end',
        mb: 2,
      }}
    >
      <Paper
        elevation={1}
        sx={{
          p: 2,
          maxWidth: '80%',
          bgcolor: isAi ? 'secondary.container' : 'primary.container',
          color: isAi ? 'onSecondary.container' : 'onPrimary.container',
          borderRadius: isAi
            ? '20px 20px 20px 5px'
            : '20px 20px 5px 20px',
        }}
      >
        <Typography variant="bodyLarge">{message.text}</Typography>
        {message.attachments && (
          <Box sx={{ mt: 1 }}>
            {message.attachments.map((att, index) => (
              <Chip key={index} label={att.name} sx={{ mr: 1, mt: 1 }} />
            ))}
          </Box>
        )}
      </Paper>
    </Box>
  );
}
