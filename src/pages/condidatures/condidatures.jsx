import React, { useState } from 'react';
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    TextField,
    Box,
    Avatar,
    Stack,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import NavBar from '../../components/navBar/navBar';
import './condidatures.css';

const initialApplications = [
    { id: 1, company: 'Google', jobTitle: 'Développeur Front-End', status: 'Accepté' },
    { id: 2, company: 'Microsoft', jobTitle: 'Ingénieur DevOps', status: 'En attente' },
    { id: 3, company: 'Amazon', jobTitle: 'Data Analyst', status: 'Refusé' },
    { id: 4, company: 'Tesla', jobTitle: 'Ingénieur Machine Learning', status: 'Accepté' },
    { id: 5, company: 'Meta', jobTitle: 'Chef de Projet IT', status: 'En attente' },
];

const Condidatures = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredApplications = initialApplications.filter(
        (application) =>
            application.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            application.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusChip = (status) => {
        switch (status) {
            case 'Accepté':
                return (
                    <Chip
                        icon={<CheckCircleIcon />}
                        label="Accepté"
                        color="success"
                        sx={{ fontWeight: 'bold', backgroundColor: '#d4edda', color: '#155724' }}
                    />
                );
            case 'En attente':
                return (
                    <Chip
                        icon={<HourglassEmptyIcon />}
                        label="En attente"
                        color="warning"
                        sx={{ fontWeight: 'bold', backgroundColor: '#fff3cd', color: '#856404' }}
                    />
                );
            case 'Refusé':
                return (
                    <Chip
                        icon={<CancelIcon />}
                        label="Refusé"
                        color="error"
                        sx={{ fontWeight: 'bold', backgroundColor: '#f8d7da', color: '#721c24' }}
                    />
                );
            default:
                return <Chip label="Inconnu" />;
        }
    };

    return (
        <div className='CondidaturesContainer'>
            <NavBar />
            <div>
                <Container
                    
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 12,
                        mb: 5,
                        ml:5,
                        width:1300
                    }}
                >
                    <Paper elevation={4} sx={{ p: 4, borderRadius: 3, width: '100%' }}>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                            📋 Suivi des Condidatures
                        </Typography>
                        <Box display="flex" alignItems="center" mb={4}>
                            <SearchIcon sx={{ mr: 1, color: '#757575' }} />
                            <TextField
                                label="Rechercher une entreprise ou un poste"
                                variant="outlined"
                                fullWidth
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </Box>
                        <TableContainer component={Paper} elevation={2} sx={{ borderRadius: 2 }}>
                            <Table>
                                <TableHead sx={{ backgroundColor: '#499ce6' }}>
                                    <TableRow>
                                        <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Entreprise</TableCell>
                                        <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Nom du poste</TableCell>
                                        <TableCell align="center" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                                            Statut
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredApplications.map((application) => (
                                        <TableRow
                                            key={application.id}
                                            hover
                                            sx={{
                                                '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' },
                                                '&:hover': { backgroundColor: '#e0f7fa' },
                                            }}
                                        >
                                            <TableCell>
                                                <Stack direction="row" alignItems="center" spacing={2}>
                                                    <Avatar sx={{ bgcolor: '#499ce6' }}>
                                                        <BusinessIcon />
                                                    </Avatar>
                                                    <Typography variant="body1">{application.company}</Typography>
                                                </Stack>
                                            </TableCell>
                                            <TableCell>{application.jobTitle}</TableCell>
                                            <TableCell align="center">{getStatusChip(application.status)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Container>
            </div>
        </div>
    );
};

export default Condidatures;
