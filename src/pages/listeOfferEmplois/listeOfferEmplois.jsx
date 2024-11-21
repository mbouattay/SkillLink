import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const offersData = [
    {
        id: 1,
        title: "Développeur Full Stack",
        description: "Nous recherchons un développeur expérimenté en React et Node.js.",
        status: "Publiée",
        visible: true, 
    },
    {
        id: 2,
        title: "Data Scientist",
        description: "Un expert en données pour des projets d'IA.",
        status: "Brouillon",
        visible: true,
    },
    {
        id: 3,
        title: "Designer UI/UX",
        description: "Un designer créatif avec une maîtrise de Figma et Adobe XD.",
        status: "Publiée",
        visible: true,
    },
];

const ListeOfferEmplois = () => {
    const [offers, setOffers] = useState(offersData);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [offerToDelete, setOfferToDelete] = useState(null);
    const navigate = useNavigate(); 

    const handleDeleteOffer = () => {
        setOffers(offers.filter((offer) => offer.id !== offerToDelete.id));
        setOpenDeleteDialog(false);
    };


    const toggleVisibility = (id) => {
        setOffers((prevOffers) =>
            prevOffers.map((offer) =>
                offer.id === id ? { ...offer, visible: !offer.visible } : offer
            )
        );
    };


    const handleEditOffer = (id) => {
        navigate(`/modifierOffre/${id}`); 
    };

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
                                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {offers.map((offer) => (
                                <TableRow key={offer.id}>
                                    <TableCell>{offer.title}</TableCell>
                                    <TableCell>{offer.description}</TableCell>
                                    <TableCell
                                        sx={{
                                            color: offer.status === "Publiée" ? "green" : "orange",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {offer.status}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            color="primary"
                                            onClick={() => handleEditOffer(offer.id)} 
                                        >
                                            <Edit2 />
                                        </IconButton>
                                        <IconButton
                                            color="error"
                                            onClick={() => {
                                                setOfferToDelete(offer);
                                                setOpenDeleteDialog(true);
                                            }}
                                        >
                                            <Trash />
                                        </IconButton>
                                        <IconButton
                                            color={offer.visible ? "secondary" : "default"}
                                            onClick={() => toggleVisibility(offer.id)}
                                        >
                                            {offer.visible ? <Eye /> : <EyeSlash />}
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
                    <DialogContent
                        sx={{
                            textAlign: "center",
                            marginTop: "10px",
                        }}
                    >
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
                                "{offerToDelete?.title}" ?
                            </Typography>
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#777" }}>
                            Cette action est irréversible. Vous ne pourrez pas récupérer cette offre.
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
