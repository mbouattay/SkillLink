import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Button,
  Box,
  Divider,
} from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';

const QuizPage = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setAnswers({ ...answers, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    alert('Merci d\'avoir complété le quiz !');
  };
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <QuizIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
          <Typography variant="h4" component="h1" color="primary">
            Test de Compétences
          </Typography>
        </Box>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Répondez à ce quiz pour vérifier votre éligibilité à l'offre d'emploi.
        </Typography>
        <Divider sx={{ my: 3 }} />
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset" sx={{ mb: 3 }}>
            <Typography variant="h6">1. Quelle est votre expérience avec JavaScript ?</Typography>
            <RadioGroup name="q1" onChange={handleChange}>
              <FormControlLabel value="Débutant" control={<Radio />} label="Débutant" />
              <FormControlLabel value="Intermédiaire" control={<Radio />} label="Intermédiaire" />
              <FormControlLabel value="Avancé" control={<Radio />} label="Avancé" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" sx={{ mb: 3 }}>
            <Typography variant="h6">2. Quelle est la commande pour initialiser un projet Git ?</Typography>
            <RadioGroup name="q2" onChange={handleChange}>
              <FormControlLabel value="git init" control={<Radio />} label="git init" />
              <FormControlLabel value="git start" control={<Radio />} label="git start" />
              <FormControlLabel value="git create" control={<Radio />} label="git create" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" sx={{ mb: 3 }}>
            <Typography variant="h6">3. Lequel des éléments suivants est une bibliothèque JavaScript ?</Typography>
            <RadioGroup name="q3" onChange={handleChange}>
              <FormControlLabel value="Angular" control={<Radio />} label="Angular" />
              <FormControlLabel value="React" control={<Radio />} label="React" />
              <FormControlLabel value="Vue" control={<Radio />} label="Vue" />
            </RadioGroup>
          </FormControl>
          <Box display="flex" justifyContent="center" mt={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={submitted}
            >
              {submitted ? 'Quiz Soumis' : 'Soumettre le Quiz'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default QuizPage;
