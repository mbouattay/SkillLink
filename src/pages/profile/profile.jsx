import React, { useEffect, useState } from 'react';
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
import './profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProfilData } from '../../service/getProfilData';
import { updateAvatar } from '../../service/updateAvatar';
import { uploadCV } from '../../service/uploadCV';
import { toast } from 'react-toastify';
import { updateProfile } from '../../service/updateProfile';

const Profile = () => {
    const { user } = useSelector((state) => state.login);
    const { profilData } = useSelector((state) => state.profilData);
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        Prenom: '',
        Nom: '',
        poste: '',
        phone: '',
        CV: '',
        photo: '',
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProfilData(user.token));
        setProfile({
            Prenom: profilData?.prenom || '',
            Nom: profilData?.nom || '',
            poste: profilData?.posteT || '',
            phone: profilData?.NumT || '',
            CV: profilData?.CV?.[0] || '',
            photo: profilData?.avatar || '',
        });
    }, [dispatch]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = async () => {
        try {
            const updatedData = {
                nom: profile.Nom,
                prenom: profile.Prenom,
                posteT: profile.poste,
                NumT: profile.phone,
            };
            await updateProfile(user.token, updatedData);
            toast.success("Profil mis à jour avec succès", { autoClose: 1000 });
            dispatch(getProfilData(user.token)); 
            setIsEditing(false);
        } catch (error) {
            console.error('Erreur lors de la mise à jour du profil:', error);
            toast.error("Échec de la mise à jour du profil", { autoClose: 1000 });
        }
    };

    const handleCVUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('pdf', file);

            try {
                await uploadCV(user.token, formData);
                toast.success("CV importé avec succès", { autoClose: 1000 });
                dispatch(getProfilData(user.token)); // Recharge les données du profil
            } catch (error) {
                console.error('Erreur lors de l\'importation du CV:', error);
                toast.error("Échec de l'importation du CV", { autoClose: 1000 });
            }
        }
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('Avatar', file);
            updateAvatar(user.token, formData)
                .then(() => {
                    toast.success("Avatar mis à jour avec succès", { autoClose: 1000 });
                    dispatch(getProfilData(user.token)); // Recharge les données du profil
                })
                .catch((error) => {
                    console.error('Erreur lors de la mise à jour de l\'avatar:', error);
                    toast.error("Échec de la mise à jour de l'avatar", { autoClose: 1000 });
                });
        }
    };
    console.log(profile)
    return (
        <div className="ProfileContainer">
            <NavBar />
            <div>
                <Container
                    maxWidth="sm"
                    sx={{
                        mt: 12,
                        p: 4,
                        ml: 35,
                        bgcolor: '#f9f9f9',
                        borderRadius: 3,
                        boxShadow: 3,
                    }}
                >
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Mon identité
                    </Typography>
                    <Box display="flex" alignItems="center" gap={3} mb={3}>
                        <Avatar
                            src={"http://127.0.0.1:3500/" + profile.photo}
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
                            placeholder="Prénom"
                            name="Prenom"
                            value={profile.Prenom}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            placeholder="Nom"
                            name="Nom"
                            value={profile.Nom}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            placeholder="Ton poste de travail"
                            name="poste"
                            value={profile.poste}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            placeholder="Numéro de téléphone"
                            name="phone"
                            value={profile.phone}
                            onChange={handleInputChange}
                            disabled={!isEditing}
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
        {/* Rendre correctement le nom du fichier ou un texte par défaut */}
        { 'Télécharger CV'}
        <input hidden accept=".pdf,.doc,.docx" type="file" onChange={handleCVUpload} />
    </Button>
    {/* Si CV est un lien, afficher un bouton pour le télécharger */}
    {profile?.CV && (
        <Typography variant="body2" color="textSecondary">
            {profile?.CV?.pdf} 
        </Typography>
    )}
</Box>

                        <Button
                            fullWidth
                            variant="outlined"
                            color="primary"
                            sx={{ mt: 3 }}
                            onClick={isEditing ? handleSave : handleEdit}
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
