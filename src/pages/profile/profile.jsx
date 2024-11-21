import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    TextField,
    Button,
    Avatar,
    IconButton,
    Stack,
    Divider,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import NavBar from '../../components/navBar/navBar';
import "./profile.css"

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        fullName: 'Mahmoud Bousttay',
        poste:"Développeur Full Stack",
        email: 'bouattaymahmoud2@gmail.com',
        phone: '02154789',
        birthDate: '2023-06-04',
        cv: '',
        photo: 'https://via.placeholder.com/100',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleEdit = () => setIsEditing(!isEditing);

    const handleCVUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfile((prev) => ({ ...prev, cv: file.name }));
        }
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfile((prev) => ({ ...prev, photo: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (

        <div className='ProfileContainer'>
            <NavBar />
            <div>
                <Container maxWidth="sm" sx={{ mt: 12, p: 4, ml:35,bgcolor: '#f9f9f9', borderRadius: 3, boxShadow: 3,}}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Mon identité
                    </Typography>
                    <Box display="flex" alignItems="center" gap={3} mb={3}>
                        <Avatar
                            src={profile.photo}
                            alt="Photo de profil"
                            sx={{ width: 80, height: 80 }}
                        />
                        <Stack>
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="label"
                                disabled={!isEditing} 
                            >
                                <input hidden accept="image/*" type="file" onChange={handlePhotoUpload} />
                                <PhotoCamera />
                            </IconButton>
                            <Typography variant="caption">200x200 px max 2 MB</Typography>
                        </Stack>
                    </Box>
                    <Box component="form" noValidate autoComplete="off">
                        <TextField
                            fullWidth
                            label="Nom et Prénom"
                            name="fullName"
                            value={profile.fullName}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            margin="normal"
                        />
                         <TextField
                            fullWidth
                            label="ton poste de travail"
                            name="poste"
                            value={profile.poste}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={profile.email}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Numéro de téléphone"
                            name="phone"
                            value={profile.phone}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Date de naissance"
                            name="birthDate"
                            type="date"
                            value={profile.birthDate}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                        />
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="h6" gutterBottom>
                            CV
                        </Typography>
                        <Box display="flex" alignItems="center" gap={2}>
                            <Button
                                variant="contained"
                                component="label"
                                startIcon={<InsertDriveFileIcon />}
                                disabled={!isEditing} 
                            >
                                {profile.cv || 'Télécharger CV'}
                                <input hidden accept=".pdf,.doc,.docx" type="file" onChange={handleCVUpload} />
                            </Button>
                            {profile.cv && (
                                <Typography variant="body2" color="textSecondary">
                                    {profile.cv}
                                </Typography>
                            )}
                        </Box>
                        <Button
                            fullWidth
                            variant="outlined"
                            color="primary"
                            sx={{ mt: 3 }}
                            onClick={handleEdit}
                        >
                            {isEditing ? 'Sauvegarder les modifications' : 'Changer mes informations'}
                        </Button>
                    </Box>
                </Container>
            </div>

        </div>

    );
};
export default Profile;
