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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ImporteCvPopUp = ({ open, handleClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('CV téléchargé:', selectedFile);
      handleClose();
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
