import React, { useEffect } from "react";
import { Box, Typography, Button, Chip, Grid, Card, CardMedia } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import img2 from "../../assets/entreprise.jpg";
import img1 from "../../assets/no-image-icon-23483.png"
import { useDispatch, useSelector } from "react-redux";
import { getProfilData } from "../../service/getProfilData";
import { VerifierCompetence } from "../../service/verifierCompitence";
import { toast } from "react-toastify";

const BoxEmploi = (props) => {
  const motsCle =props.data.themes;
  const { profilData } = useSelector((state) => state.profilData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      dispatch(getProfilData(props.user.token));
  }, [dispatch]);

  const handleSubmitPostilation = () => {
    if (profilData?.CV.length == 0) {
      navigate("/offerDescription/"+props.data._id)
    }else{
       let data={
            EmployeId:props.user.id,
            idCv:profilData?.CV[0]?._id,
            OfferId:props.data._id
        }
        console.log(data)

        VerifierCompetence(data).then((response)=>{
            if(response.success==false){
              toast.error("compétences actuelles ne correspondent pas aux exigences de cette offre d'emploi", { autoClose: 1000 });
            }else{
                navigate("/quizzPage/"+props.data._id)
            }
        })
    }
}
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 1200, 
        margin: "30px 20px auto", 
        borderRadius: 3,
        boxShadow: 3,
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 150, borderRadius: 2 }}
          image={
            props.data.Enterprise.avatar !== "null" && props.data.Enterprise.avatar
              ? `http://127.0.0.1:3500/${props.data.Enterprise.avatar}`
              : img1
          }
          alt="Entreprise Logo"
        />
        <Box sx={{ ml: 3, flex: 1 }}>
          <Typography variant="h6" component="h2" fontWeight="bold">
            {props.data.titre}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            {props.data.Enterprise.nom}
          </Typography>
          <Grid container spacing={1} sx={{ mt: 1 }}>
            <Grid item>
              <Chip label={props.data.experience+" ans"} color="default" />
            </Grid>
            <Grid item>
              <Chip label={props.data.Contract} color="default" />
            </Grid>
            <Grid item>
              <Chip label={props.data.lieu} color="default" />
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
            {props.data.description}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
        {motsCle.map((mot, index) => (
          <Chip key={index} label={`#${mot.motCle}`} variant="outlined" color="primary" />
        ))}
      </Box>
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
        <Button
          component={Link}
          to={`/offerDescription/${props.data._id}`}
          variant="outlined"
          sx={{ flex: 1, marginRight: 1 }}
        >
          Voir plus
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmitPostilation} sx={{ flex: 1, marginLeft: 1 }}>
          Postuler
        </Button>
      </Box>
    </Card>
  );
};

export default BoxEmploi;
