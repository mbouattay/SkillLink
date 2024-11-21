import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Grid,
} from '@mui/material';
import { Email, Lock, Person, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 8,
        p: 4,
        bgcolor: '#ffffff',
        borderRadius: 3,
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" color="#499ce6" gutterBottom>
          SkillLink
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Créez votre compte
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nom complet"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person color="primary" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Adresse Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email color="primary" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Mot de Passe"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock color="primary" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Confirmer Mot de Passe"
          name="confirmPassword"
          type={showConfirmPassword ? 'text' : 'password'}
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock color="primary" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleConfirmPassword}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            bgcolor: '#499ce6',
            mt: 3,
            py: 1.5,
            '&:hover': {
              bgcolor: '#3a8ccc',
            },
          }}
        >
          Inscription
        </Button>
      </form>
      <Box textAlign="center" mt={3}>
        <Typography variant="body2" color="textSecondary">
          Vous avez déjà un compte ?{' '}
          <Link to={"/login"}>
          <Button  color="inherit" sx={{ textTransform: 'none', color: '#499ce6' }}>
            Connectez-vous
          </Button>
          </Link>
          
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
