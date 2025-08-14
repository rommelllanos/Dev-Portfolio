'use client';
import * as React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import NavigationRail from '../components/layout/NavigationRail';
import TopicList from '../components/chat/TopicList';
import ChatView from '../components/chat/ChatView';
import BottomNavBar from '../components/layout/BottomNavBar';

export default function HomePage() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  if (isLargeScreen) {
    return (
      <Box sx={{ display: 'flex' }}>
        <NavigationRail />
        <TopicList />
        <ChatView />
      </Box>
    );
  }

  return (
    <Box>
      {/* For small screens, we might show one component at a time,
          e.g., show TopicList, and on selecting a topic, navigate to ChatView.
          For now, we'll just show the ChatView. */}
      <ChatView />
      <BottomNavBar />
    </Box>
  );
}
