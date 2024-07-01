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
  const [validationOpen, setValidationOpen] = useState(false);
  const [annonceOpen, setAnnonceOpen] = useState(false);

  const handleAuthClick = () => {
    setAuthOpen(!authOpen);
  };

  const handleValidationClick = () => {
    setValidationOpen(!validationOpen);
  };

  const handleAnnonceClick = () => {
    setAnnonceOpen(!annonceOpen);
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
          background: 'linear-gradient(to bottom, #283593, #1e88e5)',
          color: '#ffffff',
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" sx={{ color: '#ffffff' }}>Dashdark X</Typography>
      </Box>
      <Divider sx={{ backgroundColor: '#ffffff' }} />
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon><DashboardIcon sx={{ color: '#ffffff' }} /></ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ color: '#ffffff' }} />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemIcon><GroupIcon sx={{ color: '#ffffff' }} /></ListItemIcon>
          <ListItemText primary="Users" sx={{ color: '#ffffff' }} />
        </ListItem>
        <ListItem button onClick={handleAnnonceClick}>
          <ListItemIcon><AnnouncementIcon sx={{ color: '#ffffff' }} /></ListItemIcon>
          <ListItemText primary="Annonce" sx={{ color: '#ffffff' }} />
          {annonceOpen ? <ExpandLess sx={{ color: '#ffffff' }} /> : <ExpandMore sx={{ color: '#ffffff' }} />}
        </ListItem>
        <Collapse in={annonceOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/anonce/logement" sx={{ pl: 4 }}>
              <ListItemText primary="Logement" sx={{ color: '#ffffff' }} />
            </ListItem>
            <ListItem button component={Link} to="/anonce/service" sx={{ pl: 4 }}>
              <ListItemText primary="Service" sx={{ color: '#ffffff' }} />
            </ListItem>
          </List>
        </Collapse>
        <Divider sx={{ backgroundColor: '#ffffff' }} />
        <ListItem button onClick={handleValidationClick}>
          <ListItemIcon><LockIcon sx={{ color: '#ffffff' }} /></ListItemIcon>
          <ListItemText primary="Validation" sx={{ color: '#ffffff' }} />
          {validationOpen ? <ExpandLess sx={{ color: '#ffffff' }} /> : <ExpandMore sx={{ color: '#ffffff' }} />}
        </ListItem>
        <Collapse in={validationOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/validation/logement" sx={{ pl: 4 }}>
              <ListItemText primary="Logement" sx={{ color: '#ffffff' }} />
            </ListItem>
            <ListItem button component={Link} to="/validation/service" sx={{ pl: 4 }}>
              <ListItemText primary="Service" sx={{ color: '#ffffff' }} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleAuthClick}>
          <Divider sx={{ backgroundColor: '#ffffff' }} />
          <ListItemIcon><LockIcon sx={{ color: '#ffffff' }} /></ListItemIcon>
          <ListItemText primary="Authentification" sx={{ color: '#ffffff' }} />
          {authOpen ? <ExpandLess sx={{ color: '#ffffff' }} /> : <ExpandMore sx={{ color: '#ffffff' }} />}
        </ListItem>
        <Collapse in={authOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/login" sx={{ pl: 4 }}>
              <ListItemText primary="Login" sx={{ color: '#ffffff' }} />
            </ListItem>
            <ListItem button component={Link} to="/signup" sx={{ pl: 4 }}>
              <ListItemText primary="Signup" sx={{ color: '#ffffff' }} />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider sx={{ backgroundColor: '#ffffff' }} />
      <Box sx={{ flexGrow: 1 }} />
      <Divider sx={{ backgroundColor: '#ffffff' }} />
      <Box sx={{ padding: 2 }}>
        <Typography variant="body2" sx={{ color: '#ffffff' }}>Admin connecté</Typography>
        <Typography variant="body2" sx={{ color: '#ffffff', ml: 1 }}>Aloys</Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
