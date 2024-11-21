import React, { useState, useEffect } from "react";
import {
    Box,
    TextField,
    Typography,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Checkbox,
    FormGroup,
    FormControlLabel,
} from "@mui/material";
import NavBarEntreprise from "../../components/navBarEntreprise/navBarEntreprise";
import { useNavigate, useParams } from "react-router-dom";

const ModifierOffer = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [offerDetails, setOfferDetails] = useState({
        title: "",
        contractType: "",
        experience: "",
        region: "",
        description: "",
        missions: "",
        requirements: "",
        skills: [],
    });

    const skillsList = ["JAVA", "PHP", "GIT", "GITHUB", "REACT", "ANGULAR"];


  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOfferDetails({ ...offerDetails, [name]: value });
    };

    const handleSkillToggle = (skill) => {
        const skills = offerDetails.skills.includes(skill)
            ? offerDetails.skills.filter((s) => s !== skill)
            : [...offerDetails.skills, skill];
        setOfferDetails({ ...offerDetails, skills });
    };

    const handleSubmit = () => {
        console.log("Offer Details Submitted:", offerDetails);
        navigate("/"); 
    };

    return (
        <div>
            <NavBarEntreprise />
            <Box
                sx={{
                    maxWidth: "800px",
                    margin: "auto",
                    padding: "20px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        marginBottom: "20px",
                        color: "#499ce6",
                        fontWeight: "bold",
                    }}
                >
                     Modifier Offre d’Emploi
                </Typography>

                <form>
                    <TextField
                        label="Titre de l'Offre"
                        name="title"
                        fullWidth
                        variant="outlined"
                        value={offerDetails.title}
                        onChange={handleChange}
                        sx={{ marginBottom: "20px" }}
                    />

                    <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                        <InputLabel>Type de Contrat</InputLabel>
                        <Select
                            name="contractType"
                            value={offerDetails.contractType}
                            onChange={handleChange}
                        >
                            <MenuItem value="CDI">CDI</MenuItem>
                            <MenuItem value="CDD">CDD</MenuItem>
                            <MenuItem value="Freelance">Freelance</MenuItem>
                            <MenuItem value="Stage">Stage</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                        <InputLabel>Nombre d'Années d'Expérience</InputLabel>
                        <Select
                            name="experience"
                            value={offerDetails.experience}
                            onChange={handleChange}
                        >
                            <MenuItem value="0-2">0-2 ans</MenuItem>
                            <MenuItem value="2-5">2-5 ans</MenuItem>
                            <MenuItem value="5+">5+ ans</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        label="Région"
                        name="region"
                        fullWidth
                        variant="outlined"
                        value={offerDetails.region}
                        onChange={handleChange}
                        sx={{ marginBottom: "20px" }}
                    />

                    <TextField
                        label="Description du Poste"
                        name="description"
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                        value={offerDetails.description}
                        onChange={handleChange}
                        sx={{ marginBottom: "20px" }}
                    />

                    <TextField
                        label="Vos Missions"
                        name="missions"
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                        value={offerDetails.missions}
                        onChange={handleChange}
                        sx={{ marginBottom: "20px" }}
                    />

                    <TextField
                        label="Exigences du Poste"
                        name="requirements"
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                        value={offerDetails.requirements}
                        onChange={handleChange}
                        sx={{ marginBottom: "20px" }}
                    />

                    <Typography
                        variant="h6"
                        sx={{ marginBottom: "10px", color: "#333", fontWeight: "500" }}
                    >
                        Compétences Requises
                    </Typography>
                    <FormGroup row sx={{ marginBottom: "20px" }}>
                        {skillsList.map((skill) => (
                            <FormControlLabel
                                key={skill}
                                control={
                                    <Checkbox
                                        checked={offerDetails.skills.includes(skill)}
                                        onChange={() => handleSkillToggle(skill)}
                                    />
                                }
                                label={skill}
                            />
                        ))}
                    </FormGroup>

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}
                        sx={{
                            backgroundColor: "#499ce6",
                            "&:hover": { backgroundColor: "#377dbf" },
                            padding: "10px",
                            fontSize: "16px",
                            fontWeight: "bold",
                        }}
                    >
                        { "Modifier l'Offre" }
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default ModifierOffer;


