import React, { useEffect, useState } from "react";
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
  Tooltip,
  Chip
} from "@mui/material";
import { CheckCircle, Cancel, Visibility } from "@mui/icons-material";
import NavBarEntreprise from "../../components/navBarEntreprise/navBarEntreprise";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import { useDispatch, useSelector } from "react-redux";
import { getCondidatureEntreprise } from "../../service/getCondidatureEntreprise";
import { AccepterCondidature } from "../../service/accepterCondidature";
import { RefuserCondidature } from "../../service/refuserCondidature";



const CondidateurEntreprise = () => {
  const [candidats, setCandidats] = useState();

  const { entreprise } = useSelector((state) => state.loginEntreprise);
  const { condidatureEnt } = useSelector((state) => state.condidatureEntreprise);
  const dispatch = useDispatch();
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
        case 'en attend':
            return (
                <Chip
                    icon={<HourglassEmptyIcon />}
                    label="En attend"
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
  useEffect(() => {
    dispatch(getCondidatureEntreprise(entreprise.token))
  }, [dispatch]);
  const handleAccept = (id) => {
    let data = {
      ResultatrId: id
    }
    AccepterCondidature(data, entreprise.token).then((response) => {
      if(response.status==200){
        dispatch(getCondidatureEntreprise(entreprise.token))
      }
    })
  };

  const handleReject = (id) => {
    let data = {
      ResultatrId: id
    }
    RefuserCondidature(data, entreprise.token).then((response) => {
      if(response.status==200){
        dispatch(getCondidatureEntreprise(entreprise.token))
      }
    })
  };
  console.log(condidatureEnt)
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
          mt: 8
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
                <TableCell align="center">Statut</TableCell>
                <TableCell align="center">CV</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {condidatureEnt?.map((candidat) => (
                <TableRow key={candidat._id}>
                  <TableCell align="center">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar src={"http://127.0.0.1:3500/" + candidat.Employe.avatar} alt={candidat.name} sx={{ width: 40, height: 40, marginRight: 2 }} />
                      <Typography variant="body1">{candidat.Employe.prenom} {candidat.Employe.nom}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">{candidat.offer?.titre}</TableCell>
                  <TableCell align="center">{candidat?.score}%</TableCell>
                  <TableCell align="center">{getStatusChip(candidat.etat)}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Voir le CV">
                      <IconButton
                        color="primary"
                        href={"http://127.0.0.1:3500/" + candidat?.Employe?.Cv[0]?.pdf}
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
                        onClick={() => handleAccept(candidat._id)}
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
                        onClick={() => handleReject(candidat._id)}
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

      </Box>
    </div>
  );
};
export default CondidateurEntreprise;
