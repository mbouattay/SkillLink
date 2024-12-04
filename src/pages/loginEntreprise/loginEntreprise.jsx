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
import { Email, Lock, Visibility, VisibilityOff, Business } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginApi } from '../../service/loginApi';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { LoginEntreprise as login }  from '../../service/loginEntreprise';

const LoginEntreprise = () => {
    const { connected, msg } = useSelector((state) => state.loginEntreprise);

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (connected) {
            navigate("/listOfferEmplois");
        }
        if (msg) {
            toast.warn(msg, { autoClose: 2000 });
        }
    }, [connected, msg]);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleData = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            toast.warn('Veuillez remplir tous les champs.', { autoClose: 2000 });
            return;
        }
        const data = {
            email: formData.email,
            password: formData.password,
        };
        dispatch(login(data));
    };

    return (
        <Container
            maxWidth="xs"
            sx={{
                mt: 8,
                p: 4,
                bgcolor: '#f7f7f7',
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
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="#2c3e50"
                    gutterBottom
                >
                    Espace Entreprise
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Connectez-vous pour accéder à votre espace de gestion.
                </Typography>
            </Box>

            <form onSubmit={handleData}>
                <TextField
                    label="Adresse Email"
                    name="email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
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
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={formData.password}
                    onChange={handleChange}
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
                        bgcolor: '#2c3e50',
                        color: '#fff',
                        mt: 3,
                        py: 1.5,
                        '&:hover': {
                            bgcolor: '#34495e',
                        },
                    }}
                >
                    Connexion
                </Button>
            </form>

            <Box display="flex" justifyContent="space-between" mt={3} color="#2c3e50">
                <Button href="#" color="inherit" sx={{ textTransform: 'none' }}>
                    Mot de passe oublié ?
                </Button>
                <Link to="/register-entreprise">
                    <Button color="inherit" sx={{ textTransform: 'none', color: '#2c3e50' }}>
                        Créer un compte entreprise
                    </Button>
                </Link>
            </Box>
        </Container>
    );
};

export default LoginEntreprise;
