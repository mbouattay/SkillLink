import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  Tooltip
} from "@mui/material";
import { CheckCircle, Cancel, Visibility } from "@mui/icons-material";
import NavBarEntreprise from "../../components/navBarEntreprise/navBarEntreprise";
import img1 from "../../assets/userProfile.jpg"

const candidatsData = [
  {
    id: 1,
    name: "Ahmed Bouazizi",
    score: 85,
    offerTitle: "Développeur Full Stack",
    avatar: "https://via.placeholder.com/150",
    cvLink: "#", 
  },
  {
    id: 2,
    name: "Salma Ben Khalifa",
    score: 92,
    offerTitle: "Data Scientist",
    avatar: "https://via.placeholder.com/150",
    cvLink: "#", 
  },
  {
    id: 3,
    name: "Youssef Trabelsi",
    score: 78,
    offerTitle: "Développeur Java",
    avatar: "https://via.placeholder.com/150",
    cvLink: "#", 
  },
  {
    id: 3,
    name: "Youssef Trabelsi",
    score: 78,
    offerTitle: "Développeur Java",
    avatar: "https://via.placeholder.com/150",
    cvLink: "#", 
  },
  {
    id: 3,
    name: "Youssef Trabelsi",
    score: 78,
    offerTitle: "Développeur Java",
    avatar: "https://via.placeholder.com/150",
    cvLink: "#", 
  },
  {
    id: 3,
    name: "Youssef Trabelsi",
    score: 78,
    offerTitle: "Développeur Java",
    avatar: "https://via.placeholder.com/150",
    cvLink: "#", 
  },
  {
    id: 3,
    name: "Youssef Trabelsi",
    score: 78,
    offerTitle: "Développeur Java",
    avatar: "https://via.placeholder.com/150",
    cvLink: "#", 
  },
];

const CondidateurEntreprise = () => {
  const [candidats, setCandidats] = useState(candidatsData);
  const handleAccept = (id) => {
   
    alert("Candidat accepté !");
  };

  const handleReject = (id) => {
    alert("Candidat refusé !");
  };

  return (
    <div>
      <NavBarEntreprise />
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "20px",
          backgroundColor: "#f4f6f9",
          borderRadius: "8px",
          mt:8
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#499ce6",
            fontWeight: "bold",
          }}
        >
          Liste des Candidats pour l'Offre
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Candidat</TableCell>
                <TableCell align="center">Offre</TableCell>
                <TableCell align="center">Score</TableCell>
                <TableCell align="center">CV</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {candidats.map((candidat) => (
                <TableRow key={candidat.id}>
                  <TableCell align="center">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar src={img1} alt={candidat.name} sx={{ width: 40, height: 40, marginRight: 2 }} />
                      <Typography variant="body1">{candidat.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">{candidat.offerTitle}</TableCell>
                  <TableCell align="center">{candidat.score}%</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Voir le CV">
                      <IconButton
                        color="primary"
                        href={candidat.cvLink}
                        target="_blank"
                        sx={{
                          backgroundColor: "#e3f2fd",
                          borderRadius: "50%",
                          "&:hover": { backgroundColor: "#90caf9" },
                        }}
                      >
                        <Visibility />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Accepter">
                      <IconButton
                        color="success"
                        onClick={() => handleAccept(candidat.id)}
                        sx={{
                          marginRight: 1,
                          backgroundColor: "#e8f5e9",
                          borderRadius: "50%",
                          "&:hover": { backgroundColor: "#c8e6c9" },
                        }}
                      >
                        <CheckCircle />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Refuser">
                      <IconButton
                        color="error"
                        onClick={() => handleReject(candidat.id)}
                        sx={{
                          backgroundColor: "#ffebee",
                          borderRadius: "50%",
                          "&:hover": { backgroundColor: "#ef9a9a" },
                        }}
                      >
                        <Cancel />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {candidats.length === 0 && (
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              marginTop: "30px",
              color: "#999",
            }}
          >
            Aucun candidat n'a postulé pour cette offre.
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default CondidateurEntreprise;
