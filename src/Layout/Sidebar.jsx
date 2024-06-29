// Sidebar.jsx
import AnnouncementIcon from '@mui/icons-material/Announcement';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';
import { Box, Collapse, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [authOpen, setAuthOpen] = useState(false);

  const handleAuthClick = () => {
    setAuthOpen(!authOpen);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#ffffff', // Fond de la barre latérale en blanc
          color: '#283593', // Couleur du texte dans la barre latérale en bleu foncé
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" sx={{ color: '#283593' }}>Dashdark X</Typography>
      </Box>
      <Divider />
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon><DashboardIcon sx={{ color: '#283593' }} /></ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ color: '#283593' }} />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemIcon><GroupIcon sx={{ color: '#283593' }} /></ListItemIcon>
          <ListItemText primary="Users" sx={{ color: '#283593' }} />
        </ListItem>
        <ListItem button component={Link} to="/anonce">
          <ListItemIcon><AnnouncementIcon sx={{ color: '#283593' }} /></ListItemIcon>
          <ListItemText primary="Annonce" sx={{ color: '#283593' }} />
        </ListItem>
        <Divider />
        <Box sx={{ mb: 30 }} />
        <Divider />
        <ListItem button onClick={handleAuthClick}>
          <ListItemIcon><LockIcon sx={{ color: '#283593' }} /></ListItemIcon>
          <ListItemText primary="Authentification" sx={{ color: '#283593' }} />
          {authOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={authOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/login" sx={{ pl: 4 }}>
              <ListItemText primary="Login" sx={{ color: '#283593' }} />
            </ListItem>
            <ListItem button component={Link} to="/signup" sx={{ pl: 4 }}>
              <ListItemText primary="Signup" sx={{ color: '#283593' }} />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ padding: 2 }}>
        <Typography variant="body2" sx={{ color: '#283593' }}>Admin connecté</Typography>
        <Typography variant="body2" sx={{ color: '#283593', ml: 1 }}>Aloys</Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
