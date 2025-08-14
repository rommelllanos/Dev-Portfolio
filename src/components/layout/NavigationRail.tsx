'use client';
import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const destinations = [
  { icon: <ChatBubbleIcon />, label: 'Current', selected: true },
  { icon: <BookmarkIcon />, label: 'Bookmark' },
  { icon: <FavoriteIcon />, label: 'Favorites' },
  { icon: <DeleteIcon />, label: 'Trash' },
  { icon: <HelpOutlineIcon />, label: 'Unassigned' },
];

export default function NavigationRail() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100px',
        height: '100vh',
        bgcolor: 'surfaceVariant.main',
        pt: 2,
      }}
    >
      <IconButton sx={{ mb: 2 }}>
        <AppsIcon />
      </IconButton>
      <List>
        {destinations.map((dest) => (
          <ListItem key={dest.label} disablePadding>
            <ListItemButton
              selected={dest.selected}
              sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
              }}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>{dest.icon}</ListItemIcon>
              <ListItemText
                primary={dest.label}
                primaryTypographyProps={{ variant: 'caption' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
