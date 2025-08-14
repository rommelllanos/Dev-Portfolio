'use client';
import { Box, Typography, Badge, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AddIcon from '@mui/icons-material/Add';

const topics = [
  { title: 'Mental Health', count: 8, icon: <LockIcon /> },
  { title: 'Stress & Anxiety Eve...', count: 7, icon: <SentimentVeryDissatisfiedIcon /> },
  { title: 'Becoming Happy For...', count: 1, icon: <CelebrationIcon /> },
];

export default function TopicList() {
  return (
    <Box sx={{ p: 2, height: '100%', bgcolor: 'background.paper', width: '320px', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="headlineLarge">Topics</Typography>
        <Badge badgeContent={24} color="primary" />
      </Box>
      <List sx={{ flexGrow: 1 }}>
        {topics.map((topic) => (
          <ListItem key={topic.title}>
            <ListItemIcon>{topic.icon}</ListItemIcon>
            <ListItemText primary={topic.title} />
            <Badge badgeContent={topic.count} color="secondary" />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" startIcon={<AddIcon />} fullWidth>
        Add a New Conversation
      </Button>
    </Box>
  );
}
