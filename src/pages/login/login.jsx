import React from 'react';
import {
    Container,
    Box,
    TextField,
    Button,
    Typography,
    InputAdornment,
    IconButton,
} from '@mui/material';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container
            maxWidth="xs"
            sx={{
                mt: 8,
                p: 4,
                bgcolor: '#ffffff',
                borderRadius: 3,
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box textAlign="center" mb={3}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="#499ce6"
                    gutterBottom
                >
                    SkillLink
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Connectez-vous à votre compte
                </Typography>
            </Box>


            <form>
                <TextField
                    label="Adresse Email"
                    type="email"
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
                    type={showPassword ? 'text' : 'password'}
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
                    Connexion
                </Button>
            </form>
            <Box
                display="flex"
                justifyContent="space-between"
                mt={3}
                color="#499ce6"
            >
                <Button href="#" color="inherit" sx={{ textTransform: 'none' }}>
                    Mot de passe oublié ?
                </Button>
                <Link to={"/register"}>
                    <Button color="inherit" sx={{ textTransform: 'none',color: '#499ce6' }}>
                        Créer un compte
                    </Button>
                </Link>

            </Box>
        </Container>
    );
};

export default Login;
