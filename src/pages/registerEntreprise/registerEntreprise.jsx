import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Email, Lock, Business, LocationOn, Public, PostAdd, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../../service/registerApi';
import axios from 'axios';
import { registerEntreprise } from '../../service/registerEntreprise';

const RegisterEntreprise = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nom: '',
    description: '',
    address: '',
    siteWeb: '',
    CodePostal: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormComplete = Object.values(formData).every((value) => value.trim() !== '');

    if (!isFormComplete) {
      toast.warn("Tous les champs doivent être remplis !", { autoClose: 1000 });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas !", { autoClose: 2000 });
      return;
    }

    let data = {
      email: formData.email,
      password: formData.password,
      nom: formData.nom,
      description: formData.description,
      address: formData.address,
      siteW: formData.siteWeb,
      CodePostal: formData.CodePostal,
    };
    
    registerEntreprise(data)
      .then((response) => {
        if (response.success === true) {
          toast.success("Inscription réussie, veuillez vérifier votre boîte e-mail !", { autoClose: 1000 });
          navigate("/loginEnt");
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
          Inscrivez votre entreprise
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nom de l'entreprise"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Business color="primary" />
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
          label="Confirmer le Mot de Passe"
          name="confirmPassword"
          type={showPassword ? 'text' : 'password'}
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
                <IconButton onClick={handleTogglePassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
          multiline
          rows={3}
        />

        <TextField
          label="Adresse"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOn color="primary" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Site Web"
          name="siteWeb"
          value={formData.siteWeb}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Public color="primary" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Code Postal"
          name="CodePostal"
          value={formData.CodePostal}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PostAdd color="primary" />
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
          <Link to="/loginEnt">
            <Button color="inherit" sx={{ textTransform: 'none', color: '#499ce6' }}>
              Connectez-vous
            </Button>
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default RegisterEntreprise;
