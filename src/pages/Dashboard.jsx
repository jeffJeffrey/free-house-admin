import { AccountCircle, Announcement, BarChart, Notifications, People } from '@mui/icons-material';
import { AppBar, Avatar, Box, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: '#283593' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {/* Icon for Language */}
          <IconButton color="inherit">
            <Typography variant="body2" sx={{ color: '#ffffff', marginRight: 1 }}>FR</Typography>
          </IconButton>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ flex: 1, overflowY: 'auto', p: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                padding: 3,
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                backgroundImage: 'linear-gradient(to right, #ff4081, #3f51b5)',
              }}
            >
              <Avatar sx={{ bgcolor: '#3f51b5', marginRight: 2 }}>
                <People />
              </Avatar>
              <Box>
                <Typography variant="h6">1000</Typography>
                <Typography variant="body2">Users</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                padding: 3,
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                backgroundImage: 'linear-gradient(to right, #8e24aa, #3f51b5)',
              }}
            >
              <Avatar sx={{ bgcolor: '#3f51b5', marginRight: 2 }}>
                <Announcement />
              </Avatar>
              <Box>
                <Typography variant="h6">150</Typography>
                <Typography variant="body2">Announcements</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                padding: 3,
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                backgroundImage: 'linear-gradient(to right, #ff9800, #3f51b5)',
              }}
            >
              <Avatar sx={{ bgcolor: '#3f51b5', marginRight: 2 }}>
                <BarChart />
              </Avatar>
              <Box>
                <Typography variant="h6">75%</Typography>
                <Typography variant="body2">Engagement</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Section "Recent Users" */}
        <Box mt={10} mb={4}>
          <Typography variant="h6" mb={2} sx={{ color: '#283593' }}>
            Recent Users
          </Typography>
          <Paper sx={{ padding: '12px', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body1" sx={{ color: '#333333' }}>User data table goes here.</Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
