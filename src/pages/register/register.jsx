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
import { Email, Lock, Person, Work, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../../service/registerApi';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    jobTitle: '',
  });
  const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const isFormComplete = Object.values(formData).every((value) => value.trim() !== '');
  
    if (!isFormComplete) {
      toast.warn("Tous les champs doivent être remplis !", { autoClose: 1000 });
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      toast.warn("Les mots de passe ne correspondent pas !", { autoClose: 1000 });
      return;
    }
    let data = {
      email: formData.email,
      password: formData.password,
      nom: formData.firstName,
      prenom: formData.lastName,
      posteT: formData.jobTitle,
    };
  
    register(data)
      .then((response) => {
        if (response.success === true) {
          toast.success("Veuillez vérifier votre boîte e-mail !", { autoClose: 1000 });
          navigate("/login");
          return;
        }
      })
      .catch((error) => {
        if (axios.isAxiosError(error) && error.response) {
        
          toast.error("Email déjà existant !", { autoClose: 2000 });
        } else {
          toast.error("Une erreur inattendue est survenue. Veuillez réessayer.", { autoClose: 2000 });
         
        }
      });
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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Prénom"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nom"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

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
          label="Confirmer le Mot de Passe"
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

        <TextField
          label="Poste de Travail"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Work color="primary" />
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
          <Link to="/login">
            <Button color="inherit" sx={{ textTransform: 'none', color: '#499ce6' }}>
              Connectez-vous
            </Button>
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
