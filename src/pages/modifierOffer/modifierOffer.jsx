
import React, { useState } from "react";
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
import { AjouterOffer } from "../../service/ajouterOffer";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ModifierOffer = () => {
    const navigate = useNavigate()
    const { idOffer } = useParams();
    const {entreprise} = useSelector((state) => state.loginEntreprise);
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
    const skillsList = [
        "HTML",
        "CSS",
        "JS",
        "GITHUB",
        "REACT",
        "ANGULAR",
    ];

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleGlzdCI6eyJfaWQiOiI2NzQ4ODU3YWJiZDA4ZjUwNTUyMmE0MzciLCJlbWFpbCI6ImJvdWF0dGF5bWFobW91ZDJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkSjNUOHhkaWw3TlNiSTRTZjZ5SERKTzZoeTUzVGYwZUc0ZmxEOGNLTlhIRVREVjFVRTJHVDYiLCJyb2xlIjoiZW50cmVwcmlzZSIsImV0YXQiOnRydWUsImF2YXRhciI6Im51bGwiLCJub20iOiJwcm94eW0gIiwiZGVzY3JpcHRpb24iOiJhemVhZWF6ZWF6ZSIsImFkZHJlc3MiOiJydWUgMTIzIHNvdXNzZSIsInNpdGVXIjoid3d3LnNpdGV3ZWIuY29tIiwiQ29kZVBvc3RhbCI6IjUwNDEiLCJjcmVhdGVkQXQiOiIyMDI0LTExLTI4VDE1OjAwOjEwLjkyMFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTExLTI4VDE1OjAxOjE1LjE0MVoiLCJfX3YiOjB9LCJpYXQiOjE3MzMwNTY5NjIsImV4cCI6MTczMzE0MzM2Mn0.aOnZCOQy3mZDrXACVWsdBZzXTjG21ADJrJ7lO6wzPTI";

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
        const data = {
            "description": offerDetails.description,
             "titre": offerDetails.title,
             "experience": offerDetails.experience,
             "Contract": offerDetails.contractType,
             "lieu": offerDetails.region,
             "exigence": offerDetails.requirements,
             "mession": offerDetails.missions,
             "motCle": offerDetails.skills 
        }
        
        ModifierOffer(idOffer,data,entreprise.token).then((response)=>{
            console.log(response)
           if(response.status==201){
                toast.success("Votre offre bien modifier ", { autoClose: 1000 });
               
            }
        })
       
       
       
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
                       Modifier Offer
                    </Button>
                </form>
            </Box>
        </div>

    );
};

export default ModifierOffer;

