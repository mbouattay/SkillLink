import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import { CloseCircle, UserRemove } from 'iconsax-react';
import React from 'react';

const ModelCompetencesInsufison = ({ open, handleClose }) => {
    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <Box
                sx={{ position: 'absolute', right: 8, top: 8 , cursor:"pointer"}}
            >
                <CloseCircle onClick={handleClose} size="22" color="gray" variant="Bold" />
            </Box>
            <DialogContent sx={{ textAlign: 'center', py: 4 }}>
                <Box display="flex" justifyContent="center" mb={3}>
                    <UserRemove size="120" color="#e74c3c" variant="Bold" />
                </Box>
                <DialogTitle sx={{ fontWeight: 'bold', color: '#e74c3c' }}>
                    Compétences Non Compatibles
                </DialogTitle>
                <Typography variant="body1" color="textSecondary" mb={3}>
                    Nous sommes désolés, mais vos compétences actuelles ne correspondent
                    pas aux exigences de cette offre d'emploi. Explorez d'autres offres
                    qui pourraient mieux correspondre à votre profil.
                </Typography>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
                <Button
                    variant="contained"
                    onClick={handleClose}
                    sx={{
                        textTransform: 'none',
                        padding: '10px 20px',
                        fontWeight: 'bold',
                        background:"#499ce6"
                    }}
                >
                    OK, Merci
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModelCompetencesInsufison;
