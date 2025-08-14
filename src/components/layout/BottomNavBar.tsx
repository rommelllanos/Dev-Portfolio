'use client';
import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const destinations = [
    { icon: <ChatBubbleIcon />, label: 'Current' },
    { icon: <BookmarkIcon />, label: 'Bookmark' },
    { icon: <FavoriteIcon />, label: 'Favorites' },
    { icon: <DeleteIcon />, label: 'Trash' },
    { icon: <HelpOutlineIcon />, label: 'Unassigned' },
];

export default function BottomNavBar() {
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                {destinations.map((dest) => (
                    <BottomNavigationAction key={dest.label} label={dest.label} icon={dest.icon} />
                ))}
            </BottomNavigation>
        </Paper>
    );
}
