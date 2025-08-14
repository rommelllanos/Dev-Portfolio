'use client';
import { Box } from '@mui/material';
import TopAppBar from './TopAppBar';
import ChatMessageList from './ChatMessageList';
import MessageInput from './MessageInput';

export default function ChatView() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', flexGrow: 1 }}>
      <TopAppBar />
      <ChatMessageList />
      <MessageInput />
    </Box>
  );
}
