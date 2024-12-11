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
import { Email, Lock, Visibility, VisibilityOff, Business } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginApi } from '../../service/loginApi';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
    const { connected, msg, user } = useSelector((state) => state.login);

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (connected === true) {
            navigate("/");
        }
        if (msg !== "") {
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
        } else {
            let data = {
                "email": formData.email,
                "password": formData.password
            };
            dispatch(loginApi(data));
        }
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                mt: 8,
                p: 4,
                bgcolor: '#f9f9f9',
                borderRadius: 3,
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box textAlign="center" mb={3}>
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    color="#333333"
                    gutterBottom
                >
                    SkillLink
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Connectez-vous à votre espace
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
                        bgcolor: '#499ce6',
                        mt: 3,
                        py: 1.5,
                        color: 'white',
                        fontWeight: 'bold',
                        '&:hover': {
                            bgcolor: '#3a8ccc',
                        },
                    }}
                >
                    Connexion
                </Button>
            </form>

            <Box display="flex" justifyContent="space-between" mt={3}>
                <Button href="#" color="inherit" sx={{ textTransform: 'none', color: '#499ce6' }}>
                    Mot de passe oublié ?
                </Button>
                <Link to="/register">
                    <Button sx={{ textTransform: 'none', color: '#499ce6' }}>
                        Créer un compte
                    </Button>
                </Link>
            </Box>

            <Grid container spacing={2} mt={3}>
                <Grid item xs={12} sm={12}>
                    <Link to="/loginEnt">
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                textTransform: 'none',
                                bgcolor: '#333333',
                                color: 'white',
                                '&:hover': {
                                    bgcolor: '#555555',
                                },
                            }}
                        >
                            Espace Entreprise
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;