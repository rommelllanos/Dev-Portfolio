'use client';
import { Box } from '@mui/material';
import ChatMessage from './ChatMessage';

const messages = [
  { author: 'ai', text: "Hi, Doctor. I've been feeling really down lately, and I'm not sure why. Can you help me? 🤔" },
  { author: 'user', text: "Of course! I'm here to support you. ❤️ Can you tell me more about how you've been feeling? Any specific symptoms or changes in your daily life?" },
  { author: 'ai', text: "Ok, here's the symptoms for me:" },
  { author: 'ai', text: "I've been experiencing persistent sadness, loss of interest in things I used to enjoy. It's been affecting my work and relationships too! 😥\n\nAttached my medical history below:", attachments: [{ name: 'AMANDA MEDICAL HISTORY.PDF' }, { name: 'EKG.PDF' }] },
  { author: 'user', text: 'Thanks a lot amanda. Let me try to analyze that and get back to you...' },
];

export default function ChatMessageList() {
  return (
    <Box sx={{ p: 2, flexGrow: 1, overflowY: 'auto', bgcolor: 'background.default' }}>
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg} />
      ))}
    </Box>
  );
}
