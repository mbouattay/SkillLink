import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
    Avatar,
} from "@mui/material";
import { Menu as MenuIcon, Logout } from "@mui/icons-material";
import { Home2, SearchNormal1, ClipboardText, Notification } from "iconsax-react";
import { Link } from "react-router-dom";

const NavBarEntreprise = () => {
    const handleLogout = () => {
        console.log("Déconnecté !");
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: "#fff",
                color: "#333",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between", padding: "10px 20px" }}>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        color: "#499ce6",
                        cursor: "pointer",
                    }}
                >
                    Skill<span style={{ color: "#333" }}>Link</span>
                </Typography>

                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                    <Button
                        startIcon={<Home2 size="20" variant="Bulk" color="#499ce6" />}
                        sx={{ color: "#333", fontWeight: "500" }}
                    >
                        Home
                    </Button>
                    <Link to={"/rechercheProfile"}>
                        <Button
                            startIcon={<SearchNormal1 size="20" variant="Bulk" color="#499ce6" />}
                            sx={{ color: "#333", fontWeight: "500" }}
                        >
                            Recherche un profile
                        </Button>
                    </Link>

                    <Link to={"/listeCondidatures"}>
                        <Button
                            startIcon={<ClipboardText size="20" variant="Bulk" color="#499ce6" />}
                            sx={{ color: "#333", fontWeight: "500" }}
                        >
                            Candidatures
                        </Button>
                    </Link>

                    <Link to={"/ajouterOffer"}>
                        <Button
                            startIcon={<ClipboardText size="20" variant="Bulk" color="#499ce6" />}
                            sx={{ color: "#333", fontWeight: "500" }}
                        >
                            Ajouter offre d'emploi
                        </Button>
                    </Link>

                    <Link to={"/listOfferEmplois"}>
                        <Button
                            startIcon={<ClipboardText size="20" variant="Bulk" color="#499ce6" />}
                            sx={{ color: "#333", fontWeight: "500" }}
                        >
                            Liste offres d'emploi
                        </Button>
                    </Link>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <IconButton sx={{ color: "#333" }}>
                        <Notification size="24" variant="Bulk" />
                    </IconButton>
                    <IconButton
                        sx={{ color: "#333" }}
                        onClick={handleLogout}
                    >
                        <Logout />
                    </IconButton>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            cursor: "pointer",
                        }}
                    >
                        <Avatar sx={{ bgcolor: "#499ce6" }}>P</Avatar>
                        <Typography variant="body2" sx={{ color: "#333", fontWeight: "500" }}>
                            Proxym Sousse
                        </Typography>
                    </Box>
                </Box>

                <IconButton
                    sx={{ display: { xs: "block", md: "none" }, color: "#333" }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default NavBarEntreprise;
