import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    IconButton,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
} from "@mui/material";
import { Add, Edit2, Trash, Eye, EyeSlash } from "iconsax-react";
import NavBarEntreprise from "../../components/navBarEntreprise/navBarEntreprise";
import { Link, useNavigate } from "react-router-dom";
import { allOfferEntreprise } from "../../service/allOfferEntreprise";
import { SupprimerOffer } from "../../service/supprimerOffer";
import { useSelector } from "react-redux";

const ListeOfferEmplois = () => {
    const [offers, setOffers] = useState([]);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [offerToDelete, setOfferToDelete] = useState(null);
    const [IDofferToDelete, setIDOfferToDelete] = useState(null);
    const [ref, setref] = useState(0);
    const navigate = useNavigate();
    const {entreprise} = useSelector((state) => state.loginEntreprise);
    const handleDeleteOffer = () => {
        const data={id:IDofferToDelete}
        SupprimerOffer(data,entreprise.token).then((response)=>{
            console.log(response)
        })
        setref(ref+1)
        
    };
 
   

    const handleEditOffer = (id) => {
        navigate(`/modifierOffre/${id}`);
    };

    useEffect(() => {
        allOfferEntreprise(entreprise.token).then((response) => {
            setOffers(response.data.result);
        });
    }, [ref]);

    return (
        <div>
            <NavBarEntreprise />
            <Box sx={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        marginBottom: "30px",
                        color: "#499ce6",
                        fontWeight: "bold",
                    }}
                >
                    Gestion des Offres d'Emploi
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginBottom: "20px",
                    }}
                >
                    <Link to={"/ajouterOffer"}>
                        <Button variant="contained" color="primary" startIcon={<Add />}>
                            Ajouter une Offre
                        </Button>
                    </Link>
                </Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold" }}>Titre</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>Statut</TableCell>
                                <TableCell sx={{ fontWeight: "bold", width: "200px" }}>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {offers?.map((offer) => (
                                <TableRow key={offer._id}>
                                    <TableCell>{offer.titre}</TableCell>
                                    <TableCell>{offer.description}</TableCell>
                                    <TableCell
                                        sx={{
                                            color: offer.Status ? "green" : "orange",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {offer.Status ? "Publiée" : "Brouillon"}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            color="primary"
                                            onClick={() => handleEditOffer(offer._id)}
                                        >
                                            <Edit2 />
                                        </IconButton>
                                        <IconButton
                                            color="error"
                                            onClick={() => {
                                                setOfferToDelete(offer.titre);
                                                setIDOfferToDelete(offer._id)
                                                setOpenDeleteDialog(true);
                                            }}
                                        >
                                            <Trash />
                                        </IconButton>
                                        <IconButton
                                            color={offer.Status ? "secondary" : "default"}
                                            onClick={() => toggleVisibility(offer._id)}
                                        >
                                            {offer.Status ? <Eye /> : <EyeSlash />}
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Dialog
                    open={openDeleteDialog}
                    onClose={() => setOpenDeleteDialog(false)}
                    sx={{
                        "& .MuiDialog-paper": {
                            borderRadius: "15px",
                            padding: "20px",
                            maxWidth: "500px",
                        },
                    }}
                >
                    <DialogTitle
                        sx={{
                            textAlign: "center",
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#D32F2F",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <Trash size="40" color="#D32F2F" />
                        Confirmer la suppression
                    </DialogTitle>
                    <DialogContent sx={{ textAlign: "center", marginTop: "10px" }}>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                marginBottom: "10px",
                                color: "#555",
                            }}
                        >
                            Êtes-vous sûr de vouloir supprimer l'offre
                            <Typography
                                component="span"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#D32F2F",
                                    marginLeft: "5px",
                                }}
                            >
                                "{offerToDelete}" ?
                            </Typography>
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#777" }}>
                            Cette action est irréversible. Vous ne pourrez pas récupérer cette
                            offre.
                        </Typography>
                    </DialogContent>
                    <DialogActions
                        sx={{
                            justifyContent: "center",
                            gap: "15px",
                            marginTop: "20px",
                        }}
                    >
                        <Button
                            onClick={() => setOpenDeleteDialog(false)}
                            variant="outlined"
                            sx={{
                                textTransform: "none",
                                borderRadius: "10px",
                                color: "#555",
                                borderColor: "#ccc",
                                padding: "10px 20px",
                                "&:hover": {
                                    borderColor: "#aaa",
                                    backgroundColor: "#f9f9f9",
                                },
                            }}
                        >
                            Annuler
                        </Button>
                        <Button
                            onClick={handleDeleteOffer}
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                backgroundColor: "#D32F2F",
                                color: "#fff",
                                borderRadius: "10px",
                                padding: "10px 20px",
                                "&:hover": {
                                    backgroundColor: "#B71C1C",
                                },
                            }}
                            startIcon={<Trash size="20" />}
                        >
                            Supprimer
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </div>
    );
};

export default ListeOfferEmplois;
