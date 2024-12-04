import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
  Divider,
  Slide,
  Avatar,
} from '@mui/material';
import { UploadFile, Close, CloudUpload } from '@mui/icons-material';
import { uploadCV } from '../../service/uploadCV';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getProfilData } from '../../service/getProfilData';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ImporteCvPopUp = ({ open, handleClose }) => {
  const { user } = useSelector((state) => state.login);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const handleFileChange = (e) =>{
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const handleUpload =async () => { 
    if (selectedFile) {
      const formData = new FormData();
      formData.append('pdf', selectedFile);
      try {
          await uploadCV(user.token, formData);
          toast.success("CV importé avec succès", { autoClose: 1000 });
          dispatch(getProfilData(user.token));
          handleClose();
      } catch (error) {
          console.error('Erreur lors de l\'importation du CV:', error);
          toast.error("Échec de l'importation du CV", { autoClose: 1000 });
      }
  }
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 4,
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
          padding: 2,
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <DialogTitle>
          <Typography variant="h5" fontWeight="600" color="#499ce6">
            Télécharger votre CV
          </Typography>
        </DialogTitle>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </Box>
      <Divider />

      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center" mt={2} mb={3}>
          <Avatar sx={{ bgcolor: '#e8f4fc', width: 72, height: 72 }}>
            <CloudUpload fontSize="large" sx={{ color: '#499ce6' }} />
          </Avatar>

          <Typography variant="body1" color="textSecondary" align="center" mt={2}>
            Pour compléter votre profil, veuillez télécharger votre CV en format PDF ou Word.
          </Typography>

          <Box mt={4}>
            <Button
              variant="outlined"
              component="label"
              startIcon={<UploadFile />}
              sx={{
                borderColor: '#499ce6',
                color: '#499ce6',
                '&:hover': {
                  bgcolor: '#f0f8ff',
                  borderColor: '#3a8ccc',
                },
              }}
            >
              {selectedFile ? selectedFile.name : 'Choisir un fichier'}
              <input hidden accept=".pdf,.doc,.docx" type="file" onChange={handleFileChange} />
            </Button>
          </Box>
        </Box>
      </DialogContent>

      <Divider />
      <DialogActions>
        <Button
          onClick={handleUpload}
          variant="contained"
          sx={{
            bgcolor: '#499ce6',
            color: '#fff',
            '&:hover': {
              bgcolor: '#3a8ccc',
            },
          }}
          disabled={!selectedFile}
          fullWidth
        >
          Télécharger
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImporteCvPopUp;
