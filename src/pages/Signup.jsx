import { Apple as AppleIcon, Google as GoogleIcon } from '@mui/icons-material'; // Import des icônes Google et Apple
import { Box, Button, Divider, IconButton, InputAdornment, Link as MuiLink, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user); // Utilisez l'objet user pour gérer l'inscription
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        width: '100%',
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" fontWeight={600} color="primary" mb={2}>
        SignUp
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} mt={4} spacing={2} width={1}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<GoogleIcon />} // Icone Google
          sx={{ color: 'white' }} // Couleur du texte sur le bouton
        >
          Signup with Google
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          startIcon={<AppleIcon />} // Icone Apple
          sx={{ color: 'white' }} // Couleur du texte sur le bouton
        >
          Signup with Apple
        </Button>
      </Stack>
      <Divider sx={{ my: 3, color: '#616161' }}>or Signup with</Divider>
      <Stack onSubmit={handleSubmit} component="form" direction="column" gap={2}>
        <TextField
          id="name"
          name="name"
          type="text"
          value={user.name}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Your Name"
          autoComplete="name"
          fullWidth
          autoFocus
          required
        />
        <TextField
          id="email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Your Email"
          autoComplete="email"
          fullWidth
          autoFocus
          required
        />
        <TextField
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={user.password}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Your Password"
          autoComplete="current-password"
          fullWidth
          autoFocus
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ opacity: user.password ? 1 : 0 }}>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained" size="medium" fullWidth>
          Submit
        </Button>
        <Typography
          my={3}
          variant="body2"
          align="center"
          color="text.secondary"
          letterSpacing={0.5}
        >
          Already have an account? <MuiLink href="#" variant="body2">Login</MuiLink>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Signup;
