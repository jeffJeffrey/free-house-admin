import React, { useState } from 'react';
import { Box, Stack, Typography, TextField, InputAdornment, IconButton, Button, Divider, FormControlLabel, Checkbox, Link as MuiLink } from '@mui/material';
import { Google as GoogleIcon, Apple as AppleIcon } from '@mui/icons-material';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        marginLeft: '240px', // Ajustez cette valeur pour compenser la largeur de la sidebar
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          maxWidth: '400px',
          width: '100%',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" fontWeight={600} color="primary" mb={2}>
          LogIn
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} mt={4} spacing={2} width={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{ color: 'white' }}
          >
            Login with Google
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            startIcon={<AppleIcon />}
            sx={{ color: 'white' }}
          >
            Login with Apple
          </Button>
        </Stack>
        <Divider sx={{ my: 3, color: '#616161' }}>or Login with</Divider>
        <Stack onSubmit={handleSubmit} component="form" direction="column" gap={2}>
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
          <Stack mt={-1.5} alignItems="center" justifyContent="space-between">
            <FormControlLabel
              control={<Checkbox id="checkbox" name="checkbox" color="primary" />}
              label="Remember me"
              sx={{ color: '#616161' }}
            />
            <MuiLink href="#!" variant="body2">
              Forgot password?
            </MuiLink>
          </Stack>
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
            Don't have an account? <MuiLink href="#" variant="body2">Signup</MuiLink>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
