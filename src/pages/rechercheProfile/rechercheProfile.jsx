import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
} from "@mui/material";
import { SearchNormal, Refresh, DocumentText } from "iconsax-react"; 
import NavBarEntreprise from "../../components/navBarEntreprise/navBarEntreprise";
import img1 from "../../assets/userProfile.jpg"

const profilesData = [
  {
    id: 1,
    name: "Ahmed Bouazizi",
    title: "Développeur Full Stack",
    avatar: "https://via.placeholder.com/150",
    cvLink: "#", 
  },
  {
    id: 2,
    name: "Salma Ben Khalifa",
    title: "Data Scientist",
    avatar: "https://via.placeholder.com/150",
    cvLink: "#",
  },
  {
    id: 3,
    name: "Youssef Trabelsi",
    title: "Développeur Java",
    avatar: "https://via.placeholder.com/150",
    cvLink: "#", 
  },
];

const RechercheProfile = () => {
  const [profiles, setProfiles] = useState(profilesData);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const filteredProfiles = profilesData.filter(
      (profile) =>
        profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProfiles(filteredProfiles);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setProfiles(profilesData);
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
          Chercher un Profil
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            marginBottom: "20px",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <TextField
            fullWidth
            label="Rechercher un nom ou poste"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <SearchNormal style={{ marginRight: 8, color: "#499ce6" }} />
              ),
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{
              height: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SearchNormal size={20} style={{ marginRight: 8 }} />
            Rechercher
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleResetFilters}
            sx={{
              height: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Refresh size={20} style={{ marginRight: 8 }} />
            Réinitialiser
          </Button>
        </Box>
        <Grid container spacing={3}>
          {profiles.map((profile) => (
            <Grid item xs={12} md={6} lg={4} key={profile.id}>
              <Card
                sx={{
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      marginBottom: "15px",
                    }}
                  >
                    <Avatar
                      src={img1}
                      alt={profile.name}
                      sx={{ width: 60, height: 60 }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#333" }}
                      >
                        {profile.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555" }}>
                        {profile.title}
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    href={profile.cvLink}
                    target="_blank"
                    startIcon={<DocumentText />}
                  >
                    Voir CV
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default RechercheProfile;
